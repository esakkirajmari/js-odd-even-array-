let array=[1,2,3,4,5,6,7,8,9,10];
console.log(array);

let evenArray=[];
let oddArray=[];

let b=0;
let c=0;

for(i=0;i<array.length;i++){
    if(array[i]%2===0){
        evenArray[b]=array[i];
        b++;
    }
    else{
        oddArray[c]=array[i];
        c++;
    }
}
console.log(evenArray);
console.log(oddArray);