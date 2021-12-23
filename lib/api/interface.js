import { request } from "./config";
// 获取音乐封面
export const getSongDetail = id => request.get(`/netease?id=${id}`)

// // 歌词
// export const getLyricList = id => request.get(`/lyric?id=${id}`)

// // 获取音源
// export const genSongPlayUrl = id => {
//   return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
// }