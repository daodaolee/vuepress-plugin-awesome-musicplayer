<template>
  <div class="music_player">
    <div class="left">
      <img class="point" src="../assets/img/point.png" alt="">
      <img :class="['bar', playing ? 'play': '']" src="../assets/img/bar.png" alt="">
      <div class="img-outer-container">
        <div :class="['img-outer', playing ? '' : 'paused']">
          <div class="img-album">
            <img :src="albumImg" alt="">
          </div>
        </div>
      </div>
      <div class="control">
        <!-- <div class="prev" v-copy="href">
          <svg t="1640175529468" class="icon" viewBox="0 0 1024 800" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2148" width="30" height="30">
            <path d="M836.266667 163.84c-6.826667 0-13.653333 1.706667-18.773334 6.826667L366.933333 484.693333c-15.36 10.24-18.773333 32.426667-8.533333 47.786667 1.706667 3.413333 5.12 6.826667 8.533333 8.533333L817.493333 853.333333c15.36 10.24 37.546667 6.826667 47.786667-8.533333 3.413333-5.12 6.826667-11.946667 6.826667-18.773333V197.973333c-1.706667-18.773333-17.066667-34.133333-35.84-34.133333zM273.066667 170.666667c-18.773333 0-34.133333 15.36-34.133334 34.133333v614.4c0 18.773333 15.36 34.133333 34.133334 34.133333s34.133333-15.36 34.133333-34.133333V204.8c0-18.773333-15.36-34.133333-34.133333-34.133333z" p-id="2149" fill="#D33A31"></path>
          </svg>
        </div> -->
        <div :class="['btn', playing ? 'play' : 'pause']" @click="onClickSong">
         <svg v-show="!playing" t="1640174711530" class="svg" viewBox="0 0 800 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="801" width="20" height="20">
            <path d="M780.8 475.733333L285.866667 168.533333c-27.733333-17.066667-64 4.266667-64 36.266667v614.4c0 32 36.266667 53.333333 64 36.266667l492.8-307.2c29.866667-14.933333 29.866667-57.6 2.133333-72.533334z" p-id="802" fill="#ffffff"></path>
         </svg>
         <svg v-show="playing" t="1640174831312" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1138" width="20" height="20">
            <path d="M349.866667 149.333333h-14.933334c-21.333333 0-36.266667 14.933333-36.266666 34.133334v654.933333c0 19.2 14.933333 34.133333 34.133333 34.133333h14.933333c19.2 0 34.133333-14.933333 34.133334-34.133333V183.466667c2.133333-19.2-12.8-34.133333-32-34.133334z m341.333333 0h-14.933333c-21.333333 0-36.266667 14.933333-36.266667 34.133334v654.933333c0 19.2 14.933333 34.133333 34.133333 34.133333h14.933334c19.2 0 34.133333-14.933333 34.133333-34.133333V183.466667c2.133333-19.2-12.8-34.133333-32-34.133334z" p-id="1139" fill="#ffffff"></path>
         </svg>
        </div>
        <div class="btn share" v-copy="href">
          <svg t="1640253998462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2826" width="15" height="15"><path d="M512 42.666667a37.12 37.12 0 1 1 0 74.026666H227.84a111.573333 111.573333 0 0 0-111.146667 111.146667v568.32a111.573333 111.573333 0 0 0 111.146667 111.146667h568.32a111.573333 111.573333 0 0 0 111.146667-111.146667V512A37.12 37.12 0 1 1 981.333333 512v284.16A185.6 185.6 0 0 1 796.16 981.333333H227.84A185.6 185.6 0 0 1 42.666667 796.16V227.84A185.6 185.6 0 0 1 227.84 42.666667z m432.213333 0A37.12 37.12 0 0 1 981.333333 79.786667V277.333333a37.12 37.12 0 1 1-74.026666 0V169.173333L525.866667 550.613333a37.12 37.12 0 0 1-52.48 0 37.12 37.12 0 0 1 0-52.48L854.826667 116.693333H746.666667A37.12 37.12 0 1 1 746.666667 42.666667z" fill="#ffffff" p-id="2827"></path><path d="M796.16 986.666667H227.84a192 192 0 0 1-190.506667-190.506667V227.84a192 192 0 0 1 190.506667-190.506667H512a42.666667 42.666667 0 1 1 0 85.333334H227.84a106.666667 106.666667 0 0 0-106.666667 106.666666v566.826667a106.666667 106.666667 0 0 0 106.666667 106.666667h568.32a106.666667 106.666667 0 0 0 106.666667-106.666667V512a42.666667 42.666667 0 1 1 85.333333 0v284.16a192 192 0 0 1-192 190.506667z m-568.32-938.666667a180.48 180.48 0 0 0-179.84 179.84v568.32a180.48 180.48 0 0 0 179.84 179.84h568.32a180.48 180.48 0 0 0 179.84-179.84V512a31.786667 31.786667 0 1 0-64 0v284.16a117.12 117.12 0 0 1-116.48 116.48H227.84a117.12 117.12 0 0 1-116.48-116.48V227.84a117.12 117.12 0 0 1 116.48-116.48H512a31.786667 31.786667 0 1 0 0-64z m271.786667 518.826667a42.666667 42.666667 0 0 1-42.666667-42.666667 42.666667 42.666667 0 0 1 12.373333-29.866667L842.026667 122.026667H746.666667a42.666667 42.666667 0 1 1 0-85.333334h197.546666a42.666667 42.666667 0 0 1 42.666667 42.666667V277.333333a42.666667 42.666667 0 1 1-85.333333 0V181.973333L529.706667 554.666667a42.666667 42.666667 0 0 1-30.08 12.16zM867.626667 111.36l-390.4 390.613333a31.36 31.36 0 0 0 0 44.8 32.426667 32.426667 0 0 0 44.8 0L912.64 156.16V277.333333a31.786667 31.786667 0 1 0 64 0V79.786667a31.786667 31.786667 0 0 0-31.786667-31.786667H746.666667a31.786667 31.786667 0 1 0 0 64z" fill="#ffffff" p-id="2828"></path></svg>
        </div>
        <!-- <div class="next">
          <svg t="1640175529468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2148" width="30" height="30">
            <path d="M836.266667 163.84c-6.826667 0-13.653333 1.706667-18.773334 6.826667L366.933333 484.693333c-15.36 10.24-18.773333 32.426667-8.533333 47.786667 1.706667 3.413333 5.12 6.826667 8.533333 8.533333L817.493333 853.333333c15.36 10.24 37.546667 6.826667 47.786667-8.533333 3.413333-5.12 6.826667-11.946667 6.826667-18.773333V197.973333c-1.706667-18.773333-17.066667-34.133333-35.84-34.133333zM273.066667 170.666667c-18.773333 0-34.133333 15.36-34.133334 34.133333v614.4c0 18.773333 15.36 34.133333 34.133334 34.133333s34.133333-15.36 34.133333-34.133333V204.8c0-18.773333-15.36-34.133333-34.133333-34.133333z" p-id="2149" fill="#D33A31"></path>
          </svg>
        </div> -->
      </div>
    </div>
    <div class="right">
      <!-- <div class="name">{{name}}</div> -->
      <p v-if="nolyric" class="noLyric">还没有歌词哦~</p>
       <Scroller
        :data="lyric"
        :options="{disableTouch: true}"
        @init="onInitScroller"
        class="lyric-wrap"
        ref="scroller"
        v-else
      >
        <div>
          <div
            :class="getActiveCls(index)"
            :key="index"
            class="lyric-item"
            ref="lyric"
            v-for="(l,index) in lyricWithTranslation"
          >
            <p
              :key="contentIndex"
              class="lyric-text"
              v-for="(content, contentIndex) in l.contents"
            >{{content}}</p>
          </div>
        </div>
      </Scroller>
    </div>
    <audio
      :src="musicSrc"
      @canplay="ready"
      @ended="end"
      @timeupdate="updateTime"
      ref="audio"
    ></audio>
  </div>
