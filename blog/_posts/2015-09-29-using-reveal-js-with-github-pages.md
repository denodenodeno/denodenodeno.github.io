---
layout: post
title:  "Using reveal.js with github pages for your presentations"
author: Denislav
date:   2015-09-29 09:21:00
categories: 
  - dev
---

[reveal.js](https://github.com/hakimel/reveal.js) is a great and really easy to use framework for creating
your presentations.
Today we'll see how to create and deploy presentations on github pages. (Specific instructions on how to use and configure reveal.js
can be found [here](https://github.com/hakimel/reveal.js)).

##Clone reveal.js repository
To start using **reveal.js**, first we must clone the reveal.js master branch. Then delete .git history and init git again.
<pre>
<code class="language-javascript">
git clone https://github.com/hakimel/reveal.js.git
rm -rf .git
git init
</code>
</pre>


##Rename cloned repository
Next rename the reveal.js cloned folder.

<pre>
<code class="language-javascript">
mv reveal.js/ presentation-name
</code>
</pre>

##Adding a remote repository
Creating a github repository is very easy. Just go to the Repositories page on your github account and press *New* button.
Then to add a new remote use *git remote add* command in the terminal.

<pre>
<code class="language-javascript">
git remote add origin https://github.com/username/repository-name.git
</code>
</pre>

##Create your presentation and commit it to the repo
Next, commit and push the ready presentation to the newly created repository.

<pre>
<code class="language-javascript">
git add .
git commit -m "Initial commit"
git push origin master
</code>
</pre>

##Create gh-pages branch and push
In order to publish the presentation to github pages, we need to create *gh-pages* branch
and then commit and push all the content we've created to it.

<pre>
<code class="language-javascript">
git branch gh-pages
git checkout gh-pages
git push origin gh-pages
</code>
</pre>

##Load the page
Uploaded presentation will be available at *https://username.github.io/projectname*


##Edit your presentation
If you want to edit your presentation, make your changes in the *master* branch and then merge it to *gh-pages* branch.
