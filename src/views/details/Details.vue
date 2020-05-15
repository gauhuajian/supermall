<template>
	<div class="details">
		<details-header ref="header" @itemClick="itemClick" />
		<scroll class="scroll" ref="Scroll" @scroll="scroll" :probeType="3">
			<details-banner :images="images" />
			<details-info :goods="goods" />
			<DetailsShopInfo :shopInfo="shopInfo" />
			<DetailsImage :detailInfo="detailInfo" @imagesLoad="imagesLoad" />
			<DetailsItemParams ref="params" :item-params="itemParams" />
			<DetailsComment ref="comment" :comment="comment" />
			<goods ref="recommend" :goods="recommend" />
		</scroll>
		<backTop @click.native="backClick" v-show="isShowBackTop" />
		<details-tab-bar @addCart="addCart" />
	</div>
</template>
<script>
//相关组件
import detailsHeader from './pages/DetailsHeader';
import detailsBanner from './pages/DetailsBanner';
import detailsInfo from './pages/DetailsInfo';
import DetailsShopInfo from './pages/DetailsShopInfo';
import DetailsImage from './pages/DetailsImage';
import DetailsItemParams from './pages/DetailsItemParams';
import DetailsComment from './pages/DetailsComment';
import DetailsTabBar from './pages/DetailsTabBar';
import { Goods, shopInfo } from '@/network/details';
//公共组件
import scroll from '@/components/content/scroll/Scroll';
import goods from '@/components/content/goods/Goods';
//混入
import { itemListenerMixin, BackTop } from '@/common/mix';
// vuex
import { mapActions } from 'vuex';
export default {
	name: 'Detalis',
	mixins: [itemListenerMixin, BackTop],
	data() {
		return {
			images: [],
			goods: {},
			shopInfo: {},
			detailInfo: {
				desc: {},
				images: {},
				key: {},
			},
			itemParams: {
				rule: {},
				info: {},
			},
			comment: {
				users: {},
			},
			recommend: [],
			linkedY: [],
			getlinkedY: null,
			currentIndex: 0,
			id: 0,
		};
	},
	created() {
		this.getDetails();
		this.getRecommend();
		this.getlinkedY = this.debounce(() => {
			this.linkedY.push(0);
			this.linkedY.push(this.$refs.params.$el.offsetTop);
			this.linkedY.push(this.$refs.comment.$el.offsetTop);
			this.linkedY.push(this.$refs.recommend.$el.offsetTop);
		}, 300);
	},
	updated() {},
	destroyed() {
		this.$bus.$off('imageload', this.itemListener);
	},
	components: {
		detailsHeader,
		detailsBanner,
		detailsInfo,
		DetailsShopInfo,
		DetailsImage,
		DetailsItemParams,
		DetailsComment,
		DetailsTabBar,
		scroll,
		goods,
	},
	mounted() {},
	methods: {
		...mapActions(['getCartInfo']),

		async getDetails() {
			const id = this.$route.params.id;
			this.id = id;
			const res = await this.axios.get('/detail?iid=' + id);
			const data = res.data.result;
			// 轮播图
			this.images = data.itemInfo.topImages;
			//商品信息
			this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
			//店信息
			this.shopInfo = new shopInfo(data.shopInfo);
			this.detailInfo.images = data.detailInfo.detailImage[0].list;
			this.detailInfo.desc = data.detailInfo.desc;
			this.detailInfo.key = data.detailInfo.detailImage[0].key;
			//参数
			this.itemParams.rule = data.itemParams.rule.tables[0];
			this.itemParams.info = data.itemParams.info;
			//评论
			this.comment = data.rate.list[0];
			this.comment.users = data.rate.list[0].user;
		},
		//推荐
		async getRecommend() {
			const res = await this.axios.get('/recommend');
			this.recommend = res.data.data.list;
		},
		// 重新计算高度
		imagesLoad() {
			this.refresh();
			this.getlinkedY();
		},
		itemClick(index) {
			this.$refs.Scroll.scrollto(0, -this.linkedY[index], 500);
		},
		scroll(position) {
			let length = this.linkedY.length;
			for (let i = 0; i < length; i++) {
				if (
					this.currentIndex != i &&
					((i < length - 1 && -position.y >= this.linkedY[i] && -position.y < this.linkedY[i + 1]) ||
						(i == length - 1 && -position.y >= this.linkedY[length - 1]))
				) {
					this.currentIndex = i;
					this.$refs.header.initIndex = this.currentIndex;
				}
			}
			//混入 返回顶部函数
			this.backTop(position);
		},
		addCart() {
			//获取购物车info和跳转到购物车
			const product = {};
			product.images = this.images[0];
			product.lowNowPrice = this.goods.lowNowPrice;
			product.title = this.goods.title;
			product.desc = this.detailInfo.desc;
			product.id = this.id;
			product.count = 1;
			product.isCheck = true;
			// console.log(this.$store.state.cartList);
			this.getCartInfo(product).then((res) => {
				console.log(res);
				this.$toast.show(res);
			});
		},
	},
};
</script>
<style lang="less" scoped>
.details {
	position: relative;
	z-index: 99999;
	background: #fff;
	height: 100vh;
}
.scroll {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 1.036666rem;
	top: 1.1733rem;
	overflow: hidden;
}
</style>
