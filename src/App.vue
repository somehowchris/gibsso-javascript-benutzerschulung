<template>
  <div id="app">
    <div id="parentx" >

      <div id="headernav">
        <vs-navbar v-model="activeItem" class="nabarx"  active-text-color="#1781E3">

          <img src="@/assets/apple.png" style="max-height:38px;"/>
          <vs-navbar-title style="margin:auto;">
            Äpel
          </vs-navbar-title>
          <vs-spacer></vs-spacer>
          <vs-navbar-item index="0">
            <a href="#" v-scroll-to="'#parentx'">Home</a>
          </vs-navbar-item>
          <vs-navbar-item index="1">
            <a href="#" v-scroll-to="'#about'">Process</a>
          </vs-navbar-item>
          <vs-navbar-item index="2">
            <a href="#" v-scroll-to="'#projects'">Projects</a>
          </vs-navbar-item>
          <vs-navbar-item index="3">
            <a href="#" v-scroll-to="'#idea'">Ideas</a>
          </vs-navbar-item>
        </vs-navbar>
      </div>
      <router-view style="min-height:100vh;position:absolute;top:0px;width:100%;"></router-view>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    active: false,
    notExpand: false,
    reduce: true,
    activeItem: 0
  })
}
</script>

<style>
  .img-upload{
    min-width:calc(100%/4);
  }
  @media only screen and (max-width: 660px) {
    .img-upload{
      min-width:calc(100%/1);
    }
  }
  @media only screen and (max-width: 920px)  {
    .img-upload{
      min-width:calc(100%/2);
    }
  }
  @media only screen and (max-width: 1290px)  {
    .img-upload{
      min-width:calc(100%/3);
    }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:white;
  margin:0px;
  min-height:100vh;
}
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.header-sidebar h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.header-sidebar h4 > button {
  margin-left: 10px;
}
.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.footer-sidebar > button {
  border: 0px solid rgba(0,0,0,0) !important;
  border-left: 1px solid rgba(0,0,0,0.07) !important;
  border-radius: 0px !important;
}
  *{
    font-family:'K2D';
    font-weight:bold;
  }
  #headernav{
    width:90%;
    margin:auto;
    background-color:white;
    position:fixed;
    top:20px;
    border-radius:6px;
    overflow:hidden;
    height:38px;
    box-shadow: 0px 0px 300px -6px rgba(171,171,171,1);
    z-index:100;
    margin:auto;
    left:0px;
    right:0px;
  }
  #headernav li{
    height:38px;
  }
  #headernav .vs-navbar-item span{
    border-radius:2px 2px 0 0;
  }
  #headernav .vs-navbar .vs-navbar-title{
    padding: 5px !important;
  }
  .vs-sidebar{
    overflow:hidden;
  }
  .vs-component.vs-button{
    border-right:0px;
  }
  .footer{
    background-color:#1781E3;
    min-height:400px;
  }
::-webkit-scrollbar {
  display: none;
}
</style>
