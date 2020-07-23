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
      <div class="callCon" :class="{ritPop: !changLayer}">
        <!-- callList -->
        <div class="callList">
          <div>{{changLayer}}Call 상담 대기중 <span>(8)</span></div>
          <ul>
            <li>010-1234-1234</li>
            <li>010-1234-1234</li>
            <li>010-1234-1234</li>
          </ul>
        </div>
        <!-- callList -->

        <!-- Left -->
        <div class="leftCon scrollBox">
          <div class="box">
            LEFT
          </div>
        </div>
        <!-- //Left -->

        <!-- Center -->
        <div class="cenCon scrollBox">
          <div class="box">
            CenterCenterCenterCenterCenterCenterCenter
          </div>
        </div>
        <!-- //Center -->

        <!-- Right -->
        <div class="ritCon scrollBox">
          <div class="ritNav">
            <ul>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
            </ul>
          </div>
          <!-- 고객정보 -->
          <div class="ritBox">
            RIGHT
          </div>

        </div>
        <!-- //Right -->

      </div>
      <!-- // 실제 사용 될 마크업 -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Call',
  data () {
    return {
      changLayer: false
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  @import './src/assets/scss/call/common.scss'
</style>
