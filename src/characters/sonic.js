import kplay from "../kaplayCtx";

export function addSonic(pos, animation = "walk") {
    const sonic = kplay.add([
        kplay.sprite("sonic", { anim: animation }),
        kplay.scale(4),
        kplay.area(), // Sonic Hitbox
        kplay.body({ jumpForce: 1600 }),
        kplay.anchor("center"), // Move drawing point from topleft to center
        kplay.pos(pos),
        kplay.doubleJump(3),
        {
            setKeybinds() {
                kplay.onKeyPress("space", () => {
                    if (this.isGrounded()) {
                        this.play("jump"); // Playing the jump animation
                        this.jump();
                        kplay.play("jump", { volume: 0.3 }); // Playing the jump sound
                    }
                });
                kplay.onKeyDown("shift", () => {
                    if (this.isGrounded()) {
                        this.play("slide");
                        this.state = "sliding";
                    }
                });
                kplay.onKeyRelease("shift", () => {
                    this.play("walk");
                    this.state = "walking";
                });
            },
            setEvents() {
                this.onGround(() => {
                    this.play("walk");
                });
            },
        },
        "characters_sonic",
    ]);

    return sonic;
}
