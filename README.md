# svg-canvas

SVGCanvas is a TypeScript package used to simplify the drawing and animation of SVG elements on the web using <a href="https://en.wikipedia.org/wiki/Fluent_interface">fluent interfaces</a> and 'frame-by-frame' animation.

  - [Getting started](#getting-started)
    - [Install](#install)
    - [React Typescript](#react-typescript)
    - [Vanilla JavaScript](#vanilla-javascript)
  - [Features](#features)
  - [Class Diagram](#class-diagram)
  
## Getting started

### Install

- Open a terminal, cd to your project directory, and type the following command:
```
npm i svgcanvas
```



### React Typescript
1. Within your editor, open the react component you wish to create a new canvas inside.
2. Import SVGCanvas into the component:
```typescript
import "SVGCanvas" from "svgcanvas";
```
3. Inspect / create the JSX returned by your component's render function and add a unique css ID to the element you wish to use as a container for your canvas:
```typescript
render() {
    return (
        <div>
            <h1>This is my drawing!:</h1>
            <div id="someUniqueId"></div>
        </div>
    )
}
```

4. Within your component's componentDidMount method (create it if it doesn't exist yet), instantiate a new SVGCanvas and provide the id you picked for your container element within the constructor:
```typescript
componentDidMount() {
    const sc = new SVGCanvas("someUniqueId");
}
```

5. Play! Be sure to check out the feature list and demo files. Below is a simple drawing without animation:
```typescript
componentDidMount() {
    const sc: SVGCanvas = new SVGCanvas("someUniqueId");

    sc.circle()
        .radius("200px")
        .position("320px", "320px")
        .fill("cyan")
        .lineCap("round")
        .stroke("magenta")
        .strokeWidth("10px")
        .dash("30,30,50,50")
        .fillOpacity("50%")
        .strokeOpacity("50%");

    sc.render();
}
```
. . . and one with animation:
```typescript
componentDidMount() {
    const sc: SVGCanvas = new SVGCanvas("someUniqueId");

    sc.animate({ r: 0 }, (state: any) => {
        sc.circle()
            .radius(`${state.r % 100}px`)
            .position("320px", "320px")
            .fill("cyan");
        state.r++;
    });
}
```
### Vanilla JavaScript
## Features
## Class Diagram
<img src="./docs/diagrams/classdiagram.svg">
<img src="./docs/diagrams/legend.svg">