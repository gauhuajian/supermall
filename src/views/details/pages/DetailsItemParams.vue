<template>
	<div class="itemParams">
		<div class="rule">
			<div v-for="(item, index) in itemParams.rule" :key="index">
				<span v-for="(val, index) in item" :key="index">
					{{ val }}
				</span>
			</div>
		</div>
		<div class="info">
			<div v-for="(item, index) in this.itemParams.info.set" :key="index">
				<span v-for="(val, key) in item" :key="key">{{ val }}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		itemParams: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	mounted() {},
};
</script>
<style lang="less" scoped>
.itemParams {
	.rule {
		div {
			font-size: 0.42rem;
			display: flex;
			justify-content: space-between;
			padding: 0.4rem 0.2rem;
			border-bottom: 0.02rem #ddd solid;
			&:last-child {
				border-bottom: 0.05rem #ddd solid;
			}
			span {
				flex: 1;
				text-align: left;
			}
		}
	}
	.info {
		div {
			font-size: 0.42rem;
			display: flex;
			justify-content: space-between;
			padding: 0.4rem 0.2rem;
			border-bottom: 0.02rem #ddd solid;

			span {
				width: 30%;
				&:nth-child(2) {
					width: 70%;

					color: #ff5777;
				}
			}
		}
	}
}
</style>
