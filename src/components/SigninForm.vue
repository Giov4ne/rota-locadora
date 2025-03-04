<!-- <template>
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
                <input type="date" class="inputs" name="birthday" v-model="birthDate" :style="dateColorStyle">
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
                birthDate: '',
                inputType: 'password',
                showHideBtn: 'fa fa-eye'
            }
        },
        computed:{
            dateColorStyle() {
                return {
                    color: this.birthDate ? "#333" : "#A9A7A9"
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

</style> -->

<template>
    <div class="login-signin-container">
        <form @submit.prevent="validateForm" @submit="registerUser" id="signin-form">
            <span class="fa fa-car"></span>
            <h2 class="form-title">Novo Cadastro</h2>
            <div class="custom-field">
                <label for="username">Nome de Usuário</label>
                <input type="text" class="inputs" v-model="username" placeholder="Digite o nome do usuário" required pattern=".{3,}" title="O nome de usuário deve ter pelo menos 3 caracteres">
            </div>
            <div class="custom-field">
                <label for="birthday">Data de nascimento</label> 
                <input type="date" class="inputs" v-model="birthDate" :style="dateColorStyle" required :max="maxDate" :min="minDate">
            </div>
            <div class="custom-field">
                <label for="email">E-mail</label>
                <input type="email" class="inputs" v-model="email" placeholder="Digite o e-mail" required>
            </div>
            <div class="custom-field">
                <label for="password">Senha</label>
                <div class="password-input">
                    <input :type="inputType" class="inputs password" v-model="password" placeholder="Digite a senha" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$" title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um caractere especial e um número">
                    <span :class="showHideBtn" @click="showHidePassword"></span>
                </div>
            </div>
            <input type="submit" class="submit-btn" value="CADASTRAR">
            <router-link to="/login" class="signin-login-link">Fazer login</router-link>
        </form>
        <span v-if="errorMsg !== ''" class="error-message">{{ errorMsg }}</span>
    </div>
</template>

<script>
    export default {
        name: 'SigninForm',
        data() {
            return {
                username: '',
                birthDate: '',
                email: '',
                password: '',
                inputType: 'password',
                showHideBtn: 'fa fa-eye',
                registeredUsers: [],
                errorMsg: ''
            };
        },
        computed: {
            maxDate() {
                return new Date().toISOString().split("T")[0];
            },
            minDate() {
                return "1900-01-01";
            },
            dateColorStyle() {
                return {
                    color: this.birthDate ? "#333" : "#A9A7A9"
                };
            },
            userExists(){
                return this.registeredUsers.some(user => this.email === user.email);
            }
        },
        methods: {
            showHidePassword() {
                if(this.inputType === 'password'){
                    this.inputType = 'text';
                    this.showHideBtn = 'fa fa-eye-slash';
                } else{
                    this.inputType = 'password';
                    this.showHideBtn = 'fa fa-eye';
                }
            },

            validateForm(event) {
                const form = event.target;
                if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                }
            },

            registerUser(){
                if(!this.userExists){
                    this.registeredUsers.push({
                        username: this.username,
                        birthDate: this.birthDate,
                        email: this.email,
                        password: this.password
                    });
                    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
                    this.$router.push('/login');
                } else{
                    this.showError('Já existe um usuário cadastrado com este e-mail!');
                }
            },

            showError(message) {
                this.errorMsg = message;

                setTimeout(() => {
                    this.errorMsg = '';
                }, 5000);
            }
        },
        mounted(){
            this.registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) !== null ? JSON.parse(localStorage.getItem('registeredUsers')) : [];
            console.log(this.registeredUsers);
        }
    };
</script>

<style>

</style>