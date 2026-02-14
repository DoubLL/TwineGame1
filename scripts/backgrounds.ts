$(document).on(":passagerender", () => {
    const loc = (State.variables as any).location;
    if (loc) {
        $("body").attr("data-location", loc);
    }
});
