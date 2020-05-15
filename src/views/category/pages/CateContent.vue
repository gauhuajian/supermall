<template>
	<div id="content">
		<div>
			<div class="content-box">
				<div class="content-item" v-for="(item, index) in getSubcategory" :key="index">
					<a :href="item.link">
						<div>
							<img :src="item.image" alt="" @load="imagesLoad" />
							<div>{{ item.title }}</div>
						</div>
					</a>
				</div>
				<tabControl class="control" :title="['综合', '新品', '销量']" />
				<goods class="goods" :goods="goods"></goods>
			</div>
		</div>
	</div>
</template>
<script>
import goods from '../../../components/content/goods/Goods';
import tabControl from '../../../components/content/tabcontrol/TabControl';
import BScroll from 'better-scroll';

export default {
	props: {
		getSubcategory: {
			type: Array,
			default() {
				return [];
			},
		},
		goods: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	components: {
		tabControl,
		goods,
	},
	watch: {
		//监听数据变化计算高度
		getSubcategory() {
			this.$nextTick(() => {
				this.scroll.refresh();
			});
		},
	},
	activated() {
		this.scroll.refresh();
	},
	data() {
		return {
			goodsitem: [],
			imageNum: 0,
			scroll,
		};
	},
	mounted() {
		this.scroll = new BScroll(document.querySelector('#content'), {
			click: true,
		});
		this.$bus.$on('imageload', () => {
			this.scroll.refresh();
		});
	},
	methods: {
		imagesLoad() {
			this.imageNum++;
			if (this.getSubcategory.length == this.imageNum) {
				this.scroll.refresh();
			}
		},
	},
};
</script>
<style lang="less" scoped>
#content {
	position: absolute;
	top: 1.17333rem;
	bottom: 1.30666rem;
	left: 2.666rem;
	right: 0;
	overflow: hidden;
}
.content-box {
	display: flex;
	flex-wrap: wrap;
	padding: 0.3rem;
}
.content-item {
	width: 2.133rem;
	height: 2.5333rem;
	text-align: center;
	a {
		text-decoration: none;
		color: #666;
	}
	img {
		display: block;
		width: 1.706rem;
		margin: auto;
	}
	div {
		margin-top: 0.4rem;
		font-size: 0.32rem;
	}
}
.control {
	margin-top: 0.5rem;
	width: 100%;
}
.goods {
	width: 100%;
}
</style>
