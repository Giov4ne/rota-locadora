<template>
    <div class="dropdown custom-dropbox">
        <label>Marca</label>
        <button class="dropdown-button" @click="brandsToggleDropdown">
            <span v-if="!checkbox" class="dropdown-selected">
                <div v-if="localSelectedBrand !== ''">
                    <span class="dropdown-selected-text">
                        {{ localSelectedBrand }}
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
            checkbox: Boolean,
            modelValue: String
        },
        data(){
            return{
                brandOptionsIsOpen: false,
                selectedBrands: [],
                localSelectedBrand: this.modelValue || '',
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
                this.localSelectedBrand = '';
                this.$emit('update:modelValue', '');
            },

            selectBrandOption(brand){
                this.localSelectedBrand = brand.label; // Atualiza a variável com o valor do item clicado
                this.brandOptionsIsOpen = false;
                this.$emit('update:modelValue', brand.label); // Emite a alteração de volta para o componente pai
            }
        },
        watch: {
            selectedBrand(newVal) {
                this.localSelectedBrand = newVal;
            }
        },
        mounted() {
            // Se a marca estiver definida ao editar, ela será atribuída
            if (this.modelValue) {
                this.localSelectedBrand = this.modelValue;
            }
        }
    }
</script>

<style>

</style>