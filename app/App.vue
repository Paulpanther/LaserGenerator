<template lang="pug">
    .app
        h1 Laser Generator
        Dome
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import Dome from "./pages/Dome.vue";

    @Component({components: {Dome}})
    export default class App extends Vue {}
</script>

<style lang="sass">
    html
        font-size: 16px

    body
        margin: 0
        padding: 0

        font-family: "Roboto", sans-serif
        font-size: 62.5%

    input, select
        box-sizing: border-box
        border: none
        border-bottom: 1px solid #000
        padding: 2px
        vertical-align: bottom
        outline: none

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button
        -webkit-appearance: none
        margin: 0

    input[type=number]
        -moz-appearance: textfield

    .input
        margin-bottom: 1.3em

        .content
            display: flex
            width: 20em

            .main
                flex-grow: 1

        label
            display: block
            font-size: 1.2em

    .buttons
        display: flex

        button
            width: 50%

    .page
        display: flex

        .form
            display: flex
            flex-direction: column
            justify-content: center

        .svg
            flex-grow: 1
            padding: 0 5em

            svg
                width: 100%
                height: 100%
</style>

<style lang="sass" scoped>
    .app
        max-width: 800px
        margin: 0 auto
</style>
