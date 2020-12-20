import SVGCanvas from "../main/SVGCanvas";

describe('Background', function () {

    it('should render with a blue background', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        expect(canvas.background("blue").render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: blue;\"></svg>");
    });

});

describe('Circle', function () {

    it('should render with a tag and attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.circle()
            .radius("6px")
            .position("5px", "9px")
            .fill("red")
            .lineCap("square")
            .stroke("green")
            .strokeWidth("2px")
            .dash("1, 3, 5, 9")
            .fillOpacity("50%")
            .strokeOpacity("70%");
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><circle r=\"6px\" cx=\"5px\" cy=\"9px\" fill=\"red\" fill-opacity=\"50%\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\"></circle></svg>");
    });

    it('should not render if it has no attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.circle();
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});

describe('Rectangle', function () {

    it('should render with a tag and attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.rectangle()
            .position("5px", "9px")
            .dimensions("100px", "75px")
            .fill("red")
            .lineCap("square")
            .stroke("green")
            .strokeWidth("2px")
            .dash("1, 3, 5, 9")
            .fillOpacity("50%")
            .strokeOpacity("70%")
            .roundCorners("2px");
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><rect width=\"100px\" height=\"75px\" x=\"5px\" y=\"9px\" fill=\"red\" fill-opacity=\"50%\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" rx=\"2px\" ry=\"2px\"></rect></svg>")
    });

    it('should not render if it has no attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.rectangle();
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});

describe('Line', function () {

    it('should render with a tag and attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.line()
            .points("5px", "2px", "11px", "15px")
            .lineCap("square")
            .stroke("green")
            .strokeWidth("2px")
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%");
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><line x1=\"5px\" x2=\"11px\" y1=\"2px\" y2=\"15px\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\"></line></svg>");
    });
    
    it('should not render if it has no attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.line();
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});

describe('Path', function () {

    it('should render with a tag and attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.path()
            .points([
                [50, 50], 
                [300, 300], 
                [590, 590]
            ])
            .lineCap("square")
            .stroke("green")
            .strokeWidth("2px")
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("30%");
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><path d=\"M 50 50 L 50 50 L 300 300 L 590 590\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"30%\"></path></svg>")
    });
    
    it('should not render if it has no attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.path();
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});

describe('Polygons', function () {

    it('should all render with a tag and attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
            canvas.polygon()
            .sides(24)
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth("2px")
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");
        
        canvas.triangle()
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth("2px")
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");
        
        canvas.square()
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth("2px")
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");
        
        canvas.pentagon()
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth("2px")
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");
        
        canvas.hexagon()
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth("2px")
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");
        
        canvas.octagon()
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth("2px")
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");

        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 403.8670567945424 374.4639035015027 L 386.9130606358858 394.31448254773943 L 365.3990499739547 409.1006524188368 L 340.79116908177593 417.81476007338057 L 314.76640437570563 419.8629534754574 L 289.09830056250524 415.10565162951536 L 265.53609649849733 403.8670567945424 L 245.68551745226057 386.9130606358858 L 230.89934758116323 365.3990499739547 L 222.18523992661943 340.79116908177593 L 220.1370465245426 314.76640437570563 L 224.89434837048464 289.0983005625053 L 236.1329432054576 265.5360964984973 L 253.08693936411416 245.6855174522606 L 274.6009500260452 230.89934758116328 L 299.208830918224 222.18523992661943 L 325.23359562429437 220.1370465245426 L 350.9016994374947 224.89434837048464 L 374.46390350150267 236.1329432054576 L 394.31448254773943 253.0869393641142 L 409.1006524188368 274.6009500260453 L 417.81476007338057 299.208830918224 L 419.8629534754574 325.2335956242943 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 245.68551745226057 386.9130606358858 L 299.208830918224 222.18523992661943 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 289.09830056250524 415.10565162951536 L 224.89434837048464 289.0983005625053 L 350.9016994374947 224.89434837048464 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 320 420 L 224.89434837048464 350.90169943749476 L 261.2214747707527 239.09830056250527 L 378.7785252292473 239.09830056250524 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 340.79116908177593 417.81476007338057 L 245.68551745226057 386.9130606358858 L 224.89434837048464 289.0983005625053 L 299.208830918224 222.18523992661943 L 394.31448254773943 253.0869393641142 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 365.3990499739547 409.1006524188368 L 289.09830056250524 415.10565162951536 L 230.89934758116323 365.3990499739547 L 224.89434837048464 289.0983005625053 L 274.6009500260453 230.89934758116323 L 350.9016994374947 224.89434837048464 L 409.1006524188368 274.6009500260453 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path></svg>")
    });
    
    it('should not render if they have no attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.polygon();
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});