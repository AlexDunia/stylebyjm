<template>


  <!-- <div   className="loopbg" :style="{ backgroundImage: backgroundStyle }"> -->
    <div>



  <div class="navigate">

<div class="togglepagep" @click="showPrevImage">
    <i class="fas fa-chevron-left" id="right"></i>
</div>



<div class="togglepage" @click="showNextImage">
    <i class="fas fa-chevron-right"></i>
</div>


</div>

  <div className="bgcontainer">

    <div className="loopbg" :style="backgroundStyle">

  </div>

</div>


</div>
      <!-- </div> -->
  <!-- <div className="bgcontainer"> -->

  <!-- <div className="bgimage">
    <h1> Working </h1>
  </div> -->

<!-- </div> -->


  <!-- <div className="omo" v-for="(myimage, index) in allimages" :key="index"> -->
    <!-- <div v-show="myimg === currentImageIndex"> -->
      <!-- <div   className="loopbg" :style="{ backgroundImage: backgroundStyle }"> -->

      <!-- </div> -->
    <!-- <img :src="myimage.image"/> -->
    <!-- <div :style="{ backgroundImage: 'url(' + myimage.image + ')' }"> -->
  <!-- <div className="loopbg" :style="{ backgroundImage: 'url(' + myimage.image + ')' }" v-for="(image, index) in images" :key="index" > -->
<!--
  <div className="loopbg" :style="{ backgroundImage: 'url(' + image + ')' }" v-for="(image, index) in images" :key="index" v-show="index === currentImageIndex"> -->
    <!-- Your component content here -->
  <!-- </div> -->
  <!-- make an array of images down. -->
    <!-- <img src="../assets/images/fladylong2.jpg"/> -->
  <!-- </div> -->

  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <!-- <div className="allproducts" v-for="(product, i) in products" :key="i"> -->

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <div className="pw">

    <div className="pgridc">
  <div v-for="(product, i) in products" :key="i">


  <p> <img :src="product.image"/> </p>
  <p className="pname"> {{product.name}}  </p>
  <p className="pprice"> {{product.price}}  </p>
  </div>

  </div>
  </div>

</template>

<script>
import Oneimg from '../assets/images/orange.jpg'
import Twoimg from '../assets/images/flady.jpg'
import Threeimg from '../assets/images/fladylong2.jpg'
// Product images.
import Pone from '../assets/images/flady.jpg'
import Ptwo from '../assets/images/rubygown.jpg'
import Pthree from '../assets/images/aritop.jpg'
import Pfour from '../assets/images/bennybubu.jpg'
// @ is an alias to /src
import Counts from '@/components/Count.vue'
import { checkCompatEnabled } from '@vue/compiler-core'
import { getTransitionRawChildren } from 'vue'

export default {
  data(){
    return{
      backgroundImageUrls: [
      Oneimg,
      Twoimg,
      Threeimg
    ],


    currentImageIndex: 0,

      products:[
      {
        image: Pone,
        name: "BLACKTOP",
        price: "N30,000",
      },

      {
        image: Ptwo,
        name: "RUBYGOWN",
        price: "N30,000",
      },

      {
        image: Pthree,
        name: "ARITOP",
        price: "N30,000",
      },

      {
        image: Pfour,
        name: "BENNYBUBU",
        price: "N30,000",
      },
      {
        image: Pone,
        name: "BLACKTOP",
        price: "N30,000",
      },
      {
        image: Ptwo,
        name: "RUBYGOWN",
        price: "N30,000",
      },
      {
        image: Pthree,
        name: "ARITOP",
        price: "N30,000",
      },
      {
        image: Pfour,
        name: "BENNYBUBU",
        price: "N30,000",
      },
      ]
    }
  },
  components: {
    Counts
  },

  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.backgroundImageUrls[this.currentImageIndex]})`,
      };
    },
  },

  methods: {

      showNextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImageUrls.length;
    },


    showPrevImage() {
      // this.contimg  = this.contimg.length
      // console.log(this.contimg)
      if(this.currentImageIndex == 0){
        this.currentImageIndex = 0
      }else{
        // if (this.currentImageIndex > 0) {
        // this.currentImageIndex--;
        // }
        // else{
        this.currentImageIndex = (this.currentImageIndex - 1) % this.backgroundImageUrls.length;
      }
      console.log(this.currentImageIndex)
      // this.currentImageIndex = (this.currentImageIndex - 1) % this.backgroundImageUrls.length;
      // console.log(this.currentImageIndex)
    },
  },

  // mounted(){
  //   console.log(this.backgroundImageUrls.length)
  // },

  mounted() {
    console.log(this.backgroundImageUrls.length)
    // Start the loop
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImageUrls.length;
    }, 4000); // Change the interval as needed
  },
}



</script>
<style>

.heropic img{
  width:900px;
}

.loopbg{
  background-size: cover;
    background-repeat: no-repeat;
    height: 70vh;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
}

.heropic{
  align-items:center;
  justify-content:center;
  display:flex;
  margin-top:50px;
  margin:auto;
}

.bgimage{
  background-image: url('../assets/images/orange.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
  object-fit: cover;
  /* padding-top:-50px; */
  width: 100%;
}

.bgcontainer{
  width:80%;
  object-fit: cover;
  margin:auto;
}

.navigate {
    position: absolute;
    justify-content: space-between;
    top: 350px;
    width: 90%;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    z-index: 3;
}

.pw {
    width: 90%;
    margin: auto;
}

.pgridc{
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(10px, 4fr);
  margin-bottom: 40px;
}

.pgridc img{
  width:250px;
}

.pname{
  color:#81A695;
  font-weight:500;
}

.pprice{
  font-size:13px;
  margin-top:-8px;
}

@media (max-width: 1200px){

  .pgridc {
    grid-template-columns: repeat(3, 300px);
    align-items: center;
    margin: auto;
}

.pw {
    width: 90%;
    align-items: center;
    margin: auto;
}

}

@media (max-width: 1000px){

.pgridc {
  grid-template-columns: repeat(2, 300px);
  align-items: center;
  margin: auto;
}

.pw {
  width: 90%;
  align-items: center;
  margin: auto;
}

}


@media (max-width: 700px){
  .pgridc {
    /* grid-template-columns: repeat(1, 300px);
    align-items: center;
    margin: auto; */

    grid-template-columns: auto;
    justify-content: center;
    align-content: center;
    grid-gap: 10px;
}

.pw {
    width: 100%;
    /* align-items: center;
    margin: auto; */
}

}

</style>
