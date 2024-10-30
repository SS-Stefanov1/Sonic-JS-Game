import { addMotobug } from "../characters/motobug";
import { addSonic } from "../characters/sonic";
import { addRing } from "../collectables/ring";
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
    let gameSpeed = 500;
    kplay.loop(1, () => {
        gameSpeed += 25;
    });

    // Score Logic
    let player_score = 0;
    let score_multip = 1;

    const scoreDisplay = kplay.add([kplay.text("Score: 0", { font: "mania", size: 72 }), kplay.pos(25, 25)]);

    // Spawn Sonic
    const sonic = addSonic(kplay.vec2(200, 745));
    sonic.setKeybinds();
    sonic.setEvents();
    sonic.onCollide("enemies_motobug", (enemy_id) => {
        if (!sonic.isGrounded()) {
            kplay.play("kill_enemy", { volume: 0.5 });
            kplay.play("hyper_ring", { volume: 0.5 });
            kplay.destroy(enemy_id);

            sonic.play("jump");
            sonic.jump(800);
            score_multip++;
            player_score += 5 * score_multip;
            scoreDisplay.text = scoreDisplay.text.slice(0, 7) + player_score;
        } else {
            kplay.play("take_damage", { volume: 0.5 });
            kplay.go("game-over", player_score);
        }
    });

    sonic.onCollide("collectables_rings", (ring_id) => {
        kplay.play("take_ring", { volume: 0.5 });
        kplay.destroy(ring_id);
        player_score++;
        scoreDisplay.text = scoreDisplay.text.slice(0, 7) + player_score;
    });

    // Spawn Motorbugs
    const spawnMotobug = () => {
        const motobug = addMotobug(kplay.vec2(1950, 775));

        motobug.onUpdate(() => {
            if (gameSpeed < 3000) {
                motobug.move(-(gameSpeed + 300), 0);
                return;
            }

            motobug.move(-gameSpeed, 0);
        });

        motobug.onExitScreen(() => {
            if (motobug.pos.x < 0) {
                kplay.destroy(motobug);
            }
        });

        const spawnRate = kplay.rand(0.5, 2.5);
        kplay.wait(spawnRate, spawnMotobug);
    };
    spawnMotobug();

    // Spawn Collectables (rings)
    const spawnRings = () => {
        const ring_pos = kplay.rand(550, 775);
        const ring = addRing(kplay.vec2(1950, ring_pos));

        ring.onUpdate(() => {
            ring.move(-gameSpeed, 0);
        });

        ring.onExitScreen(() => {
            if (ring.pos.x < 0) {
                kplay.destroy(ring);
            }
        });

        const spawnRate = kplay.rand(1, 3);
        kplay.wait(spawnRate, spawnRings);
    };
    spawnRings();

    kplay.onUpdate(() => {
        if (sonic.isGrounded()) {
            score_multip = 1;
        }

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
