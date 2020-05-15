<template>
	<div class="backtop">
		<img src="@/assets/img/common/top.png" alt="" />
	</div>
</template>
<script>
export default {
	methods: {},
};
</script>
<style lang="less" scoped>
.backtop {
	position: fixed;
	z-index: 99999;
	bottom: 1.8rem;
	right: 0.5rem;
	img {
		width: 1rem;
		height: 1rem;
	}
}
</style>
