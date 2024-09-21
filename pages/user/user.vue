<template>
  <div class="user">
    <div class="author_box">
      <u-avatar size="80" v-if="islogin" src="https://p1.itc.cn/images01/20230326/6d01f0299c2344e8bfe3298947e59b0f.jpeg"></u-avatar>
      <u-avatar size="80" v-if="!islogin" :src="require('../../static/login.png')"></u-avatar>
      <div class="username" v-if="islogin">张小花</div>
      <u-button text="去登陆" shape="circle" v-if="!islogin"></u-button>
    </div>
    <u-cell-group>
      <u-cell icon="file-text" title="文章分类" isLink url="/pagesA/pages/mine/articleList"></u-cell>
      <u-cell icon="clock" title="数据分析" isLink url="/pagesA/pages/dataChart/dataChart"></u-cell>
    </u-cell-group>
    <div class="submit_btn">
      <u-button type="primary" shape="circle" text="写一篇文章" size="large" @click="addArticle"></u-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      islogin: true,
    };
  },
  options: {
    styleIsolation: 'shared',
  },
  methods: {
    addArticle() {
      uni.navigateTo({
        url: '/pagesA/pages/article/addArticle',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  padding: 0 30rpx;
  background-color: #fff;
  .author_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40rpx 0;
    /deep/.u-button {
      width: 160rpx;
      height: 64rpx;
      margin-top: 20rpx;
    }
  }
  .username {
    font-size: 36rpx;
    color: #333;
    margin-top: 20rpx;
    font-weight: bold;
  }
  .submit_btn {
    position: absolute;
    bottom: 40rpx;
    left: 50%;
    transform: translateX(-50%);
    /deep/.u-button--circle {
      width: 420rpx;
      height: 84rpx;
    }
  }
  /deep/.u-cell-group {
    margin-top: 40rpx;
  }
}
</style>
