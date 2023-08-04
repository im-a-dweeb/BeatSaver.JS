async function getMapInfo(mapID) {
    const response = await fetch(`https://api.beatsaver.com/maps/id/${mapID}`);
    const data = await response.json()
    return data;
}

module.exports = getMapInfo

