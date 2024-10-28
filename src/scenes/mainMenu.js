import kplay from "../kaplayCtx";
import { addSonic } from "../characters/sonic";

export default function mainMenu() {
    // Setting the best score
    if (!kplay.getData("best-score")) {
        kplay.setData("best-score", 0);
    }

    // Starting the game
    kplay.onButtonPress("jump", () => kplay.go("play-game"));

    // Defining the background
    const bgWidth = 1920;
    const bgPieces = [
        kplay.add([kplay.sprite("city-bg"), kplay.pos(0, 0), kplay.scale(2), kplay.opacity(0.8)]),
        kplay.add([kplay.sprite("city-bg"), kplay.pos(bgWidth * 2, 0), kplay.scale(2), kplay.opacity(0.8)]),
    ];

    // Defining the platforms
    const platformWidth = 1280;
    const platformPieces = [
        kplay.add([kplay.sprite("platform"), kplay.pos(0, 450), kplay.scale(4), kplay.opacity(1)]),
        kplay.add([kplay.sprite("platform"), kplay.pos(platformWidth * 4, 450), kplay.scale(4), kplay.opacity(1)]),
    ];

    // Main Menu texts
    kplay.add([
        kplay.text("Main Menu", { font: "mania", size: "80" }),
        kplay.pos(kplay.center().x, 250),
        kplay.anchor("center"),
    ]);

    kplay.add([
        kplay.text("Press any key to start", { font: "mania", size: "42" }),
        kplay.pos(kplay.center().x, 325),
        kplay.anchor("center"),
    ]);

    // Adding sonic to the main menu
    addSonic(kplay.vec2(200, 745));

    kplay.onUpdate(() => {
        // Moving the background
        if (bgPieces[1].pos.x < 0) {
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgWidth * 2, 0);
            bgPieces.push(bgPieces.shift());
        }

        bgPieces[0].move(-100, 0);
        bgPieces[1].moveTo(bgPieces[0].pos.x + bgWidth * 2, 0);

        // Moving the platforms
        if (platformPieces[1].pos.x < 0) {
            platformPieces[0].moveTo(platformPieces[1].pos.x + platformWidth * 4, 450);
            platformPieces.push(platformPieces.shift());
        }

        platformPieces[0].move(-3000, 0);
        platformPieces[1].moveTo(platformPieces[0].pos.x + platformWidth * 4, 450);
    });
}
