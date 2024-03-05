function getPoemTitle(authorUserSelected) {
    let poemTitlesByAuthor = {
        "Robert Frost": "The Wild Horse",
        "Shel Silverstein": "Where the Sidewalk Ends",
        "Jane Austen": "Pride and Prejudice",
        "Sylvia Plath": "The Adventures of Sherlock Holmes",
        "Doctor Seuss": "The Cat In The Hat"
    }
    return poemTitlesByAuthor[authorUserSelected];
}

// console.log(getPoemTitle("Some poet"));

let states = {
    green: ["yellow"],
    yellow: ["red"],
    red: ["green", "yield"],
    yield: ["red"]
}

let currentState = "green"; // set the initial state
console.log("You are now in the " + currentState + " state"); // log the initial state

function enterState(newState) {
    let validTransitions = states[currentState]; // captures valid transitions from the states object above

    // if validTransitions includes the newState, then set currentState to newState
    if (validTransitions.includes(newState)) {
        currentState = newState; // set currentState to newState
        console.log("You are now in the " + currentState + " state"); // log the new state
    } else {
        throw ("You cannot enter the " + newState + " state from the " + currentState + " state"); // throw an error if the newState is not valid
    }
}

enterState("yellow"); // call the function with a valid newState
enterState("red");
enterState("yield");
enterState("red");
enterState("green");