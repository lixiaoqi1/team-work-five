<template>
	<div>
		<city-header @change="handleCityTypeChange"/>
		<city-domestic  :domesticInfo="this.$store.state.city.cityInfo" v-if="isDomestic"/>
		<city-foreign  :foreignInfo="this.$store.state.city.cityInfo" v-else/>
	</div>
</template>

<script>
    import cityHeader from './components/Header';
	import cityDomestic from './components/domestic';
	import cityForeign from './components/foreign';

	export default {
		data() {
			return {
				isDomestic: true
			}
		},
		components:{
			 "city-header" : cityHeader,
			 "city-domestic": cityDomestic,
			 "city-foreign": cityForeign
		},
        mounted() {
            if(this.$store.getters.shouldGetCityData){
                this.$store.dispatch("getCityInfo");  //调用action
            }
			// this.$store.dispatch("getCityInfo");
        },
		methods: {
			handleCityTypeChange(e) {
				this.isDomestic=e;
			}
		}
       
    }
</script>

<style scoped>
	
</style>