exports.simulateAsyncTask = () => {
    console.log(`Task Started`);

    setTimeout(function() {
        console.log(`Task completed after 2 seconds`);
    }, 2000);

    console.log(`Task initiated, waiting for completion`);
}