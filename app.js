// ? Task:Функция isSpecialNumber принимает число и должна определить, является ли оно особенным. Число называется особенным, если оно включает в себя только 0, 1, 2, 3, 4 или 5.

// Заметки:

// Число, передаваемое в функцию, является положительным (n > 0).
// Все однозначные числа в интервале [0:5] считаются особенными числами.
// Примеры:

// isSpecialNumber(2) === "Special!!"

// 2 - это однозначное число в интервале [0:5].
// isSpecialNumber(9) === "NOT!!"

// хоть 9 - это и однозначное число, но оно не находится в интервале [0:5].
// isSpecialNumber(23) === "Special!!"

// все цифры числа 23 находятся в интервале [0:5].
// isSpecialNumber(39) === "NOT!!"

// хоть и есть число 3, которое находится в интервале, но другое число (9) в нем не находится (каждая цифра должна находиться в интервале [0:5]).


// Solution 1

function isSpecialNumber(n) {
    const arrN = n.toString().split('');
    
    if (arrN.length === 1) { 
        if (+arrN[0] > 5) {
          return "NOT!!"; 
        } else {
          return "Special!!"; 
        }
    }
   for (let i = 0; i< arrN.length; i++) {
        if (arrN[i] > 5) {
          return "NOT!!";
        }   
   }
   
    
    return "Special!!";
}
console.log(isSpecialNumber(2));
console.log(isSpecialNumber(23));
console.log(isSpecialNumber(39));
console.log(isSpecialNumber(9));
// ! Explanation: 
