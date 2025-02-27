<template>
    <div class="form-background"></div>
    <div id="vehicle-registration-form">
        <div class="form-header">
            <h2 class="form-header-title">Cadastro de Veículo</h2>
            <span class="close-form">X</span>
        </div>
        <div class="form-body">
            <div class="custom-field" id="plate">
                <label for="plate">Placa</label>
                <input type="text" class="inputs" name="plate" placeholder="Digite a placa do veículo">
            </div>
            <div id="brand">
                <BrandsDropdown :checkbox=false></BrandsDropdown>
            </div> 
            <div class="custom-field" id="model">
                <label for="model">Modelo</label>
                <input type="text" class="inputs" name="model" placeholder="Digite o modelo do veículo">
            </div>
            <div class="custom-field" id="year">
                <label for="year">Ano</label>
                <input type="text" class="inputs" name="year" placeholder="Selecione o ano do veículo">
            </div>
            <div class="custom-field" id="color">
                <label for="color">Cor</label>
                <input type="text" class="inputs" name="color" placeholder="Digite a cor do veículo">
            </div>
            <div id="purpose">
                <PurposesDropdown></PurposesDropdown>
            </div>
            <p id="resting-place">Local de repouso do veículo</p>
            <div class="custom-field" id="latitude">
                <label for="latitude">Latitude</label>
                <input type="text" class="inputs" name="latitude" placeholder="Digite a latitude">
            </div>
            <div class="custom-field" id="longitude">
                <label for="longitude">Longitude</label>
                <input type="text" class="inputs" name="longitude" placeholder="Digite a longitude">
            </div>
            <p id="confort-level">Nível de conforto do veículo</p>
            <!-- ... -->
            <label id="zero">
                <input type="checkbox" name="zero">
                Veículo zero-quilômetro
            </label>
            <button id="register-vehicle-form-btn">Salvar</button>
        </div>
    </div>
</template>

<script>
import BrandsDropdown from './BrandsDropdown.vue';
import PurposesDropdown from './PurposesDropdown.vue';

    export default{
        name: 'VehicleRegistration',
        components:{
            BrandsDropdown,
            PurposesDropdown
        }
    }
</script>

<style>
    .form-background{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        background-color: #0000008f;
        width: 100%;
        height: 100%;
    }

    #vehicle-registration-form{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        width: 625px;
    }

    .form-header{
        background-color: #007DF0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 30px 25px 20px;
        color: #fff;
        width: 100%;
    }

    .form-header-title{
        font-size: 18px;
        font-weight: 400;
        cursor: default;
    }

    .close-form{
        font-size: 22px;
        font-weight: 700;
        cursor: pointer;
    }

    .form-body{
        background-color: #fff;
        padding: 28px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(8, 1fr);
        gap: 12px;
        max-height: 500px;
    }

    .form-body .custom-dropbox{
        width: 100%;
    }

    #plate{
        grid-area: 1 / 1 / 2 / 2;
    }

    #brand{
        grid-area: 1 / 2 / 2 / 3;
    }

    #model{
        grid-area: 2 / 1 / 3 / 2;
    }

    #year{
        grid-area: 2 / 2 / 3 / 3;
    }

    #color{
        grid-area: 3 / 1 / 4 / 2;
    }

    #purpose{
        grid-area: 3 / 2 / 4 / 3;
    }

    #resting-place{
        grid-area: 4 / 1 / 5 / 3;
    }

    #latitude{
        grid-area: 5 / 1 / 6 / 2;
    }

    #longitude{
        grid-area: 5 / 2 / 6 / 3;
    }

    #confort-level{
        grid-area: 6 / 1 / 7 / 3;
    }

    #zero{
        grid-area: 7 / 1 / 8 / 3;
    }

    #register-vehicle-form-btn{
        grid-area: 8 / 1 / 9 / 3;
        background-color: #007DF0;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        padding: 8px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 80px;
        height: 40px;
        margin: 0 0 0 auto;

        &:hover{
            background-color: #518bff;
        }
    }

    #resting-place, #confort-level, #zero{
        color: #333;
        font-size: 14px;
        display: flex;
        align-items: center;
    }

    #zero input{
        margin-right: 8px;
        cursor: pointer;
        transform: scale(1.3);
    }
</style>