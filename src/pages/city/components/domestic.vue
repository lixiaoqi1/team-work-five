<template>
	<div>
        <domestic-search />
        <domestic-list />
        
    </div>
</template>

<script>
    import DomesticSearch from "./domestic/domestic-search"
    import DomesticList from "./domestic/domestic-list"
	export default {
       data() {
           return {
               word:''
           }
       },
		components: {
             'domestic-search': DomesticSearch,
             'domestic-list': DomesticList
        }
	}
</script>

<style scoped>
	
</style>