<template>
	<view>
		<web-view :src="kefuUrl"></web-view>
		<tabbar :actIndex="3"></tabbar>
	</view>
</template>

<script>
	import {
		getUserIndex
	} from '@/api/user.js'
	export default {
		components: {
			tabbar: () => import("@/components/tabbar.vue"),
		},
		data() {
			return {
				kefuUrl: ''
			}
		},
		onLoad() {
			getUserIndex({
				hideLoading: true,
			}).then(({
				data
			}) => {
				this.kefuUrl = data.kefu_url
			});
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
