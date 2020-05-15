<template>
	<div class="detailsBanner">
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide v-for="(item, index) in images" :key="index">
				<img :src="item" alt="" />
			</swiper-slide>
		</swiper>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			swiperOptions: {
				effect: 'coverflow',
				slidesPerView: 2,
				centeredSlides: true,
				coverflowEffect: {
					rotate: 0,
					stretch: 10,
					depth: 150,
					modifier: 2,
					slideShadows: true,
				},
			},
		};
	},
};
</script>
<style lang="less" scoped>
.detailsBanner {
	img {
		width: 5.33333;
		height: 8rem;
	}
}
</style>
