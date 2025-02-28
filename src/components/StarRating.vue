<template>
    <div class="star-rating">
      <span 
        v-for="star in 5" 
        :key="star" 
        @click="rate(star)" 
        @mouseover="hover(star)" 
        @mouseleave="hover(0)"
        :class="{ filled: star <= (hoveredStar || selectedRating) }"
      >
        ★
      </span>
    </div>
</template>
  
<script>
  export default {
    props: {
      modelValue: Number // Permite v-model no componente pai
    },
    data() {
      return {
        selectedRating: this.modelValue || 0, // Nota selecionada
        hoveredStar: 0 // Efeito de hover
      };
    },
    methods: {
      rate(star) {
        this.selectedRating = star;
        this.$emit("update:modelValue", star); // Atualiza o valor no pai (v-model)
      },
      hover(star) {
        this.hoveredStar = star;
      }
    },
    watch: {
      modelValue(newVal) {
        this.selectedRating = newVal;
      }
    }
  };
</script>
  
<style>
    .star-rating {
        font-size: 38px;
        cursor: pointer;
        user-select: none;
    }

    #confort-level .star-rating{
        margin-bottom: 8px;
    }
    
    .star-rating span {
        color: #d3d3d3;
        transition: color 0.2s;
    }
    
    .star-rating span.filled {
        color: #007DF0;
    }
</style>