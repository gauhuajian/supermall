<template>
	<div class="tab-bar">
		<div class="pitch" @click="checkClick">
			<img v-show="checkAll" src="@/assets/img/common/nocheck.svg" alt="" />
			<img v-show="!checkAll" src="@/assets/img/common/check.svg" alt="" />
			<span>全选</span>
		</div>
		<div class="total">合计:￥{{ total }}</div>
		<div class="calculate" @click="calcuClick">去计算({{ calculate }})</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		total() {
			return this.CartList.filter((item) => {
				return item.isCheck;
			})
				.reduce((pre, item) => {
					return pre + item.lowNowPrice * item.count;
				}, 0)
				.toFixed(2);
		},
		calculate() {
			return this.CartList.filter((item) => item.isCheck).length;
		},
		checkAll() {
			if (this.CartList.length === 0) return true;
			return this.CartList.some((item) => !item.isCheck);
		},
		...mapGetters(['CartList']),
	},
	methods: {
		checkClick() {
			if (this.checkAll) {
				this.CartList.forEach((item) => (item.isCheck = true));
			} else {
				this.CartList.forEach((item) => (item.isCheck = false));
			}
		},
		calcuClick() {
			this.$toast.show('功能未开通');
		},
	},
};
</script>
<style lang="less" scoped>
.tab-bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 1.30666rem;
	background: #eee;
	font-size: 0.42rem;
	color: #555;
	.pitch {
		display: flex;
		align-items: center;
		padding: 0.2rem;
		img {
			display: block;
			width: 0.7rem;
			height: 0.7rem;
		}
	}
	.total {
		padding: 0.2rem;
	}
	.calculate {
		padding: 0.3rem 0.7rem;
		background: #ff5777;
		color: #fff;
	}
}
</style>
