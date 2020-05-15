<template>
	<div class="comment">
		<div class="comment-top">
			<span>用户评论</span>
			<span>更多</span>
		</div>
		<div class="commentInfo" v-if="comment.content">
			<div class="user">
				<div>
					<img :src="comment.users['avatar']" alt="头像" />
				</div>
				<span>
					{{ comment.users.uname }}
				</span>
			</div>
			<div class="comment-text">
				{{ comment.content }}
			</div>
			<div class="comment-created">
				<span>
					{{ comment.created | dateformat('YYYY-MM-DD h:mm:ss') }}
				</span>
				<span>
					{{ comment.style }}
				</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		comment: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	mounted() {},
};
</script>
<style lang="less" scoped>
.comment {
	margin-top: 0.4rem;
	.comment-top {
		display: flex;
		justify-content: space-between;
		padding: 0.3rem 0.2rem;
		border-top: 0.06rem #ddd solid;
		border-bottom: 0.02rem #ddd solid;
		font-size: 0.37rem;
	}
	.commentInfo {
		padding-bottom: 0.5rem;
		border-bottom: 0.06rem #ddd solid;
		.user {
			display: flex;
			align-items: center;
			padding: 0.2rem 0;
			font-size: 0.42rem;
			font-weight: 700;
			img {
				display: block;
				width: 1rem;
				border-radius: 50%;
			}
			span {
				margin-left: 0.2rem;
			}
		}
		.comment-text {
			padding: 0.2rem;
			font-size: 0.37rem;
		}
		.comment-created {
			padding: 0.2rem;
			font-size: 0.32rem;
		}
	}
}
</style>
