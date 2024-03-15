function swapCase(str) {
    return str.split("").map(char => {
      return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    }).join("");
  }
  
  console.log(swapCase("hE1Lo")); 
 