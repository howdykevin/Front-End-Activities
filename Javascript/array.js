var arr=['one','two','three'];
// console.log(arr);
var arr2=['one',['2.1','2.2','2.3'],'three',21];
// console.log(arr2[1][1]);



// for(var index in arr){
//     // console.log(index);
//     console.log(arr[index])
// }

// for(var index in arr2){
//     // console.log(index);
    
//     //to check whether an element in an array is a string or an array, use constructor
//     console.log(arr2[index].constructor)

//     //to single out the array, use if condition. Remember javascript is Case senstive. array != Array
//     // if(arr2[index].constructor == Array){
//     //     console.log(arr2[index]);
//     // }

//     //single out the string elements.Same for Number etc
//     // if(arr2[index].constructor == String){
//     //     console.log(arr2[index]);
//     // }


// }

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);

    
}

var i=2;
// while(i>0){
//     console.log("hello");
//     i--;
// }

do{
    i+=2;
    console.log(i);
}while(i<20);