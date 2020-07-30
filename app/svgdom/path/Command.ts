import { Vector2 } from 'three';

export default abstract class Command {
    public abstract name: string;

    public isRelative = false;

    public getName(): string {
        return this.isRelative ? this.name.toLowerCase() : this.name.toUpperCase();
    }

    public render(): string {
        const attribs = this.getAttribs();

        if (attribs.length === 0) {
            return this.getName();
        }

        return this.getName() + " " + attribs.map(a => {
            if (typeof a === "number") {
                return a;
            } else if (a instanceof Vector2) {
                return a.x + " " + a.y;
            }
        }).join(" ");
    }

    protected abstract getAttribs(): Array<number | Vector2>;
}
