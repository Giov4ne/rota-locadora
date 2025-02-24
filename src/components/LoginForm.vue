<template>
    <div id="login-signin-container">
        <form action="">
            <span class="fa fa-car"></span>
            <h2 class="form-title">Login</h2>
            <div class="custom-field">
                <label for="email">E-mail</label>
                <input type="text" class="inputs" id="email" name="email" placeholder="Digite o e-mail">
            </div>
            <div class="custom-field">
                <label for="password">Senha</label>
                <div class="password-input">
                    <input type="password" class="inputs" id="password" name="password" placeholder="Digite a senha">
                    <span class="fa fa-eye"></span>
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
        name: 'LoginForm'
    }
</script>

<style>
    #login-signin-container{
        background-image: url('../assets/cars-background.png');
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

    .fa-car{
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
        background: #fff;
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

    #password{
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