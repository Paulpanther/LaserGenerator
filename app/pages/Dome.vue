<template lang="pug">
    .page
        UnitInput(default-value="20" default-type="mm" title="Radius of inner circle")
        NumberInput(default-value="15" title="Number of circles")
        UnitInput(default-value="3" default-type="mm" title="Width of a circle")
        UnitInput(default-value="0.01" default-type="pt" title="Stroke Width")
        ColorInput(default-value="#ff0000" title="Stroke Color")
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import UnitInput from "./../ui/UnitInput.vue";
    import ColorInput from "../ui/ColorInput.vue";

    @Component({components: {ColorInput, UnitInput}})
    export default class Dome extends Vue {}
</script>

<style lang="sass" scoped>

</style>
