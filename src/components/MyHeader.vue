<template>
    <header>
        <nav id="header-navigation">
            <router-link to="/home" id="rl-logo">
                <span class="fa fa-car" id="logo-icon"></span>
                <span id="logo-text">RotaLocadora</span>
            </router-link>
            <div id="pages">
                <router-link to="/home" class="page">VEÍCULOS</router-link>
                <router-link to="/activities" class="page">HISTÓRICO DE ATIVIDADES</router-link>
            </div>
        </nav>
        <div id="user-info">
            <div id="greeting">
                <p>Olá</p>
                <p id="name">{{ getUsername }}</p>
            </div>
            <div class="exit-dropdown-container">
                <img src="../assets/user.png" alt="user image" id="user-img" @click="exitToggleDropdown">
                <transition name="fade">
                    <div v-if="exitIsOpen" @click="logout" class="exit-dropdown">
                        <span class="fa fa-right-from-bracket"></span>
                        <span>Sair</span>
                    </div>
                </transition>
            </div>
        </div>
    </header>
</template>

<script>
    export default{
        name: 'MyHeader',
        data(){
            return{
                exitIsOpen: false,
                username: ''
            }
        },

        methods:{
            exitToggleDropdown(){
                this.exitIsOpen = !this.exitIsOpen;
            },

            logout(){
                localStorage.removeItem('loggedUser');
                this.$router.replace('/login');
            }
        },

        computed:{
            getUsername(){
                return this.username !== '' ? this.username : 'Usuário';
            }
        },

        mounted(){
            this.username = JSON.parse(localStorage.getItem('loggedUser')).username;
        }
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
        z-index: 1;
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
            background-color: #d3d3d3;
        }
    }

    .router-link-active.page, .router-link-exact-active.page {
        background-color: #007DF01A;
        color: #007DF0;
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

    .exit-dropdown-container{
        position: relative;
        display: inline-block;
    }

    .exit-dropdown {
        position: absolute;
        right: 5px;
        width: 100px;
        font-size: 14px;
        background-color: #fff;
        padding: 12px;
        border-radius: 5px;
        box-shadow: 0 2px 4px #00000040;
        cursor: pointer;
        color: #E8363B;

        &:hover{
            background-color: #d8d8d8;
        }
    }

    .exit-dropdown .fa-right-from-bracket{
        margin-right: 5px;
        font-size: 16px;
    }

    @media screen and (max-width: 665px){
        #rl-logo{
            display: none;
        }
    }

    @media screen and (max-width: 490px){
        header, #header-navigation{
            flex-wrap: wrap;
            justify-content: center;
        }

        #pages{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;   
        }

        .page{
            margin: 0 8px 10px 8px;
        }
    }
</style>