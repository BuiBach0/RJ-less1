//tham so mac dinh
// tham so tuy chon
function add(num1, num2=1){
    return num1+num2;
}
//su dung
console.log(add(100));//tham so mac dinh num 2 = 1
console.log(add(100,900));

function show(name){
    name=name || "bach";
    console.log("welcome to",name);
}
show();
show("Yuno-BB");