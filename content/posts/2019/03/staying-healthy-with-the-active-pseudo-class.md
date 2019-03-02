+++
title = "Staying Healthy With the Active Pseudo Class"
date = 2019-03-05
draft = false
tags = ["css","psuedoclass"]
categories = ["CSSeries"]

hasCodePen = true
+++

The `:active` selector used when an element is in a, you guessed it, active state.

The active state is that split second when a button or link is clicked and the user is navigated away.

**Quick Tip**

You can easily activate a psuedo class using the dev tools within your browser of choice. Learn more about this [here](https://developers.google.com/web/updates/2015/05/triggering-of-pseudo-classes).

## How & Where is `:active` Used?

`:active` is primarily used on `<button>` and `<a href="#">` tags though it could be used on anything, _not that you'd want to_.

When clicking anywhere the the CodePen below, the a css selector `html:active` will apply a background color. This functionality isn't particulary useful but good to know what can be done.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="outliercody" data-slug-hash="drGqKb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="A Different Way to Use :active">
  <span>See the Pen <a href="https://codepen.io/outliercody/pen/drGqKb/">
  A Different Way to Use :active</a> by outliercody (<a href="https://codepen.io/outliercody">@outliercody</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## `:active` and Other Pseudo Classes

Order matters when `:active` interacts with other psuedo classes such as `:link`, `:visited`, and `:hover`. There's a handy acronym to remember the correct order called "LOVE HATE"

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css" data-user="codylewis" data-slug-hash="rRxqwE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Pseudo classes LOVE HATE">
  <span>See the Pen <a href="https://codepen.io/codylewis/pen/rRxqwE/">
  Pseudo classes LOVE HATE</a> by codylewis (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The order matters due to the cascading nature of CSS, if `:link` was after `:visited` then you'd never see the purple color of a `:visited` link.

One item I learned while writing this is the difference between `a` and `a:link` as CSS selectors. MDN made an excellent CodePen to illustate this.[^1]

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="outliercody" data-slug-hash="XGXxxb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Examples">
  <span>See the Pen <a href="https://codepen.io/outliercody/pen/XGXxxb/">
  Examples</a> by outliercody (<a href="https://codepen.io/codylewis">@codylewis</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Recap

1. `:active` selector is primarly used on `<button>` and `<a href="#">`, though it can be used anywhere
2. As always with CSS, order matters, remeber "LOVE HATE"

### Resources

- [CSS-Tricks on :active](https://css-tricks.com/almanac/selectors/a/active/)
- [MDN on :active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)

[^1]: [MDN on :link](https://developer.mozilla.org/en-US/docs/Web/CSS/:link)
