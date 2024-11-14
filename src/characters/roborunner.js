import kplay from "../kaplayCtx";

export function addRoboRunner(pos) {
    const roborunner = kplay.add([
        kplay.sprite("roborunner", { anim: "run" }),
        kplay.area({ shape: new kplay.Rect(kplay.vec2(-5, 0), 32, 32) }),
        kplay.scale(4),
        kplay.anchor("center"),
        kplay.pos(pos),
        kplay.offscreen(),
        "enemies_roborunner",
    ]);

    return roborunner;
}
