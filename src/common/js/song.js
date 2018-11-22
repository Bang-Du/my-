export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=259200`,
    url: `https://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`

    //url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=8120483737&vkey=99D0EDDBE116632B37145DC84790365B7C4F5CC88B9A794003E3F0E81185ED100F40BFBCDA6BD300A08324CEAD9D8AB72AFB85EA2C9F015C&uin=0&fromtag=66`,
    // url: `http://dl.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?guid=8120483737&vkey=99D0EDDBE116632B37145DC84790365B7C4F5CC88B9A794003E3F0E81185ED100F40BFBCDA6BD300A08324CEAD9D8AB72AFB85EA2C9F015C&uin=0&fromtag=66`,
    // url: `http://isure.stream.qqmusic.qq.com/C400002E3MtF0IAMMY.m4a?guid=8120483737&vkey=7311CA39D3C31B36EFBCFF16ADC3EA7292256729B2E6E0F63949CDE433930DE7052EB6ABD4323E5A354893051F33464E731B57AF94CD3010&uin=0&fromtag=66`,
    //url ＝ “[url=http://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=0&loginUin=]http://c.y.qq.com/base/fcgi-bin/ ... cg?g_tk=0&loginUin=[/url]” ＋ uin ＋ “&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&#172;ice=0&platform=yqq&needNewCode=0&cid=205361747&uin=” ＋ uin ＋ “&songmid=003a1tne1nSz1Y&filename=C400003a1tne1nSz1Y.m4a&guid=” ＋ guid
  })
}


function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach(s => {
    ret.push(s.name)
  })
  return ret.join('/')
} 
