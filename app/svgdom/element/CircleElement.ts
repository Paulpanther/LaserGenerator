import Element from './Element';
import { Vector2 } from 'three';
import StrokeFillElement from './StrokeFillElement';

export default class CircleElement extends StrokeFillElement {

    public constructor(
        public center: Vector2,
        public radius: number,
    ) {
        super();
    }

    getRenderedAttributes(): Map<string, string> {
        const attribs = super.getRenderedAttributes();
        attribs.set("cx", this.center.x.toString());
        attribs.set("cy", this.center.y.toString());
        attribs.set("r", this.radius.toString());
        return attribs;
    }

    getTagName(): string {
        return "circle";
    }
}
