<template>

  <div class="navigation">
    <div class="nav"><a href="/">Search Directory</a> <a href="/Map">Map View</a>  </div>
  </div>

</template>

<script>

export default {
  // vars goes here
  data(){
    return{
    }
  },
}
</script>

<style scoped>

.nav{
  width: 100%; ;
  height:40px;
  background-color: rgba(0,142,198,1);
  margin-bottom: 50px;
  text-align: right !important;
  vertical-align: middle !important;
  color: #fff ;
  line-height: 40px;

}

a{
  color: #fff ;
  text-decoration: none ;
  margin-right: 20px;
}
a:hover{
    border-bottom: 1px solid #fff;
     padding-bottom: 0px;
}

</style>
