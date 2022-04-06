const spy = function() {
    return `I'm James Bond`
}
function receivesAFunction(spy) {
return spy()
};
function returnsANamedFunction() {
    return spy
}
function returnsAnAnonymousFunction() {
    return function(){

    }
};
