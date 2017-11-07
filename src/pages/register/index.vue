<template>
	<div>
		<home-header/>
		<home-scene/>
		<home-pay/>
		<home-consultphone/>
		<home-total/>
	</div>
</template>

<script>
import HeaderComponent from './Header';
import SceneComponent from "./sceneMessage";
import PayComponent from './pay';
import ConsultComponent from './consultPhone';
import totalComponent from "./totalPrice"

export default{
	components:{
		"home-header":HeaderComponent,
		"home-scene":SceneComponent,
        "home-pay":PayComponent,
        "home-consultphone":ConsultComponent,
        "home-total":totalComponent
	}
}


</script>

<style>
  html{background:rgba(0,0,0,.1);color:#616161;}
</style>