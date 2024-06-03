<template>
   <div class="screen-1 mt-5">
  <svg class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="300" height="300" viewbox="0 0 640 480" xml:space="preserve">
    <g transform="matrix(3.31 0 0 3.31 320.4 240.4)">
      <circle style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(61,71,133); fill-rule: nonzero; opacity: 1;" cx="0" cy="0" r="40"></circle>
    </g>
    <g transform="matrix(0.98 0 0 0.98 268.7 213.7)">
      <circle style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" cx="0" cy="0" r="40"></circle>
    </g>
    <g transform="matrix(1.01 0 0 1.01 362.9 210.9)">
      <circle style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" cx="0" cy="0" r="40"></circle>
    </g>
    <g transform="matrix(0.92 0 0 0.92 318.5 286.5)">
      <circle style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" cx="0" cy="0" r="40"></circle>
    </g>
    <g transform="matrix(0.16 -0.12 0.49 0.66 290.57 243.57)">
      <polygon style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" points="-50,-50 -50,50 50,50 50,-50 "></polygon>
    </g>
    <g transform="matrix(0.16 0.1 -0.44 0.69 342.03 248.34)">
      <polygon style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" points="-50,-50 -50,50 50,50 50,-50 "></polygon>
    </g>
  </svg>
  <div class="email">
    <label for="email">Email Address</label>
    <div class="sec-2">
      <ion-icon name="mail-outline"></ion-icon>
      <input type="email" name="email" placeholder="Username@gmail.com"/>
    </div>
  </div>
  <div class="password">
    <label for="password">Password</label>
    <div class="sec-2">
      <ion-icon name="lock-closed-outline"></ion-icon>
      <input class="pas" type="password" name="password" placeholder="············"/>
      <ion-icon class="show-hide" name="eye-outline"></ion-icon>
    </div>
  </div>
  <button class="login">Login </button>
  <center><div class="footer"><span>Sign up</span></div></center>
  
</div>
</template>


<script>

</script>
<style>
@import "@/assets/css/auth.css";
body {
    background-image: url('/images/ai.jpg');
    background-size: cover; /* Adjusts the size of the background image to cover the entire container */
    /* Other background properties like repeat, position, etc. can be added as needed */
}

</style>
<script>

import AiService from "@/services/ai.service";
import {useUserStore} from "@/stores/user";
export default {
    components: {
      AiService,
      // useUserStore
    },
    data() {
        const userStore = useUserStore();
        return {
          user:{},
          result: {},
          message: '',
          userStore,
        };
    },
    
    watch: {
    },
    computed: {

    },
    methods: {
      async signin(data){
        try{
          this.result = await this.userStore.signIn(data.username,data.password);
          console.log("localStorage info!!");
          console.log(localStorage.user);
          let checkAdmin = 0;
          for ( let i = 0; i < this.userStore.user.roles.length; i++ ){
            console.log(this.userStore.user.roles[i])
            if(this.userStore.user.roles[i] == "ROLE_ADMIN"){
              checkAdmin = 1;
            }
          }
          if( checkAdmin == 1){
            this.$router.push({
              name: "admin.Dashboard",
            });
          }else {
            this.message = "permission denial!"
          }

          
        }catch(err){
          console.log(err);
          console.log(err.response.data.message)
          // alert(err.response.data.message)
          this.message = "sai thông tin tài khoản hoặc mật khẩu"
        }
      }
    },
    mounted() {
        
      },
};
</script>