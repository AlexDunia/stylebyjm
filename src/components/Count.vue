<template>
    <div>

        <div className="navigate">

<div class="togglepagep" @click="prev">
    <i class="fas fa-chevron-left" id="right"></i>
</div>



<div class="togglepage" @click="next">
    <i class="fas fa-chevron-right"></i>
</div>


</div>
<slot :myimg="currentimage"/>
    </div>
  </template>

  <script>

//   import { VueElement } from 'vue';
  import {onMounted, ref} from 'vue';
//  we need a null value that will eventually get the number of items of the omo.
// First step towards implememtation is to set a const and then mount the value

  export default {
    setup(){
      const currentimage = ref(1)
      const currentimagecount = ref(null)

      onMounted(()=>{
        currentimagecount.value = document.querySelectorAll('.omo').length;
        // The purpose of the .length is so that we would know how many is actually in the class and
        // set it to be equals to the value
        console.log(currentimage.value)
        console.log(currentimagecount.value)
    })

    const next = () => {
        // currentimage.value += 1
        if(currentimagecount.value == currentimage.value){
            currentimage.value = 1
        }
        else{
            currentimage.value += 1
        }
    }

    const prev = () => {
        // currentimage.value += 1
        if(currentimage.value == 1){
            currentimage.value = 1
        }
        else{
            currentimage.value -= 1
        }
    }


      return {currentimage, next , prev}
    },


  }
  </script>

  <style>
  </style>
