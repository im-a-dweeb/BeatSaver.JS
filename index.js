/**
 * Function to fetch map information from the API
 * @param {number} mapID - The ID of the map to fetch (REQUIRED)
 * @returns {Promise<import('./types').MapInfo>} - A promise that resolves to the map information object
 */
async function returnMapInfo(mapID) {
    const response = await fetch(`https://api.beatsaver.com/maps/id/${mapID}`)
    const json = await response.json();
    return json;
}

/**
 * 
 * @param {number} userID - The ID of the user you'd like to search maps (REQUIRED)
 * @param {*} page Page number (NOT-REQUIRED)
 * @returns 
 */

async function returnMapsByID(userID, page = 0) {
    const response = await fetch(`https://api.beatsaver.com/maps/uploader/${userID}/${page}`)
    const json = await response.json();
    return json;
}


/**
 * 
 * @param {boolean} automapper sort for automapper, defaults to false
 * @param {string} sort type of sorting, defaults to FIRST_PUBLISHED | FIRST_PUBLISHED, UPDATED, LAST_PUBLISHED, CURATED, CREATED
 * @returns 
 */
async function returnLatestMaps(automapper = false, sort = "FIRST_PUBLISHED") {
    
    const response = await fetch(`https://api.beatsaver.com/maps/latest?automapper=${automapper}&sort=${sort}`)
    
    const json = await response.json();
    return json;
}

/**
 * 
 * @param {number} page page number to look up, defaults to 0 (REQUIRED)
 */
async function returnMostPlayed(page = 0) {
    const response = await fetch(`https://api.beatsaver.com/maps/plays/${page}`)
    const json = await response.json();
    return json;
}

/**
 * 
 * @param {number} userID User ID to look up (REQUIRED)
 * @returns 
 */

async function returnUserByID(userID) {
    const response = await fetch(`https://api.beatsaver.com/users/id/${userID}`)
    const json = await response.json();
    return json;
}

async function returnUserByName(name) {
    const response = await fetch(`https://api.beatsaver.com/users/name/${name}`)
    const json = await response.json();
    return json;
}

/**
 * 
 * @param {boolean} automapper Filter AutoMapper | default > FALSE
 * @param {boolean} chroma Filter Chroma | default > FALSE
 * @param {boolean} cinema Filter Cinema | default > FALSE 
 * @param {boolean} curated Filter Curated | default > FALSE
 * @param {number} maxbpm Filter MaxBPM | default > 100
 * @param {number} maxDur Filter MaxDur | Default > 0
 * @param {number} maxNps Filter MaxNPS | Default > 5
 * @param {number} maxRating Filter MaxRatings | Default > 10
 * @param {number} minBPM Filter MinBPM | Default > 60
 * @param {number} minDur Filter MinDur | Default > 0
 * @param {number} minNps Filter MinNPS | Default > 3
 * @param {number} minRating Filter MinRating | Default > 0
 * @param {boolean} noodle Filter Noodle | Default > False
 * @param {boolean} ranked Filter Ranked | Default > False
 * @param {string} sortOrder Set the order | OPTIONS: Latest, Relevance, Rating, Curated ( REQUIRED )
 * @param {boolean} verified Filter Verified | Default > False
 * @param {number} page Page to look up | Default > 0
 * @param {boolean} fullSpread I have 0 clue that this does :*)
 */

async function searchMaps(automapper = false, chroma = false, cinema = false, curated = false, maxbpm = 100, maxDur = 0, maxNps = 5, maxRating = 10, minBPM = 60, minDur = 0, minNps = 3, minRating = 0, noodle = false, ranked = false, sortOrder, verified = false, page = 0, fullSpread) {
    const response = await fetch(`https://api.beatsaver.com/search/text/0?automapper=${automapper}&chroma=${chroma}&cinema=${cinema}&curated=${curated}&fullSpread=${fullSpread}&maxBpm=${maxbpm}&maxDuration=${maxDur}&maxNps=${maxNps}&maxRating=${maxRating}&minBpm=${minBPM}&minDuration=${minDur}&minNps=${minNps}&minRating=${minRating}&noodle=${noodle}&ranked=${ranked}&sortOrder=${sortOrder}&verified=${verified}`)
    const json = await response.json();
    return json;
}

/**
 * 
 * @param {Date} dateQuery The date to search on | EXAMPLE > 2023-05-15
 * @returns 
 */
async function returnMostVotes(dateQuery) {
    const response = await fetch(`https://api.beatsaver.com/vote?since=${dateQuery}`)
    const json = await response.json();
    return json;
}

/**
 * 
 * @param {number} pageNum Page number to look up | Default > 0
 * @param {number} idNum Playlist ID to search up
 * @returns 
 */
async function returnPlaylistDetails(pageNum = 0, idNum) {
    const response = await fetch(`https://api.beatsaver.com/playlists/id/${idNum}/${pageNum}`)
    const json = await response.json();
    return json;
}


/**
 * 
 * @param {number} userID the user ID to search the playlists
 * @param {*} pageNum the page num of the playlist to search | Defaults > 0
 * @returns 
 */
async function returnPlaylistFromUser(userID, pageNum = 0) {
    const response = await fetch(`https://api.beatsaver.com/playlists/user/${userID}/${pageNum}`);
    const json = await response.json()
    return json;
}

module.exports = {
    returnMapInfo,
    returnMapsByID,
    returnLatestMaps,
    returnMostPlayed,
    returnUserByID,
    returnUserByName,
    searchMaps,
    returnMostVotes,
    returnPlaylistDetails,
    returnPlaylistFromUser
};