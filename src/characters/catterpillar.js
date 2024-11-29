import kplay from "../kaplayCtx";

export function addCatterpillar(pos) {
    const catterpillar = kplay.add([
        kplay.sprite("catterpillar", { anim: "crawl" }),
        kplay.area({ shape: new kplay.Rect(kplay.vec2(0, 5), 32, 16) }),
        kplay.scale(4),
        kplay.anchor("center"),
        kplay.pos(pos),
        kplay.offscreen(),
        "enemies",
    ]);

    return catterpillar;
}
