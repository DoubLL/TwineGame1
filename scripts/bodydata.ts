$(document).on(":passagerender", () => {
    const loc = (State.variables as any).location;
    if (loc) {
        $("body").attr("data-location", loc);
    }
    const char = (State.variables as any).character;
    if (char) {
        $("body").attr("data-character", char);
    }
});
