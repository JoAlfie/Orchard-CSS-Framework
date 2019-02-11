# A Simple .Less Based Framework

Flexbox Grid is buggy, Bootstrap is bloated - meet the answer.

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
+ prefix-utilities.less - utility classes for regularly used styles with vendor prefixes
+ base.less - basics, typeography, general resets
+ less-grid.less  - a simple flexbox-based grid system
+ utilities.less - extra useful snippets

### Sublime Project:
+ Framework.sublime-project - a sublime text project, to load all the folders into ST & have a nice time

## How do I use it?

*Instructions given for a Symphony project*

1\. Copy .less and .css files into workspace/assets/css & .js files into workspace/assets/js

2\. Link up the files in the `<head>` tags as usual

```
<head>

  <link rel="stylesheet/less" type="text/css" href="{$workspace}/assets/css/styles.less" charset="utf-8" />

  <script src="{$workspace}/assets/js/jquery-3.3.1.min.js"></script>
  <script>less = { env: "development", async: true } </script>
  <script src="{$workspace}/assets/js/less-3.7.1.min.js"></script>

</head>
```

3\. Add site-specific variables to styles.less. Variables can be used across .less files, for easy consistency
```less
@breen: #48c4d3;

.breen-class {
  color: @breen;
}

.another-breen-class {
	border: solid 3px @breen;
}
```
4\. Update exisiting variables to match site design
```
@mainfontcolor: @dark-grey;
@mainfontfamily: 'Arial', sans-serif;
@linkcolor: @breen;
```

5\. Create new .less files for all other site styles, and link them in Imports at the top of styles.less
```
// IMPORTS
@import "normalize";
@import "prefix-utilities";
@import "base";
@import "less-grid";
@import "utilities";

@import "header";
@import "footer";
@import "generic-page";
```

### The Grid
The grid is designed to have as flat a HTML structure as possible - the `.container` class is all you need around your columns.

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
.universal-class {
	...
}

/* xs is the base css, before media queries kick in */
.class-xs {
	...
}

