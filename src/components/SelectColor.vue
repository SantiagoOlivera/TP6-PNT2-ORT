<template >

  <section class="src-components-select-color">
   <!--  {{ colorIn }}
    {{ correctOption }} -->
    <div class="background">
      
      <div class="container grid">
        <div class="square " 
          v-for="(item,index) in blocks" :key="index"
          @click="selectColor(item)"
          :style="{ 
            background: gana ? mostrarColorRGB  : item.background,
            visibility: gana ? 'visible'        : item.selected ? 'hidden' : 'visible' 
          }"
          >
        </div>
      </div>

      

    </div>

  </section>

</template>

<script >

  export default  {
    name: 'src-components-select-color',
    /* props: ['cantBlocksIn', 'colorIn', 'ganaIn'], */
   /*  watch: { 
      colorIn() {
        //this.setGana(false);
        this.setCorrectOption();
        this.setBlocks();
      }
    }, */
    mounted () {
      this.test();
    },
    data () {
      return {
      }
    },
    methods: {
      selectColor(item){
        
        if(
          this.isCorrect(item)
        ){
          console.log("CORRECTO");
          this.win();
        }else{
          //console.log(item.selected)
          item.selected = true;
        }
      },
      isCorrect(opt){
        return opt.isCorrect;
      },
      win(){
        this.setGana(true);
      }
    },
    computed: {

    }
}


</script>

<style scoped >

  .invisible{
    visibility:hidden;
  }

  .square {
    visibility:block;
    width: 30%;
    background: blue;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;
  }

  .container {
    margin: 20px auto;
    max-width: 600px;
  }
  .src-components-select-color {
    
  }
</style>
