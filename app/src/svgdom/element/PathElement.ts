import Element from "./Element";

export default class PathElement extends Element {

    public stroke = "none";
    public strokeWidth = 0;
    public fill = "none";
    public d = "";

    getRenderedAttributes(): Map<string, string> {
        return new Map([
            ["stroke", this.stroke],
            ["stroke-width", this.strokeWidth.toString()],
            ["fill", this.fill],
            ["d", this.d],
        ]);
    }

    getTagName(): string {
        return "path";
    }
}
