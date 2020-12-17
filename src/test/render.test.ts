import SVGCanvas from "../main/SVGCanvas";

describe('CanvasObjects are rendered as html', function() {
    it('renders a circle with a tag and attributes', function() {
        const canvas : SVGCanvas = new SVGCanvas("some-id");

        canvas.circle()
            .radius("3px")
            .x("4px")
            .y("6px");

        expect(canvas.render(true)).toBe("<svg><circle r=\"3px\" cx=\"4px\" cy=\"6px\"></circle></svg>");

        canvas.circle()
            .radius("6px")
            .position("5px", "9px")

        expect(canvas.render(true)).toBe("<svg><circle r=\"6px\" cx=\"5px\" cy=\"9px\"></circle></svg>");

        canvas.circle();
        
        expect(canvas.render(true)).toBe("<svg><circle r=\"0px\" cx=\"0px\" cy=\"0px\"></circle></svg>");
    });
});