import kplay from "../kaplayCtx";

export default function gameOver(score, bgMusic) {
    bgMusic.paused = true;

    kplay.add([
        kplay.text("Game Over", { font: "mania", size: "80" }),
        kplay.pos(kplay.center().x, 250),
        kplay.anchor("center"),
    ]);

    kplay.add([
        kplay.text("Press 'space' to return to main menu.", { font: "mania", size: "32" }),
        kplay.pos(kplay.center().x, 325),
        kplay.anchor("center"),
    ]);

    kplay.add([
        kplay.text(`Your score: ${score}`, { font: "mania", size: "32" }),
        kplay.pos(kplay.center().x, 375),
        kplay.anchor("center"),
    ]);

    kplay.onButtonPress("jump", () => kplay.go("main-menu"));
}
