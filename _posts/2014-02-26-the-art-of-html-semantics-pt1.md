---
layout: post
title: "The Art of HTML Semantics: Part 1"
---

When we think about HTML semantics in <time datetime="{{page.date}}" title="{{page.date}}">2014</time>, we're all pretty satisfied with the <mark>marks</mark> we've made.

There is `section`, `header`, `aside`, `footer`, `main`, and even `menu`! We've got everything we need right? Then why are we still doing things like this?

{% highlight html %}
<body class="article">
<div class="content">
{% endhighlight %}

Being guilty of this at times while laziness or deadlines got the better of me, I decided to reacquiant myself with the intended uses of our [trusty markup standard](https://developer.mozilla.org/en-US/docs/Web/HTML). What better place to start than the old standby, the [div tag](http://www.w3.org/html/wg/drafts/html/master/grouping-content.html#the-div-element). Right away, I saw the note in the spec:

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

In other words, “[there is no spoon](http://www.youtube.com/watch?v=XO0pcWxcROI)”. 

##The single h1-h6 model
The HTML5 Document Outline, that allows for multiple `h1-h6` tags based on sectioning roots, [does *not* exist](http://blog.paciellogroup.com/2013/10/html5-document-outline/). 

>
Is a concept that lives in the HTML specification, but is essentially a fiction in the real world. It is a fiction because user agents have not implemented it and there is no indication that any will.  
<cite>- [Steve Faulkner](twitter.com/stevefaulkner)</cite>
>

To be honest, it's kind of a relief to hear this, because I never felt comfortable or totally grasped the concept of multiple `h1` or `h2` elements on a page. It quickly became unweildy when trying to remember which elements began a new [section context](http://www.w3.org/TR/html5/sections.html#outlines), and how many header elements I'd already used. Cheers for keeping things simple. 

##Marking up documentation
As I'm currently doing research on developer documentation, I thought I'd look into `pre` and `code` tags, to be sure I was using them correctly. `code` for inline references, like in this paragraph, and `pre` for longer, `blockquote`-style code embeds. 

Well, those assumptions are mostly true, but as we've seen, there is usually a better, more meaningful element to use. What I found was another pair of elements that were specifically created for code documentation, [`kbd`](http://www.w3.org/html/wg/drafts/html/master/text-level-semantics.html#the-kbd-element) and [`samp`](http://www.w3.org/html/wg/drafts/html/master/text-level-semantics.html#the-samp-element). Why these tags are so special to me is that they solve 2 problems: 

+ I can now use a semantic element to distinguish between code that the user should enter (`kbd`) and code that a machine outputs (`samp`).
+ I now have 2 separate CSS hooks to use to help visually distinguish these two pieces of information in documentation.

I'd never seen those applied to documentation markup before, but now I can't imagine not using them. 

##Code granularity
If we want to get really descriptive, there are a couple more elements we can leverage for both machine and human-readable code markup.  

The [`var`](http://www.w3.org/html/wg/drafts/html/master/text-level-semantics.html#the-var-element) tag can be used for marking up variables in code, and the [`data`](http://www.w3.org/html/wg/drafts/html/master/text-level-semantics.html#the-data-element) element is used to delineate pure data, such as the values needed in tabular information.  

You might be asking what the `data` element offers over `data-*` attributes. With the `data` element's `value`  attribute present, browsers will someday be able to use it with the [`sortable`](http://www.w3.org/html/wg/drafts/html/master/tabular-data.html#attr-table-sortable) attribute of the `table` element to provide a mechanism for authors and users to [sort tables](http://www.w3.org/html/wg/drafts/html/master/tabular-data.html#table-sorting-model). 

<aside>
<strong>Note:</strong> Browser support for the table sorting model very hard to come by, and I've yet to see a working example. Plus, the HTML 5.1 DOM API spec on it is kind of a mess, but when it does make it into in the wild, make sure you add the <a href="http://www.w3.org/TR/wai-aria/states_and_properties#aria-sort"><code>aria-sort</code></a> role to the appropriate table header element. (Thanks to <a href="http://www.raymondcamden.com/">Ray Camden</a> for shedding some light.)
</aside>  

Another highly useful element in code documentation semantics is the `figure` element, and it can be used for much more than screenshots.

>
The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.
>

Notice nothing about images specifically was mentioned. The spec then goes on to demo a code snippet marked up with `figure`. 

{% highlight html %}
<p>In <a href="#l4">listing</a> we see the primary core interface
> API declaration.</p>
<figure id="l4">
 <figcaption>Listing 4. The primary core interface API declaration.</figcaption>
{% endhighlight %}

<pre>
 interface PrimaryCore {
 boolean verifyDataLine();
 void sendData(in sequence&amp;lt;byte> data);
 void initSelfDestruct();
}
</pre>

{% highlight html %}
</figure>
<p>The API is designed to use UTF-8.</p>
{% endhighlight %}

Wow, that totally makes sense, doesn't it? Think about how many books you've read that have [this little figure element](http://www.codinghorror.com/blog/2007/12/on-the-meaning-of-coding-horror.html) off to the side to point out a detail about a code snippet. 

##Description Lists: the unsung workhorses
My favorite HTML element, and in my opinion, the most underrated element in the spec, is the decription list ([`dl`](http://www.w3.org/TR/html5/grouping-content.html#the-dl-element)). It's intended for marking up name-value pairs of content. This could apply to anything from a list of services offered and their accompanying descriptions, to a simple 'previous article/next article' component, like the one at the bottom of every article on my blog here. It's perfect for documenting a page's edit history, causes and effects, or, surprisingly, any list data that needs a group heading. I had no idea before reading the spec, but it's entirely valid to have one `dt` (decription term) and multiple `dd`s (description definitions). Here's a great example from the spec, marking up variations in spelling across the English language, though the definition is the same. 

```
<dl>
 <dt lang="en-US"> <dfn>color</dfn> </dt>
 <dt lang="en-GB"> <dfn>colour</dfn> </dt>
 <dd> A sensation which (in humans) derives from the ability of
 the fine structure of the eye to distinguish three differently
 filtered analyses of a view. </dd>
</dl>
```

Astute readers and fellow HTML nerds may be wondering about the rarely-seen [`dfn`](http://www.w3.org/TR/html5/text-level-semantics.html#the-dfn-element) element and where it fits into the semantic uses of description lists. A `dfn` is the element the spec describes as: "the defining instance of a term". In combination with the `abbr` and `a` elements, one can provide a really nice UX for finding the first instance of a definiton. See this example from the spec:

>
In the following fragment, the term "Garage Door Opener" is first defined in the first paragraph, then used in the second. In both cases, its abbreviation is what is actually displayed.
>

```
<p>The <dfn><abbr title="Garage Door Opener">GDO</abbr></dfn>
is a device that allows off-world teams to open the iris.</p>
<!-- ... later in the document: -->
<p>Teal'c activated his <abbr title="Garage Door Opener">GDO</abbr>
and so Hammond ordered the iris to be opened.</p>
With the addition of an a element, the reference can be made explicit:

<p>The <dfn id=gdo><abbr title="Garage Door Opener">GDO</abbr></dfn>
is a device that allows off-world teams to open the iris.</p>
<!-- ... later in the document: -->
<p>Teal'c activated his <a href=#gdo><abbr title="Garage Door Opener">GDO</abbr></a>
and so Hammond ordered the iris to be opened.</p>
```

If you've ever read an ebook that has footnote or index functionality, this is exactly the same idea. 


##Just the beginning
While there is still [work to be done](http://alistapart.com/comments/battle-for-the-body-field#336421) on the available semantics and appropriate uses of markup, it's nice to know that we have more to work with than we sometimes allow ourselves to believe. 

In my next post, we'll dive deeper into the HTML of tomorrow, and what it would look like if it were designed today. 

