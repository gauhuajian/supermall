<template>
	<div class="tab-bar-item" @click="toPath" :class="{ active: isActive }">
		<slot name="inco"></slot>
		<div class="title">
			<slot name="title"></slot>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		path: String,
	},
	methods: {
		toPath() {
			this.$router.push(this.path);
		},
	},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path) != -1;
		},
	},
};
</script>

<style lang="less" scoped>
.tab-bar-item {
	flex: 1;
	text-align: center;
	font-size: 0.32rem;
	i {
		font-size: 0.6rem;
	}
}
.active {
	color: #ff5777;
}
</style>
