var startTime = new Date().getTime();
var getEndTime = () => {
    var tempEndTime = new Date().getTime();
    var second = (tempEndTime - startTime)/1000
    return `took ${second} sec...to finish\n`
}

console.log('1: start App', getEndTime())
setTimeout(()=>{
    console.log('2: setTimeout', getEndTime())
}, 1000)
console.log('3: End App', getEndTime())

// console -> Process Order:  1 -> 3 -> 2