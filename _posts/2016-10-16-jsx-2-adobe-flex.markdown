---
title: What JSX 2.0 could glean from Adobe Flex
---

<summary>
<h2>TL;DR:</h2>
React-style component development is awesome. But let's not get ahead of ourselves when we start defining new "best practices", by dismissing old techniques and architectures. Let's leverage the work done by super-intelligent people from ecosystems of the recent past. In this case, Adobe Flex.</summary>

It's fashionable to take shots at Adobe and Flash these days, but at one point in pre-HTML5 time, it was a major player in web, mobile, and even native desktop development. There was a period of about 6-8 years where a LOT of supremely-intelligent people, including several authors from [EggHead.io](http://EggHead.io), made a very good living contributing their massive brainpower to the Adobe Flash Platform Ecosystem.

We're now at a point in our industry where whether we want to admit it or not, the "best practices" of old are no longer relevant. Decoupling style, content, state, and interaction does not scale, and we have to start thinking in terms of component systems, not pages. This was what the Flash Platform did, years ago.

> Someone is going to unify these three different syntaxes and write a language that just addresses the web platform directly and it's going to be insanely popular.

-[Jeremy Ashkenas](https://www.youtube.com/watch?v=DspYurD75Ns)

It's already happening with JSX, but there is still a large amount of room for improvement and fulfilling of that vision. When looking towards the future, it helps to study the past.

In case your'e unfamiliar, [Adobe's Flex SDK](http://www.adobe.com/products/flex.html) was very much like an evolution of the markup + scripting style development platforms like XAML + C#, or today's JSX + JS. There was a declarative markup language, and a scripting language:MXML and ActionScript 3, respectively.

Looking more closely at Angular and React, its easy to see Flex's  influences. Here are some examples:

```
<s:Button
   id="myButton"
   color="0x9933FF"
   fontSize="15"
   label="Click Me"
/>
```

Would render to:

![flex button](https://cldup.com/c5wihNgArT.png)

Lots of "CSS-in-JS" solutions have gotten *close* to this, but not without having to define top-level `style` reference objects, or enumerate each component's style props ahead of time.

<h3>A quick note about the Flex namespaces</h3>

Before we begin, you may be wondering about the namespaces like <code>s mx fx</code> in the upcoming examples. Think of them like Android versions—something akin to:

```
<jb:Button>

// or

<ics:TabList>
```

where <code>jb</code> represents 'Jelly Bean', and <code>ics</code> represents 'Ice Cream Sandwich'. In Flex, `s` stood for '[Spark](https://github.com/apache/flex-sdk/tree/develop/frameworks/projects/spark/src/spark)', and <code>mx</code>, well, it stood for 'mx'. That was just the name. It was most likely a reference to Macromedia, the company Adobe bought at the end of 2005, which offered the [Macromedia Studio MX](http://www.adobe.com/resources/studiomx/) product suite.

The unique one is <code>fx</code>, which you can think of like the HTML <code>meta</code> tag: not displayed, used for document data, etc.. OK, now that's out of the way. Let's dive in.

## Style property binding via lookups

Out of the box, Flex could bind style properties between components. For example: 

```
<s:Panel id="mainPanel">
  // children
</s:Panel>

<s:Button width={mainPanel.width} />
```

This was years before "responsive design" was even a thing, mind you.

## Declarative, state-based style property bindings

You could also bind styles to *only* appear in certain states. In order to do that, you would define view states declaratively.

```
<!-- Define the view states.
        The <s:states> tag can also be a child tag of the root tag of a custom component.
-->
<s:states>
  <s:State name="PreLoginState"/>
  <s:State name="AuthorizationState"/>
  <s:State name="LoggedInState"/>
</s:states>
```

Then, you could set attributes on your component that would bind their appearance to a particular view state.

```
<s:Button id="button1" />
<s:Button id="button2" includeIn="AuthorizationState"/>
```

In this case, `button2` would not appear on first render, because `PreLoginState` was defined first, and would be the default view state.

Similarly, you could also use the `excludeFrom` attribute to prevent rendering inside a given state.

```
<s:Button id="button3" excludeFrom="PreLoginState"/>
```

If you had enough view states, you could group them as well.

```
<s:states>
  <s:State
  name="PreLoginState"
  stateGroups="preAuthStateGroup"/>
<s:State name="AuthorizationState"/>
<s:State
   name="LoggedInState"
   stateGroups="postAuthStateGroup,
   adminAuthStateGroup"/>
</s:states>
```

The usage was the same as if you were referencing a `State` name.

```
<s:Button id="button1  includeIn="preAuthStateGroup" />
<s:Button id="button2" includeIn="postAuthStateGroup"/>
<s:Button id="button3" excludeFrom="adminAuthStateGroup"/>
```

Dynamically changing a component's state was also a predefined method you could call on an instance.

```
<s:Button
   label="Default"
   click="currentState='postAuthStateGroup'"/>
```

This became more useful when you started listing more states as members of a group.

```

<s:State
   name="LoggedInState"
   stateGroups="postAuthStateGroup, adminAuthStateGroup"/>
```

It was even possible to declare the individual values of style properties within each state, facilitating granular, declarative state-based style property declarations.

```
<s:Panel
  x="0" y="110"
  x.preAuthStateGroup="0" y.preAuthStateGroup="0"
  x.postAuthStateGroup="110" y.postAuthStateGroup="20"
  width.preAuthStateGroup="100" height.preAuthStateGroup="100"
  width.postAuthStateGroup="200" height.postAuthStateGroup="210"
  click="currentState='adminAuthStateGroup'"
/>
```

## State-based content

It went even further, where content and state were able to have defined relationships. The two main public methods of the `State` class were `enterState` and `exitState`. You could use them to conditionally set the content of a given component.


```
<s:State name="preLoginState"
         enterState="messageArea.text = 'Not yet logged in';"
         exitState="messageArea.text = 'Logging in...';"


<s:Button label="Change to default view state"
            click="currentState='authorizationState';"/>

<s:TextArea id="messageArea"/>
```

You could also use these state and property definitions in Transitions, much like [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html), [ng-animate](https://docs.angularjs.org/api/ngAnimate) in Angular, and others. This one was a little more complicated, so I'll [link to the docs](http://help.adobe.com/en_US/flex/using/WS2db454920e96a9e51e63e3d11c0bf69084-7fae.html) if you'd like to dig in.

## Namespaced CSS
CSS Namespaces are ways to define custom styles based on an XML representation of the possible elements your <abbr title="Document Type Definition">DTD</abbr> defines—SVG and XUL, for example.

Here's how it was done for MXML, using CSS Namespaces. The [same technique](https://facebook.github.io/react/tips/inline-styles.html)—_'drop the hyphen, capitalize the following letter'_— needed to be followed here as well because ActionScript was also based on ECMAScript.

```
<fx:Style>
  @namespace s "library://ns.adobe.com/flex/spark";

   s|Button {
      fontSize: 15;
      color: #9933FF;
    }
</fx:Style>
```

Many new UI libraries like Polymer, React, Vue, Riot, etc. let you define custom elements. However, since they are transpiled into standard HTML, you aren't able to easily style based on the [`displayName`]() you came up with. For example, it would be super handy to be able to write something like:

```
TabList: {
  background-color: blue;
}
```

Using CSS namespacing in Flex was defined by package structure. Notice the `xmlns:comps="myComponents.*"` package namespace declaration.

```
<s:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
    xmlns:s="library://ns.adobe.com/flex/spark"
    xmlns:mx="library://ns.adobe.com/flex/mx"
    xmlns:comps="myComponents.*">

    <fx:Style>
        @namespace comps "myComponents.*";

        comps|MyButton {
            color:green;
        }
    </fx:Style>

    <comps:MyButton label="Click Me"/>
</s:Application>
```

Projects like [React-CSS-Components](https://github.com/andreypopp/react-css-components) are enabling this today _without_ messing with XML/CSS namespacing. What's very exciting is that you are also able to define custom variants as CSS pseudo-classes to be exposed as props.

```css
/* CSS */
Label {
  color: red;
}

Label:emphasis {
  font-weight: bold;
}
```

```
// JS
<Label variant={emphasis: true} />

// sets both classes with `color` and `font-weight`
```

Taking it even further, you're able to go in the other direction, setting variant values based on props.

```
Label:prop(mode == "emphasis") {
  font-weight: bold;
}
```

```
<Label mode="emphasis" />
// sets both classes with `color` and `font-weight`
```

It compiles down standard HTML and CSS, using CSS Modules ([!](https://kevinsuttle.com/css-modules-a-review/)) to scope the names locally. This is a great improvement to CSS Modules.

```
import {Label} from './styles.react.css'

<Label />
// => <div className="<autogenerated classname>">...</div>
```

## ItemRenderers
A current "best practice" in React component architecture is to build ["Container components"](https://medium.com/@learnreact/container-components-c0e67432e005), which are essentially [View Controllers](https://developer.apple.com/library/ios/featuredarticles/ViewControllerPGforiPhoneOS/) in <a href="https://en.wikipedia.org/wiki/Object-oriented_programming"><abbr title="Object-Oriented Programming">OOP</abbr></a>/<a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"><abbr title="Model-View-Controller">MVC</abbr></a> speak. Flex provided an easy way to customize rendering with ItemRenderer classes.

```
<fx:Style>
  @namespace s "library://ns.adobe.com/flex/spark";

  s|ItemRenderer { fontSize: 17px,
                   fontStyle: italic,
                   rollOverColor : green }
</fx:Style>

<s:SkinnableDataContainer
   itemRenderer="myComponents.MySimpleCustomItemRenderer">

  <s:layout>
     <s:VerticalLayout/>
  </s:layout>

  <mx:ArrayList>
      <fx:String>Bill Smith</fx:String>
      <fx:String>Dave Jones</fx:String>
      <fx:String>Mary Davis</fx:String>
      <fx:String>Debbie Cooper</fx:String>
  </mx:ArrayList>
</s:SkinnableDataContainer>
```

This would result in each item having a green background and 17px italicized text when hovered.

![Flex custom ItemRenderer](https://cldup.com/npQHiGPlLM.gif)

## Getting closer with Radium
Projects like Radium are making tremendous strides by providing "higher-order components" as wrappers to React components, which is really just wrapping the `render()` method, optionally via a [Decorator](https://en.wikipedia.org/wiki/Decorator_pattern).

```
@Radium
class Button extends React.Component {
  // ...
}
```

Flex/AS3 used Decorators as well, albeit with a slightly different syntax.

```
[Bindable]
public class TextAreaFontControl extends TextArea {}

// or

[Inspectable(defaultValue=true)]
public var shortNames:Boolean = true;
```

For styles, Flex had a set of classes in the `mx.styles` package—the main being the [Singleton](https://en.wikipedia.org/wiki/Singleton_pattern) [StyleManager](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/mx/styles/StyleManager.html). Think of it like a statically-typed virtual <abbr title="CSS Object Model">CSSOM</abbr>. Its only parent class was the root `Object`, which we'll discuss when we get to the Caveats section below.

The StyleManager class could get/set/remove style declarations, load/unload StyleSheets at runtime, bind styles between components, and more. In the Flex SDK source, style properties that aren't inherited are defined and enumerated like so:

```
[Style(name="accentColor", type="uint", format="Color", inherit="yes", theme="spark, mobile")]
```

In ES2016 syntax, it would look more like this:
```
@Style(name="accentColor", type="uint", format="Color", inherit="yes", theme="spark, mobile")
```

Like this previous Decorator example, Radium provides [modifier methods](https://github.com/FormidableLabs/radium/tree/master/docs/guides#modifiers) of styling based on props or state, just like [React Native](https://facebook.github.io/react-native/docs/style.html#using-styles). This includes other components' state. However, the syntax isn't nearly as nice as it was in MXML.

```
<button key="keyForButton" style={[styles.button]}>Hover me!</button>
    {Radium.getState(this.state, 'keyForButton', ':hover') ? (
      <span>{' '}Hovering!</span>
    ) : null}
```
We need something better than ternary operators for UI state display logic. Why not abstract that away like in MXML?

```
<s:Button
   id="primaryBtn"
   label="Set Style"
   click="setNewStyles()"
   rollOverColor="blue"
/>

// or

primaryBtn.setStyle('fontWeight', 'bold');
```

If we could sugar markup to allow for this sort of declarative styling, as well as combine the expressiveness of something like React-CSS-Components with the power of Radium, we would be getting closer to reaching the declarative styling bar set by Adobe Flex.

## Declarative Custom Methods

#### Form validation
Anyone who has worked with [HTML forms](http://codepen.io/kevinSuttle/post/the-current-state-of-web-forms) knows the pain of validation. When implementing input validation in Flex, you could write a custom validator or use one of the built-in Validator classes.

See the following example for a built-in Validator.
```
<fx:Declarations>
   <mx:ZipCodeValidator
       id="zipV"
       source="{myZip}"
       property="text"/>
</fx:Declarations>

<s:TextInput id="myZip"/>
```

If you wanted to make your own, it was easy*.
```
<fx:Declarations>
        <MyComp:AgeValidator id="ageV"
            required="true"
            source="{birthYear}"
            property="text" />
</fx:Declarations>

<s:Form >
   <s:FormItem label="Enter birth year: ">
   <s:TextInput id="birthYear"/>
   </s:FormItem>
   <s:FormItem label="Enter birth year: ">
       <s:Button label="Submit"/>
   </s:FormItem>
</s:Form>
```

How nice would it be to have an input component declare its validator or have a custom validator/[`inputmode`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-inputmode) automatically assigned, based on a granular `type`?

```
<Input type="{locale}.zipCode" />
```

#### String formatting
Flex also had a set of components used specifically for declaration of string manipulation and formatting.

```
 <s:DateTimeFormatter
    id="DateDisplay1"
    dateTimePattern="MMMM d, yyyy" />

 <s:Label
    id="myTA1"
    text="{DateDisplay1.format(today)}" />
```

This also made input validation easier, and more dynamic.

```
<fx:Declarations>
        <!-- Declare and define parameters for the NumberFormatter.-->
        <s:NumberFormatter id="PrepForDisplay"
            fractionalDigits="3"
            decimalSeparator="."
            groupingSeparator=","
            useGrouping="true"
            negativeNumberFormat="0"
            errorText="'{bigNumber.text}' is an invalid input value"/>
</fx:Declarations>

<!-- String to format.-->
  <s:TextInput id="bigNumber" text="Enter number"/>
  <s:Button label="Format Value"
        click="button2_clickHandler(event);"/>
```

## The caveats
The majority of these things could probably be ported in just about any UI framework. However, the way the Flex framework was built goes against what many consider "best practices" in component building.

#### Flex was an Object-Oriented, inherited, Interface-bound library.

Almost every class had several parent classes, all tracing back to the innermost, base-level `Object` class (as all ECMAScript languages do). As an example, let's look at the class inheritance hierarchy of the [Alert component](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/mx/controls/Alert.html):

![Alert component class ancestry](https://cldup.com/7W6F1QhwP1.png)

That depth of polymorphism also meant that with the creation of every child class came the inherited private, public, and [protected](http://help.adobe.com/en_US/ActionScript/3.0_ProgrammingAS3/WS5b3ccc516d4fbf351e63e3d118a9b90204-7f32.html) methods and properties. That's a lot of overhead adding up over time.

*Another example: The custom Validator example above is made "easy" if you `extend` a built-in `Validator` class.

#### Performance and progressive-enhancement weren't really a primary focus

You could feature detect based on Flash Player version, and almost everything had a progress loader, but at the end of the day, we were writing for a specific platform. The debate rages over whether or not the "~~Web~~ [_web_](http://www.wired.com/2016/04/ap-finally-realizes-2016-will-let-us-stop-capitalizing-internet/)" is a "[platform](https://adactio.com/journal/6692)".

#### Every component had its own state
The React community strongly pushes "stateless" components, which again, are just the rendered UI views. In this approach, Flex components each lived in a defined state. As such, this might cause some headaches and overhead management that may not be worth it in terms of costs-to-benefits ratio.

