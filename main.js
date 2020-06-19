// Contributors Sam Campbell, Alicia Williams, Sharnetta Lamar, Erin Mehaffey

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

const kataList = document.querySelector('.kataList')



/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**/

let kataOneTitle = document.createElement('h2')
let resultsKataOne = document.createElement('p')

kataList.append(kataOneTitle)
kataOneTitle.append('Kata 1')
kataList.append(resultsKataOne)

   for (let counter = 1; counter <= 20; counter += 1) {
       if (counter <= 19) {
        resultsKataOne.append(counter + ', ')
       } else {
        resultsKataOne.append(counter)
       }
   }

/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/

let kataTwoTitle = document.createElement('h2')
let resultsKataTwo = document.createElement('p')

kataList.append(kataTwoTitle)
kataTwoTitle.append('Kata 2')
kataList.append(resultsKataTwo)

 //titleElement.append('Kata 2')
   for (let counter2 = 2; counter2 <= 20; counter2 += 2) {
       if (counter2 <= 18) {
            resultsKataTwo.append(counter2 + ', ')
       } else {
            resultsKataTwo.append(counter2)       
       }
     
   }

/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/

let kataThreeTitle = document.createElement('h2')
let resultsKataThree = document.createElement('p')

kataList.append(kataThreeTitle)
kataThreeTitle.append('Kata 3')
kataList.append(resultsKataThree)

 for (let counter3 = 1; counter3 <= 20; counter3 += 2) {
     if (counter3 < 19) {
         resultsKataThree.append(counter3 + ', ')
     } else {
        resultsKataThree.append(counter3)
     }
 }

/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/

let kataFourTitle = document.createElement('h2')
let resultsKataFour = document.createElement('p')

kataList.append(kataFourTitle)
kataFourTitle.append('Kata 4')
kataList.append(resultsKataFour)

 for (let counter4 = 5; counter4 <= 100; counter4 += 5) {
     if (counter4 < 100) {
        resultsKataFour.append(counter4 + ', ')
     } else {
        resultsKataFour.append(counter4)
     }
 }

/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/

 let kataFiveTitle = document.createElement('h2')
 let resultsKataFive = document.createElement('p')

 kataList.append(kataFiveTitle)
 kataFiveTitle.append('Kata 5')
 kataList.append(resultsKataFive)

 for (let counter5 = 1; counter5 <= 100; counter5 += 1) {
   let counter5IsPerfectSquare = Number.isInteger(Math.sqrt(counter5))

   if (counter5IsPerfectSquare) {
       if (counter5 < 100) {
            resultsKataFive.append(counter5 + ', ')
       } else {
            resultsKataFive.append(counter5)
       }
   }
 }

/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/

 let kataSixTitle = document.createElement('h2')
 let resultsKataSix = document.createElement('p')

 kataList.append(kataSixTitle)
 kataSixTitle.append('Kata 6')
 kataList.append(resultsKataSix)

 for (let counter6 = 20; counter6 >= 1; counter6 -= 1) {
     if (counter6 > 1) {
        resultsKataSix.append(counter6 + ', ')
     } else {
        resultsKataSix.append(counter6)
     }
   
 }

/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/

 let kataSevenTitle = document.createElement('h2')
 let resultsKataSeven = document.createElement('p')

 kataList.append(kataSevenTitle)
 kataSevenTitle.append('Kata 7')
 kataList.append(resultsKataSeven)
 for (let counter = 20; counter >= 1; counter -= 2) {
    if (counter > 2) {
        resultsKataSeven.append(counter + ', ')
    } else {
        resultsKataSeven.append(counter)
    }
 }

/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/

 let kataEightTitle = document.createElement('h2')
 let resultsKataEight = document.createElement('p')

 kataList.append(kataEightTitle)
 kataEightTitle.append('Kata 8')
 kataList.append(resultsKataEight)

 let counter8 = 19
 while (counter8 >= 1) {
   if (counter8 > 1) {
        resultsKataEight.append(counter8 + ', ')
   } else {
        resultsKataEight.append(counter8)
   }

   counter8 -= 2
 }


/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/

 let kataNineTitle = document.createElement('h2')
 let resultsKataNine = document.createElement('p')

 kataList.append(kataNineTitle)
 kataNineTitle.append('Kata 9')
 kataList.append(resultsKataNine)

 let counter9 = 100
 while (counter9 >= 5) {
    if (counter9 > 5) {
        resultsKataNine.append(counter9 + ', ')
    } else {
        resultsKataNine.append(counter9)
    }

   counter9 -= 5
 }


