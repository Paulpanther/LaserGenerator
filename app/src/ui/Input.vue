<template lang="pug">
    .input
        label(:for="id") {{ name }}
        input(:id="id" :type="type" :value="defaultValue")
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Prop} from "vue-property-decorator";

    @Component
    export default class Input extends Vue {

        private static lastId = 0;

        private static nextId(): string {
            return "generated-" + this.lastId++;
        }

        @Prop({default: "text"})
        public type: string = "text";

        @Prop({default: ""})
        public defaultValue: string = "";

        @Prop({default: ""})
        public name: string = "";

        private id = Input.nextId();
    }
</script>

<style lang="sass" scoped>
</style>
