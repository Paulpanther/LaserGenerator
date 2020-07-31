import Element from "./Element";
import StrokeFillElement from './StrokeFillElement';

export default class SvgElement extends Element {

    public width = 0;
    public height = 0;
    private xmlns = "http://www.w3.org/2000/svg";

    public renderAsFile(): string {
        const versionStr = '<?xml version="1.0" encoding="UTF-8" ?>\r\n';
        return versionStr + this.render() + "\r\n";
    }

    getRenderedAttributes(): Map<string, string> {
        return new Map([
            ["width", this.width.toString()],
            ["height", this.height.toString()],
            ["viewBox", "0 0 " + this.width + "pt " + this.height + "pt"],
            ["xmlns", this.xmlns]
        ]);
    }

    getTagName(): string {
        return "svg";
    }

    public setMinStrokeWidthForAll(width: number, elem: Element = this) {
        if (elem instanceof StrokeFillElement) {
            elem.strokeWidth = Math.max(elem.strokeWidth, width);
        }
        for (const child of elem.children) {
            this.setMinStrokeWidthForAll(width, child);
        }
    }
}
