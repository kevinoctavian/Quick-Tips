Pasti banyak dari kalian kalo buat bot musik menggunakan API dari [Google](https://google.com) kan.
Namun kekurangannya menggunakan Api Google adalah Google hanya memberikan 10.000 kouta per project, dan akan di reset per harinya.

> Quota impact: A call to this method has a quota cost of 100 units. [Source](https://developers.google.com/youtube/v3/docs/search/list?hl=in "Youtube api 'search' documentation")

Jadi, setiap kita hit method search dari Google maka akan di kenakan 100 kouta/hit. Jika kita bagi total kouta dengan cost unit nya maka kita hanya bisa 100x search per harinya.

## Yang dibutuhkan

| Package    | Install              |
| ---------- | -------------------- |
| youtube-sr | `$ npm i youtube-sr` |

---

## Cara membuatnya

Pertama Kamu membuat async function dengan nama apapun sebagai contoh disini saya menggunakan **searchSong**, function tadi akan menerima query dan limit sebagai parameter, dan jangan lupa juga deklarasikan package yang sudah kita install tadi.

```Js
const ytsr = require('youtube-sr');

/**
 * @param {String} query adalah judul atau link lagu
 * @param {Number} limit [default = 10]
 * @return {Object}
*/
async function searchSong(query, limit = 10) {

}
```

dan kita tambahkan beberapa baris code agar function **searchSong** dapat Return data

```js
const results = [];
// {limit} akan sama dengan {limit: limit} 'ES6'
// variable ytsrSearch akan berisi array
const ytsrSearch = await ytsr.search(query, { limit, type: "video" });

for (const search of ytsrSearch) {
    results.push(new ytsr.Video(search));
}

return result;
```

data yang direturn dari **searchSong** kira kira akan seperti ini

```json
[
  {
    "id": "IcrbM1l_BoI",
    "title": "Avicii - Wake Me Up (Official Video)",
    "description": "Listen to Avicii's latest single “SOS” here: https://Avicii.ln
k.to/SOS.",
    "durationFormatted": "0:00",
    "duration": 273000,
    "uploadedAt": "7 years ago",
    "views": 1992340296,
    "thumbnail": {
      "id": "IcrbM1l_BoI",
      "width": 720,
      "height": 404,
      "url": "https://i.ytimg.com/vi/IcrbM1l_BoI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFr
yq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDEKeYfubdW5-4v8fkYI_8fv0UqhA"
    },
    "channel": {
      "name": "Avicii",
      "verified": true,
      "id": "UCPHjpfnnGklkRBBTd0k6aHg",
      "url": "https://www.youtube.com/channel/UCPHjpfnnGklkRBBTd0k6aHg",
      "icon": [{}],
      "subscribers": null
    }
  }
]
```

---

Nah dengan begini kamu bisa melakukan search ke youtube tampa harus takut terkena limit kouta dari Google jika kurang jelas kmu bisa [Liat Di Sini](./searchSong.js "songSearch Module")

## Link

-   [Instagram](1 "Instagram")
-   [Discord Server](2 "Discord Server")
-   [Rilexa Invite](3 "Invite Rilexa")

<br>

> Jika kalian ini berkontribusi untuk membuat tips - tips untuk programing kalian bisa pull request ke [Repositori ini](https://github.com/kevinoctavian/Quick-Tips "My Repository")

[1]: https://www.instagram.com/kevin_octavian_/
[2]: https://discord.gg/nph658pnC9
[3]: https://discord.com/api/oauth2/authorize?client_id=695634707613745222&permissions=3468608&scope=bot
