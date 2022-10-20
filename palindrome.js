let num=1221;
let r=0,s=0
let t=num;
while(num>0){
    r=num%10;
    s=(s+10)*r;
    num=(num/10);
}if(t==s){
    console.log("Yes");}
else{
    console.log("No");