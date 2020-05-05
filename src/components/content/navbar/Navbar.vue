<template>
	<div class="nav">
		<div class="nav-left">
			<slot name="nav-left"></slot>
		</div>
		<div class="nav-center">
			<slot name="nav-center"></slot>
		</div>
		<div class="nav-right">
			<slot name="nav-right"></slot>
		</div>
	</div>
</template>
<script></script>
<style lang="less" scoped>
.nav {
	display: flex;
	height: 1.17rem;
	line-height: 1.17rem;
	.nav-left {
		width: 1.6rem;
	}
	.nav-center {
		flex: 1;
		text-align: center;
	}
	.nav-right {
		width: 1.6rem;
	}
}
</style>
