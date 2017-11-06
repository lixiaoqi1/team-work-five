<template>
	<div>
		<list-header />
		<hot-search />
	</div>
</template>

<script>

import HeaderComponent  from './list-header'
import HotSearchComponent  from './hot-search'

export default{
	components:{

		'list-header':HeaderComponent,
		'hot-search':HotSearchComponent
		
	}
	
}
</script>

<style>
</style>