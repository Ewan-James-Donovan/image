import SVGCanvas from "../main/SVGCanvas";

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
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%;\"><circle r=\"6px\" cx=\"5px\" cy=\"9px\" fill=\"red\" fill-opacity=\"50%\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\"></circle></svg>");
    });

    it('should not render if it has no attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.circle();
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%;\"></svg>");
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
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%;\"><rect width=\"100px\" height=\"75px\" x=\"5px\" y=\"9px\" fill=\"red\" fill-opacity=\"50%\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" rx=\"2px\" ry=\"2px\"></rect></svg>")
    });

    it('should not render if it has no attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.rectangle();
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%;\"></svg>");
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
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%;\"><line x1=\"5px\" x2=\"11px\" y1=\"2px\" y2=\"15px\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\"></line></svg>");
    });
    
    it('should not render if it has no attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.rectangle();
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%;\"></svg>");
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
            .strokeOpacity("70%");
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%;\"><path d=\"M 50 50L 50 50L 300 300L 590 590\" stroke=\"green\" stroke-width=\"2px\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\"></path></svg>")
    });
    
    it('should not render if it has no attributes', function () {
        const canvas: SVGCanvas = new SVGCanvas("some-id");
        canvas.rectangle();
        expect(canvas.render(true)).toBe("<svg style=\"width: 100%; height: 100%;\"></svg>");
    });

});