<template>
    <MyHeader></MyHeader>
    <div class="container">
        <section id="register-and-filters">
            <button id="register-vehicle-btn">Cadastrar Veículo</button>
            <div id="filters">
                <!-- <div class="custom-field">
                    <label for="mark">Marca</label>
                    <input type="text" class="inputs" name="mark" placeholder="Selecione a marca do veículo">
                </div> -->
                <div class="dropdown custom-dropbox">
                    <label>Marca</label>
                    <button @click="brandsToggleDropdown" class="dropdown-button">
                        <span v-if="selectedBrands.length === 0" class="dropdown-text">
                            Selecione a marca do veículo
                        </span>
                        <span v-else class="dropdown-selected">
                            <span class="dropdown-selected-container">
                                <span class="dropdown-selected-text">{{ selectedBrands[0] }}</span> 
                                <span class="close-selected" @click.stop="clearBrandsSelection">x</span>
                            </span> 
                            <span v-if="selectedBrands.length > 1" class="dropdown-text">
                                (+{{ selectedBrands.length - 1 }})
                            </span>
                        </span>
                        <span :class="{ 'rotate-up': brandOptionsIsOpen }" class="arrow"> <!-- Seta -->
                            &#9660;
                        </span>
                    </button>
                    <transition name="fade">
                        <div v-if="brandOptionsIsOpen" class="dropdown-menu">
                            <label class="dropdown-menu-title">Marca</label>
                            <hr>
                            <div class="dropdown-menu-content">
                                <label v-for="option in brandOptions" :key="option.value">
                                    <input
                                    type="checkbox"
                                    :value="option.label"
                                    v-model="selectedBrands"
                                    />
                                    {{ option.label }}
                                </label>
                            </div>
                        </div>
                    </transition>
                </div>
                <!-- <div class="custom-field">
                    <label for="use-purpose">Propósito de uso</label>
                    <input type="text" class="inputs" name="use-purpose" placeholder="Selecione o propósito de uso">
                </div> -->
                <div class="dropdown custom-dropbox">
                    <label>Propósito de uso</label>
                    <button @click="purposesToggleDropdown" class="dropdown-button">
                        <span v-if="selectedPurpose === ''" class="dropdown-text">
                            Selecione o propósito de uso
                        </span>
                        <span v-else class="dropdown-selected">
                            <span class="dropdown-selected-text">
                                {{ selectedPurpose }}
                            </span>
                            <span class="close-selected" @click.stop="clearPurposeSelection">x</span>
                        </span>
                        <!-- <span v-else class="dropdown-selected">
                            <span class="dropdown-selected-container">
                                <span class="dropdown-selected-text">{{ selectedBrands[0] }}</span> 
                                <span class="close-selected" @click.stop="clearSelection">x</span>
                            </span> 
                            <span v-if="selectedBrands.length > 1" class="dropdown-text">
                                (+{{ selectedBrands.length - 1 }})
                            </span>
                        </span> -->
                        <span :class="{ 'rotate-up': purposesIsOpen }" class="arrow"> <!-- Seta -->
                            &#9660;
                        </span>
                    </button>
                    <transition name="fade">
                        <div v-if="purposesIsOpen" class="dropdown-menu">
                            <label class="dropdown-menu-title">Propósito de uso</label>
                            <hr>
                            <div class="dropdown-menu-content-purpose">
                                <ul>
                                    <li v-for="purpose in purposesOfUse" :key="purpose.value" @click="selectPurposeOption(purpose)">
                                        {{ purpose.label }}    
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="custom-field">
                    <label for="plate">Placa</label>
                    <input type="text" class="inputs" name="plate" placeholder="Digite a placa ou a cor do veículo" v-model="plateInput">
                </div>
                <div id="search-erase">
                    <button id="search-btn">
                        <span class="fa fa-search"></span>
                    </button>
                    <button id="erase-btn">
                        <span class="fa fa-eraser" @click="erase"></span>
                    </button>
                </div>
                <span id="filter-btn" class="fa fa-filter"></span>
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
                                <div v-if="optionsIsOpen === index" class="options-dropdown">
                                    <ul>
                                        <li @click="vehicleDetails(vehicle)">Detalhes</li>
                                        <li @click="editVehicle(vehicle)">Editar</li>
                                        <li @click="deleteVehicle(vehicle)">Deletar</li>
                                        <!-- 
                                        <li @click="detalhes(item)">Detalhes</li>
                                        <li @click="editar(item)">Editar</li>
                                        <li @click="deletar(item)">Deletar</li> 
                                        -->
                                    </ul>
                                </div>
                            </div>
                        </td>
                        <!-- plate: "ABC-1234", brandModel: "BMW Série 3 Sport", year: 2021, color: "Preta", purpose: "Uso pessoal", zero: true, confortLevel: 5, restingPlace: "-26.278385, -48.865418" -->
                    </tr>
                    
                        <!-- <td>
                            <div class="options-dropdown-container">
                                <span class="ellipsis" @click="optionsToggleDropdown">...</span>
                                <div v-if="optionsIsOpen" class="options-dropdown">
                                    <ul>
                                        <li>Detalhes</li>
                                        <li>Editar</li>
                                        <li>Deletar</li>
                                    </ul>
                                </div>
                            </div>
                        </td> -->
                </tbody>
            </table>
        </main>
        <section class="pagination">
            <button class="pagination-btns pagination-arrows arrow-blocked">&lt;</button>
            <button class="pagination-btns selected-pagination">1</button>
            <button class="pagination-btns">2</button>
            <button class="pagination-btns">3</button>
            <button class="pagination-btns pagination-arrows">></button>
        </section>
    </div>
