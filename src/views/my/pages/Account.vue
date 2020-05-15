<template>
	<div class="account">
		<div class="item">
			<div><span>0.00</span>元</div>
			<div>我的余额</div>
		</div>
		<div class="item">
			<div><span>0</span>个</div>
			<div>我的优惠</div>
		</div>
		<div class="item">
			<div><span>0</span>分</div>
			<div>我的积分</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.account {
	display: flex;
	border-bottom: 0.3rem #eee solid;
	text-align: center;
	font-size: 0.37rem;
	color: #666;
	.item {
		flex: 1;
		padding: 0.4rem;
		div {
			padding-bottom: 0.1rem;
		}
		span {
			color: #ff5777;
			font-size: 0.533rem;
			font-weight: 700;
		}
		&:first-child {
			border-right: 0.02rem #ddd solid;
		}
		&:last-child {
			border-left: 0.02rem #ddd solid;
		}
	}
}
</style>
