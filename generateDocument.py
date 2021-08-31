# O(m * (n+m)) time | O(1) space
# of characters and m is the length of the document
def generateDocument(characters, document):
    for character in document:
        documentFrequency = countCharacterFrequency(character,document)
        charactersFrequency = countCharacterFrequency(character, characters)
        if documentFrequency > charactersFrequency:
            return False

    return True



def countCharacterFrequency(character, target):
    frequency = 0
    for char in target:
        if char == character:
            frequency += 1
        
    return frequency


# O(c * (n + m)) time | O(c) space
# the length of the document, and c is the nujmber of the unique characters in the document

def generateDocument2(characters, document):
    alreadyCounted = set()

    for character in document:
        if character in alreadyCounted:
            continue

        documentFrequency = countCharacterFrequency(character, document)
        charactersFrequency = countCharacterFrequency(character, characters)
        if documentFrequency > charactersFrequency:
            return False
        
        alreadyCounted.add(character)
    
    return True