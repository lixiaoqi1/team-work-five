<template>
	<div>
        <foreign-search />
        <foreign-list />
    </div>
</template>

<script>
    import ForeignSearch from "./foreign/foreign-search"
    import ForeignList from "./foreign/foreign-list"
	export default {
       data() {
           return {
               word:''
           }
       },
		components: {
             'foreign-search': ForeignSearch,
             'foreign-list': ForeignList
        }
	}
</script>

<style scoped>
	
</style>