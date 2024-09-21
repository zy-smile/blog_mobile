<template>
  <div class="article">
    <u-tabs :list="tabList" :current="activeTab" @click="tabClick"></u-tabs>
    <div class="empty_data" v-show="list.length == 0 && finished">
      <u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/car.png">
      </u-empty>
    </div>
    <view class="card-white skeleton" v-if="isShow">
      <u-skeleton rows="3" title loading></u-skeleton>
    </view>
    <u-list @scrolltolower="scrolltolower" v-show="list.length">
      <u-list-item v-for="(item, index) in list" :key="index" class="articles">
        <div class="article-item" @click="goToDetail(item._id)">
          <image :src="
							item.img ||
							'https://cdn.uviewui.com/uview/album/1.jpg'
						" alt="" class="article-img"></image>
          <div class="article-content">
            <div class="article-title">{{ item.title || "-" }}</div>
            <div class="article-subtitle">
              {{ item.sub_title || "暂无简介" }}
            </div>
            <view class="tools" @click.stop="() => {}">
              <view class="tool_item" @click="starHandle(1,index)"><u-icon :name="[item.star == 1 ? 'heart-fill' : 'heart']" size="19"></u-icon></view>
            </view>
          </div>
        </div>
      </u-list-item>
      <view class="loading_box">
        <u-loading-icon :show="loading"></u-loading-icon>
        <text v-show="!loading && finished">抱歉,没有更多了</text>
      </view>
    </u-list>
    <u-toast ref="uToast"></u-toast>
  </div>
</template>

<script>
import request from '../../server/request.js';
export default {
  data() {
    return {
      loading: false,
      currentPage: 1,
      list: [],
      isShow: false,
      finished: false,
      tabList: [
        {
          name: '关注',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Vue',
        },
        {
          name: 'React',
        },
        {
          name: 'Java',
        },
        {
          name: 'PHP',
        },
        {
          name: 'Python',
        },
        {
          name: 'NodeJs',
        },
      ],
      activeTab: 1,
    };
  },
  options: {
    stylleIsolation: 'shared',
  },
  onLoad(params) {
    console.log('页面load');
    console.log(params);
    this.getArticle();
  },
  onShow(params) {
    console.log('页面show');
    console.log(params);
  },
  onReady(params) {
    console.log('页面ready');
    console.log(params);
  },
  methods: {
    scrolltolower() {
      if (!this.loading) {
        this.loading = true;
        let timer = setTimeout(() => {
          clearTimeout(timer);
          this.loading = false;
          if (this.list.length < 100) {
            this.list.push(
              ...[
                {
                  title: '文章一',
                  sub_title: '文章副标题',
                  star: 0,
                },
                {
                  title: '文章一',
                  sub_title: '文章副标题',
                  star: 0,
                },
                {
                  title: '文章一',
                  sub_title: '文章副标题',
                  star: 0,
                },
                {
                  title: '文章一',
                  sub_title: '文章副标题',
                  star: 0,
                },
                {
                  title: '文章一',
                  sub_title: '文章副标题',
                  star: 0,
                },
                {
                  title: '文章一',
                  sub_title: '文章副标题',
                  star: 0,
                },
                {
                  title: '文章一',
                  sub_title: '文章副标题',
                  star: 0,
                },
                {
                  title: '文章一',
                  sub_title: '文章副标题',
                  star: 0,
                },
              ]
            );
          } else {
            this.finished = true;
          }
        }, 2000);
      }
    },
    getArticle() {
      this.isShow = true;
      setTimeout(() => {
        this.list = [
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
        ];
        this.isShow = false;
      }, 2000);
    },
    goToDetail(id) {
      uni.navigateTo({
        url: '/pagesA/pages/article/articleDetail?id=' + id,
        success(res) {
          console.log(res);
        },
        fail(err) {
          console.log(err);
        },
      });
    },
    starHandle(type, index) {
      this.list[index].star = type;
    },
    tabClick(data) {
      this.activeTab = data.index;
      if (data.index === 0) {
        this.list = [];
        this.finished = true;
      } else {
        this.list = [
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
          {
            title: '文章一',
            sub_title: '文章副标题',
            star: 0,
          },
        ].map((item, index) => {
          item.title = data.name + '文章' + (index + 1);
          return item;
        });
      }
    },
  },
};
</script>
<style lang="scss">
.u-tabs {
  background-color: #fff;
}
</style>
<style lang="scss" scoped>
.article {
  background-color: #e4e4e4;
  height: 100%;
}

.skeleton {
  padding: 40rpx 30rpx;
}

.article-item {
  display: flex;
  padding: 20rpx 30rpx 0;
  background-color: #fff;
  margin: 30rpx 20rpx 0;
  border-radius: 12rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);

  .article-img {
    width: 160rpx;
    height: 160rpx;
    margin-right: 40rpx;
  }

  .article-content {
    flex: 1 0;

    .article-title {
      font-weight: 500;
      color: #333;
      font-size: 36rpx;
      margin-bottom: 12rpx;
      max-width: 400rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .article-subtitle {
      font-size: 28rpx;
      color: #8a8a8a;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 44rpx;
    }

    .tools {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 40rpx;
      color: #a6a6a6;

      /deep/.tool_item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60rpx;
        height: 60rpx;
      }

      .see_people_box {
        display: block;
        font-size: 24rpx;
        color: #909399;
        width: fit-content;
        line-height: 60rpx;
        margin-left: 10rpx;
      }
    }
  }
}

.loading_box {
  text-align: center;
  padding: 20rpx 0 40rpx;

  text {
    color: #82848a;
  }
}

.empty_data {
  background-color: #fff;
  border-radius: 12px;
  padding: 40rpx 0;
  margin: 40rpx 30rpx;
}
</style>