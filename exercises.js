// 1. Reverse
// Write a method that will take a string as input, and return a new string with the same letters in reverse order.

function reverse(string) {
    return string.split('').reverse().join('');
}

reverse("SIT Academy") // "ymedacA TIS"
reverse("Hello") // "olleH"
reverse("abcd") // "dcba"


// 2. Factorial
// Write a method that takes an integer n in; it should return n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
// As a special case, factorial(0) == 1.

function factorial(n) {
    let result = 1;
    if (n == 0 || n == 1) {
        result = 1;
    }
    if (n > 1) {
        for (let i = n; i > 1; i--) {
            result = result * i;
        }
    }
    return result;
}

factorial(5) // 120
factorial(4) // 24
factorial(0) // 1
factorial(-1) // "n must be > or = to 0"

// 3. Longest Word
// Write a method that takes in a string. Return the longest word in the string. You may assume that the string contains only letters and spaces. You may use the String split method to aid you in your quest.

function longest_word(sentence) {
    let array = sentence.split(' ');
    let result = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > result.length) {
            result = array[i];
        }
    }
return result;
}

longest_word("This is an amazing test") // "amazing"
longest_word("Steve Carell") // "Carell"
longest_word("SIT Academy 123") // "Academy"

// 4. Sum Nums
// Write a method that takes in an integer num and returns the sum of all integers between zero and num, up to and including num.

function sum_nums(num) {
    let result = 0;
    for (let i = num; i > 0; i--) {
        result = result + i;
        }
    return result;
}

sum_nums(6) // 21
sum_nums(1) // 1
sum_nums(0) // 0

// 5. Time Conversion
// Write a method that will take in a number of minutes, and returns a string that formats the number into hours:minutes.

function time_conversion(minutes) {
    let hours;
    let remainder;
    hours = Math.floor(minutes / 60);
    remainder = minutes % 60;
    if (hours <= 9) {
        if (remainder <= 9) {
            return `0${hours}:0${remainder}`; 
        } else {
            return `0${hours}:${remainder}`;    
        }
    } else {
        if (remainder <= 9) {
            return `${hours}:0${remainder}`; 
        } else {
            return `${hours}:${remainder}`;    
        }   
    }
}

time_conversion(155) // "02:35"
time_conversion(61) // "01:01"
time_conversion(60) // "01:00"
time_conversion(59) // "00:59"

// 6. Count Vowels
// Write a method that takes a string and returns the number of vowels in the string. You may assume that all the letters are lower cased. You can treat “y” as a consonant.

function count_vowels(string) {
    let arr = string.toLowerCase().split('');
    let arrVowels = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u") {
            arrVowels.push(arr[i]);
        }
    }
return arrVowels.length;
}

count_vowels("alphabet") // 3
count_vowels("SIT Academy") // 4
count_vowels("AaaAa") // 5
count_vowels("fly") // 0

// 7. Palindrome
// Write a method that takes a string and returns true if it is a palindrome. A palindrome is a string that is the same whether written backward or forward. Assume that there are no spaces; only lowercase letters will be given.

function palindrome(string) {
    return string.split('').reverse().join('') == string;
}

palindrome("ABBA") // true
palindrome("AbbA") // true
palindrome("abcd") // false

// 8. Most Letters
// Write a method that takes a string in and returns true if the letter “z” appears within three letters after an “a”. You may assume that the string contains only lowercase letters.

function nearby_az(string) {
    let arr = string.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "a") {
            for (let j = i+1; j <= i+3 && j < arr.length; j++) {
                if (arr[j] == "z") {
                    return true;
                }
            } 
        }
    } 
    return false;    
}

nearby_az("abbbz") // false
nearby_az("abz") // true
nearby_az("abcz") // true
nearby_az("abba") // false

// 9. Two Sum
// Write a method that takes an array of numbers. If a pair of numbers in the array sums to zero, return the positions of those two numbers. If no pair of numbers sums to zero, return null.

function two_sum(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] == -nums[j]) {
                result.push([i, j]);
            }
        }
    }
    return result.length == 0 ? null : result;     
}

two_sum([1, 3, -1, 5]) // [[0, 2]]
two_sum([1, 3, -1, 5, -3]) // [[0, 2], [1, 4]]
two_sum([1, 5, 3, -4]) // null

// 10. Is Power of Two
// Write a method that takes in a number and returns true if it is a power of 2. Otherwise, return false. You may want to use the % modulo operation. 5 % 2 returns the remainder when dividing 5 by 2; therefore, 5 % 2 == 1. In the case of 6 % 2, since 2 evenly divides 6 with no remainder, 6 % 2 == 0.

function is_power_of_two(num) {
    return Number.isInteger(Math.log2(num)); 
}

is_power_of_two(8) // true
is_power_of_two(16) // true
is_power_of_two(32) // true
is_power_of_two(12) // false
is_power_of_two(24) // false

// 11. Repeat a string
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeat_string_num_times(str, num) {
    if (num <= 0) {
        return ''
    } else {
    return str.repeat(num);
    }
}

repeat_string_num_times("abc", 3) // 'abcabcabc'
repeat_string_num_times("abc", 1) // 'abc'
repeat_string_num_times("abc", 0) // ''
repeat_string_num_times("abc", -1) // ''

// 12. Sum All Numbers in a Range
// Write a function that receives an array of two numbers as argument and returns the sum of those two numbers and all numbers between them.

function add_all(arr) {
    let result = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        result = result + i;
    } 
return result;
}

add_all([1, 4]) // 10
add_all([5, 10]) // 45
add_all([9, 10]) // 19
add_all([0, 0]) // 0
add_all([-1, 1]) // 0

// 13. True or False
// Write a function that checks if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function is_it_true(args) {
    return typeof args === "boolean"; 
}

is_it_true(true) // true
is_it_true(false) // true
is_it_true('true') // false
is_it_true(1) // false
is_it_true('false') // false

// 14. Return Largest Numbers in Arrays
// Write a function that receives an array with four nested array. The function returns an array consisting of the largest number from each provided sub-array.

function largest_of_four(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.max(...arr[i]));
    }
    return result;
}

largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // [27,5,39,1001]

// 15. Is it an anagram?
// Write a JavaScript function to check if a word is an anagram or not.

function isAnagram(test, original) {
    let testObj = {};
    let origObj = {};
    test = test.toLowerCase();
    original = original.toLowerCase();
    if (test.length !== original.length) {
        return false;
    } else {
        for (let i = 0; i < test.length; i++) {
            if (testObj.hasOwnProperty(test[i])) {
                testObj[test[i]] += 1
            } else {
                testObj[test[i]] = 1;
            }
        }
        for (let j = 0; j < original.length; j++) {
            if (origObj.hasOwnProperty(original[j])) {
                origObj[original[j]] += 1
            } else {
                origObj[original[j]] = 1;
            }
        }
    }
    let sortTestObj = Object.keys(testObj)
        .sort()
        .reduce((accumulator, key) => {
    accumulator[key] = testObj[key];
    return accumulator;
    }, {});

    let sortOrigObj = Object.keys(origObj)
        .sort()
        .reduce((accumulator, key) => {
    accumulator[key] = origObj[key];
    return accumulator;
    }, {});
    
    return JSON.stringify(sortTestObj) === JSON.stringify(sortOrigObj);
};

isAnagram("foefet", "toffee") // true
isAnagram("Buckethead", "DeathCubeK") // true
isAnagram("Twoo", "WooT") // true
isAnagram("dumble", "bumble") // false
isAnagram("ound", "round") // false
isAnagram("apple", "pale") // false