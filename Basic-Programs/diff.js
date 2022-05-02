function diff() {
    var diff=arguments[0];
    for (var i=0;i<arguments.length;i++) {
        diff -= arguments[i];
    }
    return diff;
}

console.log(diff(2,3,4,5));