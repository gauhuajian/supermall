<template>
	<div class="home">
		<nav-bar class="title">
			<div slot="nav-center">购物街</div>
		</nav-bar>
		<Banner :banner="banner" />
		<Recommend :recommend="recommend" />
	</div>
</template>
<script>
import navBar from '@/components/content/navbar/Navbar';
import Banner from './Banner';
import Recommend from './Recommend';
export default {
	components: {
		navBar,
		Banner,
		Recommend,
	},
	data() {
		return {
			banner: [],
			dKeyword: [],
			keywords: [],
			recommend: [],
		};
	},
	async created() {
		let res = await this.axios.get('/home/multidata');
		this.banner = res.data.data.banner.list;
		this.dKeyword = res.data.data.dKeyword.list;
		this.keywords = res.data.data.keywords.list;
		this.recommend = res.data.data.recommend.list;
	},
};
</script>
<style lang="less" scoped>
.title {
	background: #ff5777;
	color: #fff;
	font-size: 0.42rem;
}
</style>
