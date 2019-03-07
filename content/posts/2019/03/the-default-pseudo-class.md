+++
title = "The Default Pseudo Class"
date = 2019-03-10
draft = true
tags = ["css","pseudoclass"]
categories = ["CSSeries"]

hasCodePen = true
+++

## When you think of a `:default` css selector, what HTML elements come to mind?

`<input type="checkbox">`, `<input type='radio">`, and `<option>`[^1]are the first ones that register in my mind.

One element that I didn't think of are default buttons within forms. I look forward to sharing how this one works.

## Radio & Checkbox Inputs

With radio and checkbox inputs, any elements that have the `checked` attribute on page load will have the `input:default` styling applied to them.

In the example below, the choices "Blue" and "Morning" are the default values. The default styling on these elements persists throughout interactions with the inputs.

<p class="codepen" data-height="290" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="oVLxEX" style="height: 290px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title=":default example inputs">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/oVLxEX/">
  :default example inputs</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Default Form Button

Default form buttons are new to me and they are one of those "oh that's neat" features.

How it works is the first button element within a `<form>` tag will be the default and styling from `button:default` will apply to it.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="codylewis" data-slug-hash="moEPye" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title=":default example form">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/moEPye/">
  :default example form</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## When Do I Use It?

When I was learning about the `:default` pseudo class, I found the selector to be intriguing. Unfortunately, there doesn't seem to be a valid use case.

If you have a valid use case please give me a shout on twitter, [@codylewis87](https://twitter.com/codylewis87) -- I look forward to hearing from you.

### Resources

- [Can I use on :default](https://caniuse.com/#feat=css-default-pseudo)
- [MDN on :default](https://developer.mozilla.org/en-US/docs/Web/CSS/:default)

[^1]: Styling `<select>` inputs and their child `<option>` elements typically results in a custom dropdown and should be avoided. These cases weren't touched on for that reason.
