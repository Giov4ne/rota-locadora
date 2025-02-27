<template>
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
</template>

<script>
    export default{
        name: 'PurposesDropdown',
        data(){
            return{
                purposesIsOpen: false,
                selectedPurpose: '',
                purposesOfUse: [
                    { label: "Uso pessoal", value: "personal-use" },
                    { label: "Veículo para locação", value: "vehicle-for-rent" },
                    { label: "Uso da empresa", value: "company-use" }
                ]
            }
        },
        methods:{    
            purposesToggleDropdown(){
                this.purposesIsOpen = !this.purposesIsOpen;
            },

            selectPurposeOption(purpose){
                this.selectedPurpose = purpose.label; // Atualiza a variável com o valor do item clicado
                this.purposesIsOpen = false;
            },

            clearPurposeSelection(){
                this.selectedPurpose = '';
            }
        }
    }
</script>

<style>

</style>