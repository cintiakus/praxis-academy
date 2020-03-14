const f = (m) => () => console.log(m)
const f2 = (f3) => f3()
f2(f('Cintia Kus Herawati'))
