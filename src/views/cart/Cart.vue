<template>
	<div class="cart">
		<cart-header />
		<scroll class="content" ref="Scroll" :probeType="3">
			<cart-item />
		</scroll>
		<cart-tab-bar />
	</div>
</template>
<script>
//相关
import cartHeader from './pages/CartHeader';
import cartItem from './pages/CartItem';
import CartTabBar from './pages/CartTabBar';
//公共
import scroll from '@/components/content/scroll/Scroll';
export default {
	components: {
		cartHeader,
		cartItem,
		CartTabBar,
		scroll,
	},
	methods: {},

	activated() {
		this.$refs.Scroll.refresh();
	},
};
</script>
<style lang="less" scoped>
.cart {
	position: relative;
	height: 100vh;
}
.content {
	position: absolute;
	bottom: 0rem;
	top: 1.173rem;
	left: 0;
	right: 0;
	overflow: hidden;
}
</style>
