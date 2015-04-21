# Sass FPO

Create CSS-Only placeholder images. I'm using the term "FPO" (For Placement Only) because "placeholder" is already a keyword in Sass and things would get confusing fast.

## Demo

[http://sassmeister.com/gist/14af5a6c73d723ad4715](http://sassmeister.com/gist/14af5a6c73d723ad4715)

## Installation

Via Bower:

```
bower install sass-fpo --save-dev
```

Or NPM:

```
npm install sass-fpo --save-dev
```

Make sure you add the installation directory (`bower_components` or `node_modules` by default, respectively) to your included paths in your sass config.

## Usage

Import sass-fpo into your stylesheet:

``` scss
@import "sass-fpo/sass/fpo.scss";
```

### Variables

#### $fpo-warn

Type: `Boolean`

If true, warns you at compile time that FPO elements are being used in the project. Defaults to `true`.

### Mixins

#### fpo($args)

Creates the FPO image. Takes one `Map` argument, that has four optional properties:

###### ratio

Type: `Number (Unitless)`

The size of the height, in relation to the width. For example, `1` will set the height equal to the width and `0.5` will set the height to 50% or the width. Defaults to `1`.

###### color

Type: `Color`

The background color of the FPO image. Defaults to a random color.

###### font

Type: `List`

The font property to use on the FPO text. Defaults to `bold 20px/1 sans-serif`.

###### text

Type: `String`

The text to display in the FPO image. Defaults to `'FPO'`.

## Requirements

This plug-in requires Ruby Sass >= 3.3 or LibSass >= 3.1. 