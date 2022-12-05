<template >
  <div>
    <HeaderRGBColor />
    <Options />
    <SelectColor /> 
  </div>
 
</template>

<script>

  import SelectColor from './SelectColor.vue';
  import Options from './Options.vue';
  import HeaderRGBColor from './HeaderRGBColor.vue'; 

  export default  {
    name: 'RGBColorGame',
    components: {
      HeaderRGBColor,
      Options,
      SelectColor,
    },
    props: [],
    mounted(){
    },
    data () {
      return {  
       
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style>
  
</style>
