<template>

  <div class="details">


    <div class="details-container">

      <div v-for="user in filterDetails">
        <div class="image-container"><img :src="user.image"/> </div>


        <div class="name-container">{{user.first_name}} {{user.last_name}} </div>

        <div class="detail-list">
          <div class="detail-item">
            <span class="bold"> User ID : </span> {{user.id}}
          </div>

          <div class="detail-item">
            <span class="bold">Company :</span> {{user.company}}
          </div>

          <div class="detail-item">
            <span class="bold">Email : </span> {{user.email}}
          </div>

          <div class="detail-item">
            <span class="bold">  Gender : </span> {{user.gender}}
          </div>

          <div class="detail-item">
            <span class="bold descriptor">Description :</span> {{user.description}}
          </div>

          <div class="detail-item">
            <span class="bold">  Rating : </span> {{user.rating}}
          </div>

          <div class="map-container">
            <gmap-map :center="RenderMap(user.id)" :zoom="5" style="width:auto; height: 300px" >
              <gmap-marker
              v-for="m in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
              ></gmap-marker>
            </gmap-map>
          </div>

          <div class="detail-item">
            <span class="bold"> City : </span> {{user.city}}
          </div>

          <div class="detail-item">
            <span class="bold"> Country : </span> {{user.country}}
          </div>

          <div class="detail-item">
            <span class="bold">Latitude :</span> {{user.latitude}}
          </div>

          <div class="detail-item">
            <span class="bold">  Longitude :</span> {{user.longitude}}
          </div>

          <div class="detail-item">
            <span class="bold">Job title : </span> {{user.job_title}}
          </div>

          <div class="detail-item">
            <span class="bold"> Skill :</span> {{user.skill}}
          </div>

          <div class="detail-item">
            <span class="bold">Tagline :</span> {{user.tagline}}
          </div>

          <div class="detail-item">
            Comment : Seamless directional core
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
{{filterDetails}}
<script>

import postData from '../assets/dummy_data.json' ;

export default {

  // vars goes here
  data(){
    return{
      centers:[],
      postData:postData,
      idFilter:this.$route.params.id,
      center:"" ,
    }
  },
  methods:{
    RenderMap: function(id){
      //  alert(id);
      let entry = _.find(this.postData, { id: id }) ;
      let lat = entry.latitude ;
      console.log(lat) ;
      let loc = _.pick(entry, [ 'latitude', 'longitude' ])
      let result =  '{"lat": ' + loc.latitude + ', "lng": ' + loc.longitude + '}';
      result = JSON.parse(result);
      return result ;
      //     // this.center = {lat: 18.68703, lng: 98.91939};
      //      console.log(latlong) ;
      //
      //
      //     alert(this.center);
      //
      //
      // //    console.log(result[0].id);
      //     //this.center = result.find(item => item.id == this.idFilter);
      //   //  console.log(this.center[0].id) ;
      //     //console.log(result) ;
      //     return result;
    },
    getCenter: function(){
      let i;
      for (i = 0; i < this.postData.length ; i++) {

        this.centers[i] = '{"lat": ' + this.postData[i].latitude + ', "lng": ' + this.postData[i].longitude + '}';
        this.centers[i] = this.centers[i];

      }
    }
  },
  computed: {
    filterDetails(){
      if(this.idFilter)
      {

        let result = this.postData;
        let test = this.idFilter ;

        result = result.filter(item => item.id == this.idFilter);
        console.log("id filter = " + this.idFilter);
        console.log(result) ;
        return result ;

        //    console.log(this.idFilter);


      }

    }
  }
}

</script>



<style scoped>

.detail-list{

  height: auto;
  width: auto;
  min-height: 10px;
  margin-top: 10px;
  margin-left: 20px;
  font-size: 13px;
  color: #636363 !important;
  word-wrap: break-word;


}

.nav{
  width: 100%; ;
  height:40px;
  background-color: rgba(0,142,198,1);
  margin-bottom: 50px;
  text-align: center;
  vertical-align: middle !important;
  color: #fff ;
  line-height: 40px;

}

.name-container{
  min-width: 300px;
  min-height: 10px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  word-wrap:break-word;
  width: 300px;
}

.map-container
{
  display: block;
  margin-top: 10px;
  float: left;
  width: 50%;
  height:300px;
  margin-right: 20px;
}

.details{
  display: flex;
  justify-content: center;
  min-height: 400px;
  height: auto !important;
  margin: 20px;


}

.details-container
{

  overflow: auto;
  text-align: left;
  display: block;
  width: 600px;
  max-width: 900px;
  border-width: thin;
  border-color: #c4c4c4;
  margin-bottom: 20px;
  border-style: solid;
  border-radius: 10px;
  min-height: 100px;
  height: auto;
  padding-bottom: 20px;

}

.detail-item
{
  margin-top:10px;
  display: block;
}
.bold
{
  font-weight: bold;
}

.image-container{

  height: 120px;
  width: 120px;
  border-radius: 50%;
  float:right;
  overflow: hidden;
  border-style: solid;
  border-width: 1px;
  border-color: #c4c4c4;
  display: block ;
  margin-right:20px;


}

.descriptor{
  max-width: 300px;

}

@media screen and (min-width: 400px) {

.map-container{
  width: 100% ;
  margin-bottom: 20px;
}

  .image-container{
    /*display: none;*/
    float: left;
    width: 50px;
    height: 50px;
    margin-left: 20px;
  }

  .image-container img{
    width: 100% ;
    height: auto ;
  }

  .detail-list{
    padding-top:20px;
    margin-right:20px;
  }

}
@media screen and (min-width: 600px) {


  .map-container
  {
    display: block;
    margin-top: 10px;
    float: left;
    height:300px;
    margin-right: 20px;
    width: 50%;
  }

  .image-container{

    height: 120px;
    width: 120px;
    border-radius: 50%;
    float:right;
    overflow: hidden;
    border-style: solid;
    border-width: 1px;
    border-color: #c4c4c4;
    display: block ;
    margin-right:20px;

  }

  .image-container img{
    width: 100% ;
    height: auto;
  }

  .detail-list{

    height: auto;
    width: auto;
    min-height: 10px;
    margin-left: 20px;
    font-size: 13px;
    color: #636363 !important;
    word-wrap: break-word;
    padding-top: 0px;



  }
}
@media screen and (min-width: 1200px) {
  .button_orange_extended {

  }
}


</style>
