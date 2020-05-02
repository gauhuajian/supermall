<template>
	<div class="banner">
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide v-for="item in banner" :key="item.id">
				<a :href="item.link">
					<img :src="item.image" alt="" />
				</a>
			</swiper-slide>
		</swiper>
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
export default {
	props: {
		banner: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			swiperOptions: {
				pagination: {
					el: '.swiper-pagination',
				},
				loop: true,
				loopAdditionalSlides: 3,
				autoplay: true,
			},
		};
	},
};
</script>
<style lang="less" scoped>
.banner {
	height: 5.2rem;
	position: relative;
	img {
		width: 10rem;
		height: 5.2rem;
	}
	/deep/ .swiper-pagination {
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		.swiper-pagination-bullet {
			margin-left: 0.2rem;
			opacity: 1;
			background: #fff;
		}
		.swiper-pagination-bullet-active {
			background: red;
		}
	}
}
</style>
