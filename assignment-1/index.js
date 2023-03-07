// Your code here
let i = 1;

function numberSecuence() {
    console.log(i)

    if (i < 10 ** 6) {
        i++;
        setTimeout(numberSecuence, 0)
    }
}

numberSecuence()

