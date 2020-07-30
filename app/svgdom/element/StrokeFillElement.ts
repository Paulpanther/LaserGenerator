import Element from "./Element";

export interface Style {
    stroke: string;
    strokeWidth: number;
    fill: string;
}

export default abstract class StrokeFillElement extends Element {

    public static applyToAll(s: Style, ...ps: StrokeFillElement[]): void {
        for (const p of ps) {
            p.applyStyle(s);
        }
    }

    public stroke = "none";
    public strokeWidth = 0;
    public fill = "none";

    public applyStyle(s: Style): void {
        this.stroke = s.stroke;
        this.strokeWidth = s.strokeWidth;
        this.fill = s.fill;
    }

    getRenderedAttributes(): Map<string, string> {
        return new Map([
            ["stroke", this.stroke],
            ["stroke-width", this.strokeWidth.toString()],
            ["fill", this.fill],
        ]);
    }
}
