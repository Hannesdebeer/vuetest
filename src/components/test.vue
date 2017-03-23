<template>
  <div class="test">

     <div class="poop">

       <gmap-map
         :center="{lat:10, lng:10}"
         :zoom="7"
         map-type-id="terrain"
         style="width: 300px; height: 300px;"
       ></gmap-map>


    </div>



    <div v-for="user in postData" v-if="user.rating >= 9" class="member-container">
    <div class="image-container"><img :src="user.image" width="80px" /></div>
    <div class="name-container">{{user.first_name}}</div>
    <div class="tag-container">{{user.tagline}}</div>
    <div class="city-container">{{user.rating}}  |  {{user.city}}   |   {{user.country}}</div>



  </div>


</div>
</template>

<script>

import postData from '../assets/dummy_data.json' ;
import * as VueGoogleMaps from '../../node_modules/vue2-google-maps';
import Vue from '../../node_modules/vue';

Vue.use(VueGoogleMaps, {

  load: {
    key: 'AIzaSyDmLSf7Pg6pIXen6-ZFBmvUM28atQqu2y0',
    v: '3.26',
    // libraries: 'places', //// If you need to use place input
  }
});


export default {
  // vars goes here
  data(){
    return{
      postData,
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }],
      showName:true,
    }
  },
  methods: {
    greet: function(greeting){
      alert(greeting);
    }
  },
  watch: {
  '$route'(to, from) {
    // Call resizePreserveCenter() on all maps
    Vue.$gmapDefaultResizeBus.$emit('resize')
  }
}
}

console.log(VueGoogleMaps);

</script>

<style scoped>

.test{

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;


}
.member-container{
  -webkit-transition: height 2s; /* For Safari 3.1 to 6.0 */
  transition: height 2s;
  text-align: left;
  position: relative;
  width: 400px;
  max-width: 400px;
  height: 100px;
  border-width: thin;
  border-color: #c4c4c4;
  margin-bottom: 20px;
  border-style: solid;
  border-radius: 10px;
  overflow: hidden;

}

.member-container:hover{

  height:300px;
}

.image-container{


  margin-top: 10px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-left: 10px;
  float:left;
  overflow: hidden;
  border-style: solid;
  border-width: 1px;
  border-color: #c4c4c4;


}

.name-container{

  min-width: 200px;
  height: 15px;
  min-height: 10px;
  margin-top: 10px;
  margin-left: 20px;
  float:left;

}

.tag-container{

  height: 60px;
  width: 280px;
  min-height: 10px;
  margin-top: 10px;
  margin-left: 20px;
  float:left;
  font-size: 13px;
  color: #636363 !important;
  word-wrap: break-word;

}

.city-container{

  position: absolute;
  bottom: 0px;
  right: 0px;
  min-width: 100px;
  height: 20px;
  min-height: 10px;
  margin-top:10px;
  margin-bottom: 5px;
  margin-right: 15px;
  font-size: 12px;
  text-align: right;


}

.poop{
  display: block;
  position: relative;
  margin-top: 10px;
  float: left;
  width:300px;
  height:300px;
  /*background-color: blue;*/
}
</style>
