//Pelatihan JS #21: Metode objek String--trim() dan templat string
function fiveLine(s) {
  // Menghapus spasi di kedua sisi parameter
  s = s.trim();

  // Inisialisasi variabel untuk menyimpan hasil
  let result = "";

  // Loop untuk membentuk pola string sesuai permintaan
  for (let i = 1; i <= 5; i++) {
    // Menggunakan templat string untuk menggabungkan string
    result += `${s.repeat(i)}\n`;
  }

  // Mengembalikan hasil
  return result.trim();
}

// Contoh penggunaan
console.log(fiveLine("  a"));
// Output: "a\naa\naaa\naaaa\naaaaa"

console.log(fiveLine("  xy "));
// Output: "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"

//#22: Training Time
const shuffleIt = (arr, ...swaps) => {
  // Iterate through each swap array
  swaps.forEach(([index1, index2]) => {
    // Use destructuring to swap elements at the specified indices
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  });

  // Return the modified array
  return arr;
};

// Examples
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]));
// Output: [1, 3, 2, 4, 5]

console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]));
// Output: [1, 3, 2, 5, 4]

console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));
// Output: [1, 3, 5, 4, 2]

//Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()
function infiniteLoop(arr, d, n) {
  for (var i = 1; i <= n; i++) {
    if (d === "left") {
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    }
    if (d === "right") {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
}

//Training JS #24: methods of arrayObject---splice() and slice()
function threeInOne(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    const sum = arr.slice(i, i + 3).reduce((acc, num) => acc + num, 0);
    result.push(sum);
  }
  return result;
}

// Contoh penggunaan
console.log(threeInOne([1, 2, 3])); // Output: [6]
console.log(threeInOne([1, 2, 3, 4, 5, 6])); // Output: [6, 15]
console.log(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: [6, 15, 24]
console.log(threeInOne([1, 3, 5, 2, 4, 6, 7, 7, 7])); // Output: [9, 12, 21]

//Training JS #25: methods of arrayObject---reverse() and sort()
function sortIt(arr) {
  return arr.slice().sort((a, b) => {
    const countA = arr.filter((num) => num === a).length;
    const countB = arr.filter((num) => num === b).length;

    if (countA === countB) {
      return b - a;
    } else {
      return countA - countB;
    }
  });
}

// Contoh penggunaan
console.log(sortIt([1, 1, 1, 2, 2, 3])); // Output: [3, 2, 2, 1, 1, 1]
console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3])); // Output: [3, 3, 3, 2, 2, 2, 1, 1, 1]
console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6])); // Output: [3, 2, 1, 6, 6, 5, 5, 4, 4]

//Training JS #26: methods of arrayObject---map()
function isolateIt(arr) {
  return arr.map((str) => {
    if (str.length % 2 === 0) {
      const mid = str.length / 2;
      return str.slice(0, mid) + "|" + str.slice(mid);
    } else {
      const mid = Math.floor(str.length / 2);
      return str.slice(0, mid) + "|" + str.slice(mid + 1);
    }
  });
}

// Contoh penggunaan
console.log(isolateIt(["abcd", "efgh"])); // Output: ["ab|cd", "ef|gh"]
console.log(isolateIt(["abcde", "fghij"])); // Output: ["ab|de", "fg|ij"]
console.log(isolateIt(["1234", "56789"])); // Output: ["12|34", "56|89"]

//Training JS #27: methods of arrayObject---filter()
function countGrade(scores) {
  const result = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };

  scores.forEach((score) => {
    if (score === 100) {
      result.S++;
    } else if (score < 100 && score >= 90) {
      result.A++;
    } else if (score < 90 && score >= 80) {
      result.B++;
    } else if (score < 80 && score >= 60) {
      result.C++;
    } else if (score < 60 && score >= 0) {
      result.D++;
    } else if (score === -1) {
      result.X++;
    }
  });

  return result;
}

// Contoh penggunaan
console.log(countGrade([50, 60, 70, 80, 90, 100])); // Output: {S: 1, A: 1, B: 1, C: 2, D: 1, X: 0}
console.log(countGrade([65, 75, 85, 85, 95, 100, 100])); // Output: {S: 2, A: 1, B: 2, C: 2, D: 0, X: 0}
console.log(countGrade([-1, -1, -1, -1, -1, -1])); // Output: {S: 0, A: 0, B: 0, C: 0, D: 0, X: 6}

