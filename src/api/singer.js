import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 1000,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 1664029744
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    singermid: singerId,
    g_tk: 1664029744
  })

  return jsonp(url, data, options)
}

export function getSongVkey(songmid) { // 获取歌曲的vkey
  console.log('songmid', songmid)
  // const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

  // const data = Object.assign({}, commonParams, {
  //   callback: 'musicJsonCallback',
  //   loginUin: 3051522991,
  //   format: 'jsonp',
  //   platform: 'yqq',
  //   needNewCode: 0,
  //   cid: 205361747,
  //   uin: 3051522991,
  //   guid: 5931742855,
  //   songmid: "001Qu4I30eVFYb",
  //   filename: `C400001Qu4I30eVFYb.m4a`
  //   // filename: `C400${songmid}.m4a`
  // })

  // return jsonp(url, data, options)
}