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
                <input type="text" class="inputs" name="birthday" placeholder="Selecione a data de aniversário">
            </div>
            <div class="custom-field">
                <label for="email">E-mail</label>
                <input type="text" class="inputs" name="email" placeholder="Digite o e-mail">
            </div>
            <div class="custom-field">
                <label for="password">Senha</label>
                <div class="password-input">
                    <input type="password" class="inputs password" name="password" placeholder="Digite a senha">
                    <span class="fa fa-eye"></span>
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
        name: 'SigninForm'
    }
</script>

<style>

</style>