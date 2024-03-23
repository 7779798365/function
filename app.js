// Percentage Grade Assignment 01
//function obtMarks(maths,eng,phy,chem,urdu){
//let sumMarks = maths + eng + phy + chem + urdu
//return sumMarks    
//}
//let sumMarks1 = obtMarks(100,100,100,100,100)
//console.log(sumMarks1)
//function percentage(totalMarks){
//    let per = totalMarks/500*100
//    return per
//}
//let per = percentage(sumMarks1)
//console.log(per)
//if (per >=90){
//    console.log("Grade A+1")
//}else if (per >=80){
//    console.log("Grade A")
//}else if (per >=70){
//    console.log("Grade B")
//}else if (per >=60){
//    console.log("Grade C")
//} else if (per >=50){
//    console.log("Grade D")
//}else{
//    console.log("FAILED")
//}
// Average Assignment 02
//function calculatorAverage(num1 :number, num2: number, num3: number): number{
//    let sum = num1 + num2 + num3;
//    let average = sum / 3;
//    return average;    
//}
//let result = calculatorAverage(20, 40, 80);
//console.log("Average is:", result); 
// Odd and Even Number Assignment 03
function checkOddEvenOnce(number) {
    return (number & 1) ? 'Odd' : 'Even';
}
var num = 70;
console.log(num + ' is ' + checkOddEvenOnce(num));
