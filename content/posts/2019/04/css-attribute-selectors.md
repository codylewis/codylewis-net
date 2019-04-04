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

Attribute selectors, however, are not used as often as class selectors but they're an excellent tool to have available. We'll start with the common and better know use cases and edge cases that see less usage.

## The Basics

<p class="codepen" data-height="225" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="GezXwP" style="height: 225px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="GezXwP">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/GezXwP/">
  GezXwP</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Here is a simple use of the attribute selector, any element that has `data-option` will have the styling applied.

The "Wolf" does not have the `data-alt` attribute hence the lack of styling.

## Attribute & Values

<p class="codepen" data-height="310" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="VRNLON" style="height: 310px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 2">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/VRNLON/">
  Attribute Selector 2</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Specifying a value of the attribute limits, potentially, which elements have the styling applied to them.

Even though `[data-alt="canine"]` seems to be more specific, that isn't the case. The two rules are treated as the same level of specificity and the order of the selectors take precedence. This is seen with the `firebrick` color being applied to the "Dog" text instead of `cyan`.

## Tilde `~`

<p class="codepen" data-height="260" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="eXopNM" style="height: 260px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 3">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/eXopNM/">
  Attribute Selector 3</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The `~` allows for values as long as they are separated by whitespace.

In the example above, the `[data-option~="Four"]` selector is applied to the `<li>` tag with the attribute value of "Four Legged" since there is a space separating the two. The other `<li>` with the attribute of "FourLegged" does not have the rule applied because of the **lack** of whitespace.

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

The `^` indicates that the attribute value must be prefixed by the value in the CSS selector. In this instance, the `data-attr` value must be prefixed with "Four" for the selector and styling to be applied.

## Dollar Sign `$`

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="LvPwga" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 6">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/LvPwga/">
  Attribute Selector 6</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The example above is the same on the previous except for one character. In the CSS selector, the `^` has been replaced by a `$`. Instead of a prefix, the value of the CSS selector must suffix the attribute value on the element.

## Asterisk `*`

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="codylewis" data-slug-hash="JVPgex" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 7">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/JVPgex/">
  Attribute Selector 7</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The `*` is one of the most useful and dangerous of the attribute selectors. As long as the CSS selector value is within the attribute value then the styling will be applied.

> With great power comes great responsibility
>
> _Uncle Ben_

## Case Insensitivity with `i`

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="codylewis" data-slug-hash="WWNMYJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 8">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/WWNMYJ/">
  Attribute Selector 8</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Case insensitivity means that whether it's "Furry" or "FURRY" the CSS selector will apply so long as the values still match the criteria.

## Case Sensitivity with `s` <small title="This is an experimental API that should not be used in production code."><i class="fa fa-flask" aria-hidden="true"></i></small>

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="codylewis" data-slug-hash="mgyvrd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 9">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/mgyvrd/">
  Attribute Selector 9</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Vice versa, case sensitivity means that the value must match exactly in regards to what characters are capitalized.

## Combining Rules

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="rbaPmK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selector 10">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/rbaPmK/">
  Attribute Selector 10</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

More fun and complex situations come into play with you start to combine selectors.

There are endless applications of these selectors but with CSS less is more -- more maintainable for sure.

### Resources

- [Can I use on CSS 2.1 Selectors](https://caniuse.com/#feat=css-sel2)
- [Can I use on Case-insensitive CSS attribute selectors](https://caniuse.com/#feat=css-case-insensitive)
- [MDN on CSS Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)