import Fill from "../../../../common-interfaces/Fill";
import Position from "../../../../common-interfaces/Position";
import Radius from "../../../../common-interfaces/Radius";
import Stroke from "../../../../common-interfaces/Stroke";

export default interface ArcInterface extends
    Fill<ArcInterface>,
    Position<ArcInterface>,
    Stroke<ArcInterface>,
    Radius<ArcInterface> {
        from(angle: number): ArcInterface;
        to(angle: number): ArcInterface;
        samples(sampleCount: number): ArcInterface;
}