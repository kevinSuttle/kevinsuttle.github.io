---
title: The Game of Telephone
---

Late this evening, I saw a <a title="Bill Scott on Twitter" href="http://twitter.com/billwscott/status/60193547114123264">tweet</a> from Netflix UI engineer and interaction design guru Bill Scott linking to an <a title="Function Source - Netflix Feature" href="http://functionsource.com/post/netflix-feature">article</a> about Netflix using "HTML5" to deliver "amazing User Interfaces". "OK. I'll bite" I thought.

Reading through the article, and <a title="Netflix Tech Blog" href="http://techblog.netflix.com/2010/12/why-we-choose-html5-for-user.html">others</a> <a title="Mashable" href="http://on.mash.to/fmBTZ2">like</a> it, I noticed more than a few troubling patterns. Each one:

<ol>
	<li>could be searched, and have each instance of the word "HTML5" replaced with "HTML" or "the web" and written 5 years ago</li>
	<li>doesn't mention any specific implementations involving elements or functionality added in the HTML5 spec</li>
	<li>consistently points to faster iterations as a benefit of HTML5</li>
	<li>makes references to "HTML5 UI" and "UX"and</li>
	<li>confused their custom Webkit instance for "HTML5"</li>
</ol>

Some notable quotes from these posts:

"Of course, with HTML5 interfaces..."

What exactly is an "HTML5 interface"? Canvas? Drag and Drop? HTML5 is mainly about semantics, and very little was added outside of messaging and media elements for "UI".

"...such animation usually involves making changes to the properties of the elements on the screen, such as their position, size, etc."Isn't that how every animation works in any language?

"The system leverages tools like Ant, YUI Compressor, and Juicer and incorporates popular HTML5 frameworks like LESS, in addition to Netflix-specific code." <a href="http://lesscss.org/">LESS</a> has nothing to do with HTML5. It's a CSS preprocessor and dynamic CSS library. <a title="Apache Ant" href="http://ant.apache.org/">Ant</a> is a powerful build automation tool. <a title="YUI" href="http://developer.yahoo.com/yui/3/">YUI</a> is a solid JS-based UI library built by Yahoo. <a title="Juicer" href="http://cjohansen.no/en/ruby/juicer_a_css_and_javascript_packaging_tool">Juicer</a> is a JavaScript packaging tool. Not one of those is based on HTML5. Notice there is no discussion as to what exactly "Netflix-specific code" is.

"That&rsquo;s what HTML5 brings to the table, the freedom to create rich, dynamic and interactive experiences for any platform with a web browser."

"That&rsquo;s where HTML5 comes in. The technology is delivered from Netflix servers every time you launch our application. This means we can constantly update, test and improve the experience we offer."

"Our customers don&rsquo;t have to go through a manual process to install new software every time we make a change, it &ldquo;just happens.&rdquo;

See points #1 and #3 above. HTML5, has no effect on how quickly you iterate. Iteration is a methodology, not a language. I get that it circumvents the app store update process, but there's a difference between "iteration" and "on our timetable."As for it "just happen"-ing, and being "delivered from Netflix servers every time you launch our application", that's how the entire internet has worked since day 1.

"What HTML5 is capable of speaks for itself, but there are other reasons HTML5 is the right choice for us."

See point #2 above. "...speaks for itself" is Corporatese for "I don't really know how it works or what it does."

You might be asking yourself, "what's the big deal? I thought you were all about the web and HTML5 now?" I am, however, the problem is one of misinformation. Apple has 100% proprietary Safari code that it calls "HTML5." Netflix sees that the web can skip Apple's review process and allows for code reuse on a number of devices and calls it "HTML5." Their engineers don't use Flash and by default, it must be an "HTML5 UI." Do you see a pattern here? We're taking something so powerful and muddying the waters by lumping a ton of buzzwords together.

Earlier this evening I was helping a friend who is super intelligent, but not totally familiar with the latest and greatest in web development, dig in and figure out how he could trigger some animations in CSS3 based on a demo whose source we'd been perusing. At one point he sent this IM:

"this is frustrating.. yay html5 ;)"

And it's not his fault. It's the kind of game-of-telephone fact-checking that gets an article published in a "tech blog" these days. This is how misinformation spreads and eventually money changes hands. I'm petrified to think that modern executives are operating based on this kind of hearsay and lack of research.

I LOVE what the HTML5 (now just HTML) spec has brought to the table and the kinds of things we're able to do. I just wish that folks knew how to appropriately describe and label them.

To be honest, it's not the authors, Netflix, or tech blogs' fault. The W3C couldn't even <a href="http://adactio.com/journal/4289/">make up their minds</a> about what "HTML5" was and wasn't.

The point is, that this kind of loose talk is blurring the lines of something great, and undermining just how powerful and flexible the web is as a deployment platform. Do your research, read the specs, and then and only then can you speak about "HTML5."
