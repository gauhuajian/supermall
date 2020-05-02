<template>
	<div id="app">
		<router-view></router-view>
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
