<template lang="pug">
    extends input.pug
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import {Prop} from "vue-property-decorator";
    import Input from "./Input";

    @Component
    export default class NumberInput extends Input {
        protected type = "number";

        public getValueAsNumber(): number | undefined {
            const n = Number(this.value);

            if (n && !isNaN(n)) {
                return n;
            } else {
                return undefined;
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>
