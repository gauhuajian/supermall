<template>
	<div class="cart-item">
		<div class="cart-wrap" v-for="(item, index) in CartList" :key="index">
			<div class="cart-check" @click="CheckClick(item.id)">
				<div>
					<img v-show="!item.isCheck" src="@/assets/img/common/nocheck.svg" alt="" />
					<img v-show="item.isCheck" src="@/assets/img/common/check.svg" alt="" />
				</div>
			</div>
			<div class="cart-img">
				<img :src="item.images" alt="" />
			</div>
			<div class="cart-info">
				<div class="info-title">
					<div>{{ item.title }}</div>
					<div>{{ item.desc }}</div>
				</div>
				<div class="price-count">
					<span> ￥{{ item.lowNowPrice }} </span>
					<span>x{{ item.count }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';
export default {
	methods: {
		CheckClick(id) {
			this.checke(id); //修改购物车数据中的选中状态
		},
		...mapMutations(['checke']),
	},
	computed: {
		...mapGetters(['CartList']),
	},
};
</script>
<style lang="less" scoped>
.cart-item {
	padding-bottom: 2.406666rem;
	.cart-wrap {
		display: flex;
		justify-content: space-between;
		padding: 0.2rem 0;
		border-bottom: 0.03rem #ddd solid;
		.cart-check {
			width: 0.8rem;
			div {
				width: 0.7rem;
				height: 0.7rem;
				margin: auto;
				margin-top: 1rem;
				img {
					display: block;
					height: 100%;
					width: 100%;
				}
			}
		}
		.cart-img {
			width: 2rem;
			height: 2.7rem;
			img {
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 0.16rem;
			}
		}
		.cart-info {
			.info-title {
				width: 7rem;
				div {
					padding: 0 0 0.4rem 0.2rem;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					font-size: 0.42rem;
					color: #333;
					&:last-child {
						font-size: 0.37rem;
					}
				}
			}
			.price-count {
				display: flex;
				justify-content: space-between;
				padding: 0 0.2rem;
				margin-top: 0.3rem;
				span {
					font-size: 0.42rem;
				}
			}
		}
	}
}
</style>
