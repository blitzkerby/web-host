// function findSolution(target) {
//     function find(current, history) {
//       if (current == target) {
//         return history;
//       } else if (current > target) {
//         return null;
//       } else {
//         return find(current + 5, `(${history} + 5)`) ??
//                find(current * 3, `(${history} * 3)`);
//       }
//     }
//     return find(1, "1");
//   }
  
// console.log(findSolution(24));





// (2)

// let x = 10;
// let y = 3;

// console.log(x+y);

// let points = 101;

// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);



// let i = 9;


// while (i <= 5){
//   if (i%2 !== 0) console.log(i)
//   i++
// }



// do {
//   if (i%2!==0) console.log(i);
//   i ++ 
// } while (i <= 5);



// while (i < 5){
//   console.log(i);
//   i++;
// }



// const person = {
//   name : "Mosh" ,
//   age : 30 ,
// }

// for (let key in person) {
//   console.log(key , person[key]);
// }

// const colors = ['red','green','blue'];

// for (let index in colors) {
//   console.log(index , colors[index]);
// }


// for (let color of colors)
//   console.log(color);


// let i = 0 ;
// while (i <= 10) {
//   if (i%2===0){
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// }


// let number = max( 113, 113 )
// console.log(number)

// function max(a , b) {
//   return a > b? a : b;
// }



// console.log(isLandscape(300,600))
// function isLandscape(width,height) {
//   return (width > height)
// }



// function fizzBuzz(input){
//   text = ""
  
//   if (typeof input == 'number' ) {

//     if (input%3 == 0){
//       text += "Fizz"
//     }

//     if (input%5 == 0){
//       text += "Buzz"
//     }

//     if (text !== ""){
//       return text
//     } else {
//       return input
//     }
    
//   }else{
//     return "Not a number"
//   }
// }

// console.log(fizzBuzz(15))



// function checkSpeed(speed){
//   const speedLimit = 75
  
//   if (speed < 75)
//     return "OK"
//   points = ((speed - 70)/ 5)

//   if (points >= 12) {
//     return "LICENSE SUSPENDED"
//   }

//   return points
// }

//console.log(checkSpeed(75))



// showNumbers(10)

// function showNumbers(limit){
//   for (let i = 1 ; i < limit/2 + 1 ; i++){
//     console.log(i*2 - 1 , "ODD") 
//     console.log(i*2     , "EVEN")
//   }
// }

// function showNumbers2(limit){
//   for (let i = 0 ; i <= limit ; i++) {
//     const message = (i % 2 === 0) ? "Even" : "Odd"
//     console.log(i, message);
//   }
// }

// 27th March 2024
// ----------------------------------------------------------------

// (1)
// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermissions = 4;

// myPermissions = myPermissions | writePermission;

// let message =
//   (myPermissions & readPermission) ? 'yes' : 'no';

// console.log(message)


// (2)
// let x = (2 + 3) * 4
// console.log(x);


// let a = 'red';
// let b = 'blue';

// console.log(a);
// console.log(b);


// let temp = a

// a = b
// b = temp

// console.log(a);
// console.log(b);


// let hour = 10

// if (hour >= 6 && hour < 12)
// { 
//   console.log(" Guten Morg' ") 
// }
// else if (hour == 12)
// {
//   console.log(" Guten Tag ")
// }
// else
// {
//   console.log(" Guten Abend ")
// }

// role = 0

// switch (role) {
//   case 1 :
//     console.log("Role = 1")
//     break
//   case 2 :
//     console.log("Role = 2")
//     break
//   default:
//     console.log("Unknown")
//     break
// }

// if      (role === "guest")      console.log("Guest");
// else if (role === "moderator")  console.log("Moderator");
// else                            console.log("Unknown User")


// for (let i = 0 ; i < 5 ; i=i+3){
//   console.log("Hello world!")
// }
// >>>>>>> 9b82871 (changed the name of folder)

// const movie = {
//   title       : "a"   ,
//   releaseYear : 2018  ,
//   rating      : 4.5   ,
//   director    : 'b'   ,
// };

// showProperties(movie);

// function showProperties(obj){
//   for (let key in obj)
//   {
//       console.log(key + " : " + obj[key]);
//   }
// }




// console.log(sum(10))

// function sum(limit){
//   let sum = 0 ;

//   for (let i = 0 ; i < limit ; i++)
//   {
//     if (i%3 === 0 || i%5 === 0)
//     {
//       sum += i ;
//     } 
//   }
//   return sum;
// }