//Training JS #28: methods of arrayObject---every() and some()
function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // Mengubah elemen menjadi string dan membaliknya
    const reversed = String(arr[i]).split("").reverse().join("");

    // Memeriksa apakah elemen sekarang dan elemen berikutnya adalah pasangan cermin
    if (reversed === String(arr[i + 1])) {
      return [arr[i], arr[i + 1]];
    }
  }

  // Jika tidak ditemukan pasangan cermin
  return [-1, -1];
}

// Contoh penggunaan
console.log(mirrorImage([11, 22, 33, 33, 22, 11])); // Output: [33, 33]
console.log(mirrorImage([454, 86, 57, 75, 16, 88])); // Output: [57, 75]
console.log(mirrorImage([454, 0, 57, 0, 16, 88])); // Output: [-1, -1]

//Training JS #29: methods of arrayObject---concat() and join()
function bigToSmall(arr) {
  // Menggunakan flat untuk membuat array satu dimensi
  const flatArray = arr.flat();

  // Menggunakan sort untuk mengurutkan array secara descending
  const sortedArray = flatArray.sort((a, b) => b - a);

  // Menggunakan join untuk menggabungkan elemen dengan separator ">"
  const result = sortedArray.join(">");

  return result;
}

// Contoh penggunaan
console.log(
  bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // Output: "6>5>4>3>2>1"
console.log(
  bigToSmall([
    [1, 3, 5],
    [2, 4, 6],
  ])
); // Output: "6>5>4>3>2>1"
console.log(bigToSmall([[1, 1], [1], [1, 1]])); // Output: "1>1>1>1>1"

//Training JS #30: methods of arrayObject---reduce() and reduceRight()
function tailAndHead(arr) {
  const result = arr
    .reduce((acc, curr, index, array) => {
      if (index < array.length - 1) {
        const currentNumber = curr;
        const nextNumber = array[index + 1];
        const tail = Number(String(currentNumber).slice(-1));
        const head = Number(String(nextNumber).charAt(0));
        acc.push(tail + head);
      }
      return acc;
    }, [])
    .reduce((a, b) => a * b, 1);

  return result;
}

// Contoh penggunaan
console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78])); // Output: 532350
console.log(tailAndHead([1, 2, 3, 4, 5])); // Output: 945
console.log(tailAndHead([111, 2345, 66, 78, 900])); // Output: 7293
console.log(tailAndHead([35456, 782, 569, 2454, 875])); // Output: 12012

//Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
const blackAndWhite = (arr) =>
  `It's a ${
    !Array.isArray(arr)
      ? `fake`
      : arr.includes(5) && arr.includes(13)
      ? `black`
      : `white`
  } array`;

//Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n) {
  // Konversi number menjadi string
  const numStr = n.toString();

  // Temukan posisi titik desimal
  const decimalIndex = numStr.indexOf(".");

  // Hitung jumlah digit di sebelah kiri dan kanan titik desimal
  const digitsLeft = decimalIndex;
  const digitsRight = numStr.length - decimalIndex - 1;

  // Terapkan metode sesuai aturan soal
  if (digitsLeft < digitsRight) {
    return Math.ceil(n);
  } else if (digitsLeft > digitsRight) {
    return Math.floor(n);
  } else {
    return Math.round(n);
  }
}

// Contoh penggunaan
console.log(roundIt(3.45)); // Output: 4
console.log(roundIt(34.5)); // Output: 34
console.log(roundIt(34.56)); // Output: 35

//Training JS #33: methods of Math---max() min() and abs()
function maxMin(arr1, arr2) {
  // Hitung selisih nilai pada setiap indeks arr1 dan arr2
  const differences = arr1.map((value, index) => Math.abs(value - arr2[index]));

  // Temukan nilai maksimum dan minimum dari selisih tersebut
  const maxValue = Math.max(...differences);
  const minValue = Math.min(...differences);

  // Kembalikan hasil dalam bentuk array
  return [maxValue, minValue];
}

// Contoh penggunaan
console.log(maxMin([1, 3, 5], [9, 8, 7])); // Output: [8, 2]
console.log(maxMin([1, 10, 100, 1000], [0, 0, 0, 0])); // Output: [1000, 1]
console.log(maxMin([10, 20, 30, 40], [111, 11, 1, -111])); // Output: [151, 9]

//Training JS #34: methods of Math---pow() sqrt() and cbrt()
function cutCube(volume, n) {
  return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
}

