<template>
    <div id="Footer" class="conatainer">
        <div class="nav-footer">                 
            <div class="nav-footer__colum1">
                <p>Cuasar</p>
                <p>License music</p>
                <p>Validate</p>
                <p>Support</p>
                <p>Help center</p>
            </div>
            <div class="nav-footer__colum2">
                <p>Your Account</p>
                <p>Your orders</p>
                <p>Already a customer? <br><b><a href="/">Sign in</a></b></p>
                <p><b><a href="/">Create an account</a></b></p>
            </div>
        </div>
        <div class="social">
            <img src="svg/instagram.svg" alt="instagram">
            <img src="svg/youtube.svg" alt="youtube">
            <img src="svg/twitter.svg" alt="twitter">
            <img src="svg/facebook.svg" alt="facebook">
            <img src="svg/linkedin.svg" alt="linkedin">
        </div>
        <div class="terms">
            <p>© Cuasar 2021</p>
            <p>Terms & conditions</p>
            <p>Privacy</p>
        </div>
    </div>
</template>
<style scoped>
.nav-footer
{
    height: 230px;
    width: 100%;
    background:#B283F5;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    padding: 30px;
}
.nav-footer p
{
    margin: 0;
    font-size: 13px;
    color: white;
    margin-bottom: 11px;
    margin-top: 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}
.nav-footer a
{
    text-decoration: none;
    color: white;
}
.social
{
    height: 68px;
    width: 100%;
    background: #865BFF;
    display: flex;
    align-items: center;
    justify-content: center;
}
.social img
{
    margin-left: 15px;
}
.terms
{
    height: 68px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #505CE4;


}
.terms p
{
    font-size: 13px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}
</style>
<script>
export default {
    name: 'Footer'
}
</script>