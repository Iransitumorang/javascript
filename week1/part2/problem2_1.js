let bilangan = 20;

console.log(`Bilangan Prima dari ${bilangan} adalah:`);

for(let i = 1; i <= bilangan; i++) {
    
    if(bilangan % i == 0) {
        console.log(i);
    }
}