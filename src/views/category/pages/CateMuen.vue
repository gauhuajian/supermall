<template>
	<scroll ref="muen" id="muen">
		<div class="muen-list">
			<div
				class="muen-item"
				:class="{ active: curIndex == index }"
				v-for="(item, index) in category"
				:key="index"
				@click="subClick(index)"
			>
				{{ item.title }}
			</div>
		</div>
	</scroll>
</template>
<script>
import scroll from '../../../components/content/scroll/Scroll';
export default {
	props: {
		category: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			curIndex: 0,
		};
	},
	components: {
		scroll,
	},
	methods: {
		subClick(index) {
			this.curIndex = index;
			this.$emit('selectItem', index);
		},
	},
	watch: {
		category() {
			this.$nextTick(() => {
				this.$refs.muen.refresh(); //重新计算muen的高度
			});
		},
	},
};
</script>
<style lang="less" scoped>
#muen {
	position: absolute;
	top: 1.17333rem;
	bottom: 1.30666rem;
	left: 0;
	overflow: hidden;
}
.muen-item {
	width: 2.66rem;
	height: 1.2rem;
	line-height: 1.2rem;
	background: #eee;
	text-align: center;
	font-size: 0.37rem;
	color: #666;
}
.active {
	background: #fff;
	color: #ff5777;
}
</style>
