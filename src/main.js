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

kplay.loadSprite("enemy", "graphics/enemy.png", {
    sliceX: 5,
    sliceY: 1,
    anims: {
        run: { from: 0, to: 4, loop: true, speed: 5 },
    },
});

// Collectables
kplay.loadSprite("coins", "graphics/coins.png", {
    sliceX: 16,
    sliceY: 1,
    anims: {
        spin: { from: 0, to: 15, loop: true, speed: 15 },
    },
});

//-----------------------------------------------------
// Fonts
kplay.loadFont("mania", "fonts/mania.ttf");

// Sounds
kplay.loadSound("background", "sounds/background.mp3");
kplay.loadSound("take_damage", "sounds/take_damage.wav");
kplay.loadSound("take_ring", "sounds/take_ring.wav");
kplay.loadSound("kill_enemy", "sounds/kill_enemy.wav");
kplay.loadSound("jump", "sounds/jump.wav");
kplay.loadSound("hyper_ring", "sounds/hyper_ring.wav");
