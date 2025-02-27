<template>
    <div class="dropdown custom-dropbox">
        <label>Marca</label>
        <button class="dropdown-button" @click="brandsToggleDropdown">
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
</template>

<script>
    export default{
        name: 'BrandsDropdown',
        data(){
            return{
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
                ]
            }
        },
        methods:{
            brandsToggleDropdown(){
                this.brandOptionsIsOpen = !this.brandOptionsIsOpen;
            },
                        
            clearBrandsSelection(){
                this.selectedBrands = [];
            }
        }
    }
</script>

<style>

</style>