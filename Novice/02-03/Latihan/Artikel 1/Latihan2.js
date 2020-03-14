let meetups = [
    {name:'JS', isActive:true, members:450},
    {name:'Angular', isActive:true, members:900},
    {name:'Node', isActive:false, members:900}
];
/* Imperative--Focuses on describing how program operates */
let activeMeetups = [];
for (let i = 0; i < meetups.length; i++){
    let m = meetups[i];
    if (m.isActive){
        activeMeetups.push(m);
    }
} 

console.log(activeMeetups);
/* Output will be array of 2 element where isActive is true */

/* Declarative-- Focuses on what the program should accomlish */
let activeMeetupsFP = [];
activeMeetupsFP = (meetups.filter((m)=>{
    return m.isActive;
}));
console.log(activeMeetupsFP);
/* Output will be array of 2 elements where isActive is true */
