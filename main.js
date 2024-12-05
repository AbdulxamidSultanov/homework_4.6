// ============
// 1-masala:
//  Funksiya yozing, u berilgan sonning juft yoki toq ekanligini aniqlasin.
const juftToq = (a) => (a % 2 == 0 ? "juft son" : "juft son emas");
console.log(juftToq(5));

// ============
// 2-masala:
//  Funksiya yozing, u berilgan sonning musbat, manfiy yoki nol ekanligini aniqlasin.
const userNumberCheck = (a) => {
  if (a > 0) {
    console.log("berilgan son musbat");
  } else {
    console.log("berilgan son manfiy");
  }
  if (a == 0) {
    console.log("kiritilgan son nolga teng");
  }
};

let userInputNumber2 = +prompt("sonni kriting");
userNumberCheck(userInputNumber2);

// ============
// 3-masala:
//  Funksiya yozing, u berilgan ikki sondan kattasini qaytarsin.
const checkBigNumber3 = (a, b) => (a > b ? a : b);
let userInputNumber3 = +prompt("birinchi raqamni kriting");
let userInputNumber3_2 = +prompt("ikkinchi raqamni kriting");
console.log(
  `${checkBigNumber(userInputNumber3, userInputNumber3_2)} eng katta raqam`
);

// ============
// 4-masala:
//  Funksiya yozing, u uchta sondan eng kattasini aniqlasin.
const checkBigNumber4 = (a, b, c) => {
  let maxInputUserNumber;
  if (a > b) {
    maxInputUserNumber = a;
  } else {
    maxInputUserNumber = b;
  }

  if (maxInputUserNumber < c) {
    maxInputUserNumber = c;
  }
  return console.log(maxInputUserNumber);
};
checkBigNumber(1, 4, 2);

// ============
// 5-masala:
//  Funksiya yozing, u berilgan sonning 3 ga bo‘linishini aniqlasin.
const deleniyeBezOstatka = (a) =>
  a % 3 == 0 ? "ha bolinadi" : "yoq bolinmaydi";
let userInputNumber5 = +prompt("son kriting");
console.log(deleniyeBezOstatka(userInputNumber5));

// ============
// 6-masala:
//  Funksiya yozing, u berilgan sonning kvadratini qaytarsin.
const sqrtInputUserNumber = (a) => a ** 2;

// ============
// 7-masala:
//  Funksiya yozing, u ikki sonning ko‘paytmasini hisoblasin.
const twoNumberMulti = (a, b) => a * b;

// ============
// 8-masala:
//  Funksiya yozing, u berilgan sonni 1 dan boshlab o‘sha songacha bo‘lgan barcha sonlarning yig‘indisini hisoblasin.
const cycleFunction8 = (a) => {
  let sum8;
  for (let i = 1; a <= i; i++) {
    sum8 += i;
  }
  return sum8;
};

// ============
// 9-masala:
//  Funksiya yozing, u 1 dan 10 gacha bo‘lgan sonlarning ko‘paytmasini qaytarsin.
const cycleFunction9 = (a) => {
  let multi9;
  for (let i = 1; a <= i; i++) {
    multi9 += i;
  }
  return multi9;
};

// ============
// 10-masala:
//  Funksiya yozing, u berilgan sondan boshlab 1 ga kamaytirib chiqaradi.
const counterBackwardsToOne = (a) => {
  for (let i = 1; i <= a; a--) {
    console.log(a);
  }
  return a;
};

let userInputFirstNumber = +prompt("son kriting");
console.log(counterBackwardsToOne(userInputFirstNumber));

// ============
// 11-masala:
//  Funksiya yozing, u berilgan sonni faqat juft bo‘lsa ekranga chiqaradi.
const coupleOutputNumber = (a) => (a % 2 == 1 ? a : "");
console.log(coupleOutputNumber(5));
// ============
// 12-masala:
// Funksiya yozing, u berilgan ikki sondan kattasini ternary operator yordamida aniqlasin.
const ternaryOperatorInFunction = (a, b) => (a > b ? a : b);
let userInputFirstNumber12 = +prompt("son kriting");
let userInputSecondNumber12 = +prompt("son kriting");
console.log(
  ternaryOperatorInFunction(userInputFirstNumber12, userInputSecondNumber12)
);

// ============
// 13-masala:
//  Funksiya yozing, u berilgan son 5 ga va 3 ga bo‘linishini tekshiradi.
const divNumber = (a) => {
  if (a % 5 == 0 && a % 3 == 0) {
    console.log("berilgan son 3 va 5 bolinadi");
  }
  return console.log();
};
// ============
// 14-masala:
//  Funksiya yozing, u berilgan sonning kvadrati va kubini qaytaradi.
const outputDoubleNumbers = (a) => {
  let sqrt = a ** 2;
  let thirdDegree = a ** 3;
  let result = `${sqrt} ${thirdDegree}`;
  return result;
};