//Training JS #35: methods of Math---log() and its family
const thinkingAndTesting = (number, base) =>
  number - Math.pow(base, Math.floor(Math.log(number) / Math.log(base)));

//Training JS #36: methods of Math---kata author's lover:random()
function rndCode() {
  function getRandomChar(charSet) {
    return charSet[~~(charSet.length * Math.random())];
  }

  const uppercaseLetters = "ABCDEFGHIJKLM";
  const numbers = "0123456789";
  const symbols = "~!@#$%^&*";

  return (
    getRandomChar(uppercaseLetters) +
    getRandomChar(uppercaseLetters) +
    numbers[~~(numbers.length * Math.random())] +
    numbers[~~(numbers.length * Math.random())] +
    numbers[~~(numbers.length * Math.random())] +
    numbers[~~(numbers.length * Math.random())] +
    getRandomChar(symbols) +
    getRandomChar(symbols)
  );
}

// Contoh penggunaan
for (let i = 0; i < 5; i++) {
  console.log(rndCode());
}

//Training JS #36: methods of Math---kata author's lover:random()
function rndCode() {
  function getRandomChar(charSet) {
    return charSet[~~(charSet.length * Math.random())];
  }

  const uppercaseLetters = "ABCDEFGHIJKLM";
  const numbers = "0123456789";
  const symbols = "~!@#$%^&*";

  return (
    getRandomChar(uppercaseLetters) +
    getRandomChar(uppercaseLetters) +
    getRandomChar(numbers) +
    getRandomChar(numbers) +
    getRandomChar(numbers) +
    getRandomChar(numbers) +
    getRandomChar(symbols) +
    getRandomChar(symbols)
  );
}

// Contoh penggunaan
for (let i = 0; i < 5; i++) {
  console.log(rndCode());
}

//Training JS #37: Unlock new weapon---RegExp Object
function countAnimals(animals, count) {
  const result = [];

  count.forEach((animal) => {
    const regex = new RegExp(animal, "g");
    const matches = animals.match(regex) || [];
    result.push(matches.length);
  });

  return result;
}

// Contoh penggunaan
console.log(countAnimals("dog,cat", ["dog", "cat"])); //=> [1, 1]
console.log(countAnimals("dog,cat", ["dog", "cat", "pig"])); //=> [1, 1, 0]
console.log(countAnimals("dog,dog,cat", ["dog", "cat"])); //=> [2, 1]
console.log(countAnimals("dog,dog,cat", ["pig", "cow"])); //=> [0, 0]

//Training JS #38: Regular Expression--"^","$", "." and test()
function findSimilarity(str, word) {
  const words = str.split(" ");
  const similarWords = [];

  for (const w of words) {
    if (
      w.length === word.length &&
      w[0] === word[0] &&
      w.slice(-1) === word.slice(-1)
    ) {
      similarWords.push(w);
    }
  }

  return similarWords.join(" ");
}

// Contoh penggunaan
console.log(findSimilarity("bag dog dig dot doog dogs", "dog")); // should return "dog dig"
console.log(findSimilarity("bag dog dig dot doog dogs", "dig")); // should return "dog dig"
console.log(findSimilarity("bag dog dig dot doog dogs", "dot")); // should return "dot"
console.log(findSimilarity("bag dog dig dot doog dogs", "god")); // should return ""

//Training JS #39: Regular Expression--"?", "*", "+" and "{}"
const regex = /^-?9.*0{4,}$/;

console.log(regex.test("90000")); // true
console.log(regex.test("-90000")); // true
console.log(regex.test("900000000")); // true
console.log(regex.test("91230000")); // true
console.log(regex.test("-91230000")); // true

console.log(regex.test("90001")); // false
console.log(regex.test("9000")); // false
console.log(regex.test("91230")); // false
console.log(regex.test("1-90000")); // false
console.log(regex.test("-90000123")); // false

//Training JS #40: Regular Expression--"|", "[]" and "()"
var rex = /https?:\/\/[a-z0-9.]+\.(?:com|net)/gi;

//Training JS #41: Regular Expression--"\"
var reg = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/g;

//Training JS #42: Regular Expression--( ?: ), ( ?= ) and ( ?! )
var gex = /\d(?=(\d{3})+$)/g;
function addCommas(money, reg) {
  //coding the use of regex here...
  return money.replace(reg, (x) => x + ","); //like this
}
