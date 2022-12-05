<template >

  <section class="src-components-options">
    <div class="background">
      <div class="flex">
        
        <div class="width-1-3 padding">
          <button class="button float-middle" @click="getNewColor()">{{ gana ? 'Play again!' : 'New Colors!' }}</button>
        </div>
        <div class="flex width-1-3  padding">
          <h6 class="margin-auto color-red">{{ gana ? 'You picked right!' : '' }}</h6>
        </div>
        <div class="flex width-1-3 text-align-center padding">

          <div class="margin-auto ">
            <button type="button" @click="setDiff('E')" class="button">EASY</button>
            <button type="button" @click="setDiff('H')" class="button">HARD</button>
          </div>
          
        </div>

      </div>
      
    </div>

  </section>

</template>

<script >

  export default  {
    name: 'src-components-options',
    mounted () {
      this.getNewColor();
    },
    data () {
      return {
        
      }
    },
    methods: {
      getNewColor(){
        var color = this.randomColor();
        //this.$store.dispatch('setColor', color);
        this.setGana(false);
        var min = 0;
        var max = this.cantBlocks;
        var opt = this.randomInt(min, max-1);
        console.log(color, opt);
        this.setCorrectOption(opt);
        this.setColor(color);
        this.setBlocks();
      },
      setDiff(difficulty){
        this.setDifficulty(difficulty);
        this.getNewColor();
      }
    },
    computed: {
      
    }
}


</script>

<style scoped lang="css">
  .selected{

  }
  .padding{
    padding: 10px;
  }
  .margin-auto{
    margin: 0 auto;
  }
  .float-middle{
    float: middle;
  }
  .float-right{
    float: right;
  }
  .text-align-center{
    
  }
  .width-1-3{
    width: 33.33%;
  }
  .flex{
    display: flex;
  }
  .background{
    background: white;
  }
  .src-components-options {

  }
  .color-red{
    color:red;
  }
  .button{
    border:none;
    border: none;
    height: 40px;
    padding: 10px;

  }
</style>
