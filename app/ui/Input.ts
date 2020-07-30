import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Component
export default class Input extends Vue {

    private static lastId = 0;

    private static nextId(): string {
        return "generated-" + this.lastId++;
    }

    @Prop({default: "42"})
    public defaultValue: number;

    @Prop({default: ""})
    public title: string;

    protected type = "text";
    public value = this.defaultValue;
    private id = Input.nextId();
}
