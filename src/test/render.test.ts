import SVGCanvas from "../main/SVGCanvas";

describe('circle', function () {

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