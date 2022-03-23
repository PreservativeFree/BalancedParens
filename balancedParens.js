// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
const balanced = (str) => {
    let open = 0;
    let close = 0;
    str.split('').forEach(char => {
        if(char === '(') {
            open++;
        } if(char === ')') {
            close++;
        }
    })
    return open === close;

}

console.log(balanced(sample3));