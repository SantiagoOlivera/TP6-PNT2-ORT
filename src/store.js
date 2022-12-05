import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


export default new Vuex.Store({
    state:{

        gana: false,
        difficulty: 'H',
        cantBlocks: 6,
        blocks: [],
        color: {},
        correctOption: null,
    }, 
    actions:{
        setColor({commit}, color ){
            commit('setColor', color );
            commit('setBlocks');
        },
        setDifficulty({commit}, difficulty ){
            commit('setDifficulty', difficulty );
        },
        setGana({commit}, gana ){
            commit('setGana', gana);
        },
        setCorrectOption({commit}, opt ){
            commit('setCorrectOption', opt);
        }, 
        setBlocks({commit}, blocks){
            commit('setBlocks', blocks);
        }
    },
    mutations:{
        setCorrectOption(state, opt ){
            state.correctOption = opt;
        },
        setGana(state, gana){
            state.gana = gana;
        },
        setDifficulty(state, difficulty){
            state.difficulty = difficulty;

            if(difficulty === 'E'){
                state.cantBlocks = 3;
            }else if(difficulty === 'H'){
                state.cantBlocks = 6;
            }
        },
        setColor(state, color ){
            state.color = color;
        },
        setBlocks(state, blocks){
            state.blocks = blocks;  
        },

    }
})