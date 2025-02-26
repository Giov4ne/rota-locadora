<template>
    <MyHeader></MyHeader>
    <div class="container">
        <section id="filters-section">
            <div class="custom-field">
                <label for="plate">Placa</label>
                <input type="text" class="inputs" name="plate" placeholder="Digite a placa ou a cor do veículo" v-model="plateInput">
            </div>
            <div id="search-erase">
                <button class="search-btn">
                    <span class="fa fa-search"></span>
                </button>
                <button class="erase-btn">
                    <span class="fa fa-eraser" @click="erase"></span>
                </button>
            </div>
            <span class="fa fa-filter filter-btn"></span>
        </section>
        <main>
            <ul id="activity-list">
                <li><span class="fa fa-plus"></span>Veículo <strong>ABC-1234</strong> CADASTRADO em 10/01/2024 às 17:57:36</li>
                <li><span class="fa fa-pencil"></span>Veículo <strong>ABC-1234</strong> EDITADO em 10/01/2024 às 17:57:36</li>
                <li><span class="fa fa-trash"></span>Veículo <strong>ABC-1234</strong> DELETADO em 10/01/2024 às 17:57:36</li>
                <li><span class="fa fa-plus"></span>Veículo <strong>ABC-1234</strong> CADASTRADO em 10/01/2024 às 17:57:36</li>
                <li><span class="fa fa-pencil"></span>Veículo <strong>ABC-1234</strong> EDITADO em 10/01/2024 às 17:57:36</li>
                <li><span class="fa fa-trash"></span>Veículo <strong>ABC-1234</strong> DELETADO em 10/01/2024 às 17:57:36</li>
                <li><span class="fa fa-plus"></span>Veículo <strong>ABC-1234</strong> CADASTRADO em 10/01/2024 às 17:57:36</li>
                <li><span class="fa fa-pencil"></span>Veículo <strong>ABC-1234</strong> EDITADO em 10/01/2024 às 17:57:36</li>
                <li><span class="fa fa-trash"></span>Veículo <strong>ABC-1234</strong> DELETADO em 10/01/2024 às 17:57:36</li>
            </ul>
        </main>
        <MyPagination></MyPagination>
    </div>
</template>

<script>
import MyHeader from './MyHeader.vue';
import MyPagination from './MyPagination.vue';

    export default{
        name: 'ActivityHistory',
        components:{
            MyHeader,
            MyPagination
        }
    }
</script>

<style>

    #filters-section > *{
        margin: auto 8px auto 8px;
    }
    #filters-section{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    #filters-section .custom-field{
        width: 255px;
    }

    #activity-list{
        width: 100%;
        margin: 28px 0;
        box-shadow: 0 2px 8px #00000040;
        cursor: default;
        border-radius: 5px;
    }

    #activity-list li{
        padding: 12px;
        color: #333;
        font-size: 14px;
    }

    #activity-list li:not(:first-child){
        border-top: 1px solid #E1E1E1;
    }

    #activity-list li .fa{
        margin-right: 10px;
        font-size: 19px;
    }

    #activity-list li .fa-plus{
        color: #4CAF50;
    }

    #activity-list li .fa-pencil{
        color: #007DF0;
    }

    #activity-list li .fa-trash{
        color: #E8363B;
    }
</style>