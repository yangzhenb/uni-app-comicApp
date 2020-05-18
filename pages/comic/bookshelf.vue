<template>
	<view>
		<uni-grid :column="1" :square="false" @change="bookClick">
			<uni-grid-item v-for="(book,index) in bookList" :index="index">
				<!-- 图文卡片模式 -->
				<uni-card :title="book.title" mode="style" :is-shadow="true" :thumbnail="book.cover" :note="book.desc">
					
				</uni-card>
			</uni-grid-item>
		</uni-grid>
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
		data() {
			return {
				bookList: [{
					title: '怪怪守护神',
					desc: '突然出现的穿着和服的美少女桐叶，很爱找他麻烦的辫子妹+眼镜妹+青梅竹马的班长千里，以及动不动就想跟他一起洗澡的姊姊，一身巫女打扮，且是个大波霸的美丽的神的使者黑耀，让一也在美女跟美少女的围绕下，展开了一段掺杂著开心、害羞、与恐怖心情的生活…',
					cover: 'https://www.manhuadb.com/cartoon/1149_title_ewjrzorw.jpg'
				}, {
					title: '辉夜姬想让人告白~天才们的恋爱头脑战~',
					desc: '学生会会长白银御行与副会长四宫辉夜在精英云集的秀知院学园相遇。虽然这２个天才两情相悦，彼此却一直设法要让对方爱上自己、主动向自己告白，为达此目的，他们将在日常生活中使出浑身解数钩心斗角，演出全新感觉的爱情喜剧',
					cover: 'https://media.manhuadb.com/cartoon/1488_title_paniwcbr.jpg'
				}, {
					title: '魔王奶爸（恶魔奶爸）',
					desc: '不良少年男鹿辰巳捡到一个小婴儿别西卜，没想到别西卜是魔王的后代，男鹿也莫名奇妙的成为魔王的父亲，从此开始过本来就不平凡的生活。男鹿为了摆脱别西卜的纠缠，在校内寻找更强的人，然而对方一一败在他的手下。别西卜的女仆希尔德冷酷无情，令男鹿的好友古市小小仰慕…石矢魔四大势力为了争夺最强的称号，各怀心机…本作品完全符合少年漫画三大宗旨：友情、努力、胜利',
					cover: 'https://media.manhuadb.com/cartoon/6247_title_qirqiyix.jpg'
				}, {
					title: '盾之勇者成名录',
					desc: '作为盾之勇者被召唤至异世界的岩谷尚文。 谁知展开冒险才到第三天就被战友背叛，一口气失去了身为勇者的名声及所有盘缠。 ……为什么只有我碰上这种倒霉死啊！？ 不信任、疑念、猜忌，世界上的所有人事物都是仇敌！ 尚文陷入再也无法相信他人的状态，此时却见一名少女出现在他面前……！？ 在苦恼的尽头，他所得到的究竟是…',
					cover: 'https://media.manhuadb.com/cartoon/1585_title_lkveswyl_720x405.jpg'
				}, {
					title: '关于我转生变成史莱姆这档事',
					desc: '本以为自己被人用刀刺死了，没想到却在异世界转生成史莱姆？以能够夺取对手能力的「捕食者」与精通世界真理的「大贤者」这两样独有技为武器，史莱姆的大冒险即将展开！',
					cover: 'https://media.manhuadb.com/cartoon/1167_title_vfowmmsg.jpg'
				}]

			}
		},
		methods: {
			bookClick(e) {
				let book = this.bookList[e.detail.index]
				let url = '/pages/comic/catalogue?'
				for(let key in book){
					url += key + '=' + book[key] + '&'
				}
				uni.navigateTo({
					url: encodeURI(url.substr(0,url.length-1)),
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>

</style>
