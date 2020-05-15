<template>
	<div class="tab-bar">
		<div class="service">
			<i></i>
			<span>客服</span>
		</div>
		<div class="shop">
			<i></i>
			<span>商铺</span>
		</div>
		<div class="collect">
			<i></i>
			<span>收藏</span>
		</div>
		<div class="cart" @click="toCart">加入购物车</div>
		<div class="purchase">购买</div>
	</div>
</template>
<script>
export default {
	methods: {
		toCart() {
			this.$emit('addCart');
		},
	},
};
</script>
<style lang="less" scoped>
.tab-bar {
	position: fixed;
	display: flex;
	right: 0;
	left: 0;
	bottom: 0;
	height: 1.306666rem;
	background: #fff;
	text-align: center;
	font-size: 0.37rem;
	.service,
	.shop,
	.collect {
		flex: 1;
		line-height: 1.306666rem;
	}
	.cart,
	.purchase {
		line-height: 1.306666rem;
		flex: 2;
		background: rgb(255, 231, 97);
		font-size: 0.42rem;
	}
	.purchase {
		background: #ff5777;
		color: #fff;
	}
}
</style>
