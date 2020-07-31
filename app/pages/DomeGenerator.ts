import SvgElement from '../svgdom/element/SvgElement';
import { Vector2 } from 'three';
import Arc from '../svgdom/path/Arc';
import {Style} from '../svgdom/element/StrokeFillElement';
import CircleElement from '../svgdom/element/CircleElement';
import SvgUtil from '../svgdom/SvgUtil';

export interface Config {
    centerRadius: number;
    divisionCount: number;
    divisionSize: number;
    strokeSize: number;
    strokeColor: string;
}

export default (c: Config): SvgElement => {
    const svg = new SvgElement();

    const size = (c.centerRadius + c.divisionCount * c.divisionSize) * 2;

    svg.width = size;
    svg.height = size;

    const style: Style = {
        stroke: c.strokeColor,
        strokeWidth: c.strokeSize,
        fill: "none",
    };

    const center = new Vector2(size / 2, size / 2);
    for (let i = 0; i < c.divisionCount; i++) {
        const radius = c.centerRadius + c.divisionSize * i;
        const offset = c.divisionSize / 2;
        const circleOffset = (1 - Math.cos(Math.asin(offset / radius))) * radius;

        let start = new Vector2(-(radius - circleOffset), offset);
        let end = new Vector2(-1, 1).multiply(start);

        if (i % 2 === 1) {
            start = new Vector2(-1, 1).multiply(new Vector2(start.y, start.x));
            end = new Vector2(-1, 1).multiply(new Vector2(end.y, end.x));
        }

        const arc1 = new Arc(center, start, end, radius, false);
        arc1.applyStyle(style);
        svg.children.push(arc1);

        let mirroredStart = start.clone().multiply(new Vector2(-1, 1));
        let mirroredEnd = end.clone().multiply(new Vector2(-1, 1));

        if (i % 2 === 0) {
            mirroredStart = start.clone().multiply(new Vector2(1, -1));
            mirroredEnd = end.clone().multiply(new Vector2(1, -1));
        }

        const arc2 = new Arc(center, mirroredStart, mirroredEnd, radius, true);
        arc2.applyStyle(style);
        svg.children.push(arc2);
    }

    const lastRadius = c.centerRadius + c.divisionSize * c.divisionCount;
    const circle = new CircleElement(center, lastRadius);
    circle.applyStyle(style);
    svg.children.push(circle);

    return svg;
};
