---
layout: post
title:  "Debugging React Native iOS application on a device"
author: Denislav
date:   2015-12-28 19:21:00
categories: 
  - dev
---


Running [React Native](http://facebook.github.io/react-native/) iOS application on a device in debug mode is pretty 
straightforward. 


##Change path to js in RCTWebSocketExecutor.m file
You need to change the path to javaScript files in RCTWebSocketExecutor.m to the IP of your computer (see the image below),
which is in the RCTWebSocket project under the Libraries folder. You can now debug your application in Chrome DevTools.

![#RCTWebSocketExecutor.m](/images/posts/debug-rn-on-device.png)