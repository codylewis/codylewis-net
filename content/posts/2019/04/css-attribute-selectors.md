+++
title = "CSS Attribute Selectors"
date = 2019-04-14
draft = true
tags = ["css","programming","attributeselectors"]
categories = ["CSSeries"]
hasCodePen = true
+++

```CSS
.profile {
    color: blue;
}
```

If you've worked with CSS before the syntax above should look familiar. You have a class name as the selector and the styles applied to it.

Attribute selectors are not used nearly as often as class selectors but they're an excellent tool to have available. We'll start with the common and more well know uses cases and some that few people will ever use.

## Attribute Selectors

Before we get too far into things, below is an example of an attribute one could find -- we'll be referencing this through the CSS examples below.

<p class="codepen" data-height="225" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="GezXwP" style="height: 225px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="GezXwP">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/GezXwP/">
  GezXwP</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The most simple and straight forward use of the attribute selector. Any element that has `data-option` will have the styling applied.

The "Wolf" does not have the `data-alt` attribute hence the lack of styling.

## Attribute & Values

Attribute selectors are powerful but they become even more so when you specify a value that the attribute needs to equal.

<p class="codepen" data-height="310" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="VRNLON" style="height: 310px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 2">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/VRNLON/">
  Attribute Selector 2</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Oddly enough, even though the first selector with the value of "canine" seems to be more specific that actually isn't the case since the `color: cyan` styling isn't applied to the "Dog" text.

Order matter as well as specificity and we see that in action with the `color: seagreen` styling being applied as intended to the "Cat" text.

## Tilde `~`

<p class="codepen" data-height="260" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="eXopNM" style="height: 260px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 3">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/eXopNM/">
  Attribute Selector 3</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The `~` allows for there to be multiple values as long as they are separated by whitespace.

In the example above, the `[data-option~="Four"]` selector is applied to the `<li>` tag with the attribute value of "Four Legged" since there is space separating the two. The other `<li>` with the attribute of "FourLegged" does not have the rule applied because of the **lack** of whitespace.

## Pipe `|`

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="XQrvNz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 4">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/XQrvNz/">
  Attribute Selector 4</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The `|` before the equal sign is the exact same as the previous example with the one key difference. A `-` is used in place of whitespace.

## Caret `^`

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="codylewis" data-slug-hash="rbBXJJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 5">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/rbBXJJ/">
  Attribute Selector 5</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The `^` indicates that the attribute value must prefixed by the value in the CSS selector. In this instance, the `data-attr` value must be prefix with "Four" for the selector and styling to be applied.

## Dollar Sign `$`

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="LvPwga" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 6">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/LvPwga/">
  Attribute Selector 6</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The example above is the same on the previous except for one character. In the CSS selector the `^` has been replaced by a `$`. Instead of a prefix, the value of the CSS selector must suffixed the attribute value on the element.

## Asterisk `*`

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="codylewis" data-slug-hash="JVPgex" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 7">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/JVPgex/">
  Attribute Selector 7</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The `*` is one of the most useful and dangerous of the attribute selector. As along as the CSS selector value is within the attribute value then the styling will be applied.

> With great power comes great responsibility
>
> _Uncle Ben_

## Case Insensitivity with `i`

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="codylewis" data-slug-hash="WWNMYJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 8">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/WWNMYJ/">
  Attribute Selector 8</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


<!-- [attr operator value s] -->


### Resources

- [Can I use on CSS 2.1 Selectors](https://caniuse.com/#feat=css-sel2)
- [Can I use on Case-insensitive CSS attribute selectors](https://caniuse.com/#feat=css-case-insensitive)
- [MDN on CSS Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)