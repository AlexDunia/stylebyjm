<template>

    <div className="productflex">

    <div className="productfleximg">
    <img src="../assets/images/flady.jpg">
    </div>

    <div className="productflexinfo">
        <br/>
        <br/>
        <br/>
        <div  v-for="(info, index) in sizes" :key="index" @click="logItem(info)">
         <h3 className="nop">{{ info.nop }} </h3>
         <h4 className="chose"> {{ info.price }} </h4>
    <!-- <br/>
    <button @click="changeColor" :style="styleObject"> {{ info.s }} </button>

    <h4 className="chose"> {{ info.s }} </h4>
    <h4 className="chose"> {{ info.m }}</h4>
    <h4 className="chose"> {{ info.l }}</h4> -->
     </div>


        <button @click="changeColor"  :style="{ borderColor: currentBorderColor }" className="btnsize"> {{s}} </button>
        <button @click="changeColorm"  :style="styleObject" className="btnsize"> {{m}} </button>

        <!-- <button @click="changeColor" :style="styleObject"> Medium </button> -->

    </div>

    </div>
</template>

<script>
export default {
data(){
    return{

    //     styleObject: {
    //     backgroundColor: "transparent"

    //   },
    currentBorderColor: 'transparent',
      s: "Small",
      m: "Medium",

        sizes:[
              {
                nop: "LINEAR GREEN PLEATED PANTS",
            },
            {
               price: "30,000",
            },

            // {
            //     s: "S",
            // },
            // {
            //     m: "M",
            // },
            // {
            //     l: "L",
            // },
            // {
            //     xl: "XL",
            // },
            // {
            //     xxl: "XXL",
            // },
            // {
            //     x: "X",
            // }
        ],
        selectedItems: [],
    };
  },
  methods: {
    // logItem(item) {
    //   this.selectedItems.push(item);
    //   console.log(this.selectedItems)
    // },

    changeColor() {
        this.currentBorderColor= this.currentBorderColor === "transparent" ? '#26A76B' : "transparent";
        if (this.selectedItems.length === 0 ) {
        // Add item
        this.selectedItems.push(this.s)
      }else
      {
        this.selectedItems.splice(this.s)
      }
      console.log(this.selectedItems)
    }
  },
}

</script>

<style>

.productflex{
    display:flex;
    justify-content:space-between;
    width:85%;
}

.productfleximg img{
    width:600px;
}

/* .productflexinfo h3{
    color: #81A695;
    font-weight: 500;
} */

.btnsize{
    margin-right:15px;
    font-size:13px;
    padding:5px 10px 5px 10px;
    border:2px solid transparent;
    margin-top:5px;
}

.nop{
    color:#434343;
    font-weight: 500;
}

.chose{
    color: #81A695;
    font-weight: 800;
}

/* .chose{
    width: 100px;
    height: 100px;
    border: 1px solid black;
    box-sizing: border-box;
} */
/*
additional square borders
.chose {
  content: "";
  display: block;
  border: 1px solid black;
  height: calc(100% + 2px);
  position: absolute;
}

.chose:before {
  top: -1px;
  left: -1px;
}

.chose:after {
  bottom: -1px;
  right: -1px;
} */

</style>
