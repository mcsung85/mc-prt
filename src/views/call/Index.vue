<template>
  <div id="wrap">
    <header id="header">
      hader
    </header>
    <nav id="nav">
      nav
    </nav>
    <div id="content">
      <!-- 실제 사용 될 마크업 -->
      <div class="callCon">

        <!-- Left -->
        <left></left>
        <!-- //Left -->

        <!-- Center -->
        <center></center>
        <!-- //Center -->

        <!-- Right -->
        <right></right>
        <!-- //Right -->

      </div>
      <!-- // 실제 사용 될 마크업 -->
    </div>
  </div>
</template>
<script>
import Left from './components/Left'
import Right from './components/Right'
import Center from './components/Center'
export default {
  name: 'Call',
  components: {
    Left,
    Center,
    Right
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  @import './src/assets/scss/call/common.scss'
</style>
