<template>
	<div class="category">
		<category-header class="cate-header">
			<div slot="nav-center">商品分类</div>
		</category-header>
		<cate-muen :category="category" @selectItem="selectItem" />
		<cateContent :getSubcategory="getSubcategory" :goods="showGoods" />
	</div>
</template>
<script>
import categoryHeader from '@/components/content/navbar/Navbar';
import cateMuen from './pages/CateMuen';
import cateContent from './pages/CateContent';
export default {
	components: {
		categoryHeader,
		cateMuen,
		cateContent,
	},
	data() {
		return {
			category: [],
			getSubcategory: [],
			goods: {
				pop: [],
				new: [],
				sell: [],
			},
			curIndex: 0,
			curType: 'pop',
		};
	},
	created() {
		this.getCategory();
	},
	computed: {
		showGoods() {
			return this.goods[this.curType];
		},
	},
	mounted() {
		this.$bus.$on('itemClick', (index) => {
			switch (index) {
				case 0:
					this.curType = 'pop';
					break;
				case 1:
					this.curType = 'new';
					break;
				case 2:
					this.curType = 'sell';
					break;
				default:
					break;
			}
			this.getCategoryDetail(this.curType);
		});
	},
	methods: {
		//菜单
		async getCategory() {
			let res = await this.axios.get('/category');
			this.category = res.data.data.category.list;
			this.getCategoryData(this.curIndex);
		},
		//内容数据
		async getCategoryData(index) {
			this.getSubcategory = []; //切换菜单 清空上一次数据
			this.goods.pop = []; //切换菜单 清空上一次数据
			this.goods.new = []; //切换菜单 清空上一次数据
			this.goods.sell = []; //切换菜单 清空上一次数据
			const maitKey = this.category[index].maitKey; // 拿到maitKey
			let res = await this.axios.get('/subcategory', {
				params: {
					maitKey,
				},
			});
			this.getSubcategory = res.data.data.list;
			this.getCategoryDetail(this.curType);
		},
		// 获取goods
		async getCategoryDetail(type) {
			const miniWallkey = this.category[this.curIndex].miniWallkey;
			let res = await this.axios.get('/subcategory/detail', {
				params: {
					miniWallkey,
					type,
				},
			});
			this.goods[type] = res.data;
		},
		//点击菜单 请求对应数据
		selectItem(index) {
			this.curIndex = index;
			this.getCategoryData(this.curIndex);
		},
	},
};
</script>
<style lang="less" scoped>
.category {
	height: 100vh;
	position: relative;

	.cate-header {
		background: #ff5777;
		color: #fff;
		font-size: 0.42rem;
	}
}
</style>
