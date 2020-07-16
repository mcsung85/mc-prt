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
            Center
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
          <div class="ritBox on">
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
    this.changLayer = document.body.clientWidth > 1280
    window.addEventListener('resize', (event) => {
      this.changLayer = document.body.clientWidth > 1280
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
    width: 100%;
    height:80px;
    border-bottom: 1px solid #E5E8F2;
  }
  #nav {
    position: absolute;
    top:0;
    left:0;
    padding-top: 80px;
    width: 100px;
    height: 100%;
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
      border-bottom: 1px solid #E5E8F2;
      width: 100%;
      height: 65px;
      overflow:hidden;
    }
    .leftCon {
      width: 306px;
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
      .box {
        height: 100%;
        border-right: 1px solid #E5E8F2;
      }
    }
    .ritCon {
      position: absolute;
      top:65px;
      right:0;
      padding-right: 65px;
      width:453px;
      height: 100%;
      background: #fff;
      .ritNav {
        position: absolute;
        top:0;
        right:0;
        width: 65px;
        height: 100%;
        border-left: 1px solid #DFE3E8;
        background-color:#F9F9F9;
      }
      .ritBox {
        display: none;
        &.on {
          display: block;
        }
        .ritTit {
          position:relative;
          padding: 0 0 0 40px;
          font-size: 18px;
          line-height: 52px;
          font-weight: bold;
          color: #121212;
          border-bottom: 1px solid #DFE3E8;
          .close {
            position: absolute;
            top:0;
            right: 10px;
            a {
              display:inline-block;
              padding: 0 10px;
              line-height:30px;
            }
          }
        }
        .subTit {
          position:relative;
          padding: 0 0 0 47px;
          font-size: 14px;
          line-height: 45px;
          font-weight: bold;
          color: #121212;
          border-bottom: 1px solid #DFE3E8;
        }
        .subTopTit {
          font-size: 14px;
          line-height: 40px;
          font-weight: bold;
          text-align:center;
          color:#666C84;
          border-top:1px solid #C4CDD5;
          border-bottom:1px solid #C4CDD5;
          background-color: #F0F0FA;
        }
      }
    }
    &.ritPop {
      .cenCon {
        padding-right: 0;
      }
      @media screen and (max-width: 1280px) {
        .cenCon {
          width: 100%;
          min-width: 826px;
          text-align:left;
          border-bottom:1px solid #C4CDD5;
          // background-color:red;
        }
      }
    }
  }
}
</style>
