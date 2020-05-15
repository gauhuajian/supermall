<template>
	<div class="images-info">
		<div class="desc-warp">
			<div class="start"></div>
			<div class="desc">
				{{ detailInfo.desc }}
			</div>
			<div class="end"></div>
		</div>
		<div class="images">
			<div class="key">
				{{ detailInfo.key }}
			</div>
			<div class="list" v-for="(item, index) in detailInfo.images" :key="index">
				<img :src="item" alt="" @load="imagesLoad" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		detailInfo: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {};
	},
	mounted() {},
	methods: {
		imagesLoad() {
			this.$emit('imagesLoad');
		},
	},
};
</script>
<style lang="less" scoped>
.desc-warp {
	font-size: 0.37rem;
	padding-top: 0.5rem;
	.start {
		width: 3rem;
		border-top: 0.03rem #000 solid;
		background: #000;
		margin-bottom: 0.5rem;
	}
	.desc {
		padding: 0 0.2rem;
		padding-bottom: 0.5rem;
	}
	.end {
		width: 3rem;
		border-top: 0.02rem #000 solid;
		background: #000;
		float: right;
	}
}
.images {
	font-size: 0.42rem;
	.key {
		padding: 0.4rem 0.2rem;
	}
	.list {
		img {
			width: 10rem;
		}
	}
}
</style>
