// Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// reversing the digits, determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."
// Example 1:
// Input - 123
// reversed integer - 321
// prime factors of 321 are 3 and 107
// output - Yes - [3,107]
// Example 2:
// Input - 1500
// reversed Integre - 51
// prime factors of 51 are 3 and 17
// output - Yes - [3, 17]
// Example 3:
// Input - 1000
// reversed Integre - 1
// There are no prime factors for 1
// output - No



function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}


function reverseAndCheckingPrime(x) {
    function reverseDigit(num) {
        let reversed = 0;
        while (num > 0) {
            reversed = reversed * 10 + (num % 10);
            num = Math.floor(num / 10);
        }
        return reversed;

    }

    const reversedX = reverseDigit(x);

    const primeFactor = [];
    let num = reversedX;
    for (let i = 2; i <= num; i++) {
        while (num % i === 0 && isPrime(i)) {
            primeFactor.push(i);
            num /= i;
        }
    }

    if (primeFactor.length > 0) {
        return `Yes - [${primeFactor.join(",")}]`;
    } else {
        return "No";
    }
}

console.log(reverseAndCheckingPrime(1000))