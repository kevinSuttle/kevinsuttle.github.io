---
layout: post
title: The Game of Telephone
---

<p><img src="/images/spiderman-thread-lol.png" alt="" width="775" height="489" />Late this evening, I saw a <a title="Bill Scott on Twitter" href="http://twitter.com/billwscott/status/60193547114123264">tweet</a> from Netflix UI engineer and interaction design guru Bill Scott linking to an <a title="Function Source - Netflix Feature" href="http://functionsource.com/post/netflix-feature">article</a> about Netflix using "HTML5" to deliver "amazing User Interfaces". <em>"OK. I'll bite"</em> I thought.</p>

<p>Reading through the article, and <a title="Netflix Tech Blog" href="http://techblog.netflix.com/2010/12/why-we-choose-html5-for-user.html">others</a> <a title="Mashable" href="http://on.mash.to/fmBTZ2">like</a> it, I noticed more than a few troubling patterns. Each one:</p>

<ol>
	<li><strong> could be searched, and have each instance of the word "HTML5" replaced with "HTML" or "the web" and written 5 years ago</strong></li>
	<li><strong>doesn't mention any specific implementations involving elements or functionality added in the HTML5 spec</strong></li>
	<li><strong>consisently points to faster iterations as a benefit of HTML5</strong></li>
	<li><strong>makes references to "HTML5 UI" and "UX" </strong>and</li>
	<li><strong>confused their custom Webkit instance for "HTML5"</strong></li>
</ol>

<p>Some notable quotes from these posts:</p>

<p><em>"Of course, with HTML5 interfaces..."<br /></em></p>

<p>What exactly is an "HTML5 interface"? Canvas? Drag and Drop? HTML5 is mainly about semantics, and very little was added outside of messaging and media elements for "UI".</p>

<p>"...<em>such animation usually involves making  changes to the properties of  the elements on the screen, such as their  position, size, etc."</em><br />Isn't that&nbsp;<em>&nbsp;</em>how every animation works in any language?</p>

<p><em>"The system leverages tools like Ant, YUI Compressor, and Juicer and  incorporates popular HTML5 frameworks like LESS, in addition to  Netflix-specific code."</em></p>
<p><a href="http://lesscss.org/">LESS</a> has <span style="text-decoration: underline;">nothing</span> to do with HTML5. It's a CSS preprocessor and dynamic CSS library. <a title="Apache Ant" href="http://ant.apache.org/">Ant</a> is a powerful build automation tool. <a title="YUI" href="http://developer.yahoo.com/yui/3/">YUI</a> is a solid JS-based UI library built by Yahoo. <a title="Juicer" href="http://cjohansen.no/en/ruby/juicer_a_css_and_javascript_packaging_tool">Juicer</a> is a JavaScript packaging tool. Not one of those is based on HTML5. Notice there is no discussion as to what exactly "Netflix-specific code" is.</p>

<p><em>"That&rsquo;s what HTML5 brings to the table, the freedom to create rich,  dynamic and interactive experiences for any platform with a web browser."<br /></em></p>

<p><em>"That&rsquo;s where HTML5 comes in. The technology is delivered from Netflix  servers every time you launch our application. This means we can  constantly update, test and improve the experience we offer."</em></p>

<p><em>"Our customers don&rsquo;t have to go through a manual process to install new software every time we make a change, it &ldquo;just happens.&rdquo;</em></p>

<p>See points #1 and #3 above. HTML5, has <strong>no effect</strong> on how quickly you iterate. Iteration is a methodology, not a language. I get that it circumvents the app store update process, but there's a difference between "iteration" and "on our timetable."<br />As for it "<em>just happen</em>"-ing, and being "<em>delivered from Netflix  servers every time you launch our application", </em>that's how the <strong>entire internet</strong> has worked since day 1.</p>

<p><em>"What HTML5 is capable of speaks for itself, but there are other reasons HTML5 is the right choice for us."</em></p>

<p>See point #2 above. "...<em>speaks for itself</em>" is Corporatese for<em> "I don't really know how it works or what it does."</em></p>

<p>You might be asking yourself, "what's the big deal? I thought you were all about the web and HTML5 now?" <br />I am, however, the problem is one of misinformation. Apple has 100% proprietary Safari code that it calls "HTML5." Netflix sees that the web can skip Apple's review process and allows for code reuse on a number of devices and calls it "HTML5." Their engineers don't use Flash and by default, it must be an "HTML5 UI." Do you see a pattern here? We're taking something so powerful and muddying the waters by lumping a ton of buzzwords together.</p>
<p>Earlier this evening I was helping a friend who is super intelligent, but not totally familiar with the latest and greatest in web development, dig in and figure out how he could trigger some animations in CSS3 based on a demo whose source we'd been perusing. At one point he sent this IM:</p>
<p><em>"this is frustrating.. yay html5 ;)" </em></p>
<p>And it's not his fault. It's the kind of game-of-telephone fact-checking that gets an article published in a "tech blog" these days. This is how misinformation spreads and eventually money changes hands. I'm petrified to think that modern executives are operating based on this kind of hearsay and lack of research.</p>
<p>I LOVE what the HTML5 (now just HTML) spec has brought to the table and the kinds of things we're able to do. I just wish that folks knew how to appropriately describe and label them. <br /><br />To be honest, it's not the authors, Netflix, or tech blogs' fault. The W3C couldn't even <a href="http://adactio.com/journal/4289/">make up their minds</a> about what "HTML5" was and wasn't. <br /><br />The point is, that this kind of loose talk is blurring the lines of something great, and undermining just how powerful and flexible the web is as a deployment platform. Do your research, read the specs, and then and only then can you speak about "HTML5."</p>
<p>&nbsp;</p>