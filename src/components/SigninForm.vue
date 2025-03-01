<template>
    <div class="login-signin-container">
        <form action="" id="signin-form">
            <span class="fa fa-car"></span>
            <h2 class="form-title">Novo Cadastro</h2>
            <div class="custom-field">
                <label for="username">Nome de Usuário</label>
                <input type="text" class="inputs" name="username" placeholder="Digite o nome do usuário">
            </div>
            <div class="custom-field">
                <label for="birthday">Data de aniversário</label>
                <input type="date" class="inputs" name="birthday" v-model="dateValue" :style="dateColorStyle">
            </div>
            <div class="custom-field">
                <label for="email">E-mail</label>
                <input type="text" class="inputs" name="email" placeholder="Digite o e-mail">
            </div>
            <div class="custom-field">
                <label for="password">Senha</label>
                <div class="password-input">
                    <input :type="inputType" class="inputs password" name="password" placeholder="Digite a senha">
                    <span :class="showHideBtn" @click="showHidePassword"></span>
                </div>
                <!-- <span class="fa fa-eye-slash"></span> -->
            </div>
            <input type="submit" class="submit-btn" value="CADASTRAR">
            <a href="" class="signin-login-link">Fazer login</a>      
        </form>
    </div>
</template>

<script>
    export default{
        name: 'SigninForm',
        data(){
            return{
                dateValue: '',
                inputType: 'password',
                showHideBtn: 'fa fa-eye'
            }
        },
        computed:{
            dateColorStyle() {
                return {
                    color: this.dateValue ? "#333" : "#A9A7A9"
                };
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