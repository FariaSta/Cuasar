<template>
    <div id="footer" class="footer">
        <p>© Cuasar 2021</p>
        <p>Terms & conditions</p>
        <p>Privacy</p>
    </div>
</template>
<style scoped>
.footer
{
    height: 68px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #505CE4;
}
.footer p
{
    font-size: 13px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}
</style>
<script>
export default {
    name: 'GeneralFooter'
}
</script>