<template>
    <MyHeader></MyHeader>
    <div class="container">
        <section id="register-and-filters">
            <button id="register-vehicle-btn" @click="openVehicleRegistration">Cadastrar Veículo</button>
            <div id="filters">
                <div class="dropdown-boxes">
                    <BrandsDropdown ref="brandsDropdownRef" :checkbox=true></BrandsDropdown>
                </div>
                <div class="dropdown-boxes">
                    <PurposesDropdown ref="purposesDropdownRef"></PurposesDropdown>
                </div>
                <div class="custom-field">
                    <label for="plate">Placa</label>
                    <input type="text" class="inputs" name="plate" placeholder="Digite a placa ou a cor do veículo" v-model="plateInput">
                </div>
                <div id="search-erase">
                    <button class="search-btn">
                        <span class="fa fa-search"></span>
                    </button>
                    <button class="erase-btn" @click="erase">
                        <span class="fa fa-eraser"></span>
                    </button>
                </div>
                <span class="fa fa-filter filter-btn"></span>
            </div>
        </section>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Placa</th>
                        <th>Marca/Modelo</th>
                        <th>Ano</th>
                        <th>Cor</th>
                        <th>Propósito de uso</th>
                        <th>Zero-quilômetro?</th>
                        <th>Nível de conforto</th>
                        <th>Local de repouso (lat, long)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(vehicle, index) in vehicles" :key="index">
                        <td>{{ vehicle.plate }}</td>
                        <td>{{ vehicle.brandModel }}</td>
                        <td>{{ vehicle.year }}</td>
                        <td>{{ vehicle.color }}</td>
                        <td>{{ vehicle.purpose }}</td>
                        <td>{{ vehicle.zero ? 'Sim' : 'Não' }}</td>
                        <td>{{ vehicle.confortLevel }} <span class="fa fa-star"></span></td>
                        <td>{{ vehicle.restingPlace }}</td>
                        <td>
                            <div class="options-dropdown-container" ref="dropdowns">
                                <span class="ellipsis" @click="optionsToggleDropdown(index)">...</span>
                                <transition name="fade">
                                    <div v-if="optionsIsOpen === index" class="options-dropdown">
                                        <ul>
                                            <li @click="vehicleDetails(vehicle)">Detalhes</li>
                                            <li @click="editVehicle(vehicle)">Editar</li>
                                            <li @click="deleteVehicle(vehicle)">Deletar</li>
                                        </ul>
                                    </div>
                                </transition>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
        <VehicleRegistration v-if="vehicleRegistrationIsOpen" @onClose="closeVehicleRegistration"></VehicleRegistration>
        <MyPagination></MyPagination>
    </div>
</template>

<script>
import MyHeader from './MyHeader.vue';
import BrandsDropdown from './BrandsDropdown.vue';
import PurposesDropdown from './PurposesDropdown.vue';
import VehicleRegistration from './VehicleRegistration.vue';
import MyPagination from './MyPagination.vue';

    export default{
        name: 'HomePage',
        components: {
            MyHeader,
            BrandsDropdown,
            PurposesDropdown,
            VehicleRegistration,
            MyPagination
        },
        data() {
            return {
                plateInput: '',
                vehicles: [
                    { plate: "ABC-1234", brandModel: "BMW Série 3 Sport", year: 2021, color: "Preta", purpose: "Uso pessoal", zero: true, confortLevel: 5, restingPlace: "-26.278385, -48.865418"},

                    { plate: "ABC-1234", brandModel: "Chevrolet Onix", year: 2021, color: "Prata", purpose: "Veículo para locação", zero: true, confortLevel: 4, restingPlace: "-26.278385, -48.865418"},

                    { plate: "ABC-1234", brandModel: "Peugeot 208", year: 2024, color: "Preta", purpose: "Veículo para locação", zero: false, confortLevel: 3, restingPlace: "-26.278385, -48.865418"},

                    { plate: "ABC-1234", brandModel: "Audi A3", year: 2024, color: "Vermelho", purpose: "Veículo para locação", zero: false, confortLevel: 5, restingPlace: "-26.278385, -48.865418"},

                    { plate: "ABC-1234", brandModel: "Jeep Renegade", year: 2023, color: "Vermelho", purpose: "Veículo para locação", zero: true, confortLevel: 5, restingPlace: "-26.278385, -48.865418"},

                    { plate: "ABC-1234", brandModel: "Ford Fiesta", year: 2019, color: "Prata", purpose: "Uso pessoal", zero: false, confortLevel: 3, restingPlace: "-26.278385, -48.865418"},

                    { plate: "ABC-1234", brandModel: "Fiat Pulse", year: 2020, color: "Preta", purpose: "Veículo para locação", zero: false, confortLevel: 5, restingPlace: "-26.278385, -48.865418"},
                    
                    { plate: "ABC-1234", brandModel: "Ford KA", year: 2019, color: "Preta", purpose: "Veículo para locação", zero: false, confortLevel: 2, restingPlace: "-26.278385, -48.865418"}
                ],
                optionsIsOpen: null,
                vehicleRegistrationIsOpen: false
            };
        },
        methods: {
            clearPlateInput(){
                this.plateInput = '';
            },

            erase(){
                /* if(this.brandOptionsIsOpen)
                    this.brandsToggleDropdown();
                if(this.purposesIsOpen)
                    this.purposesToggleDropdown(); */
                
                this.$refs.brandsDropdownRef.clearBrandsSelection();
                this.$refs.purposesDropdownRef.clearPurposeSelection();
                this.clearPlateInput();
            },

            optionsToggleDropdown(index){
                if (this.optionsIsOpen === index) {
                    this.optionsIsOpen = null;
                    document.removeEventListener("click", this.closeDropdownOutside);
                } else {
                    this.optionsIsOpen = index;
                    document.addEventListener("click", this.closeDropdownOutside);
                }
            },

            closeDropdownOutside(event){
                // Verifica se o clique foi fora de todos os dropdowns
                if (!this.$refs.dropdowns.some((dropdown) => dropdown.contains(event.target))) {
                    this.optionsIsOpen = null;
                    document.removeEventListener("click", this.closeDropdownOutside);
                }
            },

            vehicleDetails(vehicle) {
                console.log("Detalhes de:", vehicle);
            },

            editVehicle(vehicle) {
                console.log("Editando:", vehicle);
            },

            deleteVehicle(vehicle) {
                console.log("Deletando:", vehicle);
            },

            openVehicleRegistration(){
                this.vehicleRegistrationIsOpen = true;
            },

            closeVehicleRegistration(){
                this.vehicleRegistrationIsOpen = false;
            }
        }
    }
