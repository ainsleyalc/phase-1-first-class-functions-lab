// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
return array.slice(0,2)
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function(array){
    return array.slice(2,4)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers)

const createFareMultiplier = function(a){
    return function (kk){
        return a * kk
    }
}
//const Doubler = createFareMultiplier()
//function fareDoubler(fare){
  //  return fare * 2
//}

const fareDoubler = function (){
    let fare = 10 
    return createFareMultiplier(fare)(2)
}


const fareTripler = function (a){

    return createFareMultiplier(a)(3)
}



function selectDifferentDrivers(array,func){
    return func(array)
}