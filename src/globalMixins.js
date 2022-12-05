import Vue from 'vue';

const globalMixins = {
    methods:{
        test(){
            console.log('test');
        },
        setColor(color){
            this.$store.dispatch('setColor',color);
        }, 
        setDifficulty(difficulty){
            this.$store.dispatch('setDifficulty', difficulty );
        },
        setGana(gana){
            this.$store.dispatch('setGana', gana );
        },
        randomInt(min, max){

            var random = null;
            
            if(!min && !max){
                random = Math.floor(Math.random() * 256);
            }else{
                random = min + ( Math.floor(Math.random() * (max - min + 1)) );
            }

            return random;
        },
        setCorrectOption(correctOption){
            this.$store.dispatch('setCorrectOption', correctOption );
        },
        randomColor(){

            var r = this.randomInt();
            var g = this.randomInt();
            var b = this.randomInt();
            // si sale un color igual al color seleccionado tiramos de nuevo
            while(r === this.color.r && g === this.color.g && b === this.color.b){
              r = this.randomInt();
              g = this.randomInt();
              b = this.randomInt();
            }
    
            return {r:r, g:g, b:b};
    
        },
        setBlocks(){
            var blocks = [];

            var correctOption = this.$store.state.correctOption;
            var color = this.$store.state.color;
            var cantBlocks = this.$store.state.cantBlocks;

            for(var i=0; i<cantBlocks; i++){
                if(i === correctOption ){
                    blocks.push({ background: `RGB(${color.r},${color.g},${color.b})`, selected: false, isCorrect: true });
                }else{
                    var otherColor = this.randomColor();
                    blocks.push({ background: `RGB(${otherColor.r},${otherColor.g},${otherColor.b})`, selected: false, isCorrect: false });
                }
            }

            this.$store.dispatch('setBlocks',blocks);
        },
    },
    computed:{
        blocks(){
            var blocks = this.$store.state.blocks;
            return blocks;
        },
        gana(){
            var gana = this.$store.state.gana;
            return gana;
        },
        color(){
            var color = this.$store.state.color;
            return color;
        },
        mostrarColorRGB(){
            var color = this.$store.state.color;
            var strColor = `RGB(${color.r}, ${color.g}, ${color.b})`;
            return strColor;
        },
        correctOption(){
            var opt = this.$store.state.correctOption;
            return opt;
        },
        cantBlocks(){
            var cantBlocks = this.$store.state.cantBlocks;
            return cantBlocks;
        }

    }
}

Vue.mixin(globalMixins);