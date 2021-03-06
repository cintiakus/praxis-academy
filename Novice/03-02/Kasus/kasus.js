function decodeTechnoStuff() {  
    totalTaskCount = 0;
    currentTaskNumber = 0;
    updateDisplay();
  
    let n = getRandomIntInclusive(100, 200);
  
    for (i=0; i<n; i++) {
      let taskData = {
        count: getRandomIntInclusive(75, 150),
        text: "This text is from task number " + (i+1).toString() + " of " + n
      };
  
      enqueueTask(logTaskHandler, taskData);
    }
  }
  
  document.getElementById("startButton").addEventListener("click", decodeTechnoStuff, false);