const factorial = (num) => {
    let factorial = 1;
    for (let i = 0; i < num; i++) {
        factorial *= num - i;
    }
    return factorial;
}

const n_choose_k = function (n, k) {
    return factorial(n) / (factorial(n - k) * factorial(k))
}

/**
 * 
 * @param {*} n number of trials 
 * @param {*} k numbers of successes
 * @param {*} p percentage chance of success
 * @returns Number
 */
const binomialDistributionFunction = function (n, k, p) {
    return n_choose_k(n, k) * p ** k * (1 - p) ** (n - k)
}

/**
 * 
 * @param {*} n number of trials 
 * @param {*} k up to numbers of successes
 * @param {*} p percentage chance of success
 * @returns Number
 */
const binomialDistributionFunctionCumulative = function (n, k, p) {
    let total = 0;
    for(let i = 0; i <= k; i++) {
        total += binomialDistributionFunction(n, i, p)
    }
    return total;
}

export {
    binomialDistributionFunction, 
    binomialDistributionFunctionCumulative
}