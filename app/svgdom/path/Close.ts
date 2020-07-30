import Command from './Command';
import { Vector2 } from 'three';

export default class Close extends Command {
    public name = "z";

    protected getAttribs(): Array<number | Vector2> {
        return [];
    }
}
