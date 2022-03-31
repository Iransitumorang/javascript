let n = 5
let isLampOn = 'Lampu Mati'

for (let i = 1; i <= n; i++) {

  if (n % i === 0) {
    if (isLampOn === 'Lampu Menyala') {
      isLampOn = 'Lampu Mati';
    } else {
      isLampOn = 'Lampu Menyala';
    }
    console.log(isLampOn);
  }
}