let userInputFirstNumber14 = +prompt("son kriting");
let userInputSecondNumber14 = +prompt("son kriting");
console.log(
  outputDoubleNumbers(userInputFirstNumber14, userInputSecondNumber14)
);
// ============
// 15-masala:
//  Funksiya yozing, u 1 dan 100 gacha bo‘lgan faqat juft sonlarni ekranga chiqaradi.
const outputCoupleNumbers = (i) => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
  return i;
};

console.log(outputCoupleNumbers(i));
// ============
// 16-masala:
//  Funksiya yozing, u 1 dan n gacha bo‘lgan toq sonlarni ekranga chiqaradi.
const outputNumbers = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};
let userInputFirstNumber16 = +prompt("son kriting");
console.log(outputNumbers(userInputFirstNumber16));
// ============
// 17-masala:
//  Funksiya yozing, u kiritilgan sonning faktorialini hisoblaydi.
const factorialCalculate = (a) => {
  let multi17 = 1;
  for (a; a >= 1; a--) {
    multi17 *= a;
  }
  return multi17;
};

let userInputFirstNumber17 = +prompt("son kriting");
console.log(factorialCalculate(userInputFirstNumber17));

// ============
// 18-masala:
//  Funksiya yozing, u kiritilgan sonni 10 ga bo‘lgandagi qoldiqni qaytaradi.
const divNumberToTen = (a) => {
  let b = a % 10;
  return b;
};

// ============
// 19-masala:
//  Funksiya yozing, u ikki sonni o‘zaro solishtirib, qaysi biri katta ekanligini ekranga chiqaradi.
const differenceTwoNumber = (a, b) => {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
};
console.log(differenceTwoNumber(a, b));
// ============
// 20-masala:
//  Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini qaytaradi.
const sumOfStockNumbers = () => {
  let sum20 = 0;
  for (let a = 1; a <= 50; a++) {
    sum20 += a;
  }
  return sum20;
};
// ============
// 21-masala:
//  Funksiya yozing, u berilgan sonning kvadrat ildizini hisoblaydi (math metodlari ishlatilmasin).
const sqrtCalculate = (a) => {
  let sqrt21 = Math.sqrt(a);
  return sqrt21;
};

let userInputFirstNumber21 = +prompt("son kriting");
sqrtCalculate(userInputFirstNumber21);
// ============
// 22-masala:
//  Funksiya yozing, u ikkita sonning o‘rta arifmetik qiymatini hisoblaydi.
const calculateDoubleNumbers = (a, b) => {
  let sum22 = 0;
  let counter = 0;
  let result;
  if (a > b) {
    for (b; b <= a; b++) {
      sum22 += b;
      counter++;
      result = sum22 / counter;
    }
    return result;
  } else {
    for (a; a <= b; a++) {
      sum22 += a;
      counter++;
      result = sum22 / counter;
    }
    return result;
  }
};
// ============
// 23-masala:
//  Funksiya yozing, u berilgan son musbatmi yoki manfiy ekanligini if orqali aniqlasin.
const checkNumberWithIf = (a) => {
  if (a > 0) {
    console.log("Berilgan son musbat!");
  } else {
    console.log("Berilgan son manfiy");
  }
};

// ============
// 24-masala:
//

// ============
// 25-masala:
//  Funksiya yozing, u ikki sonni qo‘shadi, lekin agar sonlardan biri manfiy bo‘lsa, natijaga 10 qo‘shadi.
const doubleNumbersSum = (a, b) => {
  let sum25 = 0;
  if (a < 0 && b < 0) {
    sum25 = a + b + 10;
  } else {
    sum25 = a + b;
  }
};
// ============
// 26-masala:
//  Funksiya yozing, u berilgan ikkita sonni qo‘shadi va ko‘paytiradi, natijalarni alohida qaytaradi.
const sumMultiDoubleNumbers = (a, b) => {
  let sum26 = 0;
  let multi26 = 1;
  sum26 = a + b;
  multi26 = a * b;
};
// ============
// 28-masala:
//  Funksiya yozing, u foydalanuvchi kiritgan son 7 ga bo‘linishini aniqlaydi.
const checkNumber = (a) => {
  if (a % 7 == 0) {
    console.log("son bolinadi");
  } else {
    console.log("son bolinmaydi");
  }
};
console.log(checkNumber(14));
// ============
// 29-masala:
//  Funksiya yozing, u ikki sonni ko‘paytiradi, lekin agar sonlardan biri 0 bo‘lsa, natija 1 bo‘ladi.
const multiTwoNumbersAndCheck = (a, b) => {
  let multi29 = a * b;
  if (multi29 == 0) {
    multi29 = 1;
  }
  return multi29;
};
// ============
// 30-masala:
// Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning modulini hisoblaydi
const checkUserInputNumbers = (a, b) => {
  let firstNumber30 = Math.abs(a);
  let secondNumber30 = Math.abs(b);
  let result30 = `${firstNumber30} ${secondNumber30}`;
  return result30;
};

