let display = document.getElementById("display");
document.addEventListener("keydown", (event) => {
    let key = event.key;
    
     
        if (key=== "Enter"){
        display.value = eval(display.value);

            
}
       else if(key === "Backspace"){
            display.value = display.value.toString().slice(0,-1); 
}
       else if (key === "+" || "-" || "/" || "*"){
            display.value += key;

       }
 
      else if (!isNaN(parseInt(key))) {
                display.value += key;
            }
           
    
});

