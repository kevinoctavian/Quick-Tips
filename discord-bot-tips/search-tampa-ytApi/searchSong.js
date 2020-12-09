const ytsr = require("youtube-sr");

/**
 * @param {String} query adalah judul atau link lagu
 * @param {Number} limit [default = 10]
 * @returns {Object}
 */
async function searchSong(query, limit = 10) {
    const results = [];
    // {limit} akan sama dengan {limit: limit} 'ES6'
    // variable ytsrSearch akan berisi array
    const ytsrSearch = await ytsr.search(query, { limit, type: "video" });

    for (const search of ytsrSearch) {
        results.push(new ytsr.Video(search));
    }

    return result;
}

module.export = searchSong;
