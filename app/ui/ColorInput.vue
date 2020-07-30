<template lang="pug">
    extends input.pug
    block append content
        input.color(type="color" v-model="value" @change="onChange")
</template>

<script lang="ts">
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import Input from "./Input";

@Component
export default class ColorInput extends Input {
    protected type = "text";
}
</script>

<style lang="sass" scoped>
    .color
        width: 2em
        height: 2em
        background: none
        overflow: hidden
</style>
