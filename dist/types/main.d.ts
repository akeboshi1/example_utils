// Generated by dts-bundle v0.7.3

declare module 'example_utils' {
    export * from "example_utils/modules";
    export * from "example_utils/main";
}

declare module 'example_utils/modules' {
    export * from "example_utils/modules/math/multi";
    export * from "example_utils/modules/time/localtime";
}

declare module 'example_utils/main' {
    export class Main {
        constructor();
        show(): void;
    }
}

declare module 'example_utils/modules/math/multi' {
    export class TestMath {
        multi(a: number, b: number): number;
    }
}

declare module 'example_utils/modules/time/localtime' {
    export class Localtime {
        getNow(): Date;
    }
}

