<template>
	<Navbar class="nav">
		<div slot="nav-center">
			购物车
			<span>({{ cartListLength }})</span>
		</div>
	</Navbar>
</template>
<script>
import Navbar from '@/components/content/navbar/Navbar';
import { mapGetters } from 'vuex';
export default {
	components: {
		Navbar,
	},
	computed: {
		...mapGetters(['cartListLength']),
	},
};
</script>
<style lang="less" scoped>
.nav {
	background: #ff5777;
	font-size: 0.42rem;
	color: #fff;
}
</style>
