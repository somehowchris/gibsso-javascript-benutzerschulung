<template>
  <div class="hello">
    <div class="head">
      <h1 id="title">Your next big business idea made simple</h1>
     </div>
    <div class="main">

        <div class="card">
          <div id="about">
          <div id="left">
            <h1>Let us work together on your next big Idea with our expertise</h1>
            <br/>
            <br/>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
<br/>
              <br/>
            </p>
            <p class="text-2">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
            </p>
          </div>
          <img id="drawing" src="../assets/business-drawing.jpg"/>
          </div>
          <div>
            <div class="projects" id="projects">
              <figure class="project">
                  <div class="container">
                    <p style="">Notes2Go</p>
                    <img src="../assets/project1.jpg" >
                  </div>

              </figure>
              <figure class="project">
                <div class="container">
                  <p style="">Daily Tasks</p>
                  <img src="../assets/project2.jpg" >
                </div>

              </figure>
              <figure class="project row3">
                <div class="container">
                  <p style="">Sound Studio</p>
                  <img src="../assets/project3.png" >
                </div>

              </figure>
              <figure class="project row2 row3">
                <div class="container">
                  <p style="">Vacation Planer</p>
                  <img src="../assets/project5.jpg" >
                </div>

              </figure>
              <figure class="project row2 row4">
                <div class="container">
                  <p style="">Sharing & Caring</p>
                  <img src="../assets/project4.png" >
                </div>

              </figure>
              <figure class="project row2 row4">
                <div class="container">
                  <p style="">Mentoring</p>
                  <img src="../assets/project6.jpg" >
                </div>

              </figure>
            </div>
            <div id="whiteline"></div>

          </div>
          <div id="idea" style="float:left;width:100%;">
            <h1 style="width:95%;">Start building your ideas with us</h1>
            <br />
            <vs-upload automatic action="/upload" @on-success="successUpload" style="min-height:400px;width:80%;margin:auto;"/>
          </div>

        </div>

    </div>
  </div>
</template>

<script>import Parallax from 'vue-parallaxy'
export default {
  name: 'HelloWorld',
  components: {
    Parallax
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    successUpload () {
      this.$vs.notify({color: 'sucess', title: 'Upload Success', text: 'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .head{
    height:100vh;
    withd:100%;
    background: url("../assets/header.jpg") no-repeat center;
    background-size:cover;
  }
  .vs-navbar-after{
    overflow:hidden;
    border-radius:50%;
  }
  .card{
    -webkit-box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
    box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
    transform: translate3d(0px, -25px, 0px);
    max-width:95%;
    margin:auto;
    border-radius:18px;
    position:relative;
    background: white ;
    overflow:hidden;
  }
  #drawing{
    margin-top:40px;
    float:right;
    max-width:60%;
  }
  #left{
    float:left;
    padding:20px;
    margin-top:40px;
    max-width:40%;
  }
  .project{
    width:calc(100% / 3);
    height:calc(100% / 3);
    background-color:black;
  }
  .projects{
    float:left;
    height:calc(100% / 3 / 9 * 16 * 0.5);
    overflow:hidden;
  }
  .projects figure{
    float:left;
  }
  figure img{
    width:100%;
    transition:0.75s;
  }
  figure p{
    position:absolute;
    z-index: 100;
    color:transparent;
    right:0;
    left:0;
    bottom:50%;
    transition:0.7s;
    font-size:46px;
  }
  figure:hover img{
    filter: blur(3px);
    filter: brightness(50%);
  }
  figure:hover p{
    color:ghostwhite;
  }
  .row2{
    position:relative;
    top:-8px;
  }
  .container{
    position:relative;
    width:100%;
    height: calc(100% / 3);
  }
  #whiteline{
    background-color:white;
    width:100%;
    height:20px;
    float:left;
    position:relative;
    top:-20px;
  }
#title{
  color:white;
  font-size:52px;
  text-align:center;
  padding-top:45%;
  width: 100%;
}
@media only screen and (min-width: 1600px) {
  #title{
    color:white;
    font-size:52px;
    text-align:center;
    padding-top:35%;
    width: 100%;
  }
}
@media only screen and (max-width: 1290px)  {
  #left{
    padding:80px;
    min-width:100%;
    padding-top:10px;
  }
  #title{
    color:white;
    font-size:52px;
    text-align:center;
    padding-top:60%;
    width: 100%;
  }
}
@media only screen and (max-width: 920px)  {
  .project{
    width:calc(100% / 2);
    height:calc(100% / 2);
    background-color:black;
  }
  .row2{
    position:relative;
    top:0px;
  }
  .row3{
    position:relative;
    top:-8px;
  }
  .row4{
    position:relative;
    top:-16px;
  }
  #title{
    color:white;
    font-size:52px;
    text-align:center;
    padding-top:80%;
    width: 100%;
  }
}

@media only screen and (max-width: 660px)  {
  #left {
    padding: 80px;
    min-width: 100%;
    padding-top: 10px;
  }
  .project{
    width:calc(100% / 1);
    height:calc(100% / 1);
    background-color:black;
  }
  .project:nth-child(2){
    position:relative;
    top:-6px;
  }
  .project:nth-child(3){
    position:relative;
    top:-12px;
  }
  .project:nth-child(4){
    position:relative;
    top:-18px;
  }
  .project:nth-child(5){
    position:relative;
    top:-24px;
  }
  .project:nth-child(6){
    position:relative;
    top:-30px;
  }
  #whiteline{
    background-color:white;
    width:100%;
    height:20px;
    float:left;
    position:relative;
    top:-50px;
  }
  #drawing{
    min-width:100%;
  }
  #title{
    color:white;
    font-size:52px;
    text-align:center;
    padding-top:100%;
    width: 100%;
  }

}
</style>
