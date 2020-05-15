<template>
	<div id="home">
		<nav-bar class="title">
			<div slot="nav-center">购物街</div>
		</nav-bar>
		<tab-control
			ref="tabControls"
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
		<!-- <BackTop @click.native="backClick" v-show="isShowBackTop" /> -->
		<backTop @click.native="backClick" v-show="isShowBackTop" />
	</div>
</template>
<script>
import Banner from './pages/Banner';
import Recommend from './pages/Recommend';
import FeatuerView from './pages/FeatuerView';

//公共组件
import navBar from '@/components/content/navbar/Navbar';
import TabControl from '@/components/content/tabcontrol/TabControl';
import Goods from '@/components/content/goods/Goods';
import Scroll from '@/components/content/scroll/Scroll';
//混入
import { itemListenerMixin, BackTop } from '@/common/mix';

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
	mixins: [itemListenerMixin, BackTop],
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
			isShowControl: false,
			tabControlTop: 0,
			scrollY: 0,
		};
	},
	created() {
		this.getHome();
		this.getHomeGoods('pop');
		this.getHomeGoods('new');
		this.getHomeGoods('sell');
	},
	activated() {
		this.$refs.Scroll.scrollto(0, this.scrollY, 0);
		this.$refs.Scroll.refresh();
	},
	deactivated() {
		this.scrollY = this.$refs.Scroll.scroll.y;
		this.$bus.$off('imageload', this.itemListener);
	},

	computed: {
		showGoods() {
			return this.goods[this.currentType].list;
		},
	},
	methods: {
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
			this.$refs.tabControl.initIndex = index;
			this.$refs.tabControls.initIndex = index;
			this.$refs.Scroll.scrollto(0, -this.$refs.tabControl.$el.offsetTop, 200);
		},
		//监听滚动位置
		scroll(position) {
			this.backTop(position); //混入返回顶部
			this.isShowControl = -position.y > this.tabControlTop;
		},
		//上拉加载
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
			console.log(res.data.data);

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
