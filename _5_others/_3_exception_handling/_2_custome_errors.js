let nums = [1, 2, 3, 4, ""];
let i;
nums.map((item) => (!item ? (i = nums.indexOf(item)) : null));
nums[i] = "Bawa";
console.log(nums);
