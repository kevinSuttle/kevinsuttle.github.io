---
layout: post
title: "The Art and Science of HTML Semantics: Part 1"
---

When we think about HTML semantics in <time datetime="02-20-2014">2014</time>, we're all pretty satisfied with our <progress></progress> and the <mark>marks</mark> we've made. Our contribution level was clearly pretty high: <meter min="1" max="10" value="8"></meter></p>

There is `section`, `header`, `aside`, `footer`, `main`, and even `menu`! We've got everything we need right? Then why are we still doing things like this?

{% highlight html %}
<body class="article">
<div class="content">
{% endhighlight %}

Being guilty of this at times while laziness or deadlines got the better of me, I decided to reacquiant myself with the intended uses of our [trusty markup standard](). What better place to start than the old standby, the [div tag](http://www.w3.org/html/wg/drafts/html/master/grouping-content.html#the-div-element). Right away, I saw the note in the spec:

>
Authors are strongly encouraged to view the div element as an element of last resort, for when no other element is suitable. Use of more appropriate elements instead of the div element leads to better accessibility for readers and easier maintainability for authors.
>

Off to an agreeably good start, I decided to keep skipping around, and see what other declarations supported my opinions. Remember the `hr` element? Well, it turns out it's not just for drawing a chiseled, beveled, or embossed border in the middle of your screen. It's actually [very semantic](http://www.w3.org/html/wg/drafts/html/master/grouping-content.html#the-hr-element). 

>
The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.
>

Whoa. I was really intruiged at this point. I had to learn more! What other assumptions was I using to justify my markup? 
<hr/>

How about the humble [paragraph element](http://www.w3.org/html/wg/drafts/html/master/grouping-content.html#the-p-element)? 

<blockquote>
The p element should not be used when a more specific element is more appropriate.

The following example is technically correct:

{% highlight html %}
<section>
 <p>Last modified: 2001-04-23</p>
 <p>Author: fred@example.com</p>
</section>
{% endhighlight %}

However, it would be better marked-up as:
{% highlight html %}
<section>
 <footer>Last modified: 2001-04-23</footer>
 <address>Author: fred@example.com</address>
</section>
{% endhighlight %}

Or:

{% highlight html %}
<section>
 <footer>
  <p>Last modified: 2001-04-23</p>
  <address>Author: fred@example.com</address>
 </footer>
</section>

{% endhighlight %}
</blockquote>

Ok, less impressive, but the more appropriate applications of the `footer` and `address` tags is cool. Thinking I knew all there was to know about paragraph semantics, I saw this note in the spec.

>
The solution is to realise that a paragraph, in HTML terms, is not a logical concept, but a structural one. In the fantastic example [below], there are actually five paragraphs as defined by this specification: one before the list, one for each bullet, and one after the list.

{% highlight html %}
<p>For instance, this fantastic sentence has bullets relating to</p>
<ul><li>wizards,
 <li>faster-than-light travel, and
 <li>telepathy,</ul>
<p>and is further discussed below.</p>
{% endhighlight %}

In other words, "[there is no spoon](http://www.youtube.com/watch?v=XO0pcWxcROI)". 

Mind = blown, yet? Of course it isn't. We're talking about the `p` tag. How about this, though? The HTML5 Document Outline, that allows for multiple `h1-h6` tags based on sectioning roots, [does *not* exist](http://blog.paciellogroup.com/2013/10/html5-document-outline/). 

>
Is a concept that lives in the HTML specification, but is essentially a fiction in the real world. It is a fiction because user agents have not implemented it and there is no indication that any will.
-<cite> [Steve Faulkner](twitter.com/stevefaulkner)
>

"Wow, this is getting serious." I probably thought to myself, so I wouldn't be lying when I quoted it later. 

As I'm currently doing research on developer documentation, I thought I'd look into `pre` and `code` tags, to be sure I was using them correctly. `Code` for inline references, like in this paragraph, and `pre` for longer, `blockquote`-style code embeds. 

Well, those assumptions are mostly true, but as we've seen, there is usually a better, more meaningful element to use. What I found was another pair of elements that were specifically created for code documentation, [`kbd`](http://www.w3.org/html/wg/drafts/html/master/text-level-semantics.html#the-kbd-element) and [`samp`](http://www.w3.org/html/wg/drafts/html/master/text-level-semantics.html#the-samp-element). Why these tags are so special to me is that they solve 2 problems: 

<ol>
<li> I can now use a semantic element to distinguish between code that the user should enter: <code>kbd</code> and code that a machine outputs: <code>samp</code></li>
<li>I now have 2 separate CSS hooks to use to help visually distinguish these two pieces of information in documentation. </li>
</ol>

I'd never seen those applied to documentation markup before, but now I can't imagine not using them. That same statement is also true when speaking of the `figure` element, and I'm not referring only to screenshots. 

>
The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.
>

Notice nothing about images specifically was mentioned. The spec then goes on to demo a code snippet marked up with `figure`. 

{% highlight html %}
&lt;p&gt;In &lt;a href="#l4"&gt;listing 4&lt;/a&gt; we see the primary core interface
API declaration.&lt;/p&gt;
&lt;figure id="l4"&gt;
 &lt;figcaption&gt;Listing 4. The primary core interface API declaration.&lt;/figcaption&gt;
 &lt;pre&gt;&lt;code&gt;interface PrimaryCore {
 boolean verifyDataLine();
 void sendData(in sequence&amp;lt;byte&gt; data);
 void initSelfDestruct();
}&lt;/code&gt;&lt;/pre&gt;
&lt;/figure&gt;
&lt;p&gt;The API is designed to use UTF-8.&lt;/p&gt;
{% endhighlight %}

Wow, that totally makes sense, doesn't it? Think about how many books you've read that have [this little figure element](http://www.codinghorror.com/blog/2007/12/on-the-meaning-of-coding-horror.html) off to the side to point out a detail about a code snippet. 

While there is still [work to be done](http://alistapart.com/comments/battle-for-the-body-field#336421) on the available semantics and appropriate uses of markup, it's nice to know that we have more to work with than we sometimes allow ourselves to believe. 

In my next post, we'll dive deeper into the HTML of tomorrow, and what it would look like if it were designed today. 