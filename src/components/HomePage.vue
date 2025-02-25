<template>
    <MyHeader></MyHeader>
    <div class="container">
        <section id="register-and-filters">
            <button id="register-vehicle-btn">Cadastrar Veículo</button>
            <div id="filters">
                <div class="custom-field">
                    <label for="mark">Marca</label>
                    <input type="text" class="inputs" name="mark" placeholder="Selecione a marca do veículo">
                </div>
                <div class="custom-field">
                    <label for="use-purpose">Propósito de uso</label>
                    <input type="text" class="inputs" name="use-purpose" placeholder="Selecione a marca do veículo">
                </div>
                <div class="custom-field">
                    <label for="plate">Placa</label>
                    <input type="text" class="inputs" name="plate" placeholder="Digite a placa ou a cor do veículo">
                </div>
                <div id="search-erase">
                    <button id="search-btn">
                        <span class="fa fa-search"></span>
                    </button>
                    <button id="erase-btn">
                        <span class="fa fa-eraser"></span>
                    </button>
                </div>
                <span id="filter-btn" class="fa fa-filter"></span>
            </div>
        </section>
        <main>
            <table>
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
                <tr>
                    <td>ABC-1234</td>
                    <td>BMW Série 3 Sport</td>
                    <td>2021</td>
                    <td>Preta</td>
                    <td>Uso pessoal</td>
                    <td>Sim</td>
                    <td>5 <span class="fa fa-star"></span></td>
                    <td>-26.278385, -48.865418</td>
                    <td><span class="ellipsis">...</span></td>
                </tr>
                <tr>
                    <td>ABC-1234</td>
                    <td>BMW Série 3 Sport</td>
                    <td>2021</td>
                    <td>Preta</td>
                    <td>Uso pessoal</td>
                    <td>Sim</td>
                    <td>5 <span class="fa fa-star"></span></td>
                    <td>-26.278385, -48.865418</td>
                    <td><span class="ellipsis">...</span></td>
                </tr>
                <tr>
                    <td>ABC-1234</td>
                    <td>BMW Série 3 Sport</td>
                    <td>2021</td>
                    <td>Preta</td>
                    <td>Uso pessoal</td>
                    <td>Sim</td>
                    <td>5 <span class="fa fa-star"></span></td>
                    <td>-26.278385, -48.865418</td>
                    <td><span class="ellipsis">...</span></td>
                </tr>
                <tr>
                    <td>ABC-1234</td>
                    <td>BMW Série 3 Sport</td>
                    <td>2021</td>
                    <td>Preta</td>
                    <td>Uso pessoal</td>
                    <td>Sim</td>
                    <td>5 <span class="fa fa-star"></span></td>
                    <td>-26.278385, -48.865418</td>
                    <td><span class="ellipsis">...</span></td>
                </tr>
                <tr>
                    <td>ABC-1234</td>
                    <td>BMW Série 3 Sport</td>
                    <td>2021</td>
                    <td>Preta</td>
                    <td>Uso pessoal</td>
                    <td>Sim</td>
                    <td>5 <span class="fa fa-star"></span></td>
                    <td>-26.278385, -48.865418</td>
                    <td><span class="ellipsis">...</span></td>
                </tr>
                <tr>
                    <td>ABC-1234</td>
                    <td>BMW Série 3 Sport</td>
                    <td>2021</td>
                    <td>Preta</td>
                    <td>Uso pessoal</td>
                    <td>Sim</td>
                    <td>5 <span class="fa fa-star"></span></td>
                    <td>-26.278385, -48.865418</td>
                    <td><span class="ellipsis">...</span></td>
                </tr>
                <tr>
                    <td>ABC-1234</td>
                    <td>BMW Série 3 Sport</td>
                    <td>2021</td>
                    <td>Preta</td>
                    <td>Uso pessoal</td>
                    <td>Sim</td>
                    <td>5 <span class="fa fa-star"></span></td>
                    <td>-26.278385, -48.865418</td>
                    <td><span class="ellipsis">...</span></td>
                </tr>
                <tr>
                    <td>ABC-1234</td>
                    <td>BMW Série 3 Sport</td>
                    <td>2021</td>
                    <td>Preta</td>
                    <td>Uso pessoal</td>
                    <td>Sim</td>
                    <td>5 <span class="fa fa-star"></span></td>
                    <td>-26.278385, -48.865418</td>
                    <td><span class="ellipsis">...</span></td>
                </tr>
                <tr>
                    <td>ABC-1234</td>
                    <td>BMW Série 3 Sport</td>
                    <td>2021</td>
                    <td>Preta</td>
                    <td>Uso pessoal</td>
                    <td>Sim</td>
                    <td>5 <span class="fa fa-star"></span></td>
                    <td>-26.278385, -48.865418</td>
                    <td><span class="ellipsis">...</span></td>
                </tr>
            </table>
        </main>
    </div>
</template>

<script>
import MyHeader from './MyHeader.vue';

    export default{
        name: 'HomePage',
        components: {
            MyHeader
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
</style>