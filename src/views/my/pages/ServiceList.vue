<template>
	<div class="service">
		<div class="service-item" v-for="(item, index) in service" :key="index">
			{{ item }}
		</div>
	</div>
</template>
<script>
export default {
	props: {
		service: {
			type: Array,
			default() {
				return [];
			},
		},
	},
};
</script>
<style lang="less" scoped>
.service-item {
	padding: 0.3rem;
	font-size: 0.42rem;
	border-bottom: 0.02rem #ddd solid;
}
</style>