</script>

<style>

    #register-and-filters{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #register-vehicle-btn{
        background-color: #007DF0;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            background-color: #518bff;
        }
    }

    #filters{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    #filters > *, .dropdown-boxes > *{
        margin: auto auto auto 16px;
    }

    .dropdown-boxes > *{
        margin-left: 0;
    }

    #filters .custom-field{
        width: 255px;
    }

    table{
        border-collapse: collapse;
        width: 100%;
        margin: 28px 0;
        box-shadow: 0 2px 8px #00000040;
        cursor: default;
    }

    table tr:not(:first-child){
        border-top: 1px solid #E1E1E1;
    }

    table tr th{
        border-bottom: 1px solid #E1E1E1;
        color: #007DF0;
        font-weight: 700;
        font-size: 14px;
        text-align: left;
        padding: 12px;
    }

    table tr td{
        font-size: 12px;
        color: #333;
        padding: 6px 12px;
    }

    table tr td .fa-star{
        color: #007DF0;
        font-size: 14px;
    }

    table tr td .ellipsis{
        color: #464646;
        font-weight: 700;
        font-size: 24px;
        cursor: pointer;
    }



    /* DROPDOWN MENUS */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .custom-dropbox{
        border: 1px solid #d8d8d8;
        border-radius: 5px;
    }

    .dropdown-boxes .custom-dropbox{
        width: 220px;
    }

    .custom-dropbox > label{
        position: absolute;
        top: -8px;
        left: 8px;
        background-color: #fff;
        padding: 0 5px;
        font-size: 12px;
        color: #333;
    }
    
    .dropdown-button {
        padding: 11px;
        border: none;
        border-radius: 5px;
        background: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 100%; /* Ocupa toda a largura do dropdown */
        
        &:hover{
            background-color: #f0f0f086;
        }
    }

    .dropdown-text{
        color: #A9A7A9;
    }
    
    .arrow {
        margin-left: auto; /* Move a flecha para a direita */
        transition: transform 0.3s ease;
        color: #333;
    }
    
    .rotate-up {
        transform: rotate(180deg);
    }

    .dropdown-selected .dropdown-selected-container{
        background-color: #DFDFDF;
        padding: 3px 5px;
        border-radius: 100px;
        margin-right: 2px;
    }

    .dropdown-selected .dropdown-selected-text{
        color: #333333;
    }

    .dropdown-selected .close-selected{
        color: #DFDFDF;
        background-color: #616161;
        padding: 1px 5px;
        border-radius: 100px;
        margin-left: 4px;
        line-height: 100%; /* Faz o X ficar no centro verticalmente */
        display: inline-block;
    }
    
    .dropdown-menu {
        position: absolute;
        background: white;
        border: none;
        border-radius: 5px;
        box-shadow: 0 2px 4px #00000040;
        display: flex;
        flex-direction: column;
        z-index: 10;
        margin-top: 5px;
        width: 100%; /* Mantém a largura alinhada ao botão */
    }

    .dropdown-menu .dropdown-menu-title{
        margin: 18px 15px;
        font-size: 12px;
        color: #A9A7A9;
    }

    .dropdown-menu hr{
        border: none;
        height: 1px;
        background-color: #A9A7A9; /* Azul (pode trocar pela cor desejada) */
    }

    .dropdown-menu .dropdown-menu-content, .dropdown-menu .dropdown-menu-content-purpose{
        display: flex;
        flex-direction: column;
        font-size: 14px;
        max-height: 150px; /* Define uma altura máxima para ativar a rolagem */
        overflow-y: auto;
    }

    .dropdown-menu .dropdown-menu-content > div{
        padding: 10px 15px;
    }

    .dropdown-menu .dropdown-menu-content::-webkit-scrollbar {
        width: 6px; /* Define a largura da barra de rolagem */
    }

    .dropdown-menu .dropdown-menu-content::-webkit-scrollbar-track {
        background-color: #F0F0F0; /* Define a cor de fundo da trilha da rolagem */
    }

    .dropdown-menu .dropdown-menu-content::-webkit-scrollbar-thumb {
        background-color: #3366CC; /* Define a cor do tracinho da rolagem */
        border-radius: 5px; /* Arredonda as bordas do tracinho */
    }

    .dropdown-menu .dropdown-menu-content::-webkit-scrollbar-thumb:hover {
        background-color: #005bb5; /* Muda a cor do tracinho ao passar o mouse */
    }

    .dropdown-menu .dropdown-menu-content label{
        margin: 8px 0;
        display: flex;
        align-items: center;
    }

    .dropdown-menu .dropdown-menu-content label input{
        margin-right: 8px;
        cursor: pointer;
        transform: scale(1.3);
    }

    .dropdown-menu .dropdown-menu-content-purpose ul li, .options-dropdown ul li, .dropdown-menu-content-brand li{
        padding: 10px 15px;
        cursor: pointer;

        &:hover{
            background-color: #F0F0F0;
        }
    }

    .options-dropdown-container{
        position: relative;
        display: inline-block;
    }

    .options-dropdown{
        position: absolute;
        right: 5px;
        width: 100px;
        font-size: 14px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 4px #00000040;
        z-index: 10;
    }
    
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: translateY(-10px);
    }
