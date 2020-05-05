<template>
	<div class="goods">
		<GoodsItem v-for="(item, index) in goods" :key="index" :goods-item="item" />
	</div>
</template>

<script>
import GoodsItem from './GoodsItem';
export default {
	props: {
		goods: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	components: {
		GoodsItem,
	},
};
</script>
<style lang="less" scoped>
.goods {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 2px;
}
</style>
