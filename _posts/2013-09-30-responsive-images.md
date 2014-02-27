---
layout: post
title: Responsive Images&#58; A Common Sense Approach
---

With all of the discussion around responsive images, I thought I'd collect my comments across the Web into one location for posterity.
The following is admittedly an odd format, but one that I hope will tell the story of how I arrive at my conclusions when it comes to responsive media.

[http://www.w3.org/community/respimg/2012/03/07/14/#comment-134](http://www.w3.org/community/respimg/2012/03/07/14/#comment-134)

Hey everyone, 

I'm going to attempt to share some holistic, self-contradicting ideas I've been kicking about this problem that I haven't seen suggested or mentioned yet (though there may be a reason for that).
<strong>Warning: entering the wavy-hand zone. </strong>

1. img is content, so having it in markup makes sense. However, the size of an img is <em>presentational</em>. By design, this is most likely a problem that CSS needs to solve, though I'm going to use this post to propose markup-based solutions. CSS solutions I'll save for another post. Also, as much as I love JS, I have a very hard time thinking it needs to solve this problem. We're better off implementing a solution natively in the long run.

2. I also don't think adding <i>picture</i> to the spec is going to add much other than confusion. Having <i>img</i> and <i>picture</i>? The differences could only be minimal at best, and I sincerely doubt the tradeoff would be worth the mud it adds to the water. Unless there's a very compelling and clear use case, I think we can do better. 

3. If the img tag is locked down according to the powers that be, perhaps we can invent more semantic tags to handle this problem, while still keeping the img namespace.

Examples (100% off of the top of my head): 

mobileimg
tabletimg
desktopimg
tvimg
hdimage

In these cases, the tags themselves have media query like range defaults in CSS. For example,  defaults to 240px min up to 480px.
 defaults to 481px up to 768px, etc. This still needs to take landscape orientations into account and other such niceties, but I'm just spit-balling here.

These can be overridden in CSS, just like any other set of properties, obviously. 

4. I also think the foundation of whatever solution we end up proposing should establish the mantra of approaching images mobile-first. 

5. Another possible approach could be to standardize a file naming convention like in iOS. i.e. 'icon@2X.png', but instead of focusing on pixel density, focusing on dimension. So, perhaps something like banner@mobile.png, banner@tablet.png, etc.

6. The topic of bandwidth keeps coming up, but addressing it is tricky at best. When considering data like "the majority of mobile usage happens at home", the Rubik's cube starts to grow sides. 

I realize that the lines of what exactly mobile, tablets, and HD can be quite blurry, but this post is really to propose some ideas outside of the conversations I've seen. It's entirely possible that we not use any specific device tag like mobile, and decide on something a little more familiar, like 'fleximg', with multiple source attribute/value pairs. We already have flexbox, and this is similar enough to keep the mental model in check, and express semantics at the same time. 

<b>Yeah, I like this better, forget all my other ideas. :) </b>

[http://www.w3.org/community/respimg/2012/03/07/14/#comment-135](http://www.w3.org/community/respimg/2012/03/07/14/#comment-135)

I also wonder if augmenting the scheme property of the meta tag could be helpful somehow. 
http://www.w3.org/TR/REC-html40/struct/global.html#adef-scheme

We already use the meta tag for view options on mobile.
meta content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0" name="viewport"'

[http://www.w3.org/community/respimg/2012/03/07/14/#comment-137](http://www.w3.org/community/respimg/2012/03/07/14/#comment-137) in reply to [Anselm Hannemann](http://www.w3.org/community/respimg/2012/03/07/14/#comment-136)


Thanks Anselm,

Definitely valid arguments there. So, scratch the device-specific tags. About 'fleximg', my purpose here is two-fold. 1) 'picture' is too generic and too close to 'img' and trying to define it will reinforce that. It also adds no real semantics in regards to the fact that the image will somehow be responsive or have multiple sources. 2) fleximg solves this and also creates a single, new, unified tag to work with and adheres to a standard that was set with 'flexbox in CSS. This same namespace could also add 'flexvideo' and 'flexaudio' in the future. How does everyone feel about this? I can't be the only one thinking 'picture' is not the solution.