// ============
// 31-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonni faqat manfiy bo‘lsa ekranga chiqaradi.
const outputUserInputNumber = (a) => {
  if (a > 0) {
    console.log(a);
  }
};

let firstNumber31 = +prompt("sonni kriting");
console.log(outputUserInputNumber(firstNumber31));
// ============
// 32-masala:
//  Funksiya yozing, u 1 dan 100 gacha bo‘lgan sonlardan faqat 5 ga karrali bo‘lganlarni ekranga chiqaradi.
const outputNumberOneToHundred = (a) => {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
};
console.log(outputNumberOneToHundred());
// ============
// 33-masala:
//  Funksiya yozing, u berilgan ikki sonning yig‘indisini hisoblaydi, agar natija juft bo‘lsa, "Juft" deb qaytaradi.
const outputSum = (a, b) => {
  let sum33 = a + b;
  if (sum33 % 2 == 0) {
    console.log("Berilgan son juft");
  }
};
let firstNumber33 = +prompt("son kriting");
console.log(outputSum(firstNumber33));
// ============
// 34-masala:
//  Funksiya yozing, u foydalanuvchi kiritgan sonning bo‘luvchilarini ekranga chiqaradi.
const userInputCheck = (a) => {
  if (isNaN(a)) {
    console.log("faqat son kriting");
  }
  console.log(`${a} soninig boluvchilari: `);
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      console.log(i);
    }
  }
};

let firstNumber34 = +prompt("son kriting");
console.log(userInputCheck(firstNumber34));
// ============
// 35-masala:
// Funksiya yozing, u berilgan sondan kattalik bo‘yicha kichik bo‘lgan barcha toq sonlarni chiqaradi.
const outputBigNumbers = (a) => {
  if (isNaN(a)) {
    console.log("faqat son kriting");
    return;
  }
  for (a; a >= 1; a--) {
    if (a % 2 != 0) {
      console.log(a);
    }
  }
};
let firstNumber35 = +prompt("son kriting");
outputBigNumbers(firstNumber35);

// ============
// 36-masala:
//  Funksiya yozing, u berilgan sonni 1 dan 20 gacha bo‘lgan sonlarga bo‘lib, har birining qoldig‘ini chiqaradi.
const outputRemainderDividedNumber = (a) => {
  if (isNaN(a)) {
    console.log("faqat son kriting");
    return;
  }
  let divided36;
  for (let i = 1; i <= 20; i++) {
    divided36 = a % i;
    console.log(divided36);
  }
};
let firstNumber36 = +prompt("son kriting");
outputRemainderDividedNumber(firstNumber36);

// ============
// 37-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonning barcha bo‘luvchilarini hisoblaydi va yig‘indisini qaytaradi.
const returnAllDividedNumbersSum = (a) => {
  if (isNaN(a)) {
    console.log("iltimos faqat son kriting");
    return;
  }
  let counter37 = 0;
  let sum37 = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      counter37++;
      sum37 += i;
    }
  }
  console.log(counter37);
  return sum37;
};
let firstNumber37 = +prompt("son kriting");
console.log(returnAllDividedNumbersSum(firstNumber37));
// ============
// 38-masala:
//  Funksiya yozing, u foydalanuvchi kiritgan sonni faqat juft bo‘lsa kvadratini hisoblaydi.
const outputSqrCoupleNumbers = (a) => {
  if (isNaN(a)) {
    console.log("faqat son kriting");
    return;
  }
  let multi38;
  if (a % 2 == 0) {
    multi38 = a ** 2;
    return multi38;
  }
};

let firstNumber38 = +prompt("sonni kriting");
console.log(outputSqrCoupleNumbers(firstNumber38));
// ============
// 39-masala:
//  Funksiya yozing, u berilgan son 100 dan katta bo‘lsa, uni ikki barobar oshiradi, aks holda 10 qo‘shadi.
const checkInputNumber = (a) => {
  if (isNaN(a)) {
    console.log("iltimos son kriting");
    return;
  }
  let multi39;
  let sum39;
  if (a > 100) {
    multi39 = a ** 2;
    return multi39;
  } else {
    sum39 = a + 10;
    return sum39;
  }
};

let firstNumber39 = +prompt("son kriting");
console.log(checkInputNumber(firstNumber39));
// ============
// 40-masala:
// Funksiya yozing, u foydalanuvchi kiritgan sonning barcha raqamlarini birma-bir chiqaradi.
const outputAllNumbers = (a) => {
  if (isNaN(a)) {
    console.log("iltimos son kriting");
    return;
  }
  for (let i = 1; i <= a; i++) {
    console.log(i);
  }
};

