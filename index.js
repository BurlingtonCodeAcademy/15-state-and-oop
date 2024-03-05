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

let currentState = "green";
console.log("You are now in the " + currentState + " state");

function enterState(newState) {
    let validTransitions = states[currentState];
    if (validTransitions.includes(newState)) {
        currentState = newState;
        console.log("You are now in the " + currentState + " state");
    } else {
        throw ("You cannot enter the " + newState + " state from the " + currentState + " state");
    }
}

enterState("yellow");
enterState("red");
enterState("yield");
enterState("red");
enterState("green");