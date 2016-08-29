---
title: 'CSS Modules: A review from the front-end'
date: '2016-06-03 15:44:09'
---

At Watson IoT, we're building the next iteration of our UI. We're using React, and loving it. Of course, with React, comes the task of how you [manage your styles](http://survivejs.com/webpack_react/styling_react/).

I've spent a lot of time working with styling languages, and not just for the web, so I was really excited when I first read Glen Maddern's [introductory post](http://glenmaddern.com/articles/css-modules). On paper, the approach makes so much sense, and solves so many problems. At real-world scale, especially in the enterprise, the benefits are steadily outweighed by the costs. I tweeted a short review earlier, and got some surprised responses.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I feel I&#39;ve given <a href="https://twitter.com/hashtag/CSSModules?src=hash">#CSSModules</a> a fair shake for the last month or so. Preliminary verdict: cost-benefit is simply not worth it.</p>&mdash; Kevin Suttle (@kevinSuttle) <a href="https://twitter.com/kevinSuttle/status/738129356460036097">June 1, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

So, allow me to explain why I just don't believe CSS Modules are ready for prime time.

### Better than preprocessors?
Many times during the course of CSS problem solving, I found that I had to trick CSS Modules into doing what I wanted. In various, unrelated challenges, I kept thinking to myself "I would get this for free in Sass/Less/Stylus etc."

Here's an example: **Variables**. CSS Modules has a concept called `@value`, which is simply a variable. It works like this:

```css
@value primary: #BF4040;
@value secondary: #1F4F7F;

.text-primary {
  color: primary;
}

.text-secondary {
  color: secondary;
}
```

Not rocket science, right?

Like many programming languages, variables in CSS Modules are just containers for single-lined values. However, there are some rather nasty bugs that don't throw errors, like when you [try to declare a font-stack](https://github.com/css-modules/postcss-modules-values/issues/21) using `@value`s.

When you want to use something akin to a `@mixin`, or `@extends` or `%placeholder`, CSS Modules has a feature called "composition". It works like this:

```css
.className {
  color: green;
  background: red;
}

.otherClassName {
  composes: className;
  color: yellow;
}
```

Again, not difficult to grasp. But, not terribly useful at scale. Why?

### Globals are still valuable
Where it all breaks down is when you try to share globals. Here's the hard truth about our die-hard component styling world:

> We will probably always need globals.

I recently stumbled across [this talk by Simurai](http://simurai.com/blog/2014/05/04/cssconf) called “Styling with STRINGS”, in which he demonstrates strategically setting `currentColor`, `ems`, and `flexbox` to completely customize a UI theme. This works because of inheritance. Themes are meant to be global and inherited. If you've built UIs for any significant amount of time, you have realized that separating themes is crucial. Paint vs frame.

At IBM, we build UI systems that:

1. Conform to the (company-level) [IBM Design Language](http://ibm.com/design/language)
2. Adhere to the product group's branding: (Watson IoT, Bluemix, MobileFirst, etc.)
3. Adhere to an individual product's style guide. (e.g. [Watson IoT Platform for Automotive](http://www.ibm.com/internet-of-things/iot-industry/iot-automotive/))
 - Even then, the theme changes a few times a year.

We're talking at least 3 tiers, at which "the component-level" is simply a container for a theme. It's not impossible _per sé_, but incredibly inefficient to attempt this without globals. Now, back to why this matters to CSS Modules.

The 2 features I've described so far, `@value` and `composes`, **do not work together across files**.  I won't reproduce the issue here (because I've [outlined it in detail](https://github.com/css-modules/css-modules/issues/50#issuecomment-222232653) on the CSS Modules GitHub repo).

Basically, `@value` is most useful inside of the current file. If you want to have true composition, you need to verbosely write out something like this with `@compose` at the beginning of every declaration that shares these styles.

```css
.widget {
  composes: edit hightlight from "./edit.css";
  composes: button from "module/button.css";
  composes: classFromThisModule;
}
```

The gist is that, as I mentioned earlier, this is something we've come to expect to "just work" in a CSS processor. Why doesn't this work in CSS Modules? Oh, right: globals.

### 'Local by default' is a double-edged sword
The one killer CSS Modules feature is that styles are *locally-scoped by default*, essentially mimicking (not enabling) the [CSS `scoped` styles spec](http://w3c.github.io/html-reference/style.html#style.attrs.scoped) to be used now. They're not 1:1, but the goals are aligned.

The way it works is by replacing the class names you write at author-time with a unique hash or pattern you can define.

**CSS**
```
className=inputField
```

**Webpack config**
```js
test: /\.css$/,
loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
```

Outputs something like:
<pre>
  <code>class="Input__inputField___2gtVF"</code>
</pre>

This is a brilliant idea for encapsulating CSS and restricting rules to only the component you're styling.

However, there's another catch that doesn't throw an error or warning (because how could it?). This one got me when I first started with CSS Modules. Using the `.inputField` example above, let's say I wanted to try out another class I was working on, `.preValidated`. I open up Dev Tools, and throw the `.preValidated` class on the input. But, nothing happens. [Checks the CSS... Nah, that's fine.] Oh right. `.preValidated` is the **author-time** class name. `.Input__preValidated___2_iiM` is the one generated by CSS Modules.

OK, not the end of the world, and no different from using other pre-processors without sourcemaps enabled (which, to be fair, you can do in [CSS Modules via PostCSS](https://github.com/webpack/css-loader#sourcemaps)).

Now, you can explicitly [declare style blocks](https://github.com/webpack/css-loader#local-scope) to be `:local` or `:global`, but, again, this gets very tiresome, very quickly. These custom pseudo-selectors have also [been shown to be unreliable](https://github.com/css-modules/css-modules/issues?utf8=%E2%9C%93&q=is%3Aissue+pseudo), especially when used in combination with standard pseudo-selectors.

This is another case where I ask why I'm putting myself through all this instead of using another more established CSS processor.

### Just not ready for the majors
Look, I think the work the CSS Modules team is doing is important, and valuable. For the scale of work I do daily, I simply don't think the approach is ready for the majors quite yet.
