// Non-http part of the lab
var dt = require('./myDate');

function asyncCounter() {
    let counter = 0;

    function incrementCounter() {
        setTimeout(() => {
            console.log(counter);
            counter++;
    
            if (counter <= 10) {
                console.log(`Incrementing now...`);
                incrementCounter();
            }
        }, 3000); // Set delay of 3000 seconds
    }

    incrementCounter();
}

asyncCounter();