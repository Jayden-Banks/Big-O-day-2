class Factorial {
    constructor() {
        this.cache = {}
    }
    calcFac(num) {
        if(this.cache[num]) {
            return this.cache[num]
        }
        else {
            let answer = num
            for (let i=num - 1; i>0; i--) {
                if(i > 0) {
                    answer *= i
                }
            }
            this.cache[num] = answer
            return answer
        }
        
    }
}
let answer = new Factorial()
// console.log(answer.calcFac(3))

//! TEST
const test = num => {
    let answer = num
    for (let i=num -1; i>0; i--) {
        if(i > 0) {
            answer *= i
        }
    }
    return answer
}
// console.log(test(4))


const myFac = // CREATE A NEW INSTANCE OF THE FACTORIAL CLASS

console.time("not memoized factorial");
console.log(test(8))
console.log(test(8))
console.log(test(8))
console.log(test(8))
console.timeEnd("not memoized factorial");

console.time("memoized factorial");
console.log(answer.calcFac(8))
console.log(answer.calcFac(8))
console.log(answer.calcFac(8))
console.log(answer.calcFac(8))
console.timeEnd("memoized factorial");