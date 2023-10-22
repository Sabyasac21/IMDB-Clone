function randonWithinRange(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);

}
for (let i = 0; i<10; i++)
console.log(randonWithinRange(30, 71));