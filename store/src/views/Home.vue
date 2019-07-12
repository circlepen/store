<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <b-button variant="danger" @click.prevent="active = !active">登出</b-button>
    <div :show="acitve">這串字會被看到</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      active: false,
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    logout(){
      console.log("登出")
      const api = "https://vue-course-api.hexschool.io/logout";
      const vm = this;
      this.$http.post(api).then((response) =>{
        if(response.data.success){
          vm.$router.push('/');
        }
        else{
          console.log("失敗");
        }
      });
    }

  }
}
</script>


