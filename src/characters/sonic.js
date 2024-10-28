import kplay from "../kaplayCtx";

export function addSonic(pos) {
    const sonic = kplay.add([
        kplay.sprite("sonic", { anim: "run" }), // Setting default animation to run
        kplay.scale(4),
        kplay.area(), // Sonic Hitbox
        kplay.body({ jumpForce: 1600 }),
        kplay.anchor("center"), // Move drawing point from topleft to center
        kplay.pos(pos),
        {
            setKeybinds() {
                kplay.onButtonPress("jump", () => {
                    if (this.isGrounded()) {
                        this.play("jump"); // Playing the jump animation
                        this.jump();

                        kplay.play("jump", { volume: 0.3 }); // Playing the jump sound
                    }
                });
            },
            setEvents() {
                this.onGround(() => {
                    this.play("run");
                });
            },
        },
    ]);

    return sonic;
}
