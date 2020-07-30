<template lang="pug">
    extends input.pug
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import {Prop} from "vue-property-decorator";
    import Input from "./Input";

    @Component
    export default class Number extends Input {
        protected type = "number";
    }
</script>

<style lang="sass" scoped>
</style>
