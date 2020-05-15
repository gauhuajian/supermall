<template>
	<div class="goods-item" @click="toDetails(goodsItem.iid)">
		<img v-lazy="img" alt="" @load="imageload" />
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
	mounted() {},
	computed: {
		img() {
			return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img;
		},
	},
	methods: {
		imageload() {
			if (this.$route.path.indexOf('/home') != -1) {
				this.$bus.$emit('imageload');
			}
			if (this.$route.path.indexOf('/details') != -1) {
				this.$bus.$emit('imageload');
			}
			if (this.$route.path.indexOf('/category') != -1) {
				this.$bus.$emit('imageload');
			}
		},
		toDetails(iid) {
			this.$router.push('/details/' + iid);
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
