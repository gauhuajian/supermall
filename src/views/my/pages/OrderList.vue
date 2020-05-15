<template>
	<div class="list">
		<div class="item" v-for="(item, index) in order" :key="index">
			{{ item }}
		</div>
	</div>
</template>
<script>
export default {
	props: {
		order: {
			type: Array,
			default() {
				return [];
			},
		},
	},
};
</script>
<style lang="less" scoped>
.list {
	border-bottom: solid #eee 0.2rem;
}
.item {
	padding: 0.3rem;
	font-size: 0.42rem;
	border-bottom: 0.02rem #ddd solid;
}
</style>
