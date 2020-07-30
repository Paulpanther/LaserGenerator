import Element from "./Element";

export default class SvgElement extends Element {

    public width = 0;
    public height = 0;
    private xmlns = "http://www.w3.org/2000/svg";

    public render(): string {
        const versionStr = '<?xml version="1.0" encoding="UTF-8" ?>\r\n';
        return versionStr + super.render() + "\r\n";
    }

    getRenderedAttributes(): Map<string, string> {
        return new Map([
            ["width", this.width.toString()],
            ["height", this.height.toString()],
            ["xmlns", this.xmlns]
        ]);
    }

    getTagName(): string {
        return "svg";
    }
}
