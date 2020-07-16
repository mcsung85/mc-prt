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
    this.changLayer = document.body.clientWidth > 1585
    window.addEventListener('resize', (event) => {
      console.log(document.body.clientWidth)
      this.changLayer = document.body.clientWidth > 1585
    })
  }
}
</script>

<style lang="scss">
body {
  height: 100%;
}
#wrap {
  position: relative;
  height: 100%;
  #header {
    position: absolute;
    top:0;
    left:0;
    z-index:1;
    width: 100%;
    height:80px;
    border-bottom: 1px solid #E5E8F2;
    background-color:#fff;
  }
  #nav {
    position: absolute;
    top:0;
    left:0;
    padding-top: 80px;
    width: 100px;
    height: 100%;
    border-right: 1px solid #E5E8F2;
  }
  #content {
    position: relative;
    padding: 80px 0 0 100px;
    height: 100%;
  }
  .callCon {
    position: relative;
    display:table;
    width: 100%;
    height: 100%;
    .callList {
      position:absolute;
      top: 0;
      left: 306px;
      z-index: 1;
      width: 100%;
      height: 65px;
      overflow:hidden;
      border-bottom: 1px solid #E5E8F2;
      background-color:#fff;
    }
    .leftCon {
      position: relative;
      z-index: 1;
      width: 306px;
      height: 100%;
      border-right: 1px solid #E5E8F2;
    }
    .cenCon {
      position:absolute;
      top: 0;
      left: 0;
      padding:65px 453px 0 306px;
      width: 100%;
      height: 100%;
      text-align: center;
      background-color:#fff;
      .box {
        height: 100%;
        border-right: 1px solid #E5E8F2;
      }
    }
    .ritCon {
      position: absolute;
      top:0;
      right:0;
      padding-top:65px;
      padding-right: 65px;
      width:453px;
      height: 100%;
      background: #fff;
      .ritNav {
        position: absolute;
        top:0;
        right:0;
        padding-top: 65px;
        width: 65px;
        height: 100%;
        border-left: 1px solid #DFE3E8;
        background-color:#F9F9F9;
      }
      .ritBox {
      }
    }
    &.ritPop {
      .cenCon {
        padding-right: 0;
        max-width: 1031px;
      }
      .ritCon {
        box-shadow: 0 3px 9px 3px #dee0f57a;
      }
    }
  }
}
</style>
