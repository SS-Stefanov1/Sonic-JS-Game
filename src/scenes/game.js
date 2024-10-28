import { addSonic } from "../characters/sonic";
import kplay from "../kaplayCtx";

export default function game() {
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

    kplay.add([
        kplay.body({ isStatic: true }),
        kplay.rect(1920, 3000),
        kplay.opacity(0),
        kplay.pos(0, 832),
        kplay.area(),
    ]);

    kplay.setGravity(3000);

    const sonic = addSonic(kplay.vec2(200, 745));
    sonic.setKeybinds();
    sonic.setEvents();

    let gameSpeed = 500;
    kplay.loop(1, () => {
        gameSpeed += 25;
    });

    kplay.onUpdate(() => {
        // Moving the background
        if (bgPieces[1].pos.x < 0) {
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgWidth * 2, 0);
            bgPieces.push(bgPieces.shift());
        }

        bgPieces[0].move(-100, 0);
        bgPieces[1].moveTo(bgPieces[0].pos.x + bgWidth * 2, 0);

        // Moving background up/down when jumping
        bgPieces[0].moveTo(bgPieces[0].pos.x, -sonic.pos.y / 10 - 50);
        bgPieces[1].moveTo(bgPieces[0].pos.x, -sonic.pos.y / 10 - 50);

        // Moving the platforms
        if (platformPieces[1].pos.x < 0) {
            platformPieces[0].moveTo(platformPieces[1].pos.x + platformWidth * 4, 450);
            platformPieces.push(platformPieces.shift());
        }

        platformPieces[0].move(-gameSpeed, 0);
        platformPieces[1].moveTo(platformPieces[0].pos.x + platformWidth * 4, 450);
    });
}
