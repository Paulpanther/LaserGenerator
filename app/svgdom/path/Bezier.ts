import Command from './Command';
import { Vector2 } from 'three';

export default class Bezier extends Command {
    public name = "c";

    public constructor(
        public c1: Vector2,
        public c2: Vector2,
        public end: Vector2,
    ) {
        super();
    }

    protected getAttribs(): Array<number | Vector2> {
        return [this.c1, this.c2, this.end];
    }
}
