"use strict";
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";
import burger from "./component/burger-menu";

document.addEventListener("DOMContentLoaded", () => {
    tns({
        container: ".my-slider",
        controls: false,
        items: 1,
        speed: 1000,
        autoplay: true,
        autoplayHoverPause: false,
        autoplayTimeout: 4000,
        autoplayButtonOutput: false,
        swipeAngle: 15,
        gutter: 300,
        touch: true,
        navPosition: "top",
    });

    burger();

    
});
