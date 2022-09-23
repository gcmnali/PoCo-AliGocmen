window.addEventListener('load', (event) => {
    for (let i = 0; i < 100; i++) {
        if(i%35 == 0){
            console.log("PowerCoders"); 
        }
        else if(i%5 == 0){
            console.log("Power");
        }
        else if(i%7 == 0){
            console.log("Coders");
        } 
        else{
            console.log(i);
        }
    }
  });
