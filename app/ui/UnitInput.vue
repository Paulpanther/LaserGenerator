<template lang="pug">
    extends input.pug
    block append content
        select(v-model="selectedType" @change="onChange")
            option(v-for="type in types" :key="type") {{ type }}
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import {Prop} from "vue-property-decorator";
    import Input from "./Input";
    import SvgUtil from '../svgdom/SvgUtil';

    @Component
    export default class UnitInput extends Input {

        @Prop({default: "mm"})
        public defaultType: string;

        protected type = "number";

        private types = ["pt", "mm"];
        private selectedType = this.defaultType;

        public getValueAsPx(): number | undefined {
            if (this.selectedType === "pt") {
                return Number(this.value);
            } else if (this.selectedType === "mm") {
                return Number(UnitInput._mmToPt(this.value));
            } else {
                return undefined;
            }
        }

        private static _mmToPt(mm: number): number {
            return mm / SvgUtil.pxToMM * SvgUtil.pxToPt;
        }
    }
</script>

<style lang="sass" scoped>
</style>
