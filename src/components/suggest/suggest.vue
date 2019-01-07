<template>
  <scroll class="suggest" :data="result" :pullup="pullup" @scrollToEnd="searchMore" ref='suggest' :beforeScroll="true" @beforeScroll="beforeScroll">
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(item, i) in result" :key="i" @click="selectItem(item)">
        <div class="icon">
          <i :class="getIconCls(item)"></i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li>
    </ul>
    <div class="no-result-wrapper" v-show="!hasMore && !result.length">
      <no-result title="抱歉，暂无搜索结果"></no-result>
    </div>
  </scroll>
</template>

<script>
import {search} from 'api/search'
import {ERR_OK} from 'api/config'
import {filterSinger} from 'common/js/song'
import {createSong} from 'common/js/song'
import Scroll from 'base/scroll/scroll'
import Singer from 'common/js/singer'
import {mapMutations, mapActions} from 'vuex'
import NoResult from 'base/no-result/no-result'

const TYPE_SINGER = "singer"

export default {
  props: {
    query: {
      type: String,
      default: ''
    },
    showSinger: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      page: 1,
      result: [],
      pullup: true,
      hasMore: true
    }
  },
  methods: {
    getIconCls(item) {
      if (item.type === TYPE_SINGER) {
        return `icon-mine`
      } else {
        return `icon-music`
      }
    },
    getDisplayName(item) {
      if (item.type === TYPE_SINGER) {
        return item.singername
      } else {
        return `${item.songname}-${filterSinger(item.singer)}`
      }
    },
    search() {
      this.page = 1
      this.hasMore = true
      this.$refs.suggest.scrollTo(0, 0)
      search(this.query, this.page, this.showSinger).then(res => {
        let ret = res
        ret = JSON.parse(res.slice(9, -1));
        if (ret.code === ERR_OK) {
          this.result = this._getResult(ret.data)
          this.checkMore(ret.data)
        }
      })
    },
    searchMore() {
      if (!this.hasMore) {
        return
      }
      this.page++
      search(this.query, this.page, this.showSinger).then(res => {
        let ret = res
        ret = JSON.parse(res.slice(9, -1));
        if (ret.code === ERR_OK) {
          this.result = this.result.concat(this._getResult(ret.data))
          this.checkMore(ret.data)
        }
      })
    },
    checkMore(data) {
      const song = data.song
      if (!song.list.length || (song.curnum + song.curpage * 20) >= song.totalnum) {
        this.hasMore = false
      }
    },
    selectItem(item) {
      if (item.type === 'singer') {
        const singer = new Singer({
          id: item.singermid,
          name: item.singername
        })
        this.$router.push({
          path: `/search/${singer.id}`
        })
        this.setSinger(singer)
      } else {
        this.insertSong(item)
      }
    },
    beforeScroll() {
      this.$emit("listScroll")
    },
    _getResult(data) {
      // console.log("data", data)
      let ret = []
      if (data.zhida && data.zhida.singerid) {
        ret.push({...data.zhida, ...{type: TYPE_SINGER}})
      }
      if (data.song) {
        // ret = ret.concat(this._normalizeSongs(data.song.list))
        ret = ret.concat((data.song.list))
      }
      return ret
    },
    _normalizeSongs(list) {
      console.log("list", list)
      let ret = []
      list.forEach(musicData => {
        if (musicData.songid && musicData.albumid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    },
    ...mapMutations({
      setSinger: "SET_SINGER"
    }),
    ...mapActions([
      "insertSong"
    ])
  },
  watch: {
    query() {
      this.search()
    }
  },
  components: {
    Scroll,
    NoResult
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .suggest
    height: 100%
    overflow: hidden
    .suggest-list
      padding: 0 30px
      .suggest-item
        display: flex
        align-items: center
        padding-bottom: 20px
      .icon
        flex: 0 0 30px
        width: 30px
        [class^="icon-"]
          font-size: 14px
          color: $color-text-d
      .name
        flex: 1
        font-size: $font-size-medium
        color: $color-text-d
        overflow: hidden
        .text
          no-wrap()
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>