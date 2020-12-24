import SVGCanvas from "../main/SVGCanvas";

describe('Background', function () {

    it('should render with a blue background', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        expect(sc.background("blue").render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: blue;\"></svg>");
    });

    it('should render as transparent if no colour is specified', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });


});

describe('Circle', function () {

    it('should render with a tag and attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.circle()
            .radius(5)
            .position(5, 5)
            .fill("red")
            .lineCap("square")
            .stroke("green")
            .strokeWidth(5)
            .dash("1, 3, 5, 9")
            .fillOpacity("50%")
            .strokeOpacity("70%");
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><circle r=\"5\" cx=\"5\" cy=\"5\" fill=\"red\" fill-opacity=\"50%\" stroke=\"green\" stroke-width=\"5\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\"></circle></svg>");
    });

    it('should not render if it has no attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.circle();
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});

describe('Rectangle', function () {

    it('should render with a tag and attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.rectangle()
            .position(5, 5)
            .dimensions(231, 14)
            .fill("red")
            .lineCap("square")
            .stroke("green")
            .strokeWidth(5)
            .dash("1, 3, 5, 9")
            .fillOpacity("50%")
            .strokeOpacity("70%")
            .roundCorners(5);
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><rect width=\"231\" height=\"14\" x=\"5\" y=\"5\" fill=\"red\" fill-opacity=\"50%\" stroke=\"green\" stroke-width=\"5\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" rx=\"5\" ry=\"5\"></rect></svg>");
    });

    it('should not render if it has no attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.rectangle();
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});

describe('Line', function () {

    it('should render with a tag and attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.line()
            .points(5, 5, 14, 14)
            .lineCap("square")
            .stroke("green")
            .strokeWidth(5)
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%");
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><line x1=\"5\" x2=\"14\" y1=\"5\" y2=\"14\" stroke=\"green\" stroke-width=\"5\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\"></line></svg>");
    });

    it('should not render if it has no attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.line();
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});

describe('Path', function () {

    it('should render with a tag and attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.path()
            .points([
                [50, 50],
                [300, 300],
                [590, 590]
            ])
            .lineCap("square")
            .stroke("green")
            .strokeWidth(5)
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("30%");
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><path d=\"M 50 50 L 50 50 L 300 300 L 590 590\" stroke=\"green\" stroke-width=\"5\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"30%\"></path></svg>");
    });

    it('should not render if it has no attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.path();
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});

describe('Polygons', function () {

    it('should all render with a tag and attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.polygon()
            .sides(24)
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth(5)
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");

        sc.triangle()
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth(5)
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");

        sc.square()
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth(5)
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");

        sc.pentagon()
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth(5)
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");

        sc.hexagon()
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth(5)
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");

        sc.octagon()
            .position(320, 320)
            .radius(100)
            .rotate((2 * Math.PI) / 20)
            .lineCap("square")
            .stroke("green")
            .strokeWidth(5)
            .dash("1, 3, 5, 9")
            .strokeOpacity("70%")
            .fill("lime")
            .fillOpacity("1%");

        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 403.8670567945424 374.4639035015027 L 386.9130606358858 394.31448254773943 L 365.3990499739547 409.1006524188368 L 340.79116908177593 417.81476007338057 L 314.76640437570563 419.8629534754574 L 289.09830056250524 415.10565162951536 L 265.53609649849733 403.8670567945424 L 245.68551745226057 386.9130606358858 L 230.89934758116323 365.3990499739547 L 222.18523992661943 340.79116908177593 L 220.1370465245426 314.76640437570563 L 224.89434837048464 289.0983005625053 L 236.1329432054576 265.5360964984973 L 253.08693936411416 245.6855174522606 L 274.6009500260452 230.89934758116328 L 299.208830918224 222.18523992661943 L 325.23359562429437 220.1370465245426 L 350.9016994374947 224.89434837048464 L 374.46390350150267 236.1329432054576 L 394.31448254773943 253.0869393641142 L 409.1006524188368 274.6009500260453 L 417.81476007338057 299.208830918224 L 419.8629534754574 325.2335956242943 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"5\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 245.68551745226057 386.9130606358858 L 299.208830918224 222.18523992661943 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"5\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 289.09830056250524 415.10565162951536 L 224.89434837048464 289.0983005625053 L 350.9016994374947 224.89434837048464 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"5\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 320 420 L 224.89434837048464 350.90169943749476 L 261.2214747707527 239.09830056250527 L 378.7785252292473 239.09830056250524 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"5\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 340.79116908177593 417.81476007338057 L 245.68551745226057 386.9130606358858 L 224.89434837048464 289.0983005625053 L 299.208830918224 222.18523992661943 L 394.31448254773943 253.0869393641142 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"5\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path><path d=\"M 415.10565162951536 350.90169943749476 L 415.10565162951536 350.90169943749476 L 365.3990499739547 409.1006524188368 L 289.09830056250524 415.10565162951536 L 230.89934758116323 365.3990499739547 L 224.89434837048464 289.0983005625053 L 274.6009500260453 230.89934758116323 L 350.9016994374947 224.89434837048464 L 409.1006524188368 274.6009500260453 L 415.10565162951536 350.9016994374947\" stroke=\"green\" stroke-width=\"5\" stroke-linecap=\"square\" stroke-dasharray=\"1, 3, 5, 9\" stroke-opacity=\"70%\" fill=\"lime\" fill-opacity=\"1%\"></path></svg>");
    });

    it('should not render if they have no attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.polygon();
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});

