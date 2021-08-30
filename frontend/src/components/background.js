import React, { useEffect } from "react";
import { ReactComponent as Artboard } from "../images/Artboard.svg";
import { ReactComponent as Astronaut } from "../images/astronaut.svg";
import anime from "animejs/lib/anime.es.js";
import "./path.css";

export default function Background() {
    useEffect(() => {
        var path12 = anime.path(".path-1"),
            path58 = anime.path(".path-2"),
            path91 = anime.path(".path-3"),
            pathSat = anime.path(".path-4"),
            path51 = anime.path(".path-5"),
            pathRocket = anime.path(".path-6"),
            path20 = anime.path(".path-7");

        var motionPath12 = anime({
            targets: ".cls-12",
            translateX: path12("x"),
            translateY: path12("y"),
            opacity: [1, 1],
            easing: "easeInCubic",
            duration: 20000,
            loop: true,
        });
        var motionPath91 = anime({
            targets: ".cls-90",
            scale: [1, 0],
            translateX: path91("x"),
            translateY: path91("y"),
            easing: "easeInCubic",
            duration: 35000,
            loop: true,
        });
        var motionPathSat = anime({
            targets: "#satellite",
            translateX: pathSat("x"),
            translateY: pathSat("y"),
            rotateY: 45,
            scale: [1, 0.1],
            easing: "easeInCubic",
            duration: 30000,
            loop: true,
        });
        var motionPath51 = anime({
            targets: ".cls-51",
            translateX: path51("x"),
            translateY: path51("y"),
            scale: [2, 0],
            direction: "reverse",
            easing: "easeInOutCubic",
            duration: 20000,
            loop: true,
        });
        var motionPathRocket = anime({
            targets: ".rocket",
            translateX: pathRocket("x"),
            translateY: pathRocket("y"),
            scale: [0, 1.5],
            opacity: 1,
            easing: "easeInOutCubic",
            duration: 20000,
            opacity: {
                value: 0,
                duration: 12000,
                delay: 5000,
                easing: "linear",
            },
            loop: true,
        });
        var motionPath20 = anime({
            targets: ".cls-20",
            translateX: path20("x"),
            translateY: path20("y"),
            easing: "easeInOutCubic",
            rotate: path20("angle"),
            scale: [0, 1],
            duration: 25000,
            loop: true,
        });
        var motionPathRings = anime({
            targets: ".cls-28, .cls-29, .cls-30, .cls-38, .cls-39, .cls-40",
            translateX: [-5, 5],
            // translateY: [10 , -10],
            easing: "linear",
            rotateZ: [0.1, -0.1],
            rotateY: [0, -3],
            // rotate: pathRings('angle'),
            duration: 1000,
            direction: "alternate",
            loop: true,
        });
        var motionPath58 = anime({
            targets: ".cls-58, .saturn",
            translateX: path58("x"),
            translateY: path58("y"),
            easing: "easeInCubic",
            duration: 30000,
            loop: true,
        });
        var astronaut = anime({
            targets: ".astronaut1",
            translateY: [-8, 8],
            duration: 2000,
            loop: true,
            direction: "alternate",
            easing: "easeOutCubic",
        });
    });
    return (
        <div className="Landing-SVG container-fluid">
            <Artboard className="main-svg" />
            <Astronaut className="astronaut1" />
            <div className="svg-paths">
                <svg
                    className="path-1-svg"
                    width="0"
                    height="0"
                    viewBox="0 0 1920 1080"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="path-1"
                        d="M1.74493 256.969C7.60127 319.669 47.6876 378.32 113.546 420.218C179.405 462.117 265.696 483.854 353.814 480.699C441.935 477.544 524.744 449.753 584.405 403.374C644.058 357 675.743 295.806 672.814 233.011C669.884 170.211 632.559 110.645 568.699 67.2057C504.836 23.7643 419.611 -0.0185809 331.393 1.03343C243.175 2.08544 159.111 27.8873 97.3148 72.8227C35.5233 117.755 1 178.168 1 241"
                        stroke="black"
                        strokeWidth="2"
                    />
                    <path
                        className="path-2"
                        d="M1205 241C1205 209.704 1189.58 178.609 1159.41 149.493C1129.23 120.373 1084.94 93.8658 1029.01 71.5159C973.101 49.169 906.699 31.4338 833.595 19.3316C760.493 7.22974 682.136 1 603 1C523.864 0.999999 445.507 7.22974 372.405 19.3316C299.302 31.4338 232.899 49.169 176.986 71.5158C121.064 93.8658 76.7744 120.373 46.595 149.493C16.4196 178.609 1 209.704 1 241"
                        stroke="black"
                        strokeWidth="2"
                    />
                    <path
                        className="path-3"
                        d="M2.74643 216.568C-1.73971 247.866 2.4366 279.495 15.0478 309.657C27.6603 339.821 48.4684 367.939 76.3086 392.397C104.149 416.854 138.47 437.165 177.32 452.157C216.17 467.15 258.778 476.526 302.71 479.747C346.642 482.967 391.029 479.967 433.336 470.921C475.642 461.874 515.03 446.959 549.251 427.037C583.474 407.114 611.85 382.58 632.776 354.847C653.701 327.117 666.767 296.733 671.254 265.432C675.74 234.134 671.563 202.505 658.952 172.343C646.34 142.179 625.532 114.061 597.691 89.6034C569.851 65.1458 535.53 44.8351 496.679 29.8426C457.83 14.8504 415.222 5.47382 371.29 2.25348C327.358 -0.966843 282.97 2.03273 240.664 11.0793C198.358 20.126 158.97 35.0407 124.749 54.9632C90.5264 74.8859 62.1502 99.4204 41.2238 127.153C20.2988 154.883 7.23278 185.267 2.74641 216.568L2.74643 216.568Z"
                        stroke="black"
                        strokeWidth="2"
                    />
                    <path
                        className="path-4"
                        d="M1.92356 571.137C9.18657 711.109 58.886 841.76 140.254 934.939C221.616 1028.11 328.099 1076.33 436.736 1069.33C545.378 1062.33 647.605 1000.65 721.346 897.466C795.089 794.276 834.403 657.877 830.769 517.671C827.136 377.465 780.847 244.75 701.934 148.126C623.025 51.5079 517.844 -1.26036 409.085 1.07421C300.325 3.40881 196.563 60.664 120.196 160.621C43.8248 260.584 1 395.216 1 535.5"
                        stroke="black"
                        strokeWidth="2"
                    />
                    <line
                        className="path-5"
                        x1="424.692"
                        y1="331.394"
                        x2="0.69234"
                        y2="0.394149"
                        stroke="black"
                    />
                    <line
                        className="path-6"
                        x1="0"
                        y1="1000"
                        x2="100"
                        y2="0"
                        stroke="black"
                    />
                    <path
                        className="path-7"
                        d="M77.9822 152.078C66.9217 173.126 59.7502 196.039 56.8768 219.506C54.0034 242.973 55.4847 266.532 61.2326 288.837C66.9803 311.141 76.8815 331.754 90.3664 349.501C103.851 367.248 120.656 381.782 139.821 392.278C158.985 402.773 180.138 409.027 202.073 410.681C224.009 412.335 246.3 409.357 267.675 401.912C289.05 394.467 309.091 382.7 326.65 367.28C344.208 351.861 358.94 333.091 370 312.042C381.061 290.993 388.232 268.081 391.106 244.614C393.979 221.147 392.498 197.588 386.75 175.283C381.002 152.978 371.101 132.365 357.616 114.618C344.131 96.8719 327.326 82.3376 308.162 71.842C288.997 61.3464 267.844 55.0927 245.909 53.4388C223.974 51.7849 201.682 54.763 180.307 62.208C158.932 69.6531 138.892 81.4194 121.333 96.8392C103.774 112.259 89.0427 131.029 77.9822 152.078L77.9822 152.078Z"
                        stroke="black"
                        strokeWidth="2"
                    />
                </svg>
                <div className="details">
                    <h1 className="heading">SCOSH</h1>
                    <p className="content">
                        The Society for Cultivation of Science and Humanaties
                    </p>
                </div>
            </div>
        </div>
    );
}
