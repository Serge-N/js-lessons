for (let number = 1; number <= 100; number++) {

    
    if (number % 3 == 0) {
        console.log("Fuzz" + "\n");
        
        if(number%5==0){
            console.log("FuzzBuzz" + "\n");
        }
    } else if (number % 5 == 0){
        console.log("Buzz"+"\n");
    } else {
        console.log(number+"\n")
    }

}