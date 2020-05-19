<template>
	<view>
		<!-- 图文卡片模式 -->
		<uni-card :title="book.title" mode="style" :is-shadow="true" :thumbnail="book.cover" note="true">
			{{book.desc}}
			<template v-slot:footer>
				<view class="footer-box">
					<uni-grid :column="3" :square="false" :showBorder="false" @change="chapterClick">
						<uni-grid-item v-for="(chapter,index) in chapterList" :index="index">
							<text class="text">{{chapter.chapterName}}</text>
						</uni-grid-item>
					</uni-grid>
				</view>
			</template>
		</uni-card>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-card/uni-card.vue'
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	export default {
		components: {
			uniCard,
			uniGrid,
			uniGridItem
		},
		onLoad: function (option) { 
			this.book = option
		    },
		data() {
			return {
				book: {
				},
				chapterList: [{
					chapterName: '第1话'
				}, {
					chapterName: '第2话'
				}, {
					chapterName: '第3话'
				}, {
					chapterName: '第4话'
				}, {
					chapterName: '第5话'
				}, {
					chapterName: '第6话'
				}]
			}
		},
		methods: {
			chapterClick(e) {
				let chapterName = this.chapterList[e.detail.index].chapterName
				console.log(chapterName)
			}
		}
	}
</script>

<style>
.text {
	text-align: center;
	border: 1px solid #5790e5;
	margin: 5px;
	border-radius: 5px
}
</style>
