---
layout: post
title:  "Debugging React Native application on a real device"
author: Denislav
date:   2015-12-28 19:21:00
categories: 
  - dev
---


[React Native](http://facebook.github.io/react-native/) is a framework for building native mobile applications with JavaScript, 
maintained by Facebook. Basically, it brings react into mobile world. 

React Native is really powerful. All the logic behind the applications, that you are building, is written in JavaScript, whereas the UI is 
purely native, which is awesome. And that is the main difference with other frameworks, such as Ionic. You can use it to build applications for Android and iOS.

Today we are going to create a basic React Native application for iOS, which will fetch data from an API and show it in a list. 
Building for iOS assumes that you are using OSX(XCode is also a requirement).


##Initial setup
Since React Native uses node.js, we need to install it. The easiest way is through *Homebrew*. [How to install Homebrew](http://brew.sh/).
You can also install nvm (how to install nvm and what is nvm).

<pre>
<code class="language-javascript">
brew install node
</pre>


##Install react native cli
Install react-native-cli globally

<pre>
<code class="language-javascript">
npm install -g react-native-cli
</code>
</pre>


##Create the project
Now we're going to create the project:

<pre>
<code class="language-javascript">
react-native init starterApp
</code>
</pre>


##Edit ios.js file

RN is using js module style; same as nodejs
You don't need to close the code in IIFE;

render() function;

RN is using flexbox

I prefer RXJS;
 
the flow is - row by row, function by function!
<pre>
<code class="language-javascript">
npm install -g react-native-cli
</code>
</pre>

