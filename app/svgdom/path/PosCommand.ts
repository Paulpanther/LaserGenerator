import Command from './Command';
import { Vector2 } from 'three';

export default abstract class PosCommand extends Command {
    public constructor(public p: Vector2) {
        super();
    }

    protected getAttribs(): Array<number | Vector2> {
        return [this.p];
    }
}
