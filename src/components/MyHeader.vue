<template>
    <header>
        <nav id="header-navigation">
            <a href="" id="rl-logo">
                <span class="fa fa-car" id="logo-icon"></span>
                <span id="logo-text">RotaLocadora</span>
            </a>
            <div id="pages">
                <a href="" class="page">VEÍCULOS</a>
                <a href="" class="page">HISTÓRICO DE ATIVIDADES</a>
            </div>
        </nav>
        <div id="user-info">
            <div id="greeting">
                <p>Olá</p>
                <p id="name">Maria Clara da Silva</p>
            </div>
            <img src="../assets/user.png" alt="user image" id="user-img">
        </div>
    </header>
</template>

<script>
    export default{

    }
</script>

<style>
    header, #header-navigation, #user-info, #rl-logo{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    header, #header-navigation{
        justify-content: space-between;
    }

    #header-navigation{
        width: 545px;
    }

    header{
        background-color: #F0F0F0;
        padding: 7px 15px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    #rl-logo{
        border: 2px solid #007DF0;
        border-radius: 5px;
        width: 188px;
        background-color: #fff;
        text-decoration: none;
        align-items: center;
    }

    #logo-icon{
        color: #fff;
        font-size: 28px;
        background-color: #007DF0;
        height: 100%;
        padding: 2px 4px 2px 2px;
    }

    #logo-text{
        color: #007DF0;
        font-size: 20px;
        font-weight: 700;
        margin: 0 auto;
        padding: 2px 10px;
    }

    .page{
        background-color: #DFDFDF;
        color: #000;
        padding: 12px;
        border-radius: 5px;
        margin: 0 10px;
        text-decoration: none;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;

        &:hover{
            background-color: #007DF01A;
            color: #007DF0;
        }
    }

    #greeting{
        font-size: 14px;
        line-height: 16.41px;
        color: #333;
        cursor: default;
        letter-spacing: 1px;
    }

    #name{
        font-weight: 700;
    }

    #user-img{
        width: 45px;
        border: 3px solid #333;
        border-radius: 100px;
        margin-left: 14px;
        cursor: pointer;
    }
</style>