define([], function () {
    return function Beer(name, brewery, comments) {
        this.beerId = undefined;
        this.name = name;
        this.brewery = brewery;
        this.comments = comments;
    };
});