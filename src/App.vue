<template>
  <!-- <LoginForm></LoginForm> -->
  <!-- <SigninForm></SigninForm> -->
   <HomePage></HomePage>
</template>

<script>
import HomePage from './components/HomePage.vue';


/* import SigninForm from './components/SigninForm.vue'; */

/* import LoginForm from './components/LoginForm.vue'; */

export default {
  name: 'App',
  components: {
    /* LoginForm */
    /* SigninForm */
    HomePage
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
  }
  
  input{
    outline: none;
    border: none;
  }

  .login-signin-container{
    background-image: url('./assets/cars-background.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ececec;
  }

  form{
    background-color: #fff;
    width: 480px;
    border-radius: 30px;
    box-shadow: 0 2px 10px #00000040;
    padding: 35px 37px 37px 37px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form .fa-car{
    color: #007DF0;
    font-size: 80px;
  }

  .form-title{
    font-size: 20px;
    font-weight: 700;
    color: #333;
    margin: 22px;
    cursor: default;
  }

  .custom-field{
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid #d8d8d8;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  .custom-field label{
    position: absolute;
    top: -8px;
    left: 8px;
    background-color: #fff;
    padding: 0 5px;
    font-size: 12px;
    color: #333;
  }

  .inputs{
    background-color: transparent;
    padding: 12px;
    font-size: 12px;
    color: #333;

    &::placeholder{
        color: #A9A7A9;
    }
  }

  .password-input{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .password{
    width: 90%;
  }

  .fa-eye{
    font-size: 19px;
    width: 10%;
    text-align: center;
    color: #A9A7A9;
    cursor: pointer;
  }

  .submit-btn{
    background-color: #007DF0;
    color: #fff;
    font-size: 16px;
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    margin: 12px 0 30px 0;
    cursor: pointer;

    &:hover{
        background-color: #518bff;
    }
  }

  .signin-login-link{
    font-size: 16px;
    color: #A9A7A9;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
  }
</style>