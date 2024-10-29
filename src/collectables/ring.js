import kplay from "../kaplayCtx";

export function addRing(pos) {
    const ring = kplay.add([
        kplay.sprite("rings", { anim: "spin" }),
        kplay.area({ shape: new kplay.Rect(kplay.vec2(0, 0), 8, 8) }),
        kplay.scale(4),
        kplay.anchor("center"),
        kplay.pos(pos),
        kplay.offscreen(),
        "collectables_rings",
    ]);

    return ring;
}
