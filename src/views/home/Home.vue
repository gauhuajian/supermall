<template>
	<keep-alive>
		<div id="home">
			<nav-bar class="title">
				<div slot="nav-center">购物街</div>
			</nav-bar>
			<tab-control
				ref="tabControl"
				class="tabcontrol"
				v-show="isShowControl"
				:title="['流行', '新款', '精选']"
				@itemClick="itemClick"
			/>
			<Scroll class="con" ref="Scroll" :probeType="3" @scroll="scroll" :pullUpLoad="true" @pullingUp="loadMore">
				<Banner :banner="banner" @bannerImageload="bannerImageload" />
				<Recommend :recommend="recommend" />
				<FeatuerView />
				<tab-control ref="tabControl" :title="['流行', '新款', '精选']" @itemClick="itemClick" />
				<Goods :goods="showGoods" />
			</Scroll>
			<BackTop @click.native="backClick" v-show="isShowBackTop" />
		</div>
	</keep-alive>
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
import BackTop from '@/components/content/backtop/BackTop';

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
		BackTop,
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
			isShowBackTop: false,
			tabControlTop: 0,
			isShowControl: false,
		};
	},
	created() {
		this.getHome();
		this.getHomeGoods('pop');
		this.getHomeGoods('new');
		this.getHomeGoods('sell');
	},
	mounted() {
		//重新计算滑动高度 调用防抖
		const refresh = this.debounce(this.$refs.Scroll.refresh, 200);
		this.$bus.$on('imageload', () => {
			refresh();
		});
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list;
		},
	},
	methods: {
		//防抖
		debounce(func, delay) {
			let tiems = null;
			return function() {
				if (tiems) clearTimeout(tiems);
				tiems = setTimeout(() => {
					func.call(this);
				}, delay);
			};
		},
		//事件监听相关
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
		//返回顶部
		backClick() {
			this.$refs.Scroll.scrollto(0, 0);
		},
		//监听滚动位置
		scroll(position) {
			this.isShowBackTop = -position.y > 700;
			this.isShowControl = -position.y > this.tabControlTop;
		},
		// 下拉加载
		loadMore() {
			this.getHomeGoods(this.currentType);
			this.$refs.Scroll.finishPullUp(); //上拉加载需要调用此方法告诉 better-scroll 数据已加载
		},
		//轮播图片加载
		bannerImageload() {
			this.tabControlTop = this.$refs.tabControl.$el.offsetTop;
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
.tabcontrol {
	position: relative;
	z-index: 9999;
	background: #fff;
	top: 1.17333rem;
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
