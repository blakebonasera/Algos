def classPhotos(redShirtHeights, blueShirtsHeights):
    redShirtHeights.sort(reverse=True)
    blueShirtsHeights.sort(reverse=True)

    shirtColorInFirstRow = 'RED' if redShirtHeights[0] < blueShirtsHeights[0] else 'BLUE'
    for idx in range(len(redShirtHeights)):
        redShirtHeight = redShirtHeights[idx]
        blueShirtsHeight = blueShirtsHeights[idx]

        if shirtColorInFirstRow == 'RED':
            if redShirtHeight >= blueShirtsHeight:
                return False
        else:
            if blueShirtsHeight >= redShirtHeight:
                return False
    return True

redShirtHeights = [5, 8, 1, 3, 4]
blueShirtsHeights = [6,9,2,4,5]

print(classPhotos(redShirtHeights, blueShirtsHeights))