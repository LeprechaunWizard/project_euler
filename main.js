// Function for Problem 1
function sumOfMultiples() {
    var sum = 0;
    for (i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
// Functions for Problem 2
function sumOfEvenFib() {
    var sum = 0;
    var sequence = [2];
    fibNumTo4M(1, 2, sequence)
    for(i=0; i < sequence.length; i++) {
        sum += sequence[i];
    }
    return sum;
}
function fibNumTo4M(prevPrev, prev, sequence) {
    if((prevPrev >= 4000000) || (prev >= 4000000)) {
        return;
    }
    var next = prevPrev + prev;
    if (next % 2 === 0) {
        sequence.push(next);
    }
    return fibNumTo4M(prev, next, sequence);
}
