//khai bao voi const
const x =100 ;
console.log("x=",x);
function fn_const(){
    const x = 500;
    console.log ("fn- x=",x);
}
fn_const();
if(x == 100){
    x =3000;
    console.log("if -x=",x);
}