</template>

<script>
import MyHeader from './MyHeader.vue';

    export default{
        name: 'HomePage',
        components: {
            MyHeader
        },
        data() {
            return {
                brandOptionsIsOpen: false,
                selectedBrands: [],
                brandOptions: [
                    { label: "Audi", value: "audi" },
                    { label: "BMW", value: "bmw" },
                    { label: "Chevrolet", value: "chevrolet" },
                    { label: "Fiat", value: "fiat" },
                    { label: "Ford", value: "ford" },
                    { label: "Jeep", value: "jeep" },
                    { label: "Mitsubishi", value: "mitsubishi" },
                    { label: "Mercedes-Benz", value:  "mercedes-benz"},
                    { label: "Peugeot", value: "peugeot" },
                    { label: "Volkswagen", value: "volkswagen" }
                ],
                purposesIsOpen: false,
                selectedPurpose: '',
                purposesOfUse: [
                    { label: "Uso pessoal", value: "personal-use" },
                    { label: "Veículo para locação", value: "vehicle-for-rent" },
                    { label: "Uso da empresa", value: "company-use" }
                ],
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
                optionsIsOpen: null
            };
        },
        methods: {
            brandsToggleDropdown(){
                if(this.purposesIsOpen)
                    this.purposesToggleDropdown();
                this.brandOptionsIsOpen = !this.brandOptionsIsOpen;
            },

            purposesToggleDropdown(){
                if(this.brandOptionsIsOpen)
                    this.brandsToggleDropdown();
                this.purposesIsOpen = !this.purposesIsOpen;
            },

            selectPurposeOption(purpose){
                this.selectedPurpose = purpose.label; // Atualiza a variável com o valor do item clicado
                this.purposesIsOpen = false;
            },
            
            clearBrandsSelection(){
                this.selectedBrands = [];
            },

            clearPurposeSelection(){
                this.selectedPurpose = '';
            },

            clearPlateInput(){
                this.plateInput = '';
            },

            erase(){
                if(this.brandOptionsIsOpen)
                    this.brandsToggleDropdown();
                if(this.purposesIsOpen)
                    this.purposesToggleDropdown();
                
                this.clearBrandsSelection();
                this.clearPurposeSelection();
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
            }
        }
    }
</script>

<style>
    .container{
        margin-top: 60px;
        padding: 32px 27px;
    }

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
    }

    #filters > *{
        margin: auto auto auto 16px;
    }

    #filters .custom-field{
        width: 255px;
    }

    #search-btn, #erase-btn{
        font-size: 20px;
        padding: 5px 8px;
        border: 1px solid #d8d8d8;
        background-color: #fff;
        cursor: pointer;

        &:hover{
            background-color: #F0F0F0;
        }
    }

    #search-btn{
        border-radius: 5px 0 0 5px;
        color: #007DF0;
    }

    #erase-btn{
        border-radius: 0 5px 5px 0;
        border-left: transparent;
        color: #A9A7A9;
    }

    #filter-btn{
        font-size: 25px;
        color: #007DF0;
        cursor: pointer;
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
        margin: 20px;
        border: 1px solid #d8d8d8;
        width: 220px;
        margin-bottom: 20px;
        border-radius: 5px;
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

    .dropdown-menu .dropdown-menu-content{
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

    .dropdown-menu .dropdown-menu-content-purpose ul li, .options-dropdown ul li{
        list-style: none;
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

                        /* <div class="exit-dropdown-container">
                                <img src="../assets/user.png" alt="user image" id="user-img" @click="exitToggleDropdown">
                                <div v-if="exitIsOpen" class="exit-dropdown">
                                    <span class="fa fa-right-from-bracket"></span>
                                    <span>Sair</span>
                                </div>
                            </div>
                            
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
                            } */
    
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: translateY(-10px);
    }

    .pagination{
        display: flex;
        justify-content: center;
    }

    .pagination-btns{
        background-color: #fff;
        border: none;
        border-radius: 3px;
        box-shadow: 0 4px 4px #00000040;
        padding: 7px 12px;
        font-size: 14px;
        margin: 0 5px;
        cursor: pointer;
        color: #333;
    }

    .pagination-arrows{
        color: #A9A7A9;
        font-size: 16px;
    }

    .arrow-blocked{
        color: #a9a7a983;
    }

    .selected-pagination{
        background-color: #007DF0;
        color: #fff;
    }
</style>