</style>

<!-- <script setup>
import { ref } from 'vue'

const anos = Array.from({ length: 10 }, (_, i) => 2020 + i) // Gera anos de 2020 a 2029
const anoSelecionado = ref(2024)

const selecionarAno = (ano) => {
  anoSelecionado.value = ano
}
</script>

<template>
  <div class="seletor-ano">
    <div class="ano-selecionado">{{ anoSelecionado }}</div>
    <div class="lista-anos">
      <div v-for="ano in anos" :key="ano" 
        :class="['ano-item', { ativo: ano === anoSelecionado }]"
        @click="selecionarAno(ano)">
        {{ ano }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.seletor-ano {
  width: 120px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.ano-selecionado {
  background: blue;
  color: white;
  padding: 10px;
  font-weight: bold;
}

.lista-anos {
  max-height: 200px;
  overflow-y: auto;
  background: white;
}

.ano-item {
  padding: 10px;
  cursor: pointer;
}

.ano-item.ativo {
  color: blue;
  font-weight: bold;
}
</style> -->












<!-- SISTEMA DE AVALIAÇÃO COM ESTRELAS
 
COMPONENTE

<template>
  <div class="star-rating">
    <span 
      v-for="star in 5" 
      :key="star" 
      @click="rate(star)"
      @mouseover="hover(star)"
      @mouseleave="resetHover"
      class="star"
      :class="{ filled: star <= (hoveredStar || rating) }"
    >
      ★
    </span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Number, // Para v-model (opcional)
  },
  data() {
    return {
      rating: this.modelValue || 0,
      hoveredStar: 0
    };
  },
  methods: {
    rate(star) {
      this.rating = star;
      this.$emit('update:modelValue', star);
    },
    hover(star) {
      this.hoveredStar = star;
    },
    resetHover() {
      this.hoveredStar = 0;
    }
  }
};
</script>

<style scoped>
.star-rating {
  font-size: 2rem;
  cursor: pointer;
}
.star {
  color: gray;
  transition: color 0.2s;
}
.star.filled {
  color: gold;
}
</style>

COMPONENTE PAI

<template>
  <div>
    <h2>Avaliação do Veículo:</h2>
    <StarRating v-model="userRating" />
    <p>Sua nota: {{ userRating }} estrelas</p>
  </div>
</template>

<script>
import StarRating from "./StarRating.vue";

export default {
  components: { StarRating },
  data() {
    return {
      userRating: 0
    };
  }
};
</script>

-->