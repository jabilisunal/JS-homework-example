//!Task-1 Verilmis arraydə 100-dən kiçik 3-ə bölünən ədədlərin cəmini tapmaq lazimdir.
// let arr=[90,32,33];
// let sum=0;
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i]<100 && arr[i]%3==0)
// sum +=arr[i];
// }
// console.log(sum);

//? Task-2 // Verilmis arraydə mənfi və müsbət ədədlərin sayini tapmaq lazimdir.
// let arr = [1, 23, 43, -34, 45, -12, -43, 54, -44,32,432,-123,-123,-12312];
// let minusCount = 0;
// let pluseCount=0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     minusCount++;
//     // console.log(arr[i]);
//   } else {
//     pluseCount++;
//   }
// }
// console.log( "musbet ededlerin sayi : "+pluseCount);
// console.log( "menfi ededlerin sayi : "+minusCount);


//!Task-3 Verilmis arrayde cut ededlerin en boyuyunu index-ni tapan alqoritm yazin.
// let arr = [123,99,6,12,43,79,102,23,35,57];
// let maxEded=0;
// let index=0;
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i]%2==0){
//     if(maxEded<arr[i]){
//       maxEded=arr[i]
//       index=i
//     }
//   }
// }
// console.log(index);

//? Task-4 Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını tapan proqram tərtib edin.
// let arr = [100,55,62,10];
// let minEded=Infinity;
// let maxEded=0;
// let edediOrta=0;
// let sum=0;
// for (let i = 0; i < arr.length; i++) {
//   if(maxEded<arr[i]){
//     maxEded=arr[i];
//   }
//   if(minEded>arr[i]){
//     minEded=arr[i];
//   }
// }
// edediOrta=(minEded+maxEded)/2
// console.log(edediOrta);

//!Task-5 Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub-olmadigini yoxlayin.
// let arr = [123,99,6,12,43,79,102,23,35,57];
// let count=0;
// let edediOrta=0;
// let sum=0;
// let maxEded=0;
// let minEded=Infinity;
// let sumMaxandMin=0;
// for (let i = 0; i < arr.length; i++) {
//   sum+=arr[i];
//   edediOrta=sum/arr.length;
//   if(maxEded<arr[i]){
//     maxEded=arr[i];
//   }
//   if(minEded>arr[i]){
//     minEded=arr[i];
//   }

// }

// console.log(sum)
// console.log(edediOrta)
// sumMaxandMin=minEded+maxEded;
// console.log(sumMaxandMin)

// if(edediOrta>sumMaxandMin){
//   console.log("Ededi orta boyukdur...")
// }else{
//   console.log("Ededi orta kicikdir...")
// }