<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
	props: {
		probeType: {
			type: Number,
			default() {
				return 0;
			},
		},
		pullUpLoad: {
			type: Boolean,
			default() {
				return false;
			},
		},
	},
	data() {
		return {
			scroll: null,
		};
	},
	methods: {
		//返回顶部
		scrollto(x, y, time = 300) {
			this.scroll.scrollTo(x, y, time);
		},
		//重新计算
		refresh() {
			/**
			 * 图片未加载进来 BScroll就计算高度值导致无法滑动
			 *
			 * 调用refresh方法重新计算高度
			 */
			this.scroll && this.scroll.refresh();
		},
		//下拉加载完毕发送信号
		finishPullUp() {
			this.scroll && this.scroll.finishPullUp();
		},
	},
	mounted() {
		//初始化
		this.scroll = new BScroll(document.querySelector('.wrapper'), {
			click: true,
			probeType: this.probeType, //派发scroll事件
			pullUpLoad: this.pullUpLoad,
		});

		//监听滚动
		this.scroll.on('scroll', (position) => {
			this.$emit('scroll', position);
		});
		//上拉加载
		this.scroll.on('pullingUp', () => {
			this.$emit('pullingUp');
		});
	},
};
</script>

<style lang="less" scoped></style>
