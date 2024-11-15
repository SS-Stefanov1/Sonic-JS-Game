import kplay from "./kaplayCtx";
import game from "./scenes/game";
import gameover from "./scenes/gameover";
import mainMenu from "./scenes/mainMenu";

// Enviornment
kplay.loadSprite("city-bg", "graphics/enviornments/level_1/city-bg.png");
kplay.loadSprite("platform", "graphics/enviornments/level_1/platform.png");

// Characters
kplay.loadSprite("sonic", "graphics/characters/sonic/sonic.png", {
    sliceX: 15,
    sliceY: 9,
    anims: {
        idle: { from: 0, to: 15, loop: true, speed: 10 },
        slide: { from: 15, to: 23, loop: false, speed: 30 },
        walk: { from: 30, to: 40, loop: true, speed: 18 },
        run: { from: 45, to: 59, loop: true, speed: 25 },
        speed_up: { from: 60, to: 75, loop: false, speed: 25 },
        jump: { from: 90, to: 100, loop: true, speed: 60 },
        wait: { from: 100, to: 105, loop: true, speed: 4 },
    },
});

// Enemies
kplay.loadSprite("motobug", "graphics/characters/enemies/motobug.png", {
    sliceX: 5,
    sliceY: 1,
    anims: {
        run: { from: 0, to: 4, loop: true, speed: 5 },
    },
});

kplay.loadSprite("roborunner", "graphics/characters/enemies/roborunner.png", {
    sliceX: 8,
    sliceY: 1,
    anims: {
        run: { from: 0, to: 7, loop: true, speed: 8 },
    },
});

// Collectables
kplay.loadSprite("rings", "graphics/collectables/rings.png", {
    sliceX: 16,
    sliceY: 1,
    anims: {
        spin: { from: 0, to: 15, loop: true, speed: 15 },
    },
});

//-----------------------------------------------------
// Fonts & Sounds
kplay.loadFont("mania", "fonts/mania.ttf");

// Sounds
//-> Background Music
kplay.loadSound("level_1_bg", "sounds/level_1_bg.mp3");

kplay.loadSound("take_damage", "sounds/take_damage.wav");
kplay.loadSound("take_ring", "sounds/take_ring.wav");
kplay.loadSound("kill_enemy", "sounds/kill_enemy.wav");
kplay.loadSound("jump", "sounds/jump.wav");
kplay.loadSound("hyper_ring", "sounds/hyper_ring.wav");

//-----------------------------------------------------
// Scenes
kplay.scene("main-menu", mainMenu);

kplay.scene("play-game", game);

kplay.scene("game-over", gameover);

kplay.go("main-menu");

//-----------------------------------------------------
