---
title: 'The End of Excuses: Developer Experience on Mobile Devices'
date: '2016-08-03 02:37:09'
---

<p>Why it's time to stop making assumptions, and put in the work.</p>

Developer Experience is a primary hurdle between ideas and implementation. Yet, consistently, designers and product managers can be heard making statements—confidently, no less—like the following:

- "What developer would read API docs on their *phones*?"
- "Developers don't want to code on their phones."

Where are these opinions coming from, and why are they being made so strongly by people who aren't developers?

## App Store Results
Searching for "code editor" on the various mobile app stores yields the following results

[Apple App Store: iPhone apps:](https://itunes.apple.com/WebObjects/MZStore.woa/wa/search?submit=edit&mt=1&term=code%20editor#software) 89 results, ~10 for margin of mis-categorization.

There are actually 2 results for Apple Watch. It's not that crazy when you think about it. The Apple Watch is primarily used for notifications. Developers need those to keep track of all the things we need to monitor.

https://github.com/julienXX/terminal-notifier

[iTerm2](https://www.iterm2.com/features.html) is a perfect example.
![iTerm triggers](https://www.iterm2.com/img/screenshots/v2-screen-shots/triggers.png)

![iTerm2 notifications](https://www.iterm2.com/img/screenshots/v2-screen-shots/profiles_terminal.jpg)

[Google Play: Android Apps:](https://play.google.com/store/search?q=code%20editor&c=apps) 256 apps, ~125 margin of mis-categorization and/or store-driven result padding. Still, a lot of developer focused apps.

Microsoft Windows Phone Store has a dedicated "[Developer Tools](https://www.microsoft.com/en-us/store/most-popular/apps/mobile?cat1=developer%20tools)" category, but admittedly that is pretty slim because very few people buy Windows phones. To be fair, that category most likely exists because it's a desktop app store as well. However, there are [23 apps](https://www.microsoft.com/en-us/store/search/apps?q=%22code%20editor%22). **0** margin of error here.

### Case-study: Panic Prompt 2
One of the primary flaws in thinking about developer tooling comes from the traditional desktop interaction patterns of mouse and keyboard. Developers tend to lean heavily on the keyboard for as much interaction as possible.

The [Prompt app](https://panic.com/prompt/) from Panic, Inc. is a wonderful example of design thinking, particularly diverging from the as-is scenario and using technology to enable a unique, stellar experience.

Prompt is an <abbr title="secure shell">SSH</abbr> client for iOS. If you have ever done any UNIX-related work, and chances are you have, you know that a lot of typing is involved. If you've ever worked with SSH, you're aware that many tasks require specific encryption commands, modifier keys, meta keys, and more finger gymnastics than getting gum out of your dog's fur.

The designers at Panic have taken advantage of the custom keyboard capabilities in iOS to provide shortcuts to the most commonly used commands.

![Panic keyboard screenshot](https://cldup.com/CJk1Nk_oTz.png)

Why would anyone want to use this? If you've ever gotten a call on a Friday night about a bug or a server being down, while you're out trying to enjoy your weekend, you already know why. Once again, this is clearly an application of empathy from Panic's designers.

When there is a need, people will do whatever it takes to get it done. As designers, we need to make the ability for users to complete tasks as frictionless as possible. This *especially* includes developers, and the mobile path.

As of WWDC 2016, Apple agrees with this. They've introduced their own [Swift Playgrounds for iPad](https://developer.apple.com/swift/playgrounds/) app, which leverages many of the UI techniques I've described in this article.

![Swift Playground for iPad screenshot](https://developer.apple.com/library/prerelease/content/documentation/Xcode/Conceptual/swift_playgrounds_doc_format/Art/SP_learn_to_code_2x.png)

### Case study: Dash
Kapeli [Dash](https://kapeli.com/dash) is a developer favorite for collecting and managing sets of documentation on MacOS, including snippets, and offline access.

2 years ago, [Dash for iOS](https://itunes.apple.com/us/app/dash-api-docs/id935284832?mt=8) was introduced, proving that smaller form factors don't have to sacrifice utility.

![Dash screenshot](http://a3.mzstatic.com/us/r30/Purple20/v4/1f/0b/8e/1f0b8e48-418a-7426-9362-4712bed64f61/screen696x696.jpeg)

The developer even set up "Dash Remote", which allows syncing from the Mac desktop app to support bidirectional search and mirroring to the iOS app.

![Dash Remote screenshot](https://cldup.com/_Jl4u37D1J.png)

### Case study: Pythonista
Pyhonista is one of the best development experiences that exists on mobile devices. The interface feels ergonomic, and plays to the strengths of the iOS platform. Touting itself as a "full Python IDE for iOS" (I think it's something more, and better), I've never had this much fun using an interface designed to help me learn by way of tinkering.

![Pythonista screenshot - editor overview](http://omz-software.com/pythonista/images/screenshots/iPad04.jpg)

![Pythonista screenshot - Console](http://omz-software.com/pythonista/images/screenshots/Console2.jpg)

<h3 id="github">The GitHub in the Room</h3>
GitHub is home to 38 Million open source projects at the time of this writing. Why, as we tread closer to the year 2017, must we be satisfied with this 2008 experience on small screens, when working?

The dashboard content is missing the largest part of the desktop UX: the feed.

![GitHub mobile - dashboard](https://cldup.com/hZNhqn_xhi.png)

No autocomplete at all. Not for emojis, not for user, team, or org @mentions, issues, commits,  nothing. It's literally just a text area.

Mobile:
![GitHub mobile - no autocomplete](https://cldup.com/AVYNLtCGJZ.png)

Desktop:
![GitHub desktop - autocomplete](https://cldup.com/y02WeZ2x9a.png)

The desktop site has it's own issues, though. First, it's not even _a little_ responsive.

![GitHub desktop - not responsive](https://cldup.com/bnvv7hvGI6.png)

##### Issues
Mobile:
![GitHub mobile - dumbed-down issues](https://cldup.com/aCrtGGMcBi.png)

Desktop:
![GitHub desktop - issues UI](https://cldup.com/SNXjAg1KKh.png)

and my favorite screen:
![GitHub desktop - issues UI mobile or desktop?](https://cldup.com/iI9HSwt6wG.png)

This doesn't even begin to talk about GitHub's mobile UX with wikis and gists, mind you, and I've just scratched the surface. What I can't understand is how badly the mobile experience has been overlooked, when clearly the need is there.

### TL;DR
I'm still not sure where the concept or confidence in saying that developers don't use their phones came from, but hopefully this post is something you can point naysayers towards when it inevitably comes up in the future.





