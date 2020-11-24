<template>
  <div class="filter">
    <input type="checkbox" class="ios-switch" />
    <!-- <iframe src="https://www.qq.com/" frameborder="0" class="main" width="1000" height="800"></iframe> -->
    <article class="news">
      <h3>习近平：幸福生活是你们奋斗出来的</h3>
      <p>习近平总书记12日下午在江苏考察调研。他来到南通市五山地区滨江片区，沿江边步行察看滨江生态环境保护情况。</p>
      <p>习近平深有感慨地对在场的干部群众说：“来这里最早我是1978年，我对你们这里壮阔的长江，印象特别深刻。现在我再来看看，确实是沧桑巨变。幸福生活也是你们亲手建设出来的，奋斗出来的，也祝你们这里的生活更美好。”</p>
      <p>来源：央视新闻客户端</p>
      <p>
        <img src="../images/history.png" alt />
      </p>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.btn {
  width: 102px;
  height: 62px;
  border-radius: 31px;
  background: #e9e9eb;
}
.ios-switch {
  display: block;
  position: relative;
  appearance: none;
  cursor: pointer;
  transition: all 100ms;
  @extend .btn;
  &::before {
    content: "";
    position: absolute;
    transition: all 300ms cubic-bezier(0.45, 1, 0.4, 1);
    @extend .btn;
  }
  &::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 54px;
    height: 54px;
    border-radius: 27px;
    box-shadow: 1px 1px 5px rgba(#000, 0.3);
    background: #fff;
    transition: all 300ms cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }
  &:checked {
    background-color: #5eb662;
    &::before {
      transform: scale(0);
    }
    &::after {
      transform: translateX(40px);
    }
    & + .news {
      filter: invert(1) hue-rotate(180deg);
      img,
      video {
        filter: invert(1) hue-rotate(180deg);
      }
    }
  }
}
.news {
  background-color: #fff;
  transition: all 300ms;
}
</style>
