define([], function () {
    return function Beer(name, brewery) {
        this.beerId = undefined;
        this.name = name;
        this.brewery = brewery;
    };
});