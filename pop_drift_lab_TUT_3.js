<!-- ---- functions --------------------- -->

function newGreen() {
    var g = new Object();
    g.color = "green";
    g.value = 25;
    return g;
}

function newOrange() {
    var o = new Object();
    o.color = "orange";
    o.value = 25;
    return o;
}

<!-- ---- Initialization --------------- -->

//var maxPopSize = 1000;
var maxPopSize = 16;
var sampleSize = 100;
var maxCycles = 1000;

var greenPop = new Array(Math.floor(maxPopSize / 2));
var orangePop = new Array(maxPopSize - greenPop.length);

greenPop.fill(newGreen());
orangePop.fill(newOrange());

var initialCombinedPop = _.shuffle(greenPop.concat(orangePop));

<!-- ---- Cycle until convergence --------------- -->

function run() {
    var population = new Object();
    population.value = 100;
    //population.children = cycleReplication(initialCombinedPop, sampleSize, maxPopSize, maxCycles)
    population.children = initialCombinedPop;
    return population;
}





