let num=1221;
let num2="";
let t=num + "";
for(let i=t.length-1;i>=0;i--){
num2 += t[i];
}
num2= Number(num2);
if(num2===num){
    console.log("Yes");}
else{
    console.log("No");
}