<template>
	<div class="shop">
		<div class="shop-top">
			<div>
				<img :src="shopInfo.logo" alt="" />
			</div>
			<span>{{ shopInfo.name }}</span>
		</div>
		<div class="shop-info">
			<div class="sells-goods">
				<div class="item">
					<div class="itemNum sells">{{ shopInfo.sells | sellCountFilter }}</div>
					<div class="sells">总销量</div>
				</div>
				<div class="item">
					<div class="itemNum goods">{{ shopInfo.goods }}</div>
					<div class="goods">全部宝贝</div>
				</div>
			</div>
			<div class="score">
				<div class="item-score" v-for="(item, index) in shopInfo.score" :key="index">
					<span>{{ item.name }}:</span>
					<span :class="{ Lime: item.isBetter == false, HotPink: item.isBetter }">{{ item.score }}</span>
					<span v-if="item.isBetter" class="HotPinkbg">高</span>
					<span v-else class="Limebg">低</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		shopInfo: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	filters: {
		sellCountFilter: function(val) {
			if (val < 10000) return val;
			return (val / 10000).toFixed(1) + '万';
		},
	},
};
</script>
<style lang="less" scoped>
.shop {
	padding: 0.2rem;
	.shop-top {
		display: flex;
		align-items: center;
		margin-bottom: 0.8rem;
		div {
			img {
				width: 1.3rem;
				display: block;
				border-radius: 50%;
			}
		}
		span {
			padding-left: 0.3rem;
			font-size: 0.37rem;
		}
	}
	.shop-info {
		display: flex;
		align-items: center;
		.sells-goods {
			flex: 1;
			display: flex;
			justify-content: center;
			padding: 0 0.2rem;
			border-right: 0.03rem #ddd solid;
			box-sizing: border-box;
			text-align: center;
			font-size: 0.32rem;
			.item {
				.itemNum {
					font-size: 0.53rem;
					font-weight: 700;
					padding-bottom: 0.2rem;
				}
				.sells {
					margin-right: 0.25rem;
				}
				.goods {
					margin-left: 0.25rem;
				}
			}
		}
		.score {
			flex: 1;
			font-size: 0.37rem;
			padding: 0 0.5rem;

			.item-score {
				display: flex;
				justify-content: space-between;
				padding-bottom: 0.2rem;
			}
		}
	}
	.Lime {
		color: #00ff00;
	}
	.HotPink {
		color: #ff5777;
	}
	.Limebg {
		background: #00ff00;
		color: #fff;
	}
	.HotPinkbg {
		background: #ff5777;
		color: #fff;
	}
}
</style>
