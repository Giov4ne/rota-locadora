<template>
    <div class="login-signin-container">
        <form action="" id="login-form">
            <span class="fa fa-car"></span>
            <h2 class="form-title">Login</h2>
            <div class="custom-field">
                <label for="email">E-mail</label>
                <input type="text" class="inputs" name="email" placeholder="Digite o e-mail" required>
            </div>
            <div class="custom-field">
                <label for="password">Senha</label>
                <div class="password-input">
                    <input :type="inputType" class="inputs password" name="password" placeholder="Digite a senha" required>
                    <span :class="showHideBtn" @click="showHidePassword"></span>
                </div>
                <!-- <span class="fa fa-eye-slash"></span> -->
            </div>
            <input type="submit" class="submit-btn" value="ENTRAR">
            <a href="" class="signin-login-link">Criar conta</a>
        </form>
    </div>
</template>

<script>
    export default{
        name: 'LoginForm',
        data(){
            return{
                inputType: 'password',
                showHideBtn: 'fa fa-eye'
            }
        },
        methods:{
            showHidePassword(){
                if(this.inputType === 'password'){
                    this.inputType = 'text';
                    this.showHideBtn = 'fa fa-eye-slash';
                } else{
                    this.inputType = 'password';
                    this.showHideBtn = 'fa fa-eye';
                }
            }
        }
    }
</script>

<style>

</style>