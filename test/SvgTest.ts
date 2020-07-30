import * as fs from "fs";
import {expect} from "chai";
import SvgElement from "../app/svgdom/element/SvgElement";
import PathElement from "../app/svgdom/element/PathElement";

describe("Svg", () => {
    describe("render", () => {
        it("should render the svgString correctly", () => {
            const svg = new SvgElement();
            svg.width = 200;
            svg.height = 400;
            const p1 = new PathElement();
            p1.stroke = "#ff0000";
            p1.d = "M 50 50 H 100";
            const p2 = new PathElement();
            p2.stroke = "#00ff47";
            p2.strokeWidth = 42;
            svg.children.push(p1);
            svg.children.push(p2);

            expect(svg.renderAsFile()).to.equal(fs.readFileSync("test/expected1.svgString", {encoding: "utf8"}));
        });
    });
});
