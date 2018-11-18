window.addEventListener('load', () => {
    window.vue = new Vue({
    el:'#app',
    data:{
      product:'Salıncak',
      description : "bu bir deneme yazisidir"
    },
    methods : {
      hello(){
        console.log("aloooo");
        alert(this.product);
      }
    }
  });
});