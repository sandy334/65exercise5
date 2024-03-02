// Write a javascript program to pretend to look like a hacker
// Try to emulate a terminal using javascript logic and it should look to others as if you are hacking a system
// Try to display messages like:
        // Initializing Network
        // Connecting to service...
        // Retreiving username...
        // Username found....
        // Trying a combination of 4.5 Trillion passwords...
        // Password found...
        // Connecting to Facebook...

// Fool your friends into thinking that you are a hacker and have fun
// PROTIP: Try to use a green text on a black background
async function harry() {


    let p1 = new Promise ((resolve, reject) => {

        setTimeout(() => {
     resolve("Initializing hack program")
    },1000)
    })

    let p2 = new Promise ((resolve, reject) => {

        setTimeout(() => {
     resolve("Hacking Ashish username")
    },2000)
    })



    let p3 = new Promise ((resolve, reject) => {

        setTimeout(() => {
     resolve("Username found Ashish")
    },3000)
    })



    let p4 = new Promise ((resolve, reject) => {

        setTimeout(() => {
     resolve("connecting to facebook")
    },4000)
    })



    let c1 = await p1
    console.log(c1)
    let c2 = await p2
    console.log(c2)
    let c3 = await p3
    console.log(c3)
    let c4 = await p4
    console.log(c4)






}
harry()