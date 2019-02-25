import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, playing) {
    state.playing = playing
  },
  [types.SET_FULL_SCREEN](state, fullScreen) {
    state.fullScreen = fullScreen
  },
  [types.SET_PLAYLIST](state, playlist) {
    state.playlist = playlist
  },
  [types.SET_SEQUENCE_LIST](state, sequenceList) {
    state.sequenceList = sequenceList
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, currentIndex) {
    state.currentIndex = currentIndex
  },
  [types.SET_DISC](state, disc) {
    state.disc = disc
  },
  [types.SET_TOP_LIST](state, topList) {
    state.topList = topList
  },
  [types.SET_SEARCH_HISTORT](state, searchHistory) {
    state.searchHistory = searchHistory
  },
  [types.SET_PLAY_HISTORY](state, history) {
    state.playHistory = history
  },
  [types.SET_FAVORITE_LIST](state, favoriteList) {
    state.favoriteList = favoriteList
  },
}

export default mutations
