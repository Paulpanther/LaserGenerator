export default abstract class Element {

    public children: Element[] = [];

    public render(layer = 0): string {
        const tag = this.getTagName();
        const pre = "    ".repeat(layer);

        const attribs = this.getRenderedAttributes();
        const attachedAttribs: string[] = [];
        attribs.forEach((value, key) => {
            attachedAttribs.push(`${key}="${value}"`);
        });

        if (this.children.length !== 0) {
            const renderedStart = `${pre}<${tag} ${attachedAttribs.join(" ")}>\r\n`;
            const renderedChildren = this.children.map(child => child.render(layer + 1)).join("\r\n") + "\r\n";
            const renderedEnd = `${pre}</${tag}>`;
            return renderedStart + renderedChildren + renderedEnd;
        } else {
            return `${pre}<${tag} ${attachedAttribs.join(" ")}/>`;
        }
    }

    public abstract getRenderedAttributes(): Map<string, string>;
    public abstract getTagName(): string;
}