describe('Arc', function () {

    it('should render with a tag and attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.arc()
            .from(0)
            .to(2)
            .position(320, 320)
            .radius(200)
            .fillOpacity("0")
            .stroke("black")
            .strokeWidth(5)
            .samples(50);
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><path d=\"M 520 320 L 520 320 L 519.8400213321956 327.99786683732685 L 519.3603412605239 335.98293879383453 L 518.5617271707732 343.94244145778384 L 517.4454566751253 351.8636413228492 L 516.0133155682483 359.7338661590122 L 514.267594970406 367.5405252854269 L 512.2110876621541 375.27112971282276 L 509.84708361648813 382.91331212322353 L 507.179364735587 390.454846655018 L 504.212198800577 397.8836684617301 L 500.9503326439927 405.1878930131999 L 497.3989845558568 412.35583510829656 L 493.56383593552994 419.37602756874736 L 489.45102220268325 426.2372395841767 L 485.06712298193565 432.9284946790071 L 480.41915157685855 439.43908827247844 L 475.51454375018557 445.75860480369374 L 470.361145828179 451.8769343942946 L 464.96720214818106 457.7842890221103 L 459.3413418694331 463.47121817990455 L 453.49256516826165 468.92862399417186 L 447.43022883971605 474.14777577979385 L 441.16403132869254 479.1203240072732 L 434.7039972144913 483.8383136601997 L 428.06046117362797 488.2941969615793 L 421.24405144655566 492.48084544866765 L 414.265672834748 496.3915613769895 L 407.13648925534244 500.020088435301 L 399.8679058812546 503.36062175435336 L 392.47155089533476 506.4078171934452 L 384.95925688775526 509.1567998899078 L 377.3430419263911 511.603172057845 L 369.63509033047455 513.7430200236531 L 361.8477331782839 515.5729204870632 L 353.9934285800482 517.089945997692 L 346.0847417476291 518.2916696383372 L 338.1343248928619 519.176168907528 L 330.1548969867158 519.7420287951165 L 322.1592234116535 519.9883440459932 L 314.16009553974226 519.914720608301 L 306.1703102691876 519.5212762638347 L 298.2026495520258 518.8086404396151 L 290.26985994572726 517.7779532009403 L 282.384632221424 516.4308634275237 L 274.5595810613826 514.769526175639 L 266.8072248782039 512.7965992304896 L 259.13996578803335 510.5152388543191 L 251.57006976982035 507.929094737065 L 244.1096470423691 505.0423041576337 L 236.77063269057152 501.8594853651364\" stroke=\"black\" stroke-width=\"5\" fill-opacity=\"0\"></path></svg>");
    });

    it('should not render if it has no attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.arc();
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});

describe('Text', function () {

    it('should render with a tag, attributes, and content', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.text()
            .string("testing")
            .position(231, 231)
            .fill("blue")
            .fillOpacity("50")
            .stroke("black")
            .strokeWidth(5)
            .lineCap("round")
            .dash("3 4 5")
            .strokeOpacity("50%")
            .font("consolas")
            .size("20pt");
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"><text x=\"231\" y=\"231\" fill=\"blue\" fill-opacity=\"50\" stroke=\"black\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-dasharray=\"3 4 5\" stroke-opacity=\"50%\" font-family=\"consolas\" font-size=\"20pt\">testing</text></svg>");
    });

    it('should not render if it has no attributes', function () {
        const sc: SVGCanvas = new SVGCanvas("some-id");
        sc.arc();
        expect(sc.render(true)).toBe("<svg style=\"width: 100%; height: 100%; background-color: rgba(0,0,0,0);\"></svg>");
    });

});