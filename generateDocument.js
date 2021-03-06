// O(m * (n+m)) time | O(1) space
// of characters and m is the length of the document
function generateDocument(characters, document){
    for (const character of document) {
        const documentFrequency = countCharacterFrequency(character, document);
        const charactersFrequency = countCharacterFrequency(character, characters);
        if (documentFrequency > charactersFrequency) return false;
    }

    return true;
}

function countCharacterFrequency(character, target) {
    let frequency = 0;
    for (const char of target) {
        if ( char === character) frequency++;
    }
    return frequency
}

// O(c * (n + m)) time | O(c) space
// the length of the document, and c is the nujmber of the unique characters in the document
function generateDocument(characters, document) {
    const alreadyCounted = new Set();

    for (const character of document) {
        if (character in alreadyCounted) continue;

        const documentFrequency = countCharacterFrequency(character, document);
        const charactersFrequency = countCharacterFrequency(character, characters);
        if (documentFrequency > charactersFrequency) return false;
        alreadyCounted.add(character);
    }
    return true
}


// O(n + m) time | O(c) space
// the length of the document, and c is the number of unique charcters in the characters string
function generateDocument(characters, document) {
    const characterCounts = {};

    for ( const character of characters) {
        if(!(character in characterCounts)) characterCounts[character] = 0;

        characterCounts[character]++;
    }

    for (const character of document) {
        if (!(character in characterCounts) || characterCounts[character] === 0) return false;

        characterCounts[character]--;
    }

    return true;
}