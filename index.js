let a = 5
let b = 6
let c = 7
let s = (a+b+c)/2
area = Math.sqrt(s*((s-a)*(s-b)*(s-c)))
console.log(area)


filename = "krishna.php"
console.log(filename.split('.').pop());
filename = "sharma.php"
console.log(filename.split('.').pop());


function sumTriple (x, y){
if (x== y ) {
    return 3*(x+y);
}
else{
    return(x+y);
}
}
console.log(sumTriple(10,20));
confirm.log(sumTriple(10, 10));