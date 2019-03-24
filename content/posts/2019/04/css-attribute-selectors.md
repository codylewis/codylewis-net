+++
title = "CSS Attribute Selectors"
date = 2019-04-01
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

<!-- [attr~=value] -->
<!-- [attr|=value] -->
<!-- [attr^=value] -->
<!-- [attr$=value] -->
<!-- [attr*=value] -->
<!-- [attr operator value i] -->
<!-- [attr operator value s] -->


### Resources

- [Can I use on CSS 2.1 Selectors](https://caniuse.com/#feat=css-sel2)
- [Can I use on Case-insensitive CSS attribute selectors](https://caniuse.com/#feat=css-case-insensitive)
- [MDN on CSS Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)