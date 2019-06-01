var nums = [1,4,6,2,3,5,9];
var evens = [];
var odds = [];

for (var i = 0; i < nums.length; i++) {

    if ((nums[i] % 2) == 0) {
        evens.push(nums[i]);
    }
    else {
        odds.push(nums[i]);
    }
}
console.log("even numbers" + evens);
console.log("odd numbers"+ odds);