// !!!!!!!!!!!!!!!!!!!!!!!!!! PROBLEM NO 4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// https://www.codewars.com/kata/514b92a657cdc65150000006/javascript

// ====================== METHODE 1 ==========================

// function solution(number){

//     let sum = 0
//     if(number <= 0){

//         return 0
//     }

//     // ======================= conditions ===========================

//     for(let i = 0 ; i < number ; i++ ){

//         if(i % 3 == 0 || i % 5 ==0 ){

//             sum += i

//         }
        
//     }


//     // ======================= conditions ===========================


//     return sum 

// }



// ===================== METHODE 2 ======================


// function solution(number){

//     let sum = 0
//     let i = 0

//     //======================= condition ===================

//     while(i < number){

//         if(i % 3 ==0 || i % 5 == 0 ){

//             sum += i 

//         }
//         i++

//     }


//     //======================= condition ===================

//     return sum 
// }



// ============================= METHODE 3 ====================

function solution(number){
    let result = 0


    //  =============== condition ==================

    let array_of_numbers = [...Array(number).keys()]

    array_of_numbers.filter((num)=>{

        if(num % 3 == 0 || num % 5 == 0){

            result += num 
        }
    })



    //  =============== condition ==================

    return result 
}



console.log(solution(20))