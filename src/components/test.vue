<template>

  <div class="test">
    {{getCenter()}}
    {{greet()}}
    <!-- {{filterData}} -->

    <div class="header"> < BD APPLICATION > </div>

    <div class="interface-container">

      <div class="item1">
        <input type="text" class="search-box" v-model="filterValue" placeholder="Filter">
      </div>

      <div class="item3">
        <input type="radio" id="one" value="Male" v-model="genderFilter">
        <label for="one">Male</label>
        <input type="radio" id="two" value="Female" v-model="genderFilter">
        <label for="two">Female</label>
        <input type="radio" id="any" value="" v-model="genderFilter">
        <label for="three">Any</label>
        <br>
      </div>

      <div class="item2">
        <select v-model="countryFilter">
          <option value=""> Select a country </option>
          <option v-for="user in sortCounries" v-bind:value="user.country">
            {{ user.country }}
          </option>
        </select>
        <!-- <span>Selected: {{ countryFilter }}</span> -->
      </div>

    </div>
    <hr class="style-one">

    <div class="data-container">


      <div v-for="(user, index) in filterData" v-if="user.rating >= 0" class="member-container">
        <!-- <div class="image-container"><img :src="user.image" width="80px" /></div> -->
        <div class="name-container">{{user.first_name}} - {{user.last_name}} - {{user.id}} </div>
        <div class="tag-container">{{user.tagline}}</div>
        <!-- <div class="city-container">{{user.first_name}}  |  {{user.city}}   |   {{user.country}}</div> -->
        <div class="city-container"> <span v-if="user.gender == 'Male'"> M </span> <span v-if="user.gender == 'Female'"> F </span> | {{user.country}} | {{user.city}}</div>
        <!-- <div class="poop">

        <gmap-map :center="RenderMap(index)" :zoom="5" style="width: 400px; height: 300px" >
        <gmap-marker
        v-for="m in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div> -->

  </div>

</div> <!-- data-container -->
</div> <!-- test -->
</template>

<script>

import postData from '../assets/dummy_data.json' ;

export default {
  // vars goes here
  data(){
    return{
      sortAsc: true,
      countryFilter:"",
      userCountry:"",
      genderFilter:"",
      testData: [{ name: 'foo' }, { name: 'bar' }, { name: 'foobar' }, { name: 'test' }],
      filterValue:"",
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
    greet: function(){
      console.log("poop")
    },

    getCenter: function(){
      let i;
      for (i = 0; i < this.postData.length ; i++) {

        this.centers[i] = '{"lat": ' + this.postData[i].latitude + ', "lng": ' + this.postData[i].longitude + '}';
        this.centers[i] = this.centers[i];

      }
    },
    RenderMap : function(index){

      let latlong = this.centers[index];
      latlong = JSON.parse(latlong);
      let latlongString = JSON.stringify(latlong);
      console.log(latlongString + " " + index);
      //latlong = JSON.parse({lat: 18.68703, lng: 98.91939}) ;

      return latlong ;
      //return {lat: 18.68703, lng: 98.91939};


    }
  }, //end methods
  computed: {
    sortCounries(){
      let result = this.postData;
      result = _.sortBy(result, 'country');
      result = _.uniqBy(result, 'country');
      return result ;
    },
    filterData(){
      let result = this.postData;
      if (this.countryFilter)
      {
        result = result.filter(item => item.country == this.countryFilter);
      }
      if (this.filterValue)
      {
        this.filterValue = _.lowerCase(this.filterValue) ;

        //result = (result.filter(item => item.first_name.includes(this.filterValue))) || (result.filter(item => item.last_name.includes(this.filterValue)));
        result = result.filter(item => {
          return _.lowerCase(item.first_name).includes(this.filterValue) || _.lowerCase(item.last_name).includes(this.filterValue)
        })
      }
      if (this.genderFilter){
        result = result.filter(item => item.gender == this.genderFilter) ;
      }
      if (this.genderFilter) {
        result = result;
      }
      if (this.userCountry)
      {
        result = result.filter(item => item.country == this.userCountry) ;
      }
      return result ;

    }

  }
}


</script>



<style scoped>

.header{
  width: 100% ;
  height:40px;
  background-color: rgba(0,142,198,1);
  margin-bottom: 50px;
  text-align: center;
  vertical-align: middle !important;
  color: #fff ;
  line-height: 40px;

}

.item1{
  order: 1 ;
  margin-bottom: 20px;
}
.item2{
  order: 2 ;
  margin-bottom: 20px;
}

.item3{
  order: 3 ;
  margin-bottom: 20px;
}

.interface-container{

  width: 100% ;
  display: flex;
  /*justify-content : center;*/
  align-content: center ;
  flex-direction: column;
  margin: 10px;

}

.data-container{

  margin: 10px;
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

.search-box {
  max-width: 500px;
  min-width: 300px;
  display: inline-block;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  padding: 10px 20px;
  border: 1px solid #b7b7b7;
  -webkit-border-radius: 55px;
  border-radius: 5px;
  font: normal 16px/normal Arial, Helvetica, sans-serif;
  color: rgba(0,142,198,1);
  -o-text-overflow: clip;
  text-overflow: clip;
  background: rgba(252,252,252,1);
  text-shadow: 1px 1px 0 rgba(255,255,255,0.66) ;
  -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  margin-left: auto;
  margin-right: auto ;

}

select {
  height:36px;
  max-width: 500px;
  min-width: 340px;
  display: inline-block;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  padding: 10px 20px;
  border: 1px solid #b7b7b7;
  -webkit-border-radius: 55px;
  font: normal 16px/normal Arial, Helvetica, sans-serif;
  color: rgba(0,142,198,1);
  -o-text-overflow: clip;
  text-overflow: clip;
  background: rgba(252,252,252,1);
  text-shadow: 1px 1px 0 rgba(255,255,255,0.66) ;
  -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  margin-left: auto;
  margin-right: auto ;

}

.search-box:focus{

  outline: none;

}

hr.style-one {

  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  margin-bottom: 20px;
}


</style>
