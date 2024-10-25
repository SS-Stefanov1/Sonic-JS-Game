import kaplay from "kaplay";

//prettier-ignore
export const kplay = kaplay({
    global       : false,
    debug        : true,
    debugKey     : '`',
    letterbox    : true,
    touchToMouse : true,
    background   : [0, 0, 0],
    width        : 1920,
    height       : 1080,

    buttons : {
        jump  : { keyboard : ["space",] },
        mouse : "left",
    },
});
