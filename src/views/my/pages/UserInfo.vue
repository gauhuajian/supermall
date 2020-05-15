<template>
	<div class="user-info">
		<div class="user-left">
			<img src="~@/assets/img/common/profile.png" alt="" />
		</div>
		<div class="info">
			<div class="login"><span>登录</span> /<span>注册</span></div>
			<div class="msg">
				<div class="img">
					<img src="~@/assets/img/common/mobile.png" alt="" />
				</div>
				<span>暂无绑定手机</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.user-info {
	display: flex;
	// box-sizing: content-box;
	width: 100%;
	height: 2.4rem;
	// padding: 0.2rem;
	background: #ff5777;
	.user-left {
		padding: 0.2rem;
		width: 1.6rem;
		img {
			width: 1.6rem;
		}
	}
	.info {
		font-size: 0.42rem;
		color: #fff;
		padding: 0.2rem;
		margin-top: 0.2rem;

		.msg {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 0.2rem;
			.img {
				width: 0.32rem;
				img {
					display: block;
					width: 0.32rem;
				}
			}
		}
	}
}
</style>