@media (min-width: @sm) {
	/* this class applies to everything bigger than the @sm breakpoint, until it is overridden by the same class at a bigger breakpoint */
	.class-sm {
		...
	}
}
@media (min-width: @md) {
	/* this will override .class-sm */
	.class-md {
		...
	}
}
```
The standard breakpoints are as follows: 

+ **sm** : 576px
+ **md** : 768px
+ **lg** : 992px
+ **xl** : 1200px

#### Full Control: 
The grid is generated by .Less based on variables set in `styles.less`. This allows for quick, full control over the grid without having to even open `less-grid.less`.

The variables are as follows:

+ `@sm` : set breakpoint for 'small' media query
+ `@md` : set breakpoint for 'medium' media query
+ `@lg` : set breakpoint for 'large' media query
+ `@xl` : set breakpoint for 'extra large' media query
+ `@col-no` : set number of columns in grid
+ `@col-padding` : left and right padding of columns. Grid gutter is this * 2.
+ `@container` : max width of the container class
+ `@container-width-{breakpoint}` : set the max width of the container class at each breakpoint
+ `@container-fluid` : a percentage, the width of containers with the class `.fluid-width` 

#### Containers:

The class `.container` provides the flexbox wrapper for the columns.

**Utility classes for containers:**

+ `.cols-middle` - vertically centre align columns inside container
+ `.cols-start` - left align / flexbox start align columns
+ `.cols-end` - right align / flexbox end align columns
+ `.cols-center` - horizontally centre align columns
+ `.cols-sp-between` - arrange columns with equal space between (pushed right to edges of container)
+ `.cols-sp-around` - arrange columns with equal space around (including between edge of container and edge of column)
+ `.reverse-row` - reverse direction of columns from html structure

These classes can also be used at separate breakpoints, for example...

+ `.cols-middle-{breakpoint}` - vertically centre align columns when viewport is bigger than breakpoint, e.g. `.cols-middle-sm`
+ `.cols-start-{breakpoint}`
+ `.cols-end-{breakpoint}`
+ `.cols-center-{breakpoint}`
+ `.cols-sp-between-{breakpoint}`
+ `.cols-sp-around-{breakpoint}`
+ `.reverse-row-{breakpoint}`

**Width Utility classes for containers:**

+ `.full-width` - override max-width and make container full-width
+ `.full-width-{breakpoint}` - make container full-width from specific breakpoint, e.g. `.full-width-md`
+ `.container-width-{breakpoint}` - override full-width class from previous breakpoint and restrict container to max-width e.g. `.container-width-xl`

#### Columns:

The series of classes beginning with `.col-` provides the sizing wrappers for content.

**General Column Sizing:**

Column classes take the format `.col-{breakpoint}-{x}` where `{x}` goes from one to `@col-no` (default 12). This is the same format as Flexbox Grid & Bootstrap.

**Column Offsets:**

Like Flexbox Grid & Bootstrap, columns can be offset by `x` columns: `.col-{breakpoint}-offset-{x}`

**Auto Size Columns:**

The class `.col-{breakpoint}-auto` will size columns based on the number in the container. To set a minimum width on these columns (for example, to have four columns per row, but have the columns fill all available space if there are less than four) use the class `.col-{breakpoint}-min-{x}`

### Utility Classes

These classes can be used on any element, for breakpoint-specific controls.

+ `.fw-{breakpoint}` - sets width and max-width to 100%
+ `.text-left-{breakpoint}` - text align left 
+ `.text-right-{breakpoint}` - text align right
+ `.text-center-{breakpoint}` - text align center
+ `.visible-{breakpoint}` - display: block
+ `.hidden-{breakpoint}` - display: none

These classes are not breakpoint specific:

+ `.video-wrapper` - a wrapper to create responsive video embeds, with a loading gif background image. 
+ `.sr-only` - visually hidden, but can be read by screen-reader technology. Useful for labels on inputs with placeholder text, or image-based buttons. 

### Typeography

The html font size is set to 62.5% so that sizing can be set in REM based on 10px sizing - aka 1.5rem = 15px. 

Body font size is 16px on mobile and 18px above the small breakpoint.

All headings (h1-h6) have set sizes for consistency. They also have corresponding classes ( e.g. `.h1`), so that heading styles can be used while adhearding to proper document structure (e.g. two headings can have h1 styling, but only have one h1 on a page).

### Prefix Utilities

For best results, compiled css should be run through [Autoprefixer](https://autoprefixer.github.io/), but these utilities are used in the grid & should make things easier.

Contained in `prefix-utilities.less` -

If the value options are strings, there will be several classes with the following format: `.property-name_property-value`

e.g.: 
```
.justify-content_space-between { ... }
.justify-content_space-around { ... }
.justify-content_center { ... }
```

If the value is an integer (number), there will be one class which takes the integer as an argument.

e.g.:
```
.flex-grow(@x: 1) {
	-webkit-box-flex: @x;
	-ms-flex-positive: @x;
	flex-grow: @x;
}
```

These utility mixins should be used within .less stylesheets in order to cut down on the amount of typing necessary, not as classes on HTML objects.

e.g.:
```
.a-flex-container {
	.display_flex();
	.flex-wrap_wrap();
}
```
outputs:
```
.a-flex-container {
	display: -ms-flexbox;
	display: -webkit-box;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
}
```

####Utility mixins can also be used for easy consistency across a project.
For example, the `.transition()` mixin takes all of the potential transition properties as arguments, with defaults.
```
.transition(@property: all; @duration: @default-transition-time; @timing-function: linear; @delay: 0s) {
	-webkit-transition: @arguments;
	-o-transition: @arguments;
	transition: @arguments;
}
```
*(note that `@default-transition-time` is a variable set in `styles.less`)*
The transition mixin can now be used across a project, and if the default changes it only needs to be changed once.

e.g.:
```
.button {
	.transition();

	background-color: green;

	&:hover {
		background-color: blue;
	}
}
```
Outputs as:
```
.button {
	-webkit-transition: all 0.3s linear 0s;
	-o-transition: all 0.3s linear 0s;
	transition: all 0.3s linear 0s;

	background-color: green;
}
.button:hover {
	background-color: blue;
}
```

Any of the defaults can be overridden in the mixin call

e.g.: 
```
.button {
	.transition(@property: background-color);
	...
}

```
Outputs as:
```
.button {
	-webkit-transition: background-color 0.3s linear 0s;
	-o-transition: background-color 0.3s linear 0s;
	transition: background-color 0.3s linear 0s;

	...
}
```