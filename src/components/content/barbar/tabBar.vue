<template>
	<div id="tabBar">
		<tab-bar-item path="/home">
			<i slot="inco" class="iconfont">&#xe60c;</i>
			<div slot="title">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/category">
			<i slot="inco" class="iconfont">&#xe601;</i>
			<div slot="title">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/cart">
			<i slot="inco" class="iconfont">&#xe600;</i>
			<div slot="title">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/my">
			<i slot="inco" class="iconfont">&#xe990;</i>
			<div slot="title">我的</div>
		</tab-bar-item>
	</div>
</template>

<script>
import tabBarItem from './tabBarItem';
export default {
	components: {
		tabBarItem,
	},
};
</script>

<style lang="less" scoped>
#tabBar {
	position: fixed;
	display: flex;
	align-items: center;
	bottom: 0;
	left: 0;
	right: 0;
	height: 1.30666rem;
	background-color: #f6f6f6;
}
</style>
