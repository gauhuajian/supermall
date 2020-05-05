<template>
	<div class="goods-item">
		<img :src="goodsItem.show.img" alt="" @load="imageload" />
		<div>
			<p class="title">{{ goodsItem.title }}</p>
			<span class="price">{{ goodsItem.price }}￥</span>
			<span> | </span>
			<span class="cfav">收藏:{{ goodsItem.cfav }}</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		goodsItem: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	methods: {
		imageload() {
			this.$bus.$emit('imageload');
		},
	},
};
</script>
<style lang="less" scoped>
.goods-item {
	width: 48%;
	font-size: 0.32rem;
	text-align: center;
	padding-bottom: 0.2rem;
	img {
		width: 100%;
		border-radius: 0.2rem;
	}
	p {
		margin: 0.2rem 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.price {
		color: #ff5777;
	}
}
</style>
