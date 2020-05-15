<template>
	<div class="info">
		<div class="info-title">
			{{ goods.title }}
		</div>
		<div class="price">
			<span class="newPrice">
				{{ goods.price }}
			</span>
			<span class="olPrice">
				{{ goods.oldPrice }}
			</span>
			<span class="discount">
				{{ goods.discountDesc }}
			</span>
		</div>
		<div class="columns">
			<div v-for="(item, index) in goods.columns" :key="index">
				{{ item }}
			</div>
		</div>
		<div class="services">
			<div class="item" v-for="(item, index) in goods.services" :key="index">
				<div>
					<img :src="item.icon" alt="" />
				</div>
				<span>
					{{ item.name }}
				</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		goods: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			num: 0,
			number: 1,
		};
	},
	mounted() {},
};
</script>
<style lang="less" scoped>
.info {
	padding-bottom: 0.4rem;
	.info-title {
		padding: 0.2rem;
		font-size: 0.42rem;
	}
	.price {
		padding: 0.2rem;
		font-size: 0.42rem;
		.newPrice {
			color: #ff5777;
			font-size: 0.48rem;
		}
		.olPrice {
			color: #999;
			text-decoration: line-through;
			font-size: 0.32rem;
			vertical-align: bottom;
		}
		.discount {
			border-radius: 0.22rem;
			margin-left: 0.2rem;
			background: #ff5777;
			color: #fff;
			font-size: 0.32rem;
			vertical-align: text-top;
		}
	}
	.columns {
		display: flex;
		justify-content: space-between;
		padding: 0.2rem;
		font-size: 0.37rem;
		color: #999;
		border-bottom: 0.02rem solid #ddd;
	}
	.services {
		display: flex;
		justify-content: space-between;
		font-size: 0.32rem;
		border-bottom: 0.1rem solid #eee;
		height: 1.5rem;
		.item {
			padding: 0 0.2rem;
			display: flex;
			align-items: center;
			img {
				width: 0.42rem;
				display: block;
			}
		}
	}
}
</style>
