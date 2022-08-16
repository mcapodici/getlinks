![Get Links Logo](/logo/getlinkslogo.jpg)

GetLinks is a tool for extracting the links from a URL. It will:

* Get the HTML document from a URL, and
* Extract all of the `<a>` links from the document, and
* Build a report of all those links, containing:
  * Link URL
  * Link Text
  * Dofollow / Nofollow status
  * External / Internal
  * Referring page

This is useful in SEO for

* Checking your own website and seeing what you are linking to
* Checking a site you want to try to get a link from, to see what they are linking to and how

What this won't do (yet):

* Load the page in a real browser and check for links rendered by JavaScript
* Check for broken links

## Example Usage

```
npm i getlinks -g
getlinks "http://www.basicwebsiteexample.com"
```

or

```
npx getlinks "http://www.basicwebsiteexample.com"
```

## Example console output:

```
URL fetch to begin.
URL fetch complete.
Results written to result.csv
```

## Example result:

```
"http://www.basicwebsiteexample.com/","","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/","Basic Website Example","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/","Home","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/widgets","Widgets","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/media","Media","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/social","Social Media","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/arbablog","Blog","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/menu","Menu","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/contact","Contact","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/#","","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/widgets","Widgets","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/media","Media","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/social","Social Media","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/arbablog","Blog","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/menu","Menu","http://www.basicwebsiteexample.com",dofollow,internal
"http://www.basicwebsiteexample.com/contact","Contact Info","http://www.basicwebsiteexample.com",dofollow,internal
"https://www.diymarketing.biz/store/Build-A-Website-p135627218","www.diymarketing.biz","http://www.basicwebsiteexample.com",dofollow,external
"https://www.linkedin.com/in/arba-cooper-1b83aa137","Linkedin","http://www.basicwebsiteexample.com",dofollow,external
"https://twitter.com/@ArbaG","Twitter","http://www.basicwebsiteexample.com",dofollow,external
"https://instagram.com/arbatucker","Instagram","http://www.basicwebsiteexample.com",dofollow,external
"https://pinterest.com/arbatucker","Pinterest","http://www.basicwebsiteexample.com",dofollow,external
"https://www.facebook.com/arba.cooper","Facebook","http://www.basicwebsiteexample.com",dofollow,external
"https://www.youtube.com/user/arbatucker","Youtube","http://www.basicwebsiteexample.com",dofollow,external
"http://www.arbawebsite.com/","www.arbawebsite.com","http://www.basicwebsiteexample.com",dofollow,external
```

## Help

IF you need help, please raise an issue against this repository.

## On npm

https://www.npmjs.com/package/@mcapodici/getlinks

## Licence (MIT)

Copyright 2019 Martin Capodici

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Other Lynx

[Deals Combined Australia](https://dealscombined.com.au)
