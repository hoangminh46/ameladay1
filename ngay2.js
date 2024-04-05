//Ngay2

// Mang

//bai1

function findMin(arr) {
  let min = arr[0];
  arr.map((item) => {
    if (item < min) {
      min = item;
    }
  });
  console.log(min);
}
findMin([5, 7, 4, 2, 6, 5, 3]);

//bai2
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

//bai 4

function findTotal(num) {
  let total = 0;
  for (i = 0; i <= num; i++) {
    if (i % 5 == 0) {
      total += i;
    }
  }
  console.log(total);
}
findTotal(100);

//bai6

function sortString(arr) {}

sortString(["abc", "aa", "b", "bc", "cde", "ac"]);

//bai7

function randNumber(arr) {
  let randomNumber = arr[Math.floor(Math.random() * arr.length)];

  console.log(randomNumber);
}
randNumber([2, 5, 1, 7, 3]);

//bai 13

function checkArr(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  let sortNewArr = newArr.sort().reverse();
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== sortNewArr[i]) {
      return false;
    }
  }
  return true;
}

console.log(checkArr([8, 8, 6, 6, 4, 2]));

//object

//bai4
function getLengthObj(obj) {
  console.log(Object.keys(obj).length);
}
getLengthObj({
  name: "minh",
  age: 25,
  email: "minh@gmail.com",
});

//bai5

function getUser(arr) {
  let newUsers = [];
  arr.map((user) => {
    if (user.age > 25 && user.isStatus == true) {
      newUsers.push(user);
    }
  });
  console.log(newUsers);
}
getUser([
  {
    name: "minh",
    age: 26,
    isStatus: true,
  },
  {
    name: "thao",
    age: 28,
    isStatus: false,
  },
]);

//Bai TS

function resetData(obj) {
  if (typeof obj !== "object") {
    return false;
  }

  const resetValue = (value) => {
    if (typeof value === "string") {
      return "";
    } else if (typeof value === "number") {
      return 0;
    } else if (typeof value === "boolean") {
      return false;
    } else if (Array.isArray(value)) {
      return value.map(resetValue);
    } else if (typeof value === "object") {
      return resetData(value);
    } else {
      return value;
    }
  };

  const resetObj = {};
  for (let key in obj) {
    resetObj[key] = resetValue(obj[key]);
  }

  return resetObj;
}

const obj = {
  name: " trung",
  age: 18,
  isStatus: true,
  a: {
    a: [1, 2, 3],
    b: {
      c: 2,
      d: {
        e: 8,
        f: {
          g: [1, 3, 3],
        },
      },
    },
  },
  c: ["a", "b", "c"],
};

console.log(resetData(obj));