// let listOfNumbers = [2, 3, 5, 7, 11];
// console.log(listOfNumbers[2]);      // → 5
// console.log(listOfNumbers[0]);      // → 2
// console.log(listOfNumbers[2 - 1]);  // → 3

// let day1 = {
//   squirrel  : false,
//   events    : ["work" , "touched tree" , "pizza" , "running"]
// }

// console.log(day1.squirrel)
// console.log(day1.wolf)

// day1.wolf = false;
// console.log(day1.wolf)


// let anObj = {
//   left:1 , right:1
// }

// console.log(anObj.left);

// delete anObj.left;
// console.log(anObj.left);
// console.log("left"  in anObj)
// console.log("right" in anObj)

// console.log(Object.keys({x: 0, y: 0, z: 2}));
// console.log(Object.values({x: 0, y: 0, z: 2}));

// let journal = [];

// function addEntry(events, squirrel) {
//   journal.push({events, squirrel});
// }

// addEntry(
//   [
//   "work", "touched tree", 
//   "pizza", "running",  "television"
//   ], false);

// addEntry(
//   [
//     "work", "ice cream",
//     "cauliflower", "lasagna",
//     "touched tree", "brushed teeth"
//   ], false);

// addEntry(
//   [
//     "weekend", "cycling",
//     "break", "peanuts", "beer"
//   ], true);


// function phi(table){
//   return ( table[3] * table[0] - table[2] * table[1] ) /
//     Math.sqrt(  (table[2] + table[3]) *
//                 (table[0] + table[1]) *
//                 (table[1] + table[3]) *
//                 (table[0] + table[2]) ) ;
// }

// console.log(phi( [76,9,4,1] ))

// function tableFor(event, journal) {
//   let table = [0, 0, 0, 0];
//   for (let i = 0; i < journal.length; i++) {
//     let entry = journal[i], index = 0;
//     if (entry.events.includes(event)) index += 1;
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
//   }
//   return table;
// }

// console.log(tableFor("pizza", JOURNAL));
// // → [76, 9, 4, 1]



// const marks = [100,80,70];

// console.log(calculateGrade(marks))

// function calculateGrade(marks) {
//   sum = 0 
//   for (let mark of marks){
//     sum += mark
//   }

//   avg = sum / marks.length

//   if      (               avg <   59) { return "F"}
//   else if (avg >= 60  &&  avg <   69) { return "D"}
//   else if (avg >= 70  &&  avg <   79) { return "C"}
//   else if (avg >= 80  &&  avg <   89) { return "B"}
//   else                                { return "A"}
// }


// function showStars(rows){
//   for (let row = 1 ; row <= rows ; row++){
//     let pattern = "";
//     for (let i = 0 ; i < row ; i++){
//       pattern += "*"
//     }
//     console.log(pattern)
//   }
// }


// function showStars2(rows) {
//   let pattern = "";

//   for (let i = 0 ; i < rows ; i++) 
//   {
//     pattern += "*"
//     console.log(pattern)
//   }

// }


// showStars(10)
// showStars2(10)


// function get_primes(limit)
// {
//   let Divisors_sum = 1 + limit
//   let Divisors_count = 0
//   let Divisors_dict = {}

//   function check(s) {
//     for (const[key,value] of Object.entries(Divisors_dict)) {
//       if      (s == i) { return 0  }
//       else if (s == j) { return -1 }
//     }
//     return 1
//   }

//   function exhaust(s,i){
//     if (Math.floor(i) - i == 0) 
//     {
//       Divisors_dict[Math.floor(s)] = i
//       Divisors_sum += Math.floor(s) + Math.floor(i)

//       if   (s != i) { Divisors_count += 2 }
//       else          { Divisors_count += 1 }

//       let i_new = i / s

//       if (i_new != 1){ exhaust(s,i_new) }
//     }
//   }

//   function findDivisors(x){
//     Divisors_dict[x] = 1
//     Divisors_count += 2

//     for (let i = 0 ; i < x ; i++){
//       s = x/i

//       if (Math.floor(s) - s == 0) { valid = check(s) }
//       else                        { valid = 0 }

//       if      (valid ==  1) { exhaust(s,i) }
//       else if (valid == -1) { return 0 }

//       valid = 0
//     } 
//   }
//   findDivisors(limit)

// }

function showPrimes(limit){
  for (let number = 2; number <= limit; number++){
    if (isPrime(number)) console.log(number)
  }
}


function isPrime(number){
  for (let factor = 2; factor < number; factor ++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}

showPrimes(100)




