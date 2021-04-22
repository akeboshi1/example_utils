import { Localtime } from "./modules/time/localtime";

export class Main {
    constructor() {
        console.log("===> test");
    }

    public show(){
        const t = new Localtime();
        console.log("===> now", t.getNow());
        console.log("show",t.getNow());
    }
}