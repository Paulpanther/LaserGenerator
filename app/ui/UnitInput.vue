<template lang="pug">
    extends input.pug
    block append content
        select(v-model="selectedType")
            option(v-for="type in types" :key="type" ) {{ type }}
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import {Prop} from "vue-property-decorator";
    import Input from "./Input";

    @Component
    export default class UnitInput extends Input {

        @Prop({default: "mm"})
        public defaultType: string;

        protected type = "number";

        private types = ["px", "pt", "mm"];
        private selectedType = this.defaultType;

        public getValueAsPx(): number | undefined {
            if (this.selectedType === "px") {
                return Number(this.value);
            } else if (this.selectedType === "pt") {
                return Number(UnitInput._ptToPx(this.value));
            } else if (this.selectedType === "pt") {
                return Number(UnitInput._mmToPx(this.value));
            } else {
                return undefined;
            }
        }

        private static _ptToPx(pt: number): number {
            return pt / 0.75;
        }

        private static _mmToPx(mm: number): number {
            return mm * 3.7795;
        }
    }
</script>

<style lang="sass" scoped>
</style>
