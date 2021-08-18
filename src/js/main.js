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
        autoplayTimeout: 5000,
        autoplayButtonOutput: false,
        swipeAngle: true,
        gutter: 15,
        navPosition: "top",
    });

    burger();

    
});
