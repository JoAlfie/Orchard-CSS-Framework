# A Simple .Less Based Framework

Flexbox is buggy, Bootstrap is bloated - meet the answer.

## What's included?

*Vendor scripts & css most recent as of 27.11.2018*

### Javascript: 
+ JQuery
+ Less
+ Respond - media query polyfil
+ JS-OffCanvas (https://github.com/vmitsaras/js-offcanvas) - an accessible off-canvas menu
+ MatchHeight (https://github.com/liabru/jquery-match-height)
+ ImagesLoaded (https://imagesloaded.desandro.com)
+ FontAwesome (https://fontawesome.com/)

(Only JQuery and Less are requried for the main framework. The others are things I use in practically every project so I thought it would be worth having here for easy download).

### Vendor CSS:
+ JS-OffCanvas
+ FontAwesome

### Less Framework:
+ styles.less - imports & variables
+ normalize - (https://necolas.github.io/normalize.css/)
+ base.less - basics, typeography, general resets
+ less-grid.less  - a simple flexbox-based grid system
+ utilities.less - extra useful snippets

## How do I use it?

*Instructions given for a Symphony project*

1. Copy .less and .css files into workspace/assets/css & .js files into workspace/assets/js
2. Link up the files in the `<head>` tags as usual

```
<head>

  <link rel="stylesheet/less" type="text/css" href="{$workspace}/assets/css/styles.less" charset="utf-8" />

  <script src="{$workspace}/assets/js/jquery-3.3.1.min.js"></script>
  <script>less = { env: "development", async: true } </script>
  <script src="{$workspace}/assets/js/less-3.7.1.min.js"></script>

</head>
```

3. Add site-specific variables to styles.less. Variables can be used across .less files, for easy consistency
```
@breen: #48c4d3;

.breen-class {
  color: @breen;
}

.another-breen-class {
	border: solid 3px @breen;
}
```
4. Update exisiting variables to match site design
```
@mainfontcolor: @dark-grey;
@mainfontfamily: 'Arial', sans-serif;
@linkcolor: @breen;
```

5. Create new .less files for all other site styles, and link them in Imports at the top of styles.less
```
// IMPORTS
@import "normalize";
@import "base";
@import "less-grid";
@import "utilities";

@import "header";
@import "footer";
@import "generic-page";
```

### The Grid
The grid is designed to have as flat a HTML structure as possible. Unlike Bootstrap & Flexbox Grid, rows are not needed inside containers. This allows for more flexibility in container width and setup.

```
<div class="container">
	<div class="col-xs-12 col-sm-6 col-md-3 col-lg-2">
		<p>Col 1</p>
	</div>
	<div class="col-xs-12 col-sm-6 col-md-3 col-lg-2">
		<p>Col 2</p>
	</div>
	<div class="col-xs-12 col-sm-6 col-md-3 col-lg-2">
		<p>Col 3</p>
	</div>
	<div class="col-xs-12 col-sm-6 col-md-3 col-lg-2">
		<p>Col 4</p>
	</div>
	<div class="col-xs-12 col-sm-6 col-md-3 col-lg-2">
		<p>Col 5</p>
	</div>
	<div class="col-xs-12 col-sm-6 col-md-3 col-lg-2">
		<p>Col 6</p>
	</div>
</div>
```

#### Mobile First Breakpoints:
The grid starts at mobile, and extra css can be added as the screen size increases. This means less css has to be read for smaller devices.

```
/* applied to everything */
.universal-class {}

/* xs is the base css, before media queries kick in */
.class-xs {}

@media (min-width: @sm) {
	/* this class applies to everything bigger than the @sm breakpoint, until it is overridden by the same class at a bigger breakpoint */
	.class-sm {}
}
@media (min-width: @md) {
	/* this will override .class-sm */
	.class-md {}
}

#### Containers:

The class `.container` provides the flexbox wrapper for the columns.

Utility classes for containers:

+ `.cols-middle` - vertically centre align columns inside container
+ `.cols-start` - left align / flexbox start align columns
+ `.cols-end` - right align / flexbox end align columns
+ `.cols-center` - horizontally centre align columns
+ `.cols-sp-between` - arrange columns with equal space between (pushed right to edges of container)
+ `.cols-sp-around` - arrange columns with equal space around (including between edge of container and edge of column)
+ `.reverse-row` - reverse direction of columns from html structure

These classes can also be used at separate breakpoints:
+`.cols-middle-sm` - vertically centre align columns when viewport is bigger than `@sm`



