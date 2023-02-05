import Counter from './Counter';
import Vue from 'vue';

const ABC = Vue.component('app',{
  template: '<div id="app"><h2>Essential Links</h2></div>'
})

new Vue({
  el: '#app',
  components: {
    Counter, ABC
  },
  template:`
    <div>
      <Counter/>
      <ABC/>
    </div>
  `
})



export default ABC;
