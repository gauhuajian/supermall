<template>
	<div id="home">
		<nav-bar class="title">
			<div slot="nav-center">购物街</div>
		</nav-bar>
		<Scroll class="con">
			<Banner :banner="banner" />
			<Recommend :recommend="recommend" />
			<FeatuerView />
			<tab-control class="control" :title="['流行', '新款', '精选']" @itemClick="itemClick" />
			<Goods :goods="showGoods" />
		</Scroll>
	</div>
</template>
<script>
import Banner from './Banner';
import Recommend from './Recommend';
import FeatuerView from './FeatuerView';

//公共组件
import navBar from '@/components/content/navbar/Navbar';
import TabControl from '@/components/content/tabcontrol/TabControl';
import Goods from '@/components/content/goods/Goods';
import Scroll from '@/components/content/scroll/Scroll';

export default {
	components: {
		Banner,
		Recommend,
		FeatuerView,
		//公共组件
		navBar,
		TabControl,
		Goods,
		Scroll,
	},
	data() {
		return {
			banner: [],
			recommend: [],
			goods: {
				pop: {
					page: 0,
					list: [],
				},
				new: {
					page: 0,
					list: [],
				},
				sell: {
					page: 0,
					list: [],
				},
			},
			currentType: 'pop',
		};
	},
	created() {
		this.getHome();
		this.getHomeGoods('pop');
		this.getHomeGoods('new');
		this.getHomeGoods('sell');
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list;
		},
	},
	methods: {
		itemClick(index) {
			switch (index) {
				case 0:
					this.currentType = 'pop';
					break;
				case 1:
					this.currentType = 'new';
					break;
				case 2:
					this.currentType = 'sell';
					break;
				default:
					break;
			}
		},

		//网络相关方法
		async getHome() {
			let res = await this.axios.get('/home/multidata');
			this.banner = res.data.data.banner.list;
			this.recommend = res.data.data.recommend.list;
		},
		async getHomeGoods(type) {
			const page = this.goods[type].page + 1;
			let res = await this.axios.get('/home/data', {
				params: {
					type,
					page,
				},
			});
			this.goods[type].list.push(...res.data.data.list);
			this.goods[type].page += 1;
		},
	},
};
</script>
<style lang="less" scoped>
#home {
	height: 100vh;
	position: relative;
}
.title {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99;
	background: #ff5777;
	color: #fff;
	font-size: 0.42rem;
}
.control {
	position: sticky;
	top: 1.17333rem;
	background: #fff;
	z-index: 999;
}
.con {
	position: absolute;
	top: 1.17333rem;
	bottom: 1.30666rem;
	left: 0;
	right: 0;
	overflow: hidden;
}
</style>
