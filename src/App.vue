<template>
	<div id="app">
		<keep-alive exclude="Detalis">
			<router-view></router-view>
		</keep-alive>
		<tab-bar />
	</div>
</template>
<script>
import tabBar from './components/content/barbar/tabBar';
export default {
	components: {
		tabBar,
	},
};
</script>
<style lang="less">
@import './assets/css/base.css';
</style>
