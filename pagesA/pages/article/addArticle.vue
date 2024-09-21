<template>
	<div class="addArticle">
		<u--form
			labelPosition="left"
			:model="articleForm"
			:rules="rules"
			ref="form1"
		>
			<u-form-item label="标题" prop="articleForm.title" borderBottom>
				<u--input v-model="articleForm.title" border="none"></u--input>
			</u-form-item>
			<u-form-item label="简介" prop="articleForm.sub_title" borderBottom>
				<u--textarea
					v-model="articleForm.sub_title"
					placeholder="请输入简介"
				></u--textarea>
			</u-form-item>
			<u-form-item label="封面" prop="articleForm.img" borderBottom>
				<u-upload
					:fileList="fileList"
					@afterRead="afterRead"
					@delete="deletePic"
					name="img"
					:maxCount="1"
				></u-upload>
			</u-form-item>
			
		</u--form>
<view class="container">
		<view class="page-body">
			<view class="wrapper">
				<view
					class="toolbar"
					@tap="format"
					style="height: 120px; overflow-y: auto"
				>
					<view
						:class="formats.bold ? 'ql-active' : ''"
						class="iconfont icon-zitijiacu"
						data-name="bold"
					></view>
					<view
						:class="formats.italic ? 'ql-active' : ''"
						class="iconfont icon-zitixieti"
						data-name="italic"
					></view>
					<view
						:class="formats.underline ? 'ql-active' : ''"
						class="iconfont icon-zitixiahuaxian"
						data-name="underline"
					></view>
					<view
						:class="formats.strike ? 'ql-active' : ''"
						class="iconfont icon-zitishanchuxian"
						data-name="strike"
					></view>
					<!-- #ifndef MP-BAIDU -->
					<view
						:class="formats.align === 'left' ? 'ql-active' : ''"
						class="iconfont icon-zuoduiqi"
						data-name="align"
						data-value="left"
					></view>
					<!-- #endif -->
					<view
						:class="formats.align === 'center' ? 'ql-active' : ''"
						class="iconfont icon-juzhongduiqi"
						data-name="align"
						data-value="center"
					></view>
					<view
						:class="formats.align === 'right' ? 'ql-active' : ''"
						class="iconfont icon-youduiqi"
						data-name="align"
						data-value="right"
					></view>
					<view
						:class="formats.align === 'justify' ? 'ql-active' : ''"
						class="iconfont icon-zuoyouduiqi"
						data-name="align"
						data-value="justify"
					></view>
					<!-- #ifndef MP-BAIDU -->
					<view
						:class="formats.lineHeight ? 'ql-active' : ''"
						class="iconfont icon-line-height"
						data-name="lineHeight"
						data-value="2"
					></view>
					<view
						:class="formats.letterSpacing ? 'ql-active' : ''"
						class="iconfont icon-Character-Spacing"
						data-name="letterSpacing"
						data-value="2em"
					></view>
					<view
						:class="formats.marginTop ? 'ql-active' : ''"
						class="iconfont icon-722bianjiqi_duanqianju"
						data-name="marginTop"
						data-value="20px"
					></view>
					<view
						:class="formats.marginBottom ? 'ql-active' : ''"
						class="iconfont icon-723bianjiqi_duanhouju"
						data-name="marginBottom"
						data-value="20px"
					></view>
					<!-- #endif -->

					<view
						class="iconfont icon-clearedformat"
						@tap="removeFormat"
					></view>

					<!-- #ifndef MP-BAIDU -->
					<view
						:class="formats.fontFamily ? 'ql-active' : ''"
						class="iconfont icon-font"
						data-name="fontFamily"
						data-value="Pacifico"
					></view>
					<view
						:class="formats.fontSize === '24px' ? 'ql-active' : ''"
						class="iconfont icon-fontsize"
						data-name="fontSize"
						data-value="24px"
					></view>
					<!-- #endif -->
					<view
						:class="formats.color === '#0000ff' ? 'ql-active' : ''"
						class="iconfont icon-text_color"
						data-name="color"
						data-value="#0000ff"
					></view>
					<view
						:class="
							formats.backgroundColor === '#00ff00'
								? 'ql-active'
								: ''
						"
						class="iconfont icon-fontbgcolor"
						data-name="backgroundColor"
						data-value="#00ff00"
					></view>
					<view class="iconfont icon-date" @tap="insertDate"></view>
					<view
						class="iconfont icon--checklist"
						data-name="list"
						data-value="check"
					></view>
					<view
						:class="formats.list === 'ordered' ? 'ql-active' : ''"
						class="iconfont icon-youxupailie"
						data-name="list"
						data-value="ordered"
					></view>
					<view
						:class="formats.list === 'bullet' ? 'ql-active' : ''"
						class="iconfont icon-wuxupailie"
						data-name="list"
						data-value="bullet"
					></view>

					<view class="iconfont icon-undo" @tap="undo"></view>
					<view class="iconfont icon-redo" @tap="redo"></view>

					<view
						class="iconfont icon-outdent"
						data-name="indent"
						data-value="-1"
					></view>
					<view
						class="iconfont icon-indent"
						data-name="indent"
						data-value="+1"
					></view>
					<view
						class="iconfont icon-fengexian"
						@tap="insertDivider"
					></view>
					<view
						class="iconfont icon-charutupian"
						@tap="insertImage"
					></view>
					<view
						:class="formats.header === 1 ? 'ql-active' : ''"
						class="iconfont icon-format-header-1"
						data-name="header"
						:data-value="1"
					></view>
					<view
						:class="formats.script === 'sub' ? 'ql-active' : ''"
						class="iconfont icon-zitixiabiao"
						data-name="script"
						data-value="sub"
					></view>
					<view
						:class="formats.script === 'super' ? 'ql-active' : ''"
						class="iconfont icon-zitishangbiao"
						data-name="script"
						data-value="super"
					></view>

					<view class="iconfont icon-shanchu" @tap="clear"></view>

					<view
						:class="formats.direction === 'rtl' ? 'ql-active' : ''"
						class="iconfont icon-direction-rtl"
						data-name="direction"
						data-value="rtl"
					></view>
				</view>

				<view class="editor-wrapper">
					<editor
						id="editor"
						class="ql-container"
						placeholder="开始输入..."
						show-img-size
						show-img-toolbar
						show-img-resize
						@statuschange="onStatusChange"
						:read-only="readOnly"
						@ready="onEditorReady"
					>
					</editor>
				</view>
			</view>
		</view>
	</view>
		<u-button
			type="primary"
			text="提交"
			shape="circle"
			@click="submitHandle"
		></u-button>
		<u-toast ref="uToast"></u-toast>
	</div>
