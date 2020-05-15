<template>
	<div class="my">
		<my-header class="header">
			<div slot="nav-center">
				个人中心
			</div>
		</my-header>
		<userInfo />
		<account />
		<orderlist :order="['我的消息', '积分商城', '会员卡']" />
		<service-list :service="['我的购物车', '下载购物APP']" />
	</div>
</template>
<script>
import MyHeader from '@/components/content/navbar/Navbar';
import userInfo from './pages/UserInfo';
import account from './pages/Account';
import orderlist from './pages/OrderList';
import ServiceList from './pages/ServiceList';
export default {
	components: {
		MyHeader,
		userInfo,
		account,
		orderlist,
		ServiceList,
	},
	data() {
		return {};
	},
};
</script>
<style lang="less" scoped>
.header {
	background: #ff5777;
	font-size: 0.42rem;
	font-weight: 700;
	color: #fff;
}
</style>
