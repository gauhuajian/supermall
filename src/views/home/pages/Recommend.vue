<template>
	<div class="recommend">
		<div class="recommend-item" v-for="(item, index) in recommend" :key="index">
			<a :href="item.link">
				<img :src="item.image" alt="" />
				<div class="item-title">{{ item.title }}</div>
			</a>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		recommend: {
			type: Array,
			default() {
				return [];
			},
		},
	},
};
</script>
<style lang="less" scoped>
.recommend {
	display: flex;
	flex-wrap: wrap;
	box-sizing: border-box;
	height: 3.4666rem;
	padding: 0.5rem 0;
	border-bottom: 0.2rem solid #eee;
	.recommend-item {
		width: 2.5rem;
		a {
			text-decoration: none;
			display: block;
			img {
				width: 1.5rem;
				margin-left: auto;
				margin-right: auto;
				display: block;
			}
			.item-title {
				margin-top: 0.3rem;
				text-align: center;
				font-size: 0.42rem;
				color: #333;
			}
		}
	}
}
</style>
