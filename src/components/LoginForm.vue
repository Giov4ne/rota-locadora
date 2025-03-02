<template>
    <div class="login-signin-container">
        <form id="login-form" @submit.prevent="checkLogin">
            <span class="fa fa-car"></span>
            <h2 class="form-title">Login</h2>
            <div class="custom-field">
                <label for="email">E-mail</label>
                <input type="text" class="inputs" v-model="email" name="email" placeholder="Digite o e-mail" required>
            </div>
            <div class="custom-field">
                <label for="password">Senha</label>
                <div class="password-input">
                    <input :type="inputType" class="inputs password" v-model="password" name="password" placeholder="Digite a senha" required>
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
                showHideBtn: 'fa fa-eye',
                email: '',
                password: '',
                registeredUsers: []
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
            },

            checkLogin(){
                const user = this.getUserByEmail();
                if(user){
                    if(this.password === user.password){
                        alert('Senhas correspondem');
                        localStorage.setItem('loggedUser', JSON.stringify(user));
                    }
                    else
                        alert('Senha incorreta!');
                } else{
                    alert('Este e-mail não foi cadastrado!');                
                }
            },

            getUserByEmail(){
                return this.registeredUsers.find(user => this.email === user.email) || null;
            }
        },
        mounted(){
            this.registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) !== null ? JSON.parse(localStorage.getItem('registeredUsers')) : [];
        }
    }
</script>

<style>

</style>