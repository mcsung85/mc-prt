<template>
    <div class="leftCon">
        <!-- 유저 정보 -->
        <div class="userBox box">
            <dl class="user">
                <dt>성춘배 상담사 <strong>대기중</strong></dt>
                <dd>twccg@thewc.co.kr</dd>
                <dd class="img"><img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE" /></dd>
            </dl>
            
            <div class="stateBtn">
                <ul>
                    <li class="on">
                        <a>대기</a>
                    </li>
                    <li>
                        <a>식사</a>
                    </li>
                    <li>
                        <a>휴식</a>
                    </li>
                    <li>
                        <a>기타</a>
                        <ol>
                            <li><a>기타</a></li>
                            <li><a>기타</a></li>
                            <li><a>기타</a></li>
                            <li><a>기타</a></li>
                        </ol>
                    </li>
                </ul>
            </div>
            <div class="txtBtn">
                <span><a>전화하기</a></span>
                <span><a>예약하기</a></span>
                <span><a>문자발송</a></span>
            </div>
        </div>
        <!-- //유저 정보 -->

        <!-- 상담사 -->
        <div class="memberBox box">
            <div class="uxTabBox">
                <ul>
                    <li class="on"><a>대기 상담사 <strong>6</strong></a></li>
                    <li><a>전체 상담사 <strong>11</strong></a></li>
                </ul>
            </div>
            <div class="scrollBox">
                <ul class="list">
                    <li class="on">덕배 상담원(대기)</li>
                    <li>춘자 상담원(대기)</li>
                    <li class="on">미자 상담원(대기)</li>
                    <li class="on">덕배 상담원(대기)</li>
                    <li>덕배 상담원(대기)</li>
                    <li>춘자 상담원(대기)</li>
                    <li>미자 상담원(대기)</li>
                    <li>덕배 상담원(대기)</li>
                </ul>
            </div>
            <div class="reset"></div>
        </div>
        <!-- //상담사 -->

        <!-- 현황 -->
        <div class="statusBox box">
            <div class="uxTabBox">
                <ul>
                    <li class="on"><a>예약현황 <strong>6</strong></a></li>
                    <li><a>상담현황 <strong>11</strong></a></li>
                </ul>
            </div>
            <div class="statusNum">
                <span>직접 <strong>30</strong></span>
                <span>대량 <strong>30</strong></span>
                <span>콜백 <strong>30</strong></span>
            </div>
            <div class="listBox">
                <div class="item">
                    <dl>
                        <dt><span>직접예약</span> <span>7-22 09:00 예약</span></dt>
                        <dd><span>이름</span> 성덕배</dd>
                        <dd><span>전화</span> 010-1234-1234</dd>
                        <dd><span>메모</span> 주문한지 1000일 지났으니 배송지연으로 처리해주셈여.</dd>
                    </dl>
                </div>
                <div class="item">
                    <dl>
                        <dt><span>직접예약</span> <span>7-22 09:00 예약</span></dt>
                        <dd><span>이름</span> 성덕배</dd>
                        <dd><span>전화</span> 010-1234-1234</dd>
                        <dd><span>메모</span> 주문한지 1000일 지났으니 배송지연으로 처리해주셈여.</dd>
                    </dl>
                </div>
                <div class="item">
                    <dl>
                        <dt><span>직접예약</span> <span>7-22 09:00 예약</span></dt>
                        <dd><span>이름</span> 성덕배</dd>
                        <dd><span>전화</span> 010-1234-1234</dd>
                        <dd><span>메모</span> 주문한지 1000일 지났으니 배송지연으로 처리해주셈여.</dd>
                    </dl>
                </div>
            </div>
            <div class="reset"></div>
        </div>
        <!-- //현황 -->

        <!-- 개인 모니터링 -->
        <div class="monitoringBox box">
            <div class="tit">
                개인 모니터링
            </div>
            <div class="list">
                <ul>
                    <li>
                        <strong>00:00:00</strong>
                        <span>총 통화</span>
                    </li>
                    <li>
                        <strong>00:00:00</strong>
                        <span>평균통화</span>
                    </li>

                    <li>
                        <strong>00:00:00</strong>
                        <span>상담대기</span>
                    </li>
                    <li>
                        <strong>00:00:00</strong>
                        <span>후처리</span>
                    </li>
                    <li>
                        <strong>00:00:00</strong>
                        <span>자리비움</span>
                    </li>

                    <li>
                        <strong>00:00:00</strong>
                        <span>최고콜 (I/O)</span>
                    </li>
                    <li>
                        <strong>00:00:00</strong>
                        <span>평균콜 (I/O)</span>
                    </li>
                    <li>
                        <strong>00:00:00</strong>
                        <span>본인콜 (I/O)</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- //개인 모니터링 -->
    </div>
</template>

<script>
export default {
  name: 'Left'
}
</script>

<style lang="scss">
  @import './src/assets/scss/call/Left.scss';
</style>
