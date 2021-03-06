(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var SVGBuilder_1 = require("./dom/SVGBuilder");
var Circle_1 = require("./canvas-object/subclasses/Circle");
var Rectangle_1 = require("./canvas-object/subclasses/Rectangle");
var Line_1 = require("./canvas-object/subclasses/Line");
var Path_1 = require("./canvas-object/subclasses/path/Path");
var Polygon_1 = require("./canvas-object/subclasses/path/subclasses/polygon/Polygon");
var Triangle_1 = require("./canvas-object/subclasses/path/subclasses/polygon/subclasses/Triangle");
var Square_1 = require("./canvas-object/subclasses/path/subclasses/polygon/subclasses/Square");
var Pentagon_1 = require("./canvas-object/subclasses/path/subclasses/polygon/subclasses/Pentagon");
var Hexagon_1 = require("./canvas-object/subclasses/path/subclasses/polygon/subclasses/Hexagon");
var Octagon_1 = require("./canvas-object/subclasses/path/subclasses/polygon/subclasses/Octagon");
var SVGCanvas = /** @class */ (function () {
    function SVGCanvas(containerElementId) {
        this.registry = new Array();
        this.containerElementId = containerElementId;
    }
    SVGCanvas.prototype.register = function (canvasObject) {
        this.registry.push(canvasObject);
        return canvasObject;
    };
    SVGCanvas.prototype.render = function (testMode) {
        if (testMode === void 0) { testMode = false; }
        var html = SVGBuilder_1["default"].buildFromRegistry(this.registry, this.backgroundColor ? this.backgroundColor : "rgba(0,0,0,0)");
        if (!testMode) {
            try {
                document.getElementById(this.containerElementId).innerHTML = html;
            }
            catch (_a) {
                console.warn("Element not found.");
            }
        }
        this.registry = new Array();
        return html;
    };
    SVGCanvas.prototype.background = function (backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    };
    // @Override
    SVGCanvas.prototype.circle = function () {
        return this.register(new Circle_1["default"]());
    };
    // @Override
    SVGCanvas.prototype.rectangle = function () {
        return this.register(new Rectangle_1["default"]());
    };
    // @Override
    SVGCanvas.prototype.line = function () {
        return this.register(new Line_1["default"]());
    };
    // @Override
    SVGCanvas.prototype.path = function () {
        return this.register(new Path_1["default"]());
    };
    // @Override
    SVGCanvas.prototype.polygon = function () {
        return this.register(new Polygon_1["default"]());
    };
    // @Override
    SVGCanvas.prototype.triangle = function () {
        return this.register(new Triangle_1["default"]());
    };
    // @Override
    SVGCanvas.prototype.square = function () {
        return this.register(new Square_1["default"]());
    };
    // @Override
    SVGCanvas.prototype.pentagon = function () {
        return this.register(new Pentagon_1["default"]());
    };
    // @Override
    SVGCanvas.prototype.hexagon = function () {
        return this.register(new Hexagon_1["default"]());
    };
    // @Override
    SVGCanvas.prototype.octagon = function () {
        return this.register(new Octagon_1["default"]());
    };
    return SVGCanvas;
}());
exports["default"] = SVGCanvas;

},{"./canvas-object/subclasses/Circle":3,"./canvas-object/subclasses/Line":4,"./canvas-object/subclasses/Rectangle":5,"./canvas-object/subclasses/path/Path":6,"./canvas-object/subclasses/path/subclasses/polygon/Polygon":7,"./canvas-object/subclasses/path/subclasses/polygon/subclasses/Hexagon":8,"./canvas-object/subclasses/path/subclasses/polygon/subclasses/Octagon":9,"./canvas-object/subclasses/path/subclasses/polygon/subclasses/Pentagon":10,"./canvas-object/subclasses/path/subclasses/polygon/subclasses/Square":11,"./canvas-object/subclasses/path/subclasses/polygon/subclasses/Triangle":12,"./dom/SVGBuilder":14}],2:[function(require,module,exports){
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var CanvasObject = /** @class */ (function () {
    function CanvasObject() {
        this.tags = new Array();
    }
    CanvasObject.prototype.addTag = function (tag) {
        this.tags.push(tag);
    };
    CanvasObject.prototype.getTags = function () {
        return __spreadArrays(this.tags);
    };
    return CanvasObject;
}());
exports["default"] = CanvasObject;

},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Tag_1 = require("../../dom/Tag");
var Attribute_1 = require("../../dom/Attribute");
var CanvasObject_1 = require("../CanvasObject");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @Override
    Circle.prototype.prepareForBuild = function () {
        this.addTag(new Tag_1["default"]("circle")
            .addAttribute(new Attribute_1["default"]("r", this.radiusValue))
            .addAttribute(new Attribute_1["default"]("cx", this.xValue))
            .addAttribute(new Attribute_1["default"]("cy", this.yValue))
            .addAttribute(new Attribute_1["default"]("fill", this.fillValue))
            .addAttribute(new Attribute_1["default"]("fill-opacity", this.fillOpacityValue))
            .addAttribute(new Attribute_1["default"]("stroke", this.strokeColor))
            .addAttribute(new Attribute_1["default"]("stroke-width", this.strokeWidthValue))
            .addAttribute(new Attribute_1["default"]("stroke-linecap", this.lineCapType))
            .addAttribute(new Attribute_1["default"]("stroke-dasharray", this.dashArray))
            .addAttribute(new Attribute_1["default"]("stroke-opacity", this.strokeOpacityValue)));
    };
    // @Override
    Circle.prototype.radius = function (radiusValue) {
        this.radiusValue = radiusValue;
        return this;
    };
    // @Override
    Circle.prototype.x = function (x) {
        this.xValue = x;
        return this;
    };
    // @Override
    Circle.prototype.y = function (y) {
        this.yValue = y;
        return this;
    };
    // @Override
    Circle.prototype.position = function (x, y) {
        this.x(x);
        this.y(y);
        return this;
    };
    // @Override
    Circle.prototype.fill = function (fillValue) {
        this.fillValue = fillValue;
        return this;
    };
    // @Override
    Circle.prototype.fillOpacity = function (fillOpacityValue) {
        this.fillOpacityValue = fillOpacityValue;
        return this;
    };
    ;
    // @Override
    Circle.prototype.stroke = function (strokeColor) {
        this.strokeColor = strokeColor;
        return this;
    };
    // @Override
    Circle.prototype.strokeWidth = function (strokeWidthValue) {
        this.strokeWidthValue = strokeWidthValue;
        return this;
    };
    ;
    // @Override
    Circle.prototype.lineCap = function (lineCapType) {
        this.lineCapType = lineCapType;
        return this;
    };
    ;
    // @Override
    Circle.prototype.dash = function (dashArray) {
        this.dashArray = dashArray;
        return this;
    };
    ;
    // @Override
    Circle.prototype.strokeOpacity = function (strokeOpacityValue) {
        this.strokeOpacityValue = strokeOpacityValue;
        return this;
    };
    ;
    return Circle;
}(CanvasObject_1["default"]));
exports["default"] = Circle;

},{"../../dom/Attribute":13,"../../dom/Tag":15,"../CanvasObject":2}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Tag_1 = require("../../dom/Tag");
var Attribute_1 = require("../../dom/Attribute");
var CanvasObject_1 = require("../CanvasObject");
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @Override
    Line.prototype.prepareForBuild = function () {
        this.addTag(new Tag_1["default"]("line")
            .addAttribute(new Attribute_1["default"]("x1", this.x1Value))
            .addAttribute(new Attribute_1["default"]("x2", this.x2Value))
            .addAttribute(new Attribute_1["default"]("y1", this.y1Value))
            .addAttribute(new Attribute_1["default"]("y2", this.y2Value))
            .addAttribute(new Attribute_1["default"]("stroke", this.strokeColor))
            .addAttribute(new Attribute_1["default"]("stroke-width", this.strokeWidthValue))
            .addAttribute(new Attribute_1["default"]("stroke-linecap", this.lineCapType))
            .addAttribute(new Attribute_1["default"]("stroke-dasharray", this.dashArray))
            .addAttribute(new Attribute_1["default"]("stroke-opacity", this.strokeOpacityValue)));
    };
    Line.prototype.x1 = function (x1Value) {
        this.x1Value = x1Value;
        return this;
    };
    Line.prototype.x2 = function (x2Value) {
        this.x2Value = x2Value;
        return this;
    };
    Line.prototype.y1 = function (y1Value) {
        this.y1Value = y1Value;
        return this;
    };
    Line.prototype.y2 = function (y2Value) {
        this.y2Value = y2Value;
        return this;
    };
    Line.prototype.point1 = function (x1Value, y1Value) {
        this.x1(x1Value);
        this.y1(y1Value);
        return this;
    };
    Line.prototype.point2 = function (x2Value, y2Value) {
        this.x2(x2Value);
        this.y2(y2Value);
        return this;
    };
    Line.prototype.points = function (x1Value, y1Value, x2Value, y2Value) {
        this.point1(x1Value, y1Value);
        this.point2(x2Value, y2Value);
        return this;
    };
    // @Override
    Line.prototype.stroke = function (strokeColor) {
        this.strokeColor = strokeColor;
        return this;
    };
    // @Override
    Line.prototype.strokeWidth = function (strokeWidthValue) {
        this.strokeWidthValue = strokeWidthValue;
        return this;
    };
    ;
    // @Override
    Line.prototype.lineCap = function (lineCapType) {
        this.lineCapType = lineCapType;
        return this;
    };
    ;
    // @Override
    Line.prototype.dash = function (dashArray) {
        this.dashArray = dashArray;
        return this;
    };
    ;
    // @Override
    Line.prototype.strokeOpacity = function (strokeOpacityValue) {
        this.strokeOpacityValue = strokeOpacityValue;
        return this;
    };
    ;
    return Line;
}(CanvasObject_1["default"]));
exports["default"] = Line;

},{"../../dom/Attribute":13,"../../dom/Tag":15,"../CanvasObject":2}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Tag_1 = require("../../dom/Tag");
var Attribute_1 = require("../../dom/Attribute");
var CanvasObject_1 = require("../CanvasObject");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @Override
    Rectangle.prototype.prepareForBuild = function () {
        this.addTag(new Tag_1["default"]("rect")
            .addAttribute(new Attribute_1["default"]("width", this.widthValue))
            .addAttribute(new Attribute_1["default"]("height", this.heightValue))
            .addAttribute(new Attribute_1["default"]("x", this.xValue))
            .addAttribute(new Attribute_1["default"]("y", this.yValue))
            .addAttribute(new Attribute_1["default"]("fill", this.fillValue))
            .addAttribute(new Attribute_1["default"]("fill-opacity", this.fillOpacityValue))
            .addAttribute(new Attribute_1["default"]("stroke", this.strokeColor))
            .addAttribute(new Attribute_1["default"]("stroke-width", this.strokeWidthValue))
            .addAttribute(new Attribute_1["default"]("stroke-linecap", this.lineCapType))
            .addAttribute(new Attribute_1["default"]("stroke-dasharray", this.dashArray))
            .addAttribute(new Attribute_1["default"]("stroke-opacity", this.strokeOpacityValue))
            .addAttribute(new Attribute_1["default"]("rx", this.cornerRadius))
            .addAttribute(new Attribute_1["default"]("ry", this.cornerRadius)));
    };
    Rectangle.prototype.roundCorners = function (cornerRadius) {
        this.cornerRadius = cornerRadius;
        return this;
    };
    // @Override
    Rectangle.prototype.width = function (widthValue) {
        this.widthValue = widthValue;
        return this;
    };
    ;
    // @Override
    Rectangle.prototype.height = function (heightValue) {
        this.heightValue = heightValue;
        return this;
    };
    ;
    // @Override
    Rectangle.prototype.dimensions = function (widthValue, heightValue) {
        this.width(widthValue);
        this.height(heightValue);
        return this;
    };
    ;
    // @Override
    Rectangle.prototype.x = function (x) {
        this.xValue = x;
        return this;
    };
    // @Override
    Rectangle.prototype.y = function (y) {
        this.yValue = y;
        return this;
    };
    // @Override
    Rectangle.prototype.position = function (x, y) {
        this.x(x);
        this.y(y);
        return this;
    };
    // @Override
    Rectangle.prototype.fill = function (fillValue) {
        this.fillValue = fillValue;
        return this;
    };
    // @Override
    Rectangle.prototype.fillOpacity = function (fillOpacityValue) {
        this.fillOpacityValue = fillOpacityValue;
        return this;
    };
    ;
    // @Override
    Rectangle.prototype.stroke = function (strokeColor) {
        this.strokeColor = strokeColor;
        return this;
    };
    // @Override
    Rectangle.prototype.strokeWidth = function (strokeWidthValue) {
        this.strokeWidthValue = strokeWidthValue;
        return this;
    };
    ;
    // @Override
    Rectangle.prototype.lineCap = function (lineCapType) {
        this.lineCapType = lineCapType;
        return this;
    };
    ;
    // @Override
    Rectangle.prototype.dash = function (dashArray) {
        this.dashArray = dashArray;
        return this;
    };
    ;
    // @Override
    Rectangle.prototype.strokeOpacity = function (strokeOpacityValue) {
        this.strokeOpacityValue = strokeOpacityValue;
        return this;
    };
    ;
    return Rectangle;
}(CanvasObject_1["default"]));
exports["default"] = Rectangle;

},{"../../dom/Attribute":13,"../../dom/Tag":15,"../CanvasObject":2}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Tag_1 = require("../../../dom/Tag");
var Attribute_1 = require("../../../dom/Attribute");
var CanvasObject_1 = require("../../CanvasObject");
var Path = /** @class */ (function (_super) {
    __extends(Path, _super);
    function Path() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @Override
    Path.prototype.prepareForBuild = function () {
        this.addTag(new Tag_1["default"]("path")
            .addAttribute(new Attribute_1["default"]("d", this.pathString))
            .addAttribute(new Attribute_1["default"]("stroke", this.strokeColor))
            .addAttribute(new Attribute_1["default"]("stroke-width", this.strokeWidthValue))
            .addAttribute(new Attribute_1["default"]("stroke-linecap", this.lineCapType))
            .addAttribute(new Attribute_1["default"]("stroke-dasharray", this.dashArray))
            .addAttribute(new Attribute_1["default"]("stroke-opacity", this.strokeOpacityValue))
            .addAttribute(new Attribute_1["default"]("fill", this.fillValue))
            .addAttribute(new Attribute_1["default"]("fill-opacity", this.fillOpacityValue)));
    };
    Path.prototype.points = function (nestedPointArray) {
        this.pathString = "M ";
        var firstElement = true;
        for (var _i = 0, nestedPointArray_1 = nestedPointArray; _i < nestedPointArray_1.length; _i++) {
            var pointArray = nestedPointArray_1[_i];
            if (firstElement) {
                this.pathString += +pointArray[0].toString() + " " + pointArray[1].toString();
                firstElement = false;
            }
            this.pathString += " L " + pointArray[0].toString() + " " + pointArray[1].toString();
        }
        return this;
    };
    // @Override
    Path.prototype.fill = function (fillValue) {
        this.fillValue = fillValue;
        return this;
    };
    // @Override
    Path.prototype.fillOpacity = function (fillOpacityValue) {
        this.fillOpacityValue = fillOpacityValue;
        return this;
    };
    ;
    // @Override
    Path.prototype.stroke = function (strokeColor) {
        this.strokeColor = strokeColor;
        return this;
    };
    // @Override
    Path.prototype.strokeWidth = function (strokeWidthValue) {
        this.strokeWidthValue = strokeWidthValue;
        return this;
    };
    ;
    // @Override
    Path.prototype.lineCap = function (lineCapType) {
        this.lineCapType = lineCapType;
        return this;
    };
    ;
    // @Override
    Path.prototype.dash = function (dashArray) {
        this.dashArray = dashArray;
        return this;
    };
    ;
    // @Override
    Path.prototype.strokeOpacity = function (strokeOpacityValue) {
        this.strokeOpacityValue = strokeOpacityValue;
        return this;
    };
    ;
    return Path;
}(CanvasObject_1["default"]));
exports["default"] = Path;

},{"../../../dom/Attribute":13,"../../../dom/Tag":15,"../../CanvasObject":2}],7:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Attribute_1 = require("../../../../../dom/Attribute");
var Tag_1 = require("../../../../../dom/Tag");
var Path_1 = require("../../Path");
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        var _this = _super.call(this) || this;
        _this.points = undefined;
        return _this;
    }
    // @Override
    Polygon.prototype.prepareForBuild = function () {
        this.calculatePoints();
        var pathString;
        if (this.nestedPointArray.length) {
            pathString = "M ";
            var firstElement = true;
            for (var _i = 0, _a = this.nestedPointArray; _i < _a.length; _i++) {
                var pointArray = _a[_i];
                if (firstElement) {
                    pathString += +pointArray[0].toString() + " " + pointArray[1].toString();
                    firstElement = false;
                }
                pathString += " L " + pointArray[0].toString() + " " + pointArray[1].toString();
            }
        }
        this.addTag(new Tag_1["default"]("path")
            .addAttribute(new Attribute_1["default"]("d", pathString == "M " ? null : pathString))
            .addAttribute(new Attribute_1["default"]("stroke", this.strokeColor))
            .addAttribute(new Attribute_1["default"]("stroke-width", this.strokeWidthValue))
            .addAttribute(new Attribute_1["default"]("stroke-linecap", this.lineCapType))
            .addAttribute(new Attribute_1["default"]("stroke-dasharray", this.dashArray))
            .addAttribute(new Attribute_1["default"]("stroke-opacity", this.strokeOpacityValue))
            .addAttribute(new Attribute_1["default"]("fill", this.fillValue))
            .addAttribute(new Attribute_1["default"]("fill-opacity", this.fillOpacityValue)));
    };
    Polygon.prototype.calculatePoints = function () {
        this.nestedPointArray = new Array();
        for (var i = 0; i <= this.numberOfSides; i++) {
            this.nestedPointArray.push([
                this.radiusValue * Math.cos((i * 2 * Math.PI) / this.numberOfSides + this.radiansToRotate) + this.xValue,
                this.radiusValue * Math.sin((i * 2 * Math.PI) / this.numberOfSides + this.radiansToRotate) + this.yValue
            ]);
        }
    };
    // @Override
    Polygon.prototype.rotate = function (radiansToRotate) {
        this.radiansToRotate = radiansToRotate;
        return this;
    };
    // @Override
    Polygon.prototype.sides = function (numberOfSides) {
        this.numberOfSides = Math.round(numberOfSides);
        return this;
    };
    // @Override
    Polygon.prototype.radius = function (radiusValue) {
        this.radiusValue = radiusValue;
        return this;
    };
    // @Override
    Polygon.prototype.x = function (x) {
        this.xValue = x;
        return this;
    };
    // @Override
    Polygon.prototype.y = function (y) {
        this.yValue = y;
        return this;
    };
    // @Override
    Polygon.prototype.position = function (x, y) {
        this.x(x);
        this.y(y);
        return this;
    };
    return Polygon;
}(Path_1["default"]));
exports["default"] = Polygon;

},{"../../../../../dom/Attribute":13,"../../../../../dom/Tag":15,"../../Path":6}],8:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Polygon_1 = require("../Polygon");
var Hexagon = /** @class */ (function (_super) {
    __extends(Hexagon, _super);
    function Hexagon() {
        var _this = _super.call(this) || this;
        _this.sides(6);
        _this.sides = undefined;
        return _this;
    }
    return Hexagon;
}(Polygon_1["default"]));
exports["default"] = Hexagon;

},{"../Polygon":7}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Polygon_1 = require("../Polygon");
var Octagon = /** @class */ (function (_super) {
    __extends(Octagon, _super);
    function Octagon() {
        var _this = _super.call(this) || this;
        _this.sides(8);
        _this.sides = undefined;
        return _this;
    }
    return Octagon;
}(Polygon_1["default"]));
exports["default"] = Octagon;

},{"../Polygon":7}],10:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Polygon_1 = require("../Polygon");
var Pentagon = /** @class */ (function (_super) {
    __extends(Pentagon, _super);
    function Pentagon() {
        var _this = _super.call(this) || this;
        _this.sides(5);
        _this.sides = undefined;
        return _this;
    }
    return Pentagon;
}(Polygon_1["default"]));
exports["default"] = Pentagon;

},{"../Polygon":7}],11:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Polygon_1 = require("../Polygon");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super.call(this) || this;
        _this.sides(4);
        _this.sides = undefined;
        return _this;
    }
    return Square;
}(Polygon_1["default"]));
exports["default"] = Square;

},{"../Polygon":7}],12:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Polygon_1 = require("../Polygon");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super.call(this) || this;
        _this.sides(3);
        _this.sides = undefined;
        return _this;
    }
    return Triangle;
}(Polygon_1["default"]));
exports["default"] = Triangle;

},{"../Polygon":7}],13:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Attribute = /** @class */ (function () {
    function Attribute(key, value) {
        this.key = key;
        this.value = value;
    }
    Attribute.prototype.getKey = function () {
        return "" + this.key;
    };
    Attribute.prototype.getValue = function () {
        return "" + this.value;
    };
    return Attribute;
}());
exports["default"] = Attribute;

},{}],14:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var SVGBuilder = /** @class */ (function () {
    function SVGBuilder() {
    }
    SVGBuilder.buildFromRegistry = function (registry, backgroundColor) {
        var html = "<svg style=\"width: 100%; height: 100%; background-color: " + backgroundColor + ";\">";
        registry.forEach(function (canvasObject) {
            canvasObject.prepareForBuild();
            var canvasObjectString = "";
            canvasObject.getTags().forEach(function (tag) {
                if (tag.isVisible()) {
                    canvasObjectString += "<" + tag.getTagName();
                    tag.getAttributes().forEach(function (attribute) {
                        canvasObjectString += " " + attribute.getKey() + "=\"" + attribute.getValue() + "\"";
                    });
                    canvasObjectString += "></" + tag.getTagName() + ">";
                }
            });
            html += canvasObjectString;
        });
        return html + "</svg>";
    };
    return SVGBuilder;
}());
exports["default"] = SVGBuilder;

},{}],15:[function(require,module,exports){
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Tag = /** @class */ (function () {
    function Tag(tagName) {
        this.attributes = new Array();
        this.tagName = tagName;
    }
    Tag.prototype.addAttribute = function (attribute) {
        if (attribute.getValue() != "undefined") {
            this.attributes.push(attribute);
        }
        return this;
    };
    Tag.prototype.isVisible = function () {
        return this.attributes.length != 0;
    };
    Tag.prototype.getAttributes = function () {
        return __spreadArrays(this.attributes);
    };
    Tag.prototype.getTagName = function () {
        return "" + this.tagName;
    };
    return Tag;
}());
exports["default"] = Tag;

},{}],16:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var SVGCanvas_1 = require("../../../main/SVGCanvas");
var canvas = new SVGCanvas_1["default"]("test");
canvas.rectangle()
    .dimensions("100px", "70px")
    .position("270px", "285px")
    .fill("green");
canvas.rectangle()
    .dimensions("100px", "70px")
    .position("320px", "320px")
    .fill("cyan")
    .lineCap("round")
    .stroke("magenta")
    .strokeWidth("10px")
    .dash("30,30,50,50")
    .fillOpacity("50%")
    .strokeOpacity("50%")
    .roundCorners("20px");
canvas.render();

},{"../../../main/SVGCanvas":1}]},{},[16]);
