# <b>IMAGE 0.0.4</b>
## <b>I</b>nteractive <b>M</b>athematical <b>A</b>nimation <b>G</b>eneration <b>E</b>ngine

<b>IMAGE</b> is used to simplify the dynamic creation of SVG elements inside an SVG tag on a web page while providing useful constructs for mathematical drawings. It currently facilitates the configuraton, drawing, animation, and styling of:
- TBD
## Table of Contents
1. [Getting Started](#Getting-Started)
2. [Canvas Objects](#Canvas-Objects)
3. [Composite Canvas Objects](#Composite-Canvas-Objects)
4. [Foreign Canvas Objects](#Foreign-Canvas-Objects)
5. [Animation & Scenes](#Animation-&-Timed-Events)
6. [Mathematical Tools](#Mathematical-Tools)
7. [Frame Rate & Performance Tests](#Frame-Rate-&-Performance-Tests)

## Getting Started - TBD<a name="Getting-Started"></a>

## Canvas Objects - TBD<a name="Canvas-Objects"></a>

## Composite Canvas Objects - TBD<a name="Composite-Canvas-Objects"></a>

## Foreign Canvas Objects - TBD<a name="Foriegn-Canvas-Objects"></a>

## Animation & Scenes - TBD<a name="Animation-&-Scenes"></a>

## Mathematical Tools - TBD <a name="Mathematical-Tools"></a>

## Frame Rate & Performance Tests - TBD <a name="Frame-Rate-&-Performance-Tests"></a>
IMAGE, similar to the 'react' framework, manipulates a virtual document object model (VDOM) which yeilds a significant performance increase compared to writing repeatedly to the DOM. For instance, in previous iterations of IMAGE, a scene with 300 canvas objects would need to make 300 costly DOM manipulations, leading to sub-30 frame rates, which is the minimum to meet acceptance critera. With the new VDOM approach, 300 non-costly manipulations to the VDOM are needed and are followed by a single costly DOM manipulation, yeilding frame rates of 50 and above. Drawing performance is limited only by pure javascript capabilites and not by calls to the DOM.

`No tests as of version 0.0.2`
