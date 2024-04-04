// Buoi 1

//bai1
function checkStringExist(a, b) {
  let arr = a.split(" ");
  let result = arr.includes(b);
  console.log(result);
}
checkStringExist("Amela A Beta", "Beta");
checkStringExist("Amela A Beta", "B");

// bai2

function shortenString(str) {
  let newStr = str.slice(0, 8).concat("...");
  console.log(newStr);
}
shortenString("Xin chào các bạn");

// bai3
function repeatString(str) {
  let result = str.repeat(10);
  console.log(result);
}
repeatString("minh");

// bai4
function repeatString2(str) {
  let result = (str + "-").repeat(10).slice(0, -1);
  console.log(result);
}
repeatString2("minh");

// bai5
function repeatString3(str, n) {
  if (n <= 1) {
    console.log("sai gia tri n");
  } else {
    let result = (str + "-").repeat(n).slice(0, -1);
    console.log(result);
  }
}
repeatString3("minh", 5);

//bai6
function reverseString(str) {
  let result = str.split("").reverse().join("");
  console.log(result);
}
reverseString("minh");

//bai7
function checkString(str) {
  let newStr = str.replace(/\s/g, "").toLowerCase();
  let arr = newStr.split("");
  let result = true;
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - (i + 1)]) {
      result = false;
      break;
    }
  }
  console.log(result);
}
checkString("RaCe cAr");

//bai 8
function checkUppercaseString(str) {
  console.log(str === str.toUpperCase());
}
checkUppercaseString("MInh");

// Buoi 2

function max2Number(arr) {
  let newArr = arr.sort();
  let result;
  for (i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] !== newArr[i + 1]) {
      result = newArr[i + 1];
      break;
    }
  }
  console.log(result);
}
max2Number([1, 3, 4, 1, 3, 1, 2, 5]);

//object
var user = {
  name: "Minh",
  age: 24,
};

function getKey(obj) {
  console.log(obj.name);
}

getKey(user);
