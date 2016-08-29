---
title: Tech tabloids, Project Harmony, and the proposal of a 'Flash' tag in HTML5
---

There are a number of unsettling trends in the world of web development, and one of them is not HTML5. One major one is the number of formerly "credible" web news entities touting HTML5 as the sole and righteous assassin of Flash.

Since [Google I/O][1], a developer conference aimed at promoting and demonstrating new Google technologies and products, there have been a flurry of misinformed, thinly researched articles proclaiming that we should go ahead and start making burial arrangements for the Flash Platform.

I've already [touched on this][2] once, before Google I/O, but since the web information giant has openly encouraged the adoption and standardization of HTML5, tech media sites and others who seemingly have been wishing for something like this, have decided to post some of the most incredibly blatant, one-sided, and downright wrong pieces of "journalism" I've seen since the 9th grade. Need evidence?

* [http://cjedaudio.wordpress.com/2009/02/07/apple-webkithtml5-end-of-flash-and-gears/][3]
* [http://news.zdnet.co.uk/software/0,1000000121,39655473,00.htm][4]
* [http://news.zdnet.com/2100-3515_22-199508.html][5]
* [http://www.techcrunch.com/2009/06/09/demo-firefox-35-treats-videos-like-web-pages-why-cant-flash-do-that/][6]
* [http://www.techcrunch.com/2009/06/15/the-missing-link-for-flash-on-the-iphone/][7]
* [ http://www.infoworld.com/d/developer-world/html-5-could-it-kill-flash-and-silverlight-291][8]
* [http://www.reelseo.com/flash-obsolete/10219/][9]

These are just examples from the the first two pages of Google Search results for the search terms 'html5' + 'flash'. It's getting out of hand. Media companies aren't researching anymore. If they were, they wouldn't talk about products like "Flash 4" in the same sentence as "Flex 4" (both of which do not exist), and they wouldn't try to compare a browser to a browser plugin.

When did this start happening? Why are companies all of a sudden OK with not fact-checking or not responding when the Flash Community and Adobe call them out on their lack of professionalism and unabashed antics? To me, a big part of why this upsets me is that Google and Mozilla are companies that have worked with Adobe, even to this day, to help promote and build on the strong foundation Flash already has ([SEO][10], [Tamarin][11]). With a glimpse of a technology that is indeed very cool, and after at [least 6 years][12] of development and still no concrete timetable for standardization, these same companies are telling us it's time for Flash to write its will? I don't think so.

As it stands now, there are still things like [NSFW tags][13] being suggested. Even more disheartening to me is the fact that some of the biggest names in the JavaScript community are suddenly openly heralding Flash's demise. Why weren't they taking such a hard stance before Google pushed HTML5 and Apple didn't put the Flash Player on the iPhone? Do they feel threatened somehow? They shouldn't.

I don't work for Adobe and I don't hate JavaScript or it's developers. I'm a Flash/Flex developer who loves [jQuery][14] and all of the other awesome libraries that are helping to shape the modern web. I love seeing sites that are built with just plain sexy JavaScript, like [Twitter][15], [Delicious][16], and [Readernaut][17]. It's fantastic to see that kind of engineering in action! I'm especially ecstatic about the innovation and paradigm shift that concepts like [Google Wave][18] will bring because of HTML5.

Adobe has [attempted ][19]to [put][20] [their][21] [thoughts][22] into the mix, even by showing how the two technologies can [work together][23], but these articles somehow never really get syndicated the way the sensationalized HTML5 pieces do.

A rather disappointing supporting point can be found by looking closely at any of these 'HTML5 > Flash' posts. Does a single one of those articles have an interview or comment from anyone who is pro-Flash or works for Adobe? I rest my case. It's just sad to see the web's news sources for technology an innovation fall so short. Television and print media lost what little credibility they had decades ago (regardless of which political party you belong to), but now we're seeing the same sensationalism and blatant one-sidedness from our tech-oriented news sources.

In this case, it's not about politics or agendas, but for the life of me, I can't figure out exactly what it is about. I'm just trying to understand, because it doesn't make any sense why news media sites would push a certain technology and call for another's deprecation.

A question I would love an answer to is: 'what did Flash ever do to anyone that generated such blind hatred?' Now, think for a second before you answer this. If your arguments have anything to do with "splash pages" or "banner ads", they're automatically cancelled out by "pop-up windows" and "pop-under windows." I don't think those doors even need to be opened. Both sides' arguments are moot. Now, argue either sides' case without using any of the aforementioned topics. You can't do it. Both are AWESOME technologies that came from [the same ECMAScript standard][24].

This is a point people love to conveniently forget when taking sides. It's a fact. Maybe the paths separated when that standard [was split][25]. Project Harmony may have been the crucial factor that recreated the divide between the two parts of the development community, but this wasn't Adobe's decision. Mozilla, Microsoft, Apple, Opera, Google, and Yahoo were the deciding parties. The same companies that are now singing the praises of the Canvas and Video tags that will supposedly eradicate Flash. It should be noted that there was even hesitation to rush into anything from Yahoo JavaScript guru Douglas Crockford, who stated that [the only thing we have to fear is premature adoption][26].

[The Oslo Meeting][27], as it now referred to, was supposed to help bring a unified standardization that would assist in ActionScript becoming more open and compatible with working implementations. The result was quite the [opposite][28], as Adobe was now the odd man out, though some said that it [didn't affect Flash][29] at all. On the opposite side of the coin, it's great to see that there are still people who are objective about development, even if that means using Flash when you normally use JavaScript and vice versa.

A perfect example is my JavaScript hero [Jeremy Keith][30], who is renowned for being an expert in several web development technologies. He created the podcast site [HuffDuffer][31] and chose to build the players in Flash. When I asked him about why he didn't use JavaScript to build the players, he said he was "[just using the right tool for the job][32]." There need to be more attitudes like this in the development community.

Further to the point, Adobe embraces JavaScript in several ways, even after the Project Harmony incident. First, Adobe didn't force developers to use Flash or Flex when deploying AIR applications. They are free and encouraged to use other web languages, including their own [Spry framework][33]. Also, [SWFObject][34] is now the packaged JavaScript standard for embedding Flash objects in [Dreamweaver CS4][35], [Flash Builder 4][36], and even as a [plugin for Web Galleries][37] in Photoshop. Speaking of plugins, a new idealist group has recently emerged pushing the need for a "browser without plugins." This really seems to me like a concept that was mentioned in a brainstorming meeting and was never meant to go anywhere, but people ran with it. If that isn't the case, then why shouldn't we add a <flash> tag in HTML5 if we get rid Flash and all other non-Flash plugins? [This][38] is just the list in my copy of Firefox 3.0.11. I can hear you asking "where are you going with this?"

Well, HTML5 was partly born out of the necessity of a more semantic, meaningful web, and the disagreements on how [MicroFormats ][39]should be handled. Tags like &lt;article&gt;, &lt;header&gt;, and &lt;nav&gt; were designed with accessibility and structured content in mind. To that point comes the question, 'if we rid the browser of plugins, how will Flash be handled in the browser wasteland of of this post-plugin apocalypse'?

I hate to break some hearts out there, but Flash will not just die the day HTML5 is made a W3C standard (if it ever does happen), and it's silly to even suggest such an occurrence. What would happen to the countless sites built in Flash and the others that use Flash and HTML together? Users just wouldn't be able to see them? Think about that for a second. It's not going to happen. But, honoring the wishes of Google and others, I'll state this. If we're all about a browser sans-plugins, making a more semantic web, and know that Flash is not going anywhere anytime soon: I am suggesting that the Flash community make a formal request to the W3C and Adobe to implement a &lt;flash&gt; tag in the HTML5 specification.

If you are in any position of influence at the W3C, Adobe, or any other entity, I urge you to help the Flash community and the future of the web by bringing attention to this matter. HTML5 is coming, but Flash isn't going anywhere. Spread the word.

Addendum: To head off any questions like "what about a 'Java' or 'Silverlight' tag?", I have some answers for that as well. Short answer, <java> yes, <silverlight> no. Now, I'm not saying that just because I'm a Flash developer. I have solid objective reasoning behind it. I think the suggested tags need to be justified before they can be added to the specification. Here are some criteria for nomination:
  * What is the world-wide percentage of total computers that the suggested technology is installed on?
  * How long has the suggested technology been around and what are the long term adoption rates (that don't include forced Windows Update)?
  * Does the suggested technology work seamlessly across all major browsers?
  * Does the suggested technology work on Windows, Mac and Linux operating systems?

These are just off of the top of my head, but I think it's a good benchmark to start with. Let's try to keep the flame wars out of the comments. Please be professional, objective and support your thoughts with research.

Update: David Tucker has done [a much better job][40] of conveying most of what I was trying to say here.

	[1]: http://code.google.com/events/io/ (Google I/O)
	[2]: http://kevinsuttle.com/2009/05/02/re-is-canvas-the-end-of-flash/ (RE: Is Canvas the End of Flash)
	[3]: http://cjedaudio.wordpress.com/2009/02/07/apple-webkithtml5-end-of-flash-and-gears/ (Webkit and HTML5: The end of Flash and Gears?)
	[4]: http://news.zdnet.co.uk/software/0,1000000121,39655473,00.htm (Opera: Web Standards Could Eclipse Flash)
	[5]: http://news.zdnet.com/2100-3515_22-199508.html (Mozilla Warns of Flash and Silverlight 'Agenda')
	[6]: http://www.techcrunch.com/2009/06/09/demo-firefox-35-treats-videos-like-web-pages-why-cant-flash-do-that/ (Why can't Flash be like Firefox 3.5?)
	[7]: http://www.techcrunch.com/2009/06/15/the-missing-link-for-flash-on-the-iphone/ (Quicktime is the Missing Link for Flash on the iPhone)
	[8]: http://www.infoworld.com/d/developer-world/html-5-could-it-kill-flash-and-silverlight-291 (Could HTML5 Kill Flash and Silverlight?)
	[9]: http://www.reelseo.com/flash-obsolete/10219/ (HTML5 Video Tag Could Render Flash Obselete)
	[10]: http://googlewebmastercentral.blogspot.com/2008/06/improved-flash-indexing.html (Google - Improved SEO Indexing for Flash)
	[11]: http://www.mozilla.org/projects/tamarin/ (Mozilla.org - Tamarin Project)
	[12]: http://dev.w3.org/html5/spec/Overview.html#history-0 (W3C - HTML5)
	[13]: http://www.zeldman.com/2009/06/08/not-safe-for-work-tag-in-html-5/ (Zledman - HTML5 'NSFW' Tags)
	[14]: http://jquery.com/ (jQuery)
	[15]: http://twitter.com (Twitter)
	[16]: http://delicious.com (Delicious)
	[17]: http://readernaut.com (Readernaut)
	[18]: http://wave.google.com/ (Google Wave)
	[19]: http://blogs.adobe.com/jd/2009/05/building_upon_untested_assumpt.html (John Dowdell - Building upon Untested Assumptions)
	[20]: http://www.webkitchen.be/2009/05/27/adobe-versus-the-open-web/ (Serge Jespers - Adobe vs the Open Web)
	[21]: http://blog.digitalbackcountry.com/2009/05/html5-versus-flash-versions/ (Ryan Stewart - HTML5 vs Flash Versions)
	[22]: http://blogs.adobe.com/jd/2009/06/underpromise_and_overdeliver.html (John Dowdell - Underpromise and Overdeliver)
	[23]: http://www.mikechambers.com/blog/2008/05/27/poc-implementing-html-5-video-element-using-javascript-and-flash/ (Mike Chambers - Implementing HTML 5 Video Element using JavaScript and Flash)
	[24]: http://en.wikipedia.org/wiki/ECMAScript#Dialects (Wikipedia - ECMAScript)
	[25]: http://ejohn.org/blog/ecmascript-harmony/ (John Resig - ECMAScript Harmony)
	[26]: http://yuiblog.com/blog/2008/08/14/premature-standardization/ (YUI Blog - The Only Thing We Have to Fear is Premature Adoption)
	[27]: http://blog.mozilla.com/standards/2008/08/15/after-oslo-thoughts-on-harmony-and-evolution/ (Mozilla Standards Blog - After The Oslo Meeting)
	[28]: http://whydoeseverythingsuck.com/2008/08/ru-roh-adobe-screwed-by-ecmascript.html (Why Does Everything Suck - Adobe Screwed By EcmaScript Standards Agreement)
	[29]: http://www.mikechambers.com/blog/2008/08/14/actionscript-3-and-ecmascript-4/ (Mike Chambers - ActionScript 3 and ECMAScript 4)
	[30]: http://adactio.com/ (Adactio - Jeremy Keith)
	[31]: http://huffduffer.com/ (HuffDuffer)
	[32]: http://twitter.com/adactio/statuses/978258859 (Twitter - Jeremy Keith)
	[33]: http://www.adobe.com/devnet/spry/ (Adobe Devnet - Spry Framework)
	[34]: http://code.google.com/p/swfobject/ (SWFObject)
	[35]: http://www.adobe.com/devnet/logged_in/sfegette_dwcs4.html (Adobe Devnet - Introducing Dreamweaver CS4)
	[36]: http://www.adobe.com/devnet/flex/articles/flex4sdk_whatsnew.html (Adobe Devnet - What's new in Flash Builder 4)
	[37]: http://blogs.adobe.com/jnack/2009/05/web_photo_gallery_script.html (John Nack - Web Photo Galleriy Flash Detection Script Revved)
	[38]: http://www.flickr.com/photos/kevinsuttle/3636125892/sizes/o/ (Flickr - Firefox Browser Plugins)
	[39]: http://microformats.org/ (Microformats.org)
	[40]: http://www.davidtucker.net/2009/06/19/an-honest-open-discussion-on-web-standards-and-html-5/ (David Tucker -An honest open discussion on web standards and html5)
