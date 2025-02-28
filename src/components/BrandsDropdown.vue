<template>
    <div class="dropdown custom-dropbox">
        <label>Marca</label>
        <button class="dropdown-button" @click="brandsToggleDropdown">
            <span v-if="!checkbox" class="dropdown-selected">
                <div v-if="selectedBrand !== ''">
                    <span class="dropdown-selected-text">
                        {{ selectedBrand }}
                    </span>
                    <span class="close-selected" @click.stop="clearBrandsSelection">x</span>
                </div>
                <span v-else class="dropdown-text">
                    Selecione a marca do veículo
                </span>
            </span>
            <span v-else-if="selectedBrands.length === 0" class="dropdown-text">
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
                    <div v-if="checkbox">
                        <label v-for="brand in brandOptions" :key="brand.value">
                            <input 
                                type="checkbox"
                                :value="brand.label"
                                v-model="selectedBrands"
                            />
                            {{ brand.label }}
                        </label>
                    </div>
                    <ul v-else class="dropdown-menu-content-brand">
                        <li v-for="brand in brandOptions" :key="brand.value" @click="selectBrandOption(brand)">
                            {{ brand.label }}    
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default{
        name: 'BrandsDropdown',
        props:{
            checkbox: Boolean
        },
        data(){
            return{
                brandOptionsIsOpen: false,
                selectedBrands: [],
                selectedBrand: '',
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
                ]
            }
        },
        methods:{
            brandsToggleDropdown(){
                this.brandOptionsIsOpen = !this.brandOptionsIsOpen;
            },
                        
            clearBrandsSelection(){
                this.selectedBrands = [];
                this.selectedBrand = '';
            },

            selectBrandOption(brand){
                this.selectedBrand = brand.label; // Atualiza a variável com o valor do item clicado
                this.brandOptionsIsOpen = false;
            }
        }
    }
</script>

<style>

</style>