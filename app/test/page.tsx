"use client";

import { useEffect } from "react";

const Page = () => {
  // //сделать кастомный resolve
  // let test = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(2);
  //   }, 1000);
  // });

  // test.then((value) => {
  //   console.log(value);
  // });

  // class Test {
  //   constructor() {
  //     console.log("test");
  //   }
  // }

  // let el = new Test()

  // function test2(executor) {
  //   let value;
  //   let isResolved = false;

  //   // Функция для разрешения промиса
  //   const resolve = (val) => {
  //     value = val;
  //     isResolved = true;
  //   };

  //   // Выполняем переданную функцию executor
  //   executor(resolve);

  //   // Возвращаем объект с методом then
  //   return {
  //     then: (callback) => {
  //       if (isResolved) {
  //         callback(value);
  //       }
  //     }
  //   };
  // }

  // // Использование функции test2
  // let test3 = new test2((resolve) => {
  //   resolve(2);
  // });

  // // Выводим значение через метод then
  // test3.then((value) => {
  //   console.log(value); // 2
  // });

  //сначала надо посчитать дупликаты
  // var removeDuplicates = function (nums) {
  //   //const uniqueSet = new Set(nums)
  //   //nums.splice(0, nums.length, ...uniqueSet)

  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === nums[i + 1]) {
  //       nums.splice(i, 1);
  //       i--;
  //     }
  //   }
  //   return nums.length;
  // };

  //removeDuplicates([1, 1, 2]);
  //removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

  //убрать копии которые встечаются больше 2-х раз
  // var removeDuplicates = function (nums) {
  //   for (let i = 0; i < nums.length; i++) {
  //     let exists = nums.filter((num) => num === nums[i]).length>2;
  //     if(exists){
  //       let newArr = [nums[i],nums[i]]
  //       let firstIndex = nums.indexOf(nums[i]);
  //       let lastIndex = nums.lastIndexOf(nums[i]);
  //       nums.splice(firstIndex, lastIndex-firstIndex+1, ...newArr);
  //     }
  //   }

  //   return nums.length
  // };

  // var maxProfit1 = function (prices) {
  //   let buyPrice = prices[0];
  //   let profit = 0;

  //   for (let i = 1; i < prices.length; i++) {
  //     if (buyPrice > prices[i]) {
  //       buyPrice = prices[i];
  //     }

  //     profit = Math.max(profit, prices[i] - buyPrice);
  //   }

  //   return profit;
  // };

  // function maxProfit(prices) {
  //   let maxProfit = 0;
  //   for (let i = 1; i < prices.length; i++) {
  //     if (prices[i] > prices[i - 1]) {
  //       maxProfit += prices[i] - prices[i - 1];
  //     }
  //   }
  //   return maxProfit;
  // }

  // var isPalindrome = function(s) {
  //   let test = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  //   return test === test.split('').reverse().join('')
  // };

  // var isIsomorphic = function (s, t) {
  //   // Base case: for different length of two strings...
  //   if (s.length != t.length) return false;
  //   // Create two maps for s & t strings...
  //   const map1 = [256];
  //   const map2 = [256];

  //   // Traverse all elements through the loop...
  //   for (let idx = 0; idx < s.length; idx++) {
  //     // Compare the maps, if not equal, return false...
  //     if (map1[s.charAt(idx)] != map2[t.charAt(idx)]) return false;
  //     // Insert each character if string s and t into seperate map...
  //     map1[s.charAt(idx)] = idx + 1;
  //     map2[t.charAt(idx)] = idx + 1;
  //   }

  //   return true; // Otherwise return true...
  // };
  // isIsomorphic("egg", "add");

  // var wordPattern = function (pattern, s) {
  //   // Map to map characters from the pattern to words in the string
  //   const charToWord = new Map();
  //   // Map to map words in the string back to characters in the pattern
  //   const wordToChar = new Map();
  //   // Split the string 's' into words
  //   const words = s.split(" ");
  //   // Index to track the current position in the pattern
  //   let i = 0;

  //   // Iterate through each word in the string 's'
  //   for (const word of words) {
  //     // If the number of words exceeds the length of the pattern, return false
  //     if (i === pattern.length) {
  //       return false; // More words than characters in the pattern
  //     }

  //     // Get the current character from the pattern
  //     const currentChar = pattern[i];

  //     // If the current character and word are seen for the first time, add them to the maps
  //     if (!charToWord.has(currentChar) && !wordToChar.has(word)) {
  //       charToWord.set(currentChar, word);
  //       wordToChar.set(word, currentChar);
  //     } else {
  //       // If the current character or word is already in the maps, check for consistency
  //       if (
  //         charToWord.get(currentChar) !== word ||
  //         wordToChar.get(word) !== currentChar
  //       ) {
  //         return false; // Inconsistent mapping
  //       }
  //     }
  //     ++i; // Move to the next character in the pattern
  //   }
  //   // Ensure that the entire pattern has been matched with the string
  //   return i === pattern.length;
  // };

  // var groupAnagrams = function (strs) {
  //   let ans = {};

  //   for (let s of strs) {
  //     let key = s.split("").sort().join("");
  //     if (!ans[key]) {
  //       ans[key] = [];
  //     }
  //     ans[key].push(s);
  //   }

  //   return Object.values(ans);
  // };

  // groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); //[["bat"],["nat","tan"],["ate","eat","tea"]]

  //   var merge = function(intervals) {

  //     intervals.sort((a, b) => a[0] - b[0]);
  //     const merged = [];
  //     let prev = intervals[0];

  //     for (let i = 1; i < intervals.length; i++) {
  //         let interval = intervals[i];
  //         if (interval[0] <= prev[1]) {
  //             prev[1] = Math.max(prev[1], interval[1]);
  //         } else {
  //             merged.push(prev);
  //             prev = interval;
  //         }
  //     }

  //     merged.push(prev);
  //     return merged;
  // };

  //   merge([[1,3],[2,6],[8,10],[15,18]]) //[[1,6],[8,10],[15,18]]

  // var addTwoNumbers = function (l1, l2) {

  //   let summ = +l1.reverse().join("") + +l2.reverse().join("");
  //   return `${summ}`.split("").reverse()
  // };

 

  return <></>;
};

export default Page;
