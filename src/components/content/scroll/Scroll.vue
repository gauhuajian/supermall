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
	data() {
		return {
			scroll: '',
		};
	},
	mounted() {
		this.scroll = new BScroll(document.querySelector('.wrapper'), {
			click: true,
		});
		console.log(this.scroll);
	},
	updated() {
		/**
		 * 图片未加载进来 BScroll就计算高度值导致无法滑动
		 * 在updated监听dom的实时更新,图片加加载完毕，
		 * 调用refresh方法重新计算高度
		 */
		this.scroll.refresh();
	},
};
</script>

<style lang="less" scoped></style>
