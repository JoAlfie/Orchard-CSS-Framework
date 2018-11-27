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
```