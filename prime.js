let n=13;
count = 0;
for(let i=1;i<=n;i++){
if(n%i==0){
count++;
}
}
if(count==2){
console.log(n+" "+"is prime");
}else{
console.log(n+" "+"is not prime");
}