/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/

 let kataTenTitle = document.createElement('h2')
 let resultsKataTen = document.createElement('p')

 kataList.append(kataTenTitle)
 kataTenTitle.append('Kata 10')
 kataList.append(resultsKataTen)
 
   for (let counter = 100; counter >= 1; counter -= 1) {
     let counter10IsPerfectSquare = Number.isInteger(Math.sqrt(counter))

     if (counter10IsPerfectSquare) {
         if (counter > 1) {
            resultsKataTen.append(counter + ', ')
         } else {
             resultsKataTen.append(counter)
         }
       
     }
   }

/** KATA 11 ⮕
***
*** Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
***
***/

let kataElevenTitle = document.createElement('h2')
let resultsKataEleven = document.createElement('p')

kataList.append(kataElevenTitle)
kataElevenTitle.append('Kata 11')
kataList.append(resultsKataEleven)

  for (let counter = 0; counter < sampleArray.length; counter += 1) {
      if (counter < (sampleArray.length - 1)) {
          resultsKataEleven.append(sampleArray[counter] + ', ')
      } else {
          resultsKataEleven.append(sampleArray[counter])
      }
  }

/** KATA 12 ⮕
***
*** Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
***
***/

let kataTwelveTitle = document.createElement('h2')
let resultsKataTwelve = document.createElement('p')

kataList.append(kataTwelveTitle)
kataTwelveTitle.append('Kata 12')
kataList.append(resultsKataTwelve)

  for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (sampleArray[counter] % 2 === 0) {
        if (counter < sampleArray.length - 1) {
            resultsKataTwelve.append(sampleArray[counter] + ', ')
        } else {
            resultsKataTwelve.append(sampleArray[counter])
        }
    }
  }
 //.slice(0, -1)

/** KATA 13 ⮕
***
*** Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
***
***/

let kataThirteenTitle = document.createElement('h2')
let resultsKataThirteen = document.createElement('p')

kataList.append(kataThirteenTitle)
kataThirteenTitle.append('Kata 13')
kataList.append(resultsKataThirteen)

let tempArray = []

  for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (sampleArray[counter] % 2 != 0) {
        tempArray.push(sampleArray[counter])
    }
  }

  for (let tcount = 0; tcount < tempArray.length; tcount += 1) {
      if (tcount < tempArray.length - 1) {
        resultsKataThirteen.append(tempArray[tcount] + ', ')
      } else {
        resultsKataThirteen.append(tempArray[tcount])
      }
  }

/** KATA 14 ⮕
***
*** Display the square of each element in sampleArray. (219961, 570025, …, 222784)
***
***/

let kataFourteenTitle = document.createElement('h2')
let resultsKataFourteen = document.createElement('p')

kataList.append(kataFourteenTitle)
kataFourteenTitle.append('Kata 14')
kataList.append(resultsKataFourteen)

  for (let counter = 0; counter < sampleArray.length; counter += 1) {
    let sqrtArray = sampleArray[counter] * sampleArray[counter]
    if (counter < sampleArray.length - 1) {
        resultsKataFourteen.append(sqrtArray + ',   ')
    } else {
        resultsKataFourteen.append(sqrtArray)
    }
    
  }

/** KATA 15 ⮕
***
*** Display the sum of all the numbers from 1 to 20
***
***/

let kataFifteenTitle = document.createElement('h2')
let resultsKataFifteen = document.createElement('p')

kataList.append(kataFifteenTitle)
kataFifteenTitle.append('Kata 15')
kataList.append(resultsKataFifteen)

let numberTotal = 0

  for (let counter = 0; counter <= 20; counter += 1) {
    numberTotal = numberTotal + counter
  }

  resultsKataFifteen.append(numberTotal)

/** KATA 16 ⮕
***
*** Display the sum of all the elements in sampleArray.
***
***/

let kataSixteenTitle = document.createElement('h2')
let resultsKataSixteen = document.createElement('p')

kataList.append(kataSixteenTitle)
kataSixteenTitle.append('Kata 16')
kataList.append(resultsKataSixteen)

let arrayTotal = 0

  for (let counter = 0; counter < sampleArray.length; counter += 1) {
    arrayTotal = arrayTotal + sampleArray[counter]
  }

  resultsKataSixteen.append(arrayTotal)

/** KATA 17 ⮕
***
*** Display the smallest element in sampleArray.
***
***/

let kataSeventeenTitle = document.createElement('h2')
let resultsKataSeventeen = document.createElement('p')

kataList.append(kataSeventeenTitle)
kataSeventeenTitle.append('Kata 17')
kataList.append(resultsKataSeventeen)

resultsKataSeventeen.append(Math.min(...sampleArray))

/** KATA 18 ⮕
***
*** Display the smallest element in sampleArray.
***
***/

let kataEightteenTitle = document.createElement('h2')
let resultsKataEightteen = document.createElement('p')

kataList.append(kataEightteenTitle)
kataEightteenTitle.append('Kata 18')
kataList.append(resultsKataEightteen)

resultsKataEightteen.append(Math.max(...sampleArray))