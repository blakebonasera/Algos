function classPhoto(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => b - a);
    blueShirtHeights.sort((a,b) => b - a);

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : "BLUE";
    for (let idx = 0; idx < redShirtHeights.length; idx++) {
        const redShirtHeight = redShirtHeights[idx];
        const blueShirtHeight = blueShirtHeights[idx];

        if (shirtColorInFirstRow === 'RED'){
            if (redShirtHeight >= blueShirtHeight) return false;
        } else if (redShirtHeight <= blueShirtHeight) return false; 
    }
    return true;
}

const redShirtHeights = [5, 8, 1, 3, 4];
const blueShirtsHeights = [6,9,2,4,5];

console.log(classPhoto(redShirtHeights,blueShirtsHeights));