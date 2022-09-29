//Creating Promise 
async function waitTimeoutPromise() {
    await new Promise( resolve => {
        setTimeout(() => {
            console.log("hello");
            resolve();
        }, 1000)
    })
    console.log("world!");
}
waitTimeoutPromise();