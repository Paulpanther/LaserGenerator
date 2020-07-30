import PathElement from '../element/PathElement';
import { Vector2 } from 'three';

export default class Arc extends PathElement {

    public constructor(
        public center: Vector2,
        public start: Vector2,
        public end: Vector2,
        public radius: number,
        public flag: boolean,
    ) {
        super();
    }

    get d(): string {
        const start = this.center.clone().add(this.start);
        const end = this.center.clone().add(this.end);
        const flag = this.flag ? 1 : 0;
        return ["M", start.x, start.y, "A", this.radius, this.radius, 0, 0, flag, end.x, end.y].join(" ");
    }
}
