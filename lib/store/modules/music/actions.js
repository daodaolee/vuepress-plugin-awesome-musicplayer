
// import { PLAY_HISTORY_KEY,  getSongImg } from '@/utils'

export default {
  // 整合歌曲信息 并且开始播放
  async startSong({ commit, state }, rawSong) {
    const song = Object.assign({}, rawSong)
    commit('setCurrentSong', song)
    commit('setPlayingState', true)
  },
  clearCurrentSong({ commit }) {
    commit('setCurrentSong', {})
    commit('setPlayingState', false)
    commit('setCurrentTime', 0)
  }
}