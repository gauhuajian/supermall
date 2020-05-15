<template>
	<div v-show="isShow" class="toast">
		<div class="toast-title">
			{{ msg }}
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			msg: '',
			isShow: false,
		};
	},
	methods: {
		show(msg, timer = 2000) {
			this.msg = msg;
			this.isShow = true;
			setTimeout(() => {
				this.msg = ' ';
				this.isShow = false;
			}, timer);
		},
	},
};
</script>
<style lang="less" scoped>
.toast {
	position: fixed;
	z-index: 99999;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	.toast-title {
		border-radius: 0.2rem;
		padding: 0.4rem 1rem;
		background: rgba(0, 0, 0, 0.8);
		color: #fff;
		font-size: 0.42rem;
	}
}
</style>
