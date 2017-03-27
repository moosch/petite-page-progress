# Petite Page Progress

Simple little page scroll progress just because it's nice to build things.

No plugins, no preprocessors, no transpilers, no npm, no frameworks no fluff. Just simple HTML/CSS and some vanilla JavaScript.

## Getting started

Include the JavaScript in the footer and attach scroll progress to document body:

```html
<script src="PetitePageProgress.js"></script>
```
```js
PetitePageProgress.start('body');
```


## Additional settings

The scroll progress can also be attached to a specific container element like this:

`PetitePageProgress.start('.selector');`

You can also add custom styles to the progress indicator by passing a style object to the `start` function. 
Note that you will need to include the selector as a parameter too. Like so:

```js
PetitePageProgress.start({
  container:'.container',
  styles: {
    backgroundColor:'#566c9e',
    height:'10px',
    boxShadow: '1px 1px 1px rgba(0,0,0,0.3)'
  }
});
```

## Extras...but actually less

There is a simple version of the plugin too that has less functionality and less bloat.

It allows you to attach to the document body or a selector, but only provides the addition of setting a color. Everyone likes to change the color right?

Include the basic JavaScript fil and attach scroll progress to document body, then chain the color function:

```html
<script src="PetitePageProgressBasic.js"></script>
```
```js
PetitePageProgressBasic.start('body').color('#7d9e79');
```

### License

PetitePageProgress is MIT Licensed

Copyright (c) 2017 @moosch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
