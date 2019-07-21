#!/usr/bin/env node

const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');
const fs = require('fs-extra');

const args = process.argv.slice(2);
const urltext = args[0];

if (!urltext) {
  console.error('Invalid arguments\n\nusage: getlinks [URL]');
  process.exit(1);
}

console.log('URL fetch to begin.');

axios.get(urltext).then(response => {

  console.log('URL fetch complete.');

  const $ = cheerio.load(response.data);
  const url = new URL(urltext);
  const links = [];

  $('a').each((_, el) => {
    const rel = el.attribs['rel'] || '';
    const linkurltext = el.attribs['href'] || '';
    const linkurl = new URL(linkurltext, urltext);

    if (linkurl.href.match(/^https?/) && linkurl.host.indexOf('@') === -1) {
      const linkInfo = {
        sourcePage: urltext,
        isNoFollow: rel.indexOf("nofollow") >= 0,
        text: $(el).text().trim(),
        url: linkurl.href,
        isInternal: linkurl.host === url.host
      };

      links.push(linkInfo);
    }
  });

  if (links.length > 0) {
    const lines = links.map(
      l => `"${dq(l.url)}","${dq(l.text)}","${dq(l.sourcePage)}",${l.isNoFollow ? 'nofollow' : 'dofollow'},${l.isInternal ? 'internal' : 'external'}`
    ).join('\n');
    fs.writeFile('result.csv', lines + '\n');
    console.log('Results written to result.csv');
  } else {
    console.log('No links were found in the document');
  }
});

function dq(s) {
  return s.replace(/"/g, '""');
}
