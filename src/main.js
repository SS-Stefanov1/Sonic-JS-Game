import { kplay } from "./kaplayCtx.js";

// Enviornment
kplay.loadSprite("chemical-bg", "graphics/chemical-bg.png");
kplay.loadSprite("platforms", "graphics/platforms.png");

// Characters
kplay.loadSprite("sonic", "graphics/sonic.png", {
    sliceX: 8,
    sliceY: 2,
    anims: {
        run: { from: 0, to: 7, loop: true, speed: 60 },
        jump: { from: 8, to: 15, loop: true, speed: 60 },
    },
});
