---
layout: post
title:  "Progressive Aggressive"
author: Denislav
date:   2015-04-25 14:21:00
categories: 
  - dev
---

Last week I was at a **#bulgariawebsummit** conference. Jeremy Keith talk was mind blowing. Literally.
So, here are my takeaways from this really great talk:

## Progressive enhancement
Progressive enhancement is a technique, which focuses on the content of a website as the most important thing. It is a layered approach for web development.

## Separating the web into layers
* **HTML** - HTML is very error tolerant. If the browser doesn't understands something, for example a tag, the parse process continues and there is no errors.
* **CSS** - presentational layer of the web. Just like HTML, the CSS is error tolerant.
* **JavaScript** - the most interesting layer (regarding my heavily opinionated view). Unlike HTMl and CSS, JS will throw errors and will stop parsing the code after that point.

## Core functionality
The most important thing - make your core functionality works everywhere. <br/>**On every browser, on every device.** Period.<br/>
We as developers, must deliver core functionality to the users. The website or the webapp must serve it's main purpose on every device and browser.
We must support every browser. But we shouldn't optimize against every browser version.

## Your website doesn't have to look the same in every browsers
Any given website doesn't have to look absolutely the same in every browser out there. Different versions of browsers are from different ages and even eras.
<br/>Using methods like BBC's 'cutting the mustard' gives us the ability to test for features, not for browsers. And we should do it. And if the browser doesn't understand particular feature, don't try to 'hack' it. Simply use *aggressive enhancement*.

###So, how to convince your bosses and clients about that?
Here comes the hard part. Explaining how the web works is just the starting point. Re-wiring their brains is next. Just give it a try.

