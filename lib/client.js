import MusicPlayer from './components/MusicPlayer.vue';

import Vuex from 'vuex';
import store from './store/index.js';
import Directives from './directive/index'

export default function(ctx){
  const { Vue } = ctx;
  
  Vue.use(Vuex);
  Vue.component('MusicPlayer', MusicPlayer);
  Vue.mixin({ store: store });
  Vue.use(Directives)
}