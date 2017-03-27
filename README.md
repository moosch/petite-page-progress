# Petite Page Progress

Simple little page scroll progress just because it's nice to build things.

## Getting started

Include the JavaScript in the footer and attach scroll progress to document body:

```html
<script type="text/javascript" src="PetitePageProgress.js"></script>
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

## Extras...or less

There is a simple version of the plugin too that has less functionality and less bloat.

It allows you to attach to the document body or a selector, but only provides the addition of setting a color. Everyone likes to change the color right?

Include the basic JavaScript fil and attach scroll progress to document body, then chain the color function:

```html
<script type="text/javascript" src="PetitePageProgressBasic.js"></script>
```
```js
PetitePageProgressBasic.start('body').color('#7d9e79');
```
