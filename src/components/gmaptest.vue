<template>
<div class="map">
  <gmap-map
    :center="center"
    :zoom="7"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
      v-for="m in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</div>
</template>

<script>

import postData from '../assets/dummy_data.json' ;
import * as VueGoogleMaps from '../../node_modules/vue2-google-maps';
import Vue from '../../node_modules/vue';

  export default {
    data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
      }
    },
    components:{
      VueGoogleMaps
    }
  }


  Vue.use(VueGoogleMaps, {
      load: {
        key: 'YOUR_API_TOKEN',
        v: 'OPTIONAL VERSION NUMBER',
        // libraries: 'places', //// If you need to use place input
      }
    });


console.log(VueGoogleMaps);

</script>

<style scoped>

.map{
  width:100%;
  height: 600px;
  display: block;

}
</style>