[http://www.w3.org/community/respimg/2012/03/07/whats-next/#comment-144](http://www.w3.org/community/respimg/2012/03/07/whats-next/#comment-144)

This presentation from Yiibu breaks the limitations and swings/misses down even further. It's much more complicated than at first glance. 

http://www.slideshare.net/yiibu/muddling-through-the-mobile-web/

[http://www.w3.org/community/respimg/2012/02/22/right-click-save-image-as/#comment-146](http://www.w3.org/community/respimg/2012/02/22/right-click-save-image-as/#comment-146)

@Mat, I agree that the browser should save at the size in which the image is viewed. Also, I think getting browser vendors to modify their current file download UI is going to be harder than what's being envisioned.

[http://www.w3.org/community/respimg/2012/03/07/14/#comment-159](http://www.w3.org/community/respimg/2012/03/07/14/#comment-159)

So, Apple is updating their site to be compatible with the new iPad's Retina Display, employing a progressive download technique in JS. 

[http://www.appleinsider.com/articles/12/03/13/applecom_upgrading_to_high_resolution_images_ahead_of_retina_ipad_launch.html](http://www.appleinsider.com/articles/12/03/13/applecom_upgrading_to_high_resolution_images_ahead_of_retina_ipad_launch.html)

[https://gist.github.com/2029936](https://gist.github.com/2029936)

[https://ssl.apple.com/v/ipad/a/scripts/image_replacer.js](https://ssl.apple.com/v/ipad/a/scripts/image_replacer.js)

Also see [http://timkadlec.com/mq/test7.php](http://timkadlec.com/mq/test7.php) for resolution tests.

Thanks to Jason Grigsby, Scott Jehl, Brad Frost, and Jim Newbury for the links.

[http://www.w3.org/community/respimg/2012/03/07/whats-next/#comment-163](http://www.w3.org/community/respimg/2012/03/07/whats-next/#comment-163)
Excellent, excellent points, Mat and great contributions Scott. 

I like the idea of attributes on the img tag as a possible solution. I was under the impression that img was off limits though*. 

I guess where I struggle the most is standardizing a range of ballparking to accuracy in semantics. For example, is a logo a 'picture'? Should that really be  'graphic'? Does a bio photo need a 'photo' tag? I guess

From a mobile-first perspective, it seems like if we're going to create an element, we have to have a need for it, and that need should be reinforced by a fitting name. And really, we're only creating a new element because img is apparently untouchable. *As Scott mentioned, I see no reason we can't add attributes to it, but I digress. 

My point is, breaking it down, HTML5 was intended to be about adding more meaning to our markup. If we're to be line with standards, 'picture' sounds great on paper, but only up until the point of comparison with img. Does that make sense? It's not even a question of DRY, it's more a question of using the asking where the lines of the spectrum are drawn on element names so that they can be specific enough to have meaning, yet generic enough to be flexible. I think there's an agreeable solution for all involved, but compromise is almost a guarantee.

Anyway, I just was attempting to think a bit outside the box on some of the approaches I've seen mentioned. This was just one point I wanted to make. Thanks for the responses, guys.

I'm going to do another post similar to the one above, but instead of markup-based solutions, I'll focus on CSS concepts. Speaking of, Mat, how flexible is the standards body on the CSS spec? Is it as locked down as the img tag? If not, we could possibly negate the new HTML element discussion altogether.

[http://www.w3.org/community/respimg/2012/04/02/the-new-elephant-image-quality-and-retina-displays/](http://www.w3.org/community/respimg/2012/04/02/the-new-elephant-image-quality-and-retina-displays/)

Several posts are being passed around regarding the 3rd generation iPad's Retina graphics holding a direct light to how compressed our images are on the web.

[http://www.mobilexweb.com/blog/ios-5-1-new-ipad-web-developers](http://www.mobilexweb.com/blog/ios-5-1-new-ipad-web-developers)

[http://www.mobify.com/blog/ipad-3-and-retina-screen-what-it-means-for-your-mobile-commerce-site](http://www.mobify.com/blog/ipad-3-and-retina-screen-what-it-means-for-your-mobile-commerce-site)

[http://daringfireball.net/2012/03/ipad_3](http://daringfireball.net/2012/03/ipad_3)

[http://cloudfour.com/how-apple-com-will-serve-retina-images-to-new-ipads](http://cloudfour.com/how-apple-com-will-serve-retina-images-to-new-ipads)

[http://bradfrostweb.com/blog/notes/ipad3s-retina-display-web](http://bradfrostweb.com/blog/notes/ipad3s-retina-display-web)

[http://www.penny-arcade.com/2012/04/02/perhaps-too-real](http://www.penny-arcade.com/2012/04/02/perhaps-too-real)

I thought I'd start a discussion on possible approaches (notice I didn't use the word 'solutions' because I think it'll be an iterative process), and the potential pitfalls this might
bring in future responsive designs. So, it's GO time.


Well, I was hoping to get into more of a discussion of image quality (PPI, resolution density) rather than image size. The issue we're seeing now is that many images, not just heavily-compressed images, look rather inelegant on the new iPad, which will undoubtedly spawn other hi-DPI devices. 

Should we start weighing trade-offs between image compression/poor display vs performance (both perceived and actual)? Obviously this is something we consider anyway, but at this point, the moving parts are getting harder to keep track of. 

Using the Adaptive Images approach, as well as browser zooming, doesn't guarantee that the browser will report it's viewport correctly. 

See [http://www.alistapart.com/articles/a-pixel-identity-crisis](http://www.alistapart.com/articles/a-pixel-identity-crisis)/ and [http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/)

Perhaps these factors need to be looked at more in-depth so we can come up with a robust solution.

I was just made aware of [http://retinajs.com/](http://retinajs.com/), which aims to detect hi-res displays with JavaScript and serve higher resolution images. Looks like a handy approach, but I’d rather the solution be in markup or CSS. Until then, this might be the way to go. I’m interested to see performance benchmarks on it.

And the hits just keep coming.

[http://osxdaily.com/2012/05/14/new-macbook-pro-coming-next-month-at-wwdc-retina-display-thinner-ssd/](http://osxdaily.com/2012/05/14/new-macbook-pro-coming-next-month-at-wwdc-retina-display-thinner-ssd/)

[http://www.w3.org/community/respimg/2012/05/11/respimg-proposal/#comment-692](http://www.w3.org/community/respimg/2012/05/11/respimg-proposal/#comment-692)
Well, I'm sticking to my guns. <a href="http://www.w3.org/community/respimg/2012/03/07/14/#comment-134" rel="nofollow">Read my initial, from-the-hip thoughts</a> and some follow-up thoughts <a href="http://www.w3.org/community/respimg/2012/03/07/whats-next/#comment-163" rel="nofollow">here</a>

1. I've never been a huge fan of the name 'picture', but I guess there really aren't any better terms. (<a href="http://thesaurus.com/browse/image?s=t" rel="nofollow">I've looked</a>).

2. The W3C needs to decide if img is able to be modified or not. Either way, my next point may negate the outcome.

3. I'm a little stunned either one is being considered when media query syntax is being used in the markup. (Yes, Matt Wilcox, I saw your comment :) )
To me, the content is a markup problem (the subject of the image), but the size of the image is a CSS style problem. If the site we run our solutions on can handle media queries, then it can handle CSS3, including multiple backgrounds. Why hasn't <a href="http://www.css3.info/preview/multiple-backgrounds/" rel="nofollow">a similar syntax</a> been proposed? In order to keep presentation separate from content, I think we need to steer the conversation in this direction. 

3. If we are forced to do handle this in HTML, why not pave the cowpaths like the Microformats community did? See <a href="http://filamentgroup.com/lab/responsive_images_experimenting_with_context_aware_image_sizing/" rel="nofollow">this example</a> from the Filament Group from 2010. While I don't want to rely on JS or .htaccess as a solution, I think the notion of custom data attributes is <strong>far</strong> too powerful to be overlooked. We can get creative and combine this with attribute selectors in CSS, combining the syntax of multiple backgrounds, or even better CSS pseudo selectors + media queries + generated content to place the appropriately-sized images. 

I worry that in our haste to standardize a working solution, we may have started looking for answers inside the box. There is more to be discovered for sure.

[http://www.w3.org/community/respimg/2012/05/11/respimg-proposal/#comment-780](http://www.w3.org/community/respimg/2012/05/11/respimg-proposal/#comment-780)
As developers, I think we're used to starting our solutions to problems with a more complicated approach than is necessary (no offense intended). Looking at Jeremy Keith's <a href="http://adactio.com/journal/5429/" rel="nofollow">Conditional CSS post</a> it just seems focused on solving the wrong problem. 

If you think about it, how are multiple images and multiple styles that much different from making enitre other sites? Thinking a bit holistically, is it really that much worse to serve high-to-medium res graphics than to assume the user's browsing context and create/serve multiple versions of graphics/sites? Why are we not looking at better image formats seriously or standardizing higher compression settings?

The more I think about this, the more I think that this <b>isn't our problem to solve</b>. It's really a browser and server problem. Let's take a look at current media implementations. 

Looking at the current <a href="http://diveintohtml5.info/video.html#example" rel="nofollow">video tag solutions</a>, look at all the markup required, which we're now trying to mimic for images. The only reason that much markup is required is because of codecs, not resolution. To further make my point, look at YouTube. Using <a href="http://www.youtube.com/watch?v=seX7jYI96GE" rel="nofollow">this video</a> as an example, notice how many quality settings there are. The user can choose one, and even set a default in their account settings, even though, only one video file is uploaded. However, does a non-tech savvy user know the difference between 240p and 360p? Imagine not working on the web and reading <a href="http://support.google.com/youtube/bin/answer.py?hl=en&amp;answer=91449" rel="nofollow">this "help" post</a>. Vimeo has a more elegant model, in my opinion, having one HD toggle setting, usually defaulting to 'off', something a user can easily grasp and decide on. None of this really requires much from the developer, especially not uploading and specifying multiple files to serve. Remember back in the day when we had to provide tons of compression options for users to choose on their own based on bandwidth? Let's not do that again. The user shouldn't have to make that many decisions. <a href="https://en.wikipedia.org/wiki/Hick%27s_law" rel="nofollow">Hick's law</a> and all that.  

Audio is a <a href="http://html5doctor.com/native-audio-in-the-browser/" rel="nofollow">mess</a> as well, as far as codecs go, but for some reason, you rarely see compression or quality options when it's being delivered to users. 

I don't think bandwidth APIs solve anything, either. Think about the last time you tried to use your laptop at a hotel. Does poor bandwidth automatically mean it's a mobile device? Not at all. 

I just am leaning less and less towards the idea that this is a front-end developer's problem. I mean, why are we focusing <em>specifically</em> on images? What's the reasoning behind that? It just seems like we're focusing on this micro-problem when we should be looking at the big picture. 

Indeed, these are <strong>very difficult</strong> problems to solve with this many moving parts, but I think looking at the landscape as a whole and trying to be a bit more pragmatic rather than trying to fix problems we really shouldn't have to will be better time spent.

<strong>Update:</strong> <a href="http://www.slideshare.net/yiibu/adaptation-why-responsive-design-actually-begins-on-the-server" rel="nofollow">this presentation</a> by Yiibu hits the nail on the head. Feature detection at the server-level is our most reliable solution. It's not hard science, and it's not straight-forward, but we shouldn't use that as an excuse to ignore the server.  

[http://www.w3.org/community/respimg/2012/08/21/thoughts-on-adding-a-type-attribute-2/#comment-6105](http://www.w3.org/community/respimg/2012/08/21/thoughts-on-adding-a-type-attribute-2/#comment-6105)
I am in favor of modifying the img element. There is clearly a need and the picture element is too similar for my liking. I'm also in favor of a new image format supported by a new type attribute.

[http://krijnhoetmer.nl/irc-logs/whatwg/20120515#l-2750](http://krijnhoetmer.nl/irc-logs/whatwg/20120515#l-2750)
No one seems to be able to answer why we're only focused on images. Is it because we have indirect control by not having to deal with audio/video codecs?

[http://krijnhoetmer.nl/irc-logs/whatwg/20120515#l-2766](http://krijnhoetmer.nl/irc-logs/whatwg/20120515#l-2766)
@Jmather: I don't think the media elements are done until they're consistent. Why is it OK to serve one file size of video/audio to any browser, but not images?

[http://krijnhoetmer.nl/irc-logs/whatwg/20120515#l-2775](http://krijnhoetmer.nl/irc-logs/whatwg/20120515#l-2775)
My point is that those media elements are handled by a server that determines quality. Why can't we do the same with images?


###Extra links
http://filamentgroup.com/lab/rwd_img_compression/
http://blog.netvlies.nl/design-interactie/retina-revolution/
http://unstoppablerobotninja.com/entry/fluid-images
http://mobile.smashingmagazine.com/2013/09/24/responsive-image-container/
https://t.co/eMEfCH3zMO
http://t.co/tzYOdpFA3k
http://t.co/VLsQQBII
http://t.co/uR1A61De
https://t.co/nAtfSqyr
http://t.co/XIdvNXZS
http://t.co/fbqkTj8X
http://t.co/KsQHCKxE
http://t.co/jlHDvlC0
http://t.co/GsjVCTjJ
http://www.resrc.it/
http://css-tricks.com/which-responsive-images-solution-should-you-use/
http://blog.cloudfour.com/8-guidelines-and-1-rule-for-responsive-images/
http://adactio.com/journal/4997/