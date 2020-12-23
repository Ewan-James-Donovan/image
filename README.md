# svg-canvas

SVGCanvas is a TypeScript package used to simplify the drawing and animation of SVG elements on the web using fluent interfaces and 'frame-by-frame' animation.

## Getting started

### Install

- Open a terminal, cd to your project directory, and type the following command:
```
npm i svgcanvas
```
### Vanilla JavaScript


### React Typescript
1. Within your editor, open the react component you wish to create a new canvas inside.
2. Import SVGCanvas into this component:
```typescript
import "SVGCanvas" from "svgcanvas";
```
3. Inspect the JSX returned by your component's render function and add a unique css ID to the element you wish to use as a container for your canvas:
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
    const canvas = new SVGCanvas("someUniqueId");
}
```

5. Play! Be sure to check out the feature list and demo files. Below is an example of what is possible:
```typescript
componentDidMount() {

    const canvas: SVGCanvas = new SVGCanvas("test");

    canvas.animate({ r: 100, t: 0 }, (state: any) => {

        canvas.circle()
            .radius(String(Math.sin(state.r) * 100 + 100) + "px")
            .position("320px", "320px")
            .fill("green")
            .fillOpacity("20%");

        if (canvas.timeElapsedIsBetween(2000, 4000)) {
            canvas.arc()
                .from(state.t)
                .to(state.t * 3)
                .position(320, 320)
                .radius(200)
                .fillOpacity("0")
                .stroke("black")
                .strokeWidth("5px");
            state.t += 0.01;
        }

        state.r += 0.01;
        
    });

}
```
## Class Diagram
<img src="./docs/diagrams/classdiagram.svg">
<img src="./docs/diagrams/legend.svg">