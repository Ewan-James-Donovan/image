# <b>SimpleSVG 0.1.5</b>

- TODO: Error handling, documentation, node / react port, katex mathematical typesetting feature.

<b>SimpleSVG</b> is used to simplify the dynamic creation of SVG elements inside an SVG tag on a web page while providing useful constructs for mathematical drawings. It currently facilitates the configuraton, drawing, animation, and styling of:
- TBD

## Table of Contents
1. [Getting Started](#Getting-Started)
2. [Canvas](#Canvas)
3. [Canvas Objects](#Canvas-Objects)
4. [Composite Canvas Objects](#Composite-Canvas-Objects)
5. [Foreign Canvas Objects](#Foreign-Canvas-Objects)
6. [Animation & Scenes](#Animation-&-Timed-Events)
7. [Mathematical Tools](#Mathematical-Tools)
8. [Acceptance Tests](#Acceptance-Tests)
9. [Frame Rate & Performance Tests](#Frame-Rate-&-Performance-Tests)

## Getting Started - TBD<a name="Getting-Started"></a>

To get started using SimpleSVG, download this repository and place the folder somewhere on your server.
After that, create a new javascript file and add the line below to it. This new file is which is where you'll configure your drawing.

```javascript
import SimpleSVG from "path/to/SimpleSVG.js";
```
Next, you need to include this new file as a module script on the page you desire to render drawings on.
Place the code below just before the closing body tag on your desired page.

```html
<script type="module" src="path/to/your/file.js"></script>
```
For each canvas you make, you will need to create and instance of the imported SimpleSVG class. In your javascript file, include the line below.
```javascript
let ssvg = new SimpleSVG();
```

Initialising a canvas is simple. First, create a div element in your desired HTML file and give it a unique id.

```html
<div id="unique-id"></div>
```

Now, in your javascript file, simply include the following line, swapping out width, height, unique-id, and cssColor appropriately. The colour can be changed to any valid CSS colour. Width and height must use valid CSS units.

```javascript
ssvg.createCanvas("unique-id", "width", "height", "cssColor");
```

## Canvas Objects - TBD<a name="Canvas-Objects"></a>

## Composite Canvas Objects - TBD<a name="Composite-Canvas-Objects"></a>

## Foreign Canvas Objects - TBD<a name="Foriegn-Canvas-Objects"></a>

## Animation & Scenes - TBD<a name="Animation-&-Scenes"></a>

## Mathematical Tools - TBD <a name="Mathematical-Tools"></a>

## Acceptance Tests - TBD <a name="Acceptance-Tests"></a>

## Frame Rate & Performance Tests - TBD <a name="Frame-Rate-&-Performance-Tests"></a>
SimpleSVG, similar to the 'react' framework, manipulates a virtual document object model (VDOM) which yeilds a significant performance increase compared to writing repeatedly to the DOM. For instance, in previous iterations of SimpleSVG, a scene with 300 canvas objects would need to make 300 costly DOM manipulations, leading to sub-30 frame rates, which is the minimum to meet acceptance criteria. With the new VDOM approach, 300 non-costly manipulations to the VDOM are needed and are followed by a single costly DOM manipulation, yeilding frame rates of 50 and above. Drawing performance is limited only by pure javascript capabilites and not by calls to the DOM.

`No tests as of version 0.1.5`
