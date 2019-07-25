const myProblem = ( ) => {
    var str = "x<sup>2</sup>";
    var myA = document.getElementById("varA").value;
    var myB = document.getElementById("varB").value;
    var a = parseFloat(myA);
    var b = parseFloat(myB);

// CASE 1 (X + A)(X + B)  F: POS  OI: POS  L: POS
    if (a > 0 && b > 0) {
        return (str + "+" + (a + b) + "x" + "+" + (a*b));
    } else 
// CASE 2 (X - A)(X + B)  F: POS  OI: POS  L: NEG
    if (a < 0 && b > 0 && a+b > 0) {
            return (str + "+" + (a + b) + "x" + (a*b));
    } else 
// CASE 3 (X - A)(X + B)  F: POS  OI: NEG  L: NEG
    if (a < 0 && b > 0 && a+b < 0) {
            return (str + (a + b) + "x" + (a*b));
    } else 
// CASE 4 (X + A)(X - B)  F: POS  OI: POS  L: NEG
    if (a > 0 && b < 0 && a+b > 0) {
        return (str + "+" + (a + b) + "x" + (a*b));
    } else 
// CASE 5 (X + A)(X - B)  F: POS  OI: NEG  L: NEG
    if (a > 0 && b < 0 && a + b < 0) {
        return (str + (a + b) + "x" + (a*b));
    } else 
// CASE 6 (X - A)(X - B)  F: POS  OI: NEG  L: POS
    if (a < 0 && b < 0 && a+b < 0) {
        return (str + (a + b) + "x" + "+" + (a*b));
    } else 
// CASE 7 (X + 0)(X + B)  F: POS  OI: POS  L: POS
    if (a === 0 && b > 0) {
        return (str + "+" + b + "x");
    } else 
// CASE 8 (X + 0)(X - B)  F: POS  OI: NEG  L: ZER0
    if (a === 0 && b < 0) {
        return (str + b + "x");
    } else 
// CASE 9 (X + A)(X + 0)  F: POS  OI: POS  L: ZER0
    if (a > 0 && b === 0) {
        return (str + "+" + a + "x");
    } else {
// CASE 10 (X - A)(X + 0)  F: POS  OI: NEG  L: ZER0
    if (a < 0 && b === 0) {
        return (str + a + "x");
    } else 
//CASE 11 (X + 0)(X + 0)  F: POS  OI: ZERO  L: ZERO
    if (a === 0 && b === 0) {
        return (str);
    } else 
// CASE 12 (X - A)(X + B), but  A AND B ARE OPPOSITES: F: POS  OI: ZERO  L: NEG
  if (a != 0 && b != 0  &&  (a === (-1 * b) ||  b === (-1 * a))) {
        return (str +  a*b);
    } else 
        return "Please Re-Enter Your Values";}
}
const myCalc = ( ) => {
document.getElementById("foilAnswer").innerHTML = myProblem( );
};
// REAL NUMBERS DEFINITION
// const definition = () => {
//     return 
//         ("A 'Real' number is any number that is real;opposite of fake. Any number you can think of is defined as a 'Real' Number.
//         Later math courses will teach you about 'Imaginary' Numbers. 
//         Imaginary numbers are numbers that are a part of theoretical math that uses values for numbers that don't exist in real-life;hence the term 'imaginary'. Part of the conflict and the reason to decipher between these two different types of numbers seems pretty common-sense. It is important to know what types of calculations you are making. This is most prevelant and neccesary in the Math, Engineering,Physics, and the Sciences as well.  So, until you reach Algebra 2, just consider a Real Number is ANY number you can think of, like fractions, decimals, percents, whole numbers, integers, etc.");
// }
// const definitionReveal = () => {
//     document.getElementById("definition").innerHTML = definition();
// };
