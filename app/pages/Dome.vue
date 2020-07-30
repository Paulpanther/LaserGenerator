<template lang="pug">
    extends page

    block form
        h2 Dome
        UnitInput(default-value="20" default-type="mm" title="Radius of inner circle" @change="redrawSvg" ref="centerRadiusI")
        NumberInput(default-value="15" title="Number of circles" @change="redrawSvg" ref="divisionCountI")
        UnitInput(default-value="3" default-type="mm" title="Width of a circle" @change="redrawSvg" ref="divisionSizeI")
        UnitInput(default-value="0.01" default-type="pt" title="Stroke Width" @change="redrawSvg" ref="strokeSizeI")
        ColorInput(default-value="#ff0000" title="Stroke Color" @change="redrawSvg" ref="strokeColorI")
        .buttons
            button Generate
            button(@click="save") Save

    block svg
        .svg(v-html="svgString" ref="svgElem")
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import { saveAs } from "file-saver";
    import UnitInput from "./../ui/UnitInput.vue";
    import ColorInput from "../ui/ColorInput.vue";
    import NumberInput from '../ui/NumberInput.vue';
    import DomeGenerator, {Config} from './DomeGenerator';
    import SvgElement from '../svgdom/element/SvgElement';

    @Component({components: {ColorInput, UnitInput, NumberInput}})
    export default class Dome extends Vue {

        $refs!: {
            centerRadiusI: UnitInput,
            divisionCountI: NumberInput,
            divisionSizeI: UnitInput,
            strokeSizeI: UnitInput,
            strokeColorI: ColorInput,
            svgElem: HTMLDivElement
        };

        public svgString: string = "<svgString />";

        public mounted() {
            this.redrawSvg();
        }

        public redrawSvg() {
            const svg = this.generateSvg();
            const ratio = this.$refs.svgElem.clientWidth / svg.width;
            svg.setMinStrokeWidthForAll(1 / ratio);
            this.svgString = svg.render();
        }

        public save() {
            const svg = this.generateSvg();
            const blob = new Blob([svg.renderAsFile()], {type: "image/svg+xml;charset=utf-8"});
            saveAs(blob, "generated-for-laser-cutter.svg");
        }

        private generateSvg(): SvgElement {
            const config: Config = {
                centerRadius: this.$refs.centerRadiusI.getValueAsPx(),
                divisionCount: this.$refs.divisionCountI.getValueAsNumber(),
                divisionSize: this.$refs.divisionSizeI.getValueAsPx(),
                strokeSize: this.$refs.strokeSizeI.getValueAsPx(),
                strokeColor: this.$refs.strokeColorI.value
            };
            for (const v of Object.values(config)) {
                if (v == undefined) {
                    alert("Cannot render the svg: Invalid input params");
                    return;
                }
            }
            return DomeGenerator(config);
        }
    }
</script>

<style lang="sass" scoped>

</style>
