let bilangan = 20;

console.log(`Bilangan Prima dari ${bilangan} adalah:`);

for(let i = bilangan; i >= 1; i--) {
    
    if(bilangan % i == 0) {
        console.log(i);
    }
}