</template>

<script>
	import { showToast } from '../../../config/component.js'
import { request } from '../../../server/request.js'
export default {
	data() {
		return {
			articleForm: {
				title: "",
				sub_title: "",
				content: "",
				img: "",
			},
			placeholder: "开始输入...",
			editorCtx: "",
			fileList: [],
			readOnly: false,
			formats: {},
			rules: {
				title: {
					type: "string",
					required: true,
					message: "请输入文章标题",
					trigger: ["change", "blur"],
				},
			},
		}
	},
	methods: {
		// 删除图片
		deletePic(event) {
			this[`fileList${event.name}`].splice(event.index, 1)
		},
		// 新增图片
		async afterRead(event) {
			// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
			let lists = [].concat(event.file)
			let fileListLen = this[`fileList${event.name}`].length
			lists.map((item) => {
				this[`fileList${event.name}`].push({
					...item,
					status: "uploading",
					message: "上传中",
				})
			})
			for (let i = 0; i < lists.length; i++) {
				const result = await this.uploadFilePromise(lists[i].url)
				let item = this[`fileList${event.name}`][fileListLen]
				this[`fileList${event.name}`].splice(
					fileListLen,
					1,
					Object.assign(item, {
						status: "success",
						message: "",
						url: result,
					})
				)
				fileListLen++
			}
		},
		uploadFilePromise(url) {
			return new Promise((resolve, reject) => {
				let a = uni.uploadFile({
					url: "http://192.168.2.21:7001/upload", // 仅为示例，非真实的接口地址
					filePath: url,
					name: "file",
					formData: {
						user: "test",
					},
					success: (res) => {
						setTimeout(() => {
							resolve(res.data.data)
						}, 1000)
					},
				})
			})
		},
		submitHandle() {
			if (this.articleForm.title.trim() == "")
				return this.$refs.uToast.show({
					type: "default",
					message: "文章标题不能为空",
				})
			if (this.articleForm.sub_title.trim() == "")
				return this.$refs.uToast.show({
					type: "default",
					message: "文章副标题不能为空",
				})
				let that = this
			this.editorCtx.getContents({
				success(res) {
					console.log(res);
					if(res.html) {
						request({
							method: 'POST',
							url: '/home/createArticle',
							data: {
								...that.articleForm,
								content: res.html
							}
						}).then(res => {
							if(res.code == 200) {
								showToast.call(that,'添加成功','success')
								let timer = setTimeout(() => {
									clearTimeout(timer)
										uni.reLaunch({
											url: '/pages/index/index'
										})
								},600)
							}
						}).catch(err => {
							showToast.call(that,'添加失败')
						})
					}else {
						that.$refs.uToast.show({
							type: 'default',
							message: '请输入文章内容'
						})
					}
				},
				fail(err) {
					console.log(err);
				}
			})
		},
		readOnlyChange() {
			this.readOnly = !this.readOnly
		},
		onEditorReady() {
			// #ifdef MP-BAIDU
			this.editorCtx =
				requireDynamicLib("editorLib").createEditorContext("editor")
			// #endif
			// #ifdef APP-PLUS || MP-WEIXIN || H5
			uni.createSelectorQuery()
				.select("#editor")
				.context((res) => {
					this.editorCtx = res.context
				})
				.exec()
			// #endif
		},
		undo() {
			this.editorCtx.undo()
		},
		redo() {
			this.editorCtx.redo()
		},
		format(e) {
			let { name, value } = e.target.dataset
			if (!name) return
			// console.log('format', name, value)
			this.editorCtx.format(name, value)
		},
		onStatusChange(e) {
			const formats = e.detail
			this.formats = formats
		},
		insertDivider() {
			this.editorCtx.insertDivider({
				success: function () {
					console.log("insert divider success")
				},
			})
		},
		clear() {
			uni.showModal({
				title: "清空编辑器",
				content: "确定清空编辑器全部内容？",
				success: (res) => {
					if (res.confirm) {
						this.editorCtx.clear({
							success: function (res) {
								console.log("clear success")
							},
						})
					}
				},
			})
		},
		removeFormat() {
			this.editorCtx.removeFormat()
		},
		insertDate() {
			const date = new Date()
			const formatDate = `${date.getFullYear()}/${
				date.getMonth() + 1
			}/${date.getDate()}`
			this.editorCtx.insertText({
				text: formatDate,
			})
		},
		insertImage() {
			uni.chooseImage({
				count: 1,
				success: (res) => {
					this.editorCtx.insertImage({
						src: res.tempFilePaths[0],
						alt: "图像",
						success: function () {
							console.log("insert image success")
						},
					})
				},
			})
		},
	},
}
</script>

<style lang="scss" scoped>
	@import "./editor-icon.css";
	.page-body {
		border: 1px solid #d2d2d2;
	}
	.wrapper {
		height: 460px;
	}
	.editor-wrapper {
		height: 300px;
		background: #fff;
	}
	.iconfont {
		display: inline-block;
		padding: 8px 8px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		font-size: 20px;
	}
	.toolbar {
		box-sizing: border-box;
		border-bottom: 0;
		font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
	}
	.ql-container {
		box-sizing: border-box;
		padding: 12px 15px;
		width: 100%;
		min-height: 30vh;
		height: 100%;
		margin-top: 20px;
		font-size: 16px;
		line-height: 1.5;
	}
	.ql-active {
		color: #06c;
	}
.addArticle {
	padding: 40rpx 30rpx;
}
/deep/.u-button {
	width: 460rpx;
	margin: 80rpx auto 30rpx;
}
</style>
