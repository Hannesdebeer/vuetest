<template>
<div class="map">
  <gmap-Map
    :center="center"
    :zoom="7"
    style="width: 500px; height: 300px"
  >
    <gmap-Marker
      v-for="m in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-Marker>
  </gmap-Map>
</div>
</template>

<script>

import postData from '../assets/dummy_data.json' ;


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
    }
  }


console.log(VueGoogleMaps);

</script>

<style scoped>

.map{
  width:100%;
  height: 600px;
  display: block;
  border: 1px;

}
</style>
