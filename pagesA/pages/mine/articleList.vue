<template>
	<div class="article">
		<div class="empty_data" v-if="list.length == 0">
			<u-empty
				mode="list"
				icon="http://cdn.uviewui.com/uview/empty/car.png"
			>
			</u-empty>
		</div>
		<u-list @scrolltolower="scrolltolower" v-else>
			<u-list-item
				v-for="(item, index) in list"
				:key="index"
				class="articles"
			>
				<div class="article-item" @click="goToDetail(item._id)">
					<image
						:src="
							item.img ||
							'https://cdn.uviewui.com/uview/album/1.jpg'
						"
						alt=""
						class="article-img"
					></image>
					<div class="article-content">
						<div class="article-title">{{ item.title || "-" }}</div>
						<div class="article-subtitle">
							{{ item.sub_title || "暂无简介" }}
						</div>
						<div class="tools">
							<u-icon name="thumb-up" size="19"></u-icon>
							<u-icon name="thumb-down" size="19"></u-icon>
							<div class="num">
								<u-icon
									class="eye-icon"
									name="eye"
									size="19"
								></u-icon
								>(20)
							</div>
						</div>
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
import request from "../../../server/request.js"
export default {
	data() {
		return {
			loading: false,
			currentPage: 1,
			list: [],
			finished: false,
		}
	},
	options: {
		stylleIsolation: "shared",
	},
	onLoad() {
		this.getArticle()
	},
	methods: {
		scrolltolower() {
			if (!this.loading) {
				this.loading = true
				let timer = setTimeout(() => {
					clearTimeout(timer)
					this.getArticle()
				}, 500)
			}
		},
		getArticle() {
			request({
				url: "/home/articles",
				data: {
					page: this.currentPage,
				},
			}).then((res) => {
				if (res.code == 200) {
					this.loading = false
					if (res.list.length) {
						this.list = [...this.list, ...res.list]
					} else {
						this.finished = true
					}
					this.currentPage++
				} else {
				}
			})
		},
		goToDetail(id) {
			uni.navigateTo({
				url: "/pagesA/pages/article/articleDetail?id=" + id,
				success(res) {
					console.log(res)
				},
				fail(err) {
					console.log(err)
				},
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.article {
	background-color: #e4e4e4;
	height: 100%;
}
.article-item {
	display: flex;
	padding: 20rpx 30rpx;
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
			/deep/.u-icon {
				width: 60rpx;
				height: 60rpx;
			}

			.num {
				display: flex;
				align-items: center;
				font-size: 26rpx;
				/deep/.u-icon {
					margin-right: -20rpx;
				}
			}
		}
	}
}
.loading_box {
	text-align: center;
	margin-bottom: 40rpx;
	color: #e8e8e8;
}
.empty_data {
	background-color: #fff;
	border-radius: 12px;
	padding: 40rpx 0;
}
</style>
