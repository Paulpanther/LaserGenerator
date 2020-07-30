import Element from "./Element";
import StrokeFillElement from './StrokeFillElement';
import SvgUtil from '../SvgUtil';

export interface Style {
    stroke: string;
    strokeWidth: number;
    fill: string;
}

export default class PathElement extends StrokeFillElement {

    public stroke = "none";
    public strokeWidth = 0;
    public fill = "none";
    private _d = "";

    getRenderedAttributes(): Map<string, string> {
        return new Map([
            ["stroke", this.stroke],
            ["stroke-width", SvgUtil.asPt(this.strokeWidth)],
            ["fill", this.fill],
            ["d", this.d],
        ]);
    }

    getTagName(): string {
        return "path";
    }

    get d(): string {
        return this._d;
    }

    set d(v: string) {
        this._d = v;
    }
}
