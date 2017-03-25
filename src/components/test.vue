<template>

  <div class="test">
    {{getCenter()}}
    {{greet()}}

    <div v-for="(user, index) in filterItems(postData,name) | filterBy 'Female' in 'gender' | orderBy 'first_name' " v-if="user.rating >= 0" class="member-container">
    <!-- <div v-repeat="(user, index) in postData" class="member-container"> -->
      <!-- <div class="image-container"><img :src="user.image" width="80px" /></div> -->
      <div class="name-container">{{user.first_name}} - {{user.last_name}} - {{user.id}} </div>
      <div class="tag-container">{{user.tagline}}</div>
      <!-- <div class="city-container">{{user.first_name}}  |  {{user.city}}   |   {{user.country}}</div> -->
      <div class="city-container"> {{centers[index]}} </div>
      <div class="poop">

        <gmap-map :center="RenderMap(index)" :zoom="5" style="width: 400px; height: 300px" >
          <gmap-marker
          v-for="m in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </div>

    </div>


  </div>
</template>

<script>

import postData from '../assets/dummy_data.json' ;

export default {
  // vars goes here
  data(){
    return{
      name: "Mark",
      postData: postData,
      centers:[],
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }],
      showName:true,
    }
  },
  methods: {
    filterItems: function(users,name) {
      return users.filter(function(user) {
        if (user.first_name == name){
          return user.first_name;
        }
        else if (name == "")
        {
          return user.first_name ;
        }
      })
    },


    greet: function(){
      console.log("poop")
    },

    getCenter: function(){
      var i;
      for (i = 0; i < this.postData.length ; i++) {

        this.centers[i] = '{"lat": ' + this.postData[i].latitude + ', "lng": ' + this.postData[i].longitude + '}';
        this.centers[i] = this.centers[i];

      }
    },
    RenderMap : function(index){

      var latlong = this.centers[index];
      //latlong = JSON.stringify(latlong);
      latlong = JSON.parse(latlong);
      var latlongString = JSON.stringify(latlong);
      console.log(latlongString + " " + index);
      //latlong = JSON.parse({lat: 18.68703, lng: 98.91939}) ;

      return latlong ;
      //return {lat: 18.68703, lng: 98.91939};


    }
  }
}




</script>





<style scoped>

.test{

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;


}
.member-container{

  -webkit-transition: height 5s; /* For Safari 3.1 to 6.0 */
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

  height:500px;
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
  margin-top: 10px;
  float: left;
  width:300px;
  height:300px;
  /*background-color: blue;*/
}

.header{

}
</style>
