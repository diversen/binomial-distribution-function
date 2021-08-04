import {binomialDistributionFunction, binomialDistributionFunctionCumulative} from './index.js'

// Wolfram alpha
// n = 10, k = 8; p=0.3 (n choose k) * (p)^k * (1-p)^(n-k) 
console.log(binomialDistributionFunction(10, 8, 0.3))
// -> 0.0014467004999999993

// Using the cumulative version
// E.g.: 
// Up to and including 10 choose 8. 
// 10 choose 0, 10 choose 1 ... 10 choose 8
console.log(binomialDistributionFunctionCumulative(10, 8, 0.3))
// -> 0.9998563140999993