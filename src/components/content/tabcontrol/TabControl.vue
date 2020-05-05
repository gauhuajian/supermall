<template>
	<div class="control">
		<div
			class="control-item"
			v-for="(item, index) in title"
			:key="index"
			@click="itemClick(index)"
			:class="{ active: index == initIndex }"
		>
			<span>{{ item }}</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			initIndex: 0,
		};
	},
	methods: {
		itemClick(index) {
			this.initIndex = index;
			this.$emit('itemClick', index);
		},
	},
};
</script>
<style lang="less" scoped>
.control {
	display: flex;
	height: 1.1733rem;
	line-height: 1.1733rem;
	.control-item {
		flex: 1;
		font-size: 0.42rem;
		text-align: center;
	}
	.active {
		color: #ff5777;
		span {
			padding-bottom: 0.2rem;
			border-bottom: 0.07555rem solid #ff5777;
		}
	}
}
</style>
