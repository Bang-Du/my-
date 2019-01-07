<template>
  <transition name='slide'>
    aaaaaaaaaaaaaaaaaaaa
    <music-list></music-list>
  </transition>
</template>

<script>
import MusicList from 'components/music-list/music-list'


export default {
  data() {
    return {

    }
  },
  created() {
    console.log(MusicList)
  },
  components: {
    MusicList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
