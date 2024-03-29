export function getRootHash() {
    return splitHash()[0]
}

export function splitHash() {
    var hash = window.location.hash.slice(1);
    if (hash.includes("/")) {
        var split = hash.split("/");
        return [split[0], split.slice(1)];
    }
    return [hash, []];
}

export function getHashParams() {
    return splitHash()[1];
}