let firstNumber40 = +prompt("son kriting");
outputAllNumbers(firstNumber40);

// ============
// 41-masala:
//Funksiya yozing, u foydalanuvchi kiritgan ikki sonning o‘zaro karrali ekanligini aniqlaydi.
const checkTwoNumbers = (a, b) => {
  if (isNaN(a)) {
    console.log("iltimos faqat son kriting");
    return;
  }
  if (a % b == 0) {
    console.log("sonlar karali");
  } else {
    console.log("sonlar ozaro karali emas");
  }
};

let firstNumber41 = +prompt("son kriting");
let secondNumber41 = +prompt("son kriting");
checkTwoNumbers(firstNumber41, secondNumber41);
// ============
// 42-masala:
//Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisini hisoblaydi.
const calculateInputUserNumbers = (a) => {
  if (isNaN(a)) {
    console.log("iltimos faqat son kriting");
    return;
  }
  let sum42 = 0;
  for (let i = 1; i <= a; i++) {
    sum42 += i;
  }
  return sum42;
};

let firstNumber42 = +prompt("son kriting");
calculateInputUserNumbers(firstNumber42);
// ============
// 43-masala:
//Funksiya yozing, u 1 dan foydalanuvchi kiritgan sondan katta bo‘lgan barcha sonlarni ekranga chiqaradi.
const outputAboveNumbers = (a, b) => {
  if (isNaN(a, b) && a > 1) {
    console.log("iltimos birdan katta bolgan faqat musbat son kriting");
    return;
  }
  for (a; a <= a + b; a++) {
    console.log(a);
  }
};

let firstNumber43 = +prompt("son kriting");
let secondNumber43 = +prompt("nechiga kop bolsin");
outputAboveNumbers(firstNumber43, secondNumber43);
// ============
// 44-masala:
//Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning bo‘linmasini hisoblaydi (qoldiqsiz).
const calculateWithoutDivisable = (a, b) => {
  if (isNaN(a, b) && a > 0 && b > 0) {
    console.log("iltimos noldan katta bolgan faqat musbat son kriting");
    return;
  }
  let divided44 = a % b;
  return divided44;
};
let firstNumber44 = +prompt("son kriting");
console.log(calculateWithoutDivisable(firstNumber44));
// ============
// 45-masala:
//Funksiya yozing, u 1 dan n gacha bo‘lgan barcha sonlarning kvadratlarini ekranga chiqaradi.
const outputSqrNumbers = (a) => {
  let sqrt45;
  for (let i = 1; i <= a; i++) {
    sqrt45 = i ** 2;
    console.log(sqrt45);
  }
};
// ============
// 46-masala:
//Funksiya yozing, u foydalanuvchi kiritgan sonning o‘z-o‘ziga karraligini aniqlaydi.(ishlanmaydi)

// ============
// 47-masala:
//Funksiya yozing, u foydalanuvchi kiritgan sonning har bir raqamini alohida kvadratga oshiradi va chiqaradi.
const outputAllInputSqrtNumbers = (a) => {
  if (isNaN(a) && a > 0) {
    console.log("iltimos noldan katta bolgan faqat musbat son kriting");
    return;
  }
  let sqrt47;
  for (let i = 1; i <= a; i++) {
    sqrt47 = i ** 2;
    console.log(sqrt47);
  }
  return;
};
let firstNumber47 = +prompt("son kriting");
outputAllInputSqrtNumbers(firstNumber47);
// ============
// 48-masala:
//Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning faqat toqlari yig‘indisini hisoblaydi.
const calculateAllNotCoupleNumbers = (a) => {
  let sum47 = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      sum47 += i;
      return47;
    }
  }
};
// ============
// 49-masala:
//Funksiya yozing, u foydalanuvchi kiritgan sonni teskari tartibda chiqaradi.
const outputReverseUserInputNumbers = (a) => {
  if (isNaN(a)) {
    console.log("iltimos faqat son kriting");
    return;
  }
  if (a > 0) {
    for (a; 1 <= a; a--) {
      console.log(a);
    }
  } else {
    for (a; -1 >= a; a++) {
      console.log(a);
    }
  }
};

let firstNumber49 = +prompt("son kriting");
outputReverseUserInputNumbers(firstNumber49);
// ============
// 50-masala:
//Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisi 10 dan katta yoki kichikligini aniqlaydi.
const checkInputUserNumbers = (a, b) => {
    if (isNaN(a)) {
        console.log("iltimos faqat son kriting");
        return;
      }
    let sum50 = a + b
      if(sum50 > 10){
        console.log("kritilgan sonning raqamlari yigindisi ondan kotta")
      }else {
        console.log("kritilgan sonning raqamlari yigindisi ondan katta")
      }
}