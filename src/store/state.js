import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {},
  playing: false, // 播放状态
  fullScreen: false, //全屏
  playlist: [], //播放列表
  sequenceList: [], //顺序列表
  mode: playMode.sequence, //播放形式
  currentIndex: -1, //歌曲index
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}


export default state
