<template>
	<div class="article-detail">
		<div class="article-container">
			<div class="article_h2">{{ detail.title }}</div>
			<div class="article-author">{{detail.author}}</div>
			<div class="article-text">
				<u-parse :content="detail.content"></u-parse>
			</div>
		</div>
		<u-toast ref="uToast"></u-toast>
	</div>
</template>

<script>
	import request from '../../../server/request.js'
	import { showToast } from '../../../config/component.js'
	export default {
		data() {
			return {
				id: '',
				detail: ''
			}
		},
		onLoad(query) {
			this.id = query.id
			this.getDetail(this.id)
		},
		methods: {
			async getDetail(id) {
				const result = await request({
					url: '/home/articleDetail',
					data: {
						id: this.id
					}
				})
				if(result.code == 200) {
					this.detail = result.data
				}else {
					showToast.call(this,'获取失败','error')
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.article-detail {
		background-color: #e4e4e4;
		padding: 30rpx 20rpx;
		height: 100%;
		box-sizing: border-box;
		overflow: scroll;
		.article-container {
			background-color: #fff;
			border-radius: 16rpx;
			min-height: 100%;
			padding: 20rpx 30rpx;
			font-size: 28rpx;
			color: #8a8a8a;
			line-height: 48rpx;
			box-sizing: border-box;
			.article_h2 {
				font-weight: blod;
				font-size: 42rpx;
				text-align: center;
				margin-bottom: 20rpx;
				color: #333;
			}
			.article-author {
				text-align: right;
				margin: 0 40rpx 40rpx 0;
			}
			.article-text {
				text-indent: 40rpx;
			}
		}
	}
</style>