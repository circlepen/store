<template>
  <b-container>
    <b-card>
  <b-form @submit.prevent="signin">
    <p class="h1 text-center mb-4">Sign in</p>
    <b-row class="my-5">
    <b-col sm="3">
      <label class="text-center" for="input-email">Email:  </label>
    </b-col>
    <b-col sm="9">
      <b-form-input  id="input-email" size="lg" placeholder="Enter your email" v-model="user.username" ></b-form-input>
    </b-col>
  </b-row>
 
  <b-row class="my-5">
    <b-col sm="3">
      <label class="text-center" for="input-password">Password:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input  id="input-password" size="lg" placeholder="Password" v-model="user.password" ></b-form-input>
    </b-col>
  </b-row>

    
        <div class="text-center">
          <b-button size="lg" variant="primary" type="submit">Login</b-button>
        </div>
  </b-form>
  </b-card>
  </b-container>
</template>
<style scoped lang="scss">
.container{
  height: 100vh;
  width:100%;
  display:flex;
  justify-content:center; 
  align-items: center;
}

button{
  margin-top:30px;
}
.card{
  width:60%;
}
</style>

<script>
// @ is an alias to /src


export default {
  name: 'login',
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    signin(){
      const api = "https://vue-course-api.hexschool.io/admin/signin";
      const vm = this;
      this.$http.post(api, vm.user).then((response) =>{
        console.log(response.data);
        if (response.data.success){
          this.$router.push('/');
        } 
        
      });
    },
  }
  
}
</script>