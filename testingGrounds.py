def reverseWordOrder(string):
    var wordArr = string.split(" ")
    var returnString = ""
    for(var i = wordArr.length-1; i > 0; i--)
                returnString += wordArr[i]
        returnString += " "
    return returnString;
