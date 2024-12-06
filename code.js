function fibonacciTailRecursive(n) {
    if (n < 0) {
        throw new Error("negative integer");
    }

    function fibHelper(i, prev, curr) {
        if (i === 0) {
            return prev;
        }
        return fibHelper(i - 1, curr, prev + curr);
    }

    return fibHelper(n, 0, 1);
}

module.exports = {
    fibonacciTailRecursive
};
