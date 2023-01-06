<template>

  <router-view>

  </router-view>
  
</template>

<script>



export default {
  name: 'App'
}
</script>

<style>
   @import "bootstrap/dist/css/bootstrap.css";

  :root{
    --main-color: #223AAD;
    --color-dark: #34425A;
    --text-grey: #B0B0B0;
    --rose-pastel: #FEE4E3;
    --mauve-clair: #DAD8DC;
  }

  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
  }
</style>
