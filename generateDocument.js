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