</template>
<script>
import Scroller from "./Scroller.vue";
import {debounce} from "../utils"
import lyricParser from "../utils/lrcparse"
import {getSongDetail} from '../api'
import { mapState, mapMutations, mapActions, mapGetters } from "../store/helper/music"

const WHEEL_TYPE = "wheel"
const SCROLL_TYPE = "scroll"
// 恢复自动滚动的定时器时间
const AUTO_SCROLL_RECOVER_TIME = 1000
export default {
  components: {
    Scroller
  },
  data(){
    return{
      href: '',
      albumImg: '',
      musicSrc: '',
      nolyric: false,
      lyric: [],
      tlyric: [],
      isPlayErrorPromptShow: false,
      songReady: false
    }
  },
  props:{
    musicId: {
      type: [String,Number],
      default: ''
    }
  },
  created(){
    this.lyricScrolling = {
      [WHEEL_TYPE]: false,
      [SCROLL_TYPE]: false
    }
    this.lyricTimer = {
      [WHEEL_TYPE]: null,
      [SCROLL_TYPE]: null
    }
  },
  mounted(){
    this.href = window.location.href;
    this.getSone()
  },
  watch:{
    activeLyricIndex(newIndex, oldIndex) {
      if (
        newIndex !== oldIndex &&
        !this.lyricScrolling[WHEEL_TYPE] &&
        !this.lyricScrolling[SCROLL_TYPE]
      ) {
        this.scrollToActiveLyric()
      }
    },
    currentSong(newSong, oldSong) {
      // 清空了歌曲
      if (!newSong.id) {
        this.audio.pause()
        this.audio.currentTime = 0
        return
      }
      // 单曲循环
      if (oldSong && newSong.id === oldSong.id) {
        this.setCurrentTime(0)
        this.audio.currentTime = 0
        this.play()
        return
      }
      this.songReady = false
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.play()
      }, 1000)
    },
    playing(newPlaying) {
      this.$nextTick(() => {
        newPlaying ? this.play() : this.pause()
      })
    }
  },
  computed:{
    ...mapState(["currentSong", "currentTime", "playing", "isPlayerShow"]),
    ...mapGetters(["hasCurrentSong"]),
    audio() {
      return this.$refs.audio
    },
    activeLyricIndex() {
      let temp = this.lyricWithTranslation
        ? this.lyricWithTranslation.findIndex((l, index) => {
            const nextLyric = this.lyricWithTranslation[index + 1]
            return (
              this.currentTime >= l.time &&
              (nextLyric ? this.currentTime < nextLyric.time : true)
            )
          })
        : -1
      return temp
    },
    lyricWithTranslation() {
      let ret = []
      // 空内容的去除
      const lyricFiltered = this.lyric.filter(({ content }) => Boolean(content))
      // content统一转换数组形式
      if (lyricFiltered.length) {
        lyricFiltered.forEach(l => {
          const { time, content } = l
          const lyricItem = { time, content, contents: [content] }
          const sameTimeTLyric = this.tlyric.find(
            ({ time: tLyricTime }) => tLyricTime === time
          )
          if (sameTimeTLyric) {
            const { content: tLyricContent } = sameTimeTLyric
            if (content) {
              lyricItem.contents.push(tLyricContent)
            }
          }
          ret.push(lyricItem)
        })
      } else {
        ret = lyricFiltered.map(({ time, content }) => ({
          time,
          content,
          contents: [content]
        }))
      }
      return ret
    }
  },
  methods:{
    ...mapMutations(["setPlayingState","setCurrentTime"]),
    ...mapActions(["startSong", "addToPlaylist"]),
    updateTime(e) {
      const time = e.target.currentTime
      this.setCurrentTime(time)
    },
    ready() {
      this.songReady = true
    },
    end() {
      this.next()
    },
    next() {
      if (this.songReady) {
        this.startSong(this.nextSong)
      }
    },
    async play() {
      if (this.songReady) {
        try {
          await this.audio.play()
          if (this.isPlayErrorPromptShow) {
            this.isPlayErrorPromptShow = false
          }
        } catch (error) {
          // 提示用户手动播放
          this.isPlayErrorPromptShow = true
          this.setPlayingState(false)
        }
      }
    },
    pause() {
      this.audio.pause()
    },
    onClickSong(){
      this.setPlayingState(!this.playing)
    },
    async getSone(){
      const result = await getSongDetail(this.musicId)
      const {cover, lyric, link} = result;

      this.musicSrc = link;
      this.albumImg = cover && cover.replace("250y250","400y400") || "";
      this.lyric = lyricParser(lyric).lyric
    },
    // async getLyric(){
    //   if(!this.musicId){
    //     return
    //   }
    //   const result = await getLyricList(this.musicId)
    //   this.nolyric = !result.lrc.lyric
    //   if (!this.nolyric) {
    //     const { lyric, tlyric } = lyricParser(result)
    //     this.lyric = lyric
    //     // this.tlyric = tlyric
    //   }
    // },
    clearTimer(type) {
      this.lyricTimer[type] && clearTimeout(this.lyricTimer[type])
    },
    getActiveCls(index) {
      return this.activeLyricIndex === index ? "active" : ""
    },
    onInitScroller(scoller) {
      const onScrollStart = type => {
        this.clearTimer(type)
        this.lyricScrolling[type] = true
      }
      const onScrollEnd = type => {
        // 滚动结束后两秒 歌词开始自动滚动
        this.clearTimer(type)
        this.lyricTimer[type] = setTimeout(() => {
          this.lyricScrolling[type] = false
        }, AUTO_SCROLL_RECOVER_TIME)
      }
      scoller.on("scrollStart", onScrollStart.bind(null, SCROLL_TYPE))
      scoller.on("mousewheelStart", onScrollStart.bind(null, WHEEL_TYPE))

      scoller.on("scrollEnd", onScrollEnd.bind(null, SCROLL_TYPE))
      scoller.on("mousewheelEnd", onScrollEnd.bind(null, WHEEL_TYPE))
    },
    resizeScroller: debounce(function() {
      this.$refs.scroller.getScroller().refresh()
    }, 500),
    addResizeListener() {
      window.addEventListener("resize", this.resizeScroller)
    },
    removeResizeListener() {
      window.removeEventListener("resize", this.resizeScroller)
    },
    scrollToActiveLyric() {
      if (this.activeLyricIndex !== -1) {
        const { scroller, lyric } = this.$refs
        if (lyric && lyric[this.activeLyricIndex]) {
          scroller
            .getScroller()
            .scrollToElement(lyric[this.activeLyricIndex], 200, 0, true)
        }
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.music_player{
  width: 800px;
  display: flex;
  // border: 1px solid grey;
  overflow: hidden;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,"\5FAE\8F6F\96C5\9ED1",Arial,sans-serif !important;
  .left{
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 80px 120px 0 15px;
    justify-content: center;
    .point{
      position: absolute;
      left: 180px;
      top: -12px;
      width: 30px;
      height: 30px;
      z-index: 2;
    }
    .bar{
      position: absolute;
      top: 0;
      left: 190px;
      width: 100px;
      height: 145px;
      z-index: 1;
      transform-origin: 0 0;
      transform: rotate(-30deg);
      transition: all .3s;
      &.play{
        transform: rotate(5deg);
      }
    }
    .img-outer-container{
      border-radius: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      // background: #E6E5E6;
      width: 320px;
      height: 320px;
      .img-outer{
        width: 300px;
        height: 300px;
        background: #000;
        background: linear-gradient(-45deg,#333540,#070708,#333540);
        animation: rotate 20s linear infinite;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        &.paused{
          animation-play-state: paused;
        }
        .img-album{
          width: 200px;
          height: 200px;
          flex-shrink: 0;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
    }
    .control{
      padding: 40px 60px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      div{
        cursor: pointer;
      }
      .btn{
        margin:0 auto;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        background: #d33a31;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .share{
        // width: 33px;
        // height: 30px;
        // transform: rotate(180deg);
      }
    }
  }
  .right{
    flex: 1;
    padding-top: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    // .name{
    //   font-size:24px;
    //   font-weight: 400;
    //   color: #333;
    // }
    .noLyric{
      text-align: center;
    }
    .scroller{
      position: relative;
      overflow: hidden;
      &.lyric-wrap{
        width: 350px;
        height: 350px;
        mask-image: linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6) 15%,#fff 25%,#fff 75%,hsla(0,0%,100%,.6) 85%,hsla(0,0%,100%,0));
        .lyric-item {
          margin-bottom: 16px;
          font-size: 14px;
          &.active {
            font-size: 16px;
            // color: #333;
            font-weight: bold
          }
        }           
      }
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1turn);
  }
}
html.dark{
.lyric-item.active{
     color: white !important;;
   }
}
html.light{
.lyric-item.active{
     color: #333 !important;;
   }
}
</style>