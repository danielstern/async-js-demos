function delayedValue(duration, value) {

    return new Promise(resolve=>
        setTimeout(()=>resolve(value), duration
    ));

}

const messages = [
    "Hello",
    "How Can I Help You?",
    "We offer amazing products",
    "Currently, we are closed indefinetely",
    "Come back later"
]

function* asyncGen(){

    for (let i = 0; i < 5; i++) {

        yield delayedValue(1000 * i, messages[i]);

    }

}