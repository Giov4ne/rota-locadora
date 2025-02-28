<template>
    <div class="form-background"></div>
    <div id="vehicle-edit-registration-form">
        <div class="form-header">
            <h2 class="form-header-title">{{ isEditing ? "Edição de Veículo" : "Cadastro de Veículo" }}</h2>
            <span class="close-form" @click="close">X</span>
        </div>
        <div class="form-body">
            <div class="custom-field" id="plate">
                <label for="plate">Placa</label>
                <input v-if="isEditing" :value="vehicleToEdit.plate" disabled type="text" class="inputs" name="plate">
                <input v-else type="text" class="inputs" name="plate" placeholder="Digite a placa do veículo">
            </div>
            <div id="brand">
                <BrandsDropdown :checkbox=false :selectedBrand="vehicleToEdit.brand"></BrandsDropdown>
            </div> 
            <div class="custom-field" id="model">
                <label for="model">Modelo</label>
                <input v-if="isEditing" :value="vehicleToEdit.model" type="text" class="inputs" name="model" placeholder="Digite o modelo do veículo">
                <input v-else type="text" class="inputs" name="model" placeholder="Digite o modelo do veículo">
            </div>
            <div class="custom-field" id="year">
                <label for="year">Ano</label>
                <input v-if="isEditing" :value="vehicleToEdit.year" type="text" class="inputs" name="year" placeholder="Selecione o ano do veículo">
                <input v-else type="text" class="inputs" name="year" placeholder="Selecione o ano do veículo">
            </div>
            <div class="custom-field" id="color">
                <label for="color">Cor</label>
                <input v-if="isEditing" :value="vehicleToEdit.color" type="text" class="inputs" name="color" placeholder="Digite a cor do veículo">
                <input v-else type="text" class="inputs" name="color" placeholder="Digite a cor do veículo">
            </div>
            <div id="purpose">
                <PurposesDropdown :selectedPurpose="vehicleToEdit.purpose"></PurposesDropdown>
            </div>
            <p id="resting-place">Local de repouso do veículo</p>
            <div class="custom-field" id="latitude">
                <label for="latitude">Latitude</label>
                <input v-if="isEditing" :value="vehicleToEdit.latitude" type="text" class="inputs" name="latitude" placeholder="Digite a latitude">
                <input v-else type="text" class="inputs" name="latitude" placeholder="Digite a latitude">
            </div>
            <div class="custom-field" id="longitude">
                <label for="longitude">Longitude</label>
                <input v-if="isEditing" :value="vehicleToEdit.longitude" type="text" class="inputs" name="longitude" placeholder="Digite a longitude">
                <input v-else type="text" class="inputs" name="longitude" placeholder="Digite a longitude">
            </div>
            <div id="confort-level">
                <p id="confort-level-p">Nível de conforto do veículo</p>
                <StarRating v-if="isEditing" v-model="vehicleToEdit.confortLevel" />
                <StarRating v-else></StarRating>
            </div>
            <label id="zero">
                <input type="checkbox" :checked="vehicleToEdit.zero" name="zero">
                Veículo zero-quilômetro
            </label>
            <button id="register-vehicle-form-btn">Salvar</button>
        </div>
    </div>
</template>

<script>
import BrandsDropdown from './BrandsDropdown.vue';
import PurposesDropdown from './PurposesDropdown.vue';
import StarRating from './StarRating.vue';

    export default{
        name: 'VehicleRegistration',
        components:{
            BrandsDropdown,
            PurposesDropdown,
            StarRating
        },
        props:{
            vehicle: {
                type: Object,
                default: () => null // Se não for passado, será tratado como null
            }
        },
        computed: {
            isEditing() {
                return this.vehicle !== null; // Se for null, está criando
            }
        },
        data() {
            return {
                vehicleToEdit: this.vehicle 
                ? { ...this.vehicle } // Copia para não alterar diretamente a prop
                : { plate: "", brand: "", model: "", year: 0, color: "", purpose: "", zero: false, confortLevel: 0, restingPlace: "" } // Novo veículo
            };
        },
        methods:{
            close(){
                this.$emit('onClose');
            }
        }
    }
</script>

<style>

    #vehicle-edit-registration-form{
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
        display: flex;
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

    #resting-place, #confort-level-p, #zero{
        color: #333;
        font-size: 14px;
        display: flex;
        align-items: center;
    }

    #confort-level-p{
        margin-right: 16px;
    }

    #zero input{
        margin-right: 8px;
        cursor: pointer;
        transform: scale(1.3);
    }
</style>