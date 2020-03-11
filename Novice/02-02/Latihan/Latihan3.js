function Hero(name, Kelas) {
    this.name = name;
    this.Kelas = Kelas;
}
 
Hero.prototype.greet = function() {
    return `hello ${this.name}`;
}
let hero2 = new Hero('Cintia', 6);
console.log(hero2.greet());
console.log(hero2); 