<template>
    <div id="Headerback" class="headerback">
        <img src="svg/atras.svg" alt="Back" class="atras">
        <img src="svg/logo.svg" alt="Cuasar" class="logo">
    </div>
</template>
<style scoped>
    .headerback
    {
         background: linear-gradient(90deg, #B283F5 0%, #865BFF 30.21%, #558DFE 65.62%, #505CE4 100%);
         display: flex;
         height: 50px;
         min-width: 50px;
         align-items: center;
         position: fixed;
         width: 100%;
    }
    .atras
    {
        height: 18px;
        margin-left: 20px;
    }
    .logo
    {
        height: 20px;
        margin-left: 10px;
    }
</style>
<script>
export default {
    name: 'HeaderBack'
}
</script>