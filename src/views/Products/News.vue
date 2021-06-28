<template>
    <HeaderHome />
    <div class="news">
        <p class="directory">Home > News</p>
        <div class="news__products">
            <h1 style="color: #505CE4; margin-left: 4%">NEWS</h1>
            <div class="news__products--description">
                <P>New Music<br>
                Dale Play!<br>
                CUASAR MUSIC - POP</P>
            </div>
            <div class="news__products--images">
                <img src="@/assets/images/arianna.png" alt="arianna">
            </div>
            <div class="news__products--description">
                <P>New Music<br>
                Dale Play!<br>
                CUASAR MUSIC - POP</P>
            </div>
            <div class="news__products--images">
                <img src="@/assets/images/ed.png" alt="arianna">
            </div>
        </div>
        <router-link to="/browse-music/news/news-category"><ButtonAction style="margin-top: 15px; display: flex; justify-content: center">View All</ButtonAction></router-link>
        <div class="page">
            <div class="page__number1">
                <p>1</p>
            </div>
            <div class="page__number2">
                <p>2</p>
            </div>
            <div class="page__number3">
                <p>3</p>
            </div>
            <div class="page__next">
                <p>></p>
            </div>
        </div>
        <div class="contact-us">
            <h2>Did you find what<br>your were looking for?</h2>
            <ButtonAction>Contact us</ButtonAction>
        </div>
    </div>
    <Footer></Footer>
   
</template>
<style scoped>
    h1
    {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 15px;
    }
    h2 
    {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
    }
    .directory
    {
        margin: 7px 4% 0 4%;
    }
    .news__products
    {
        margin-top: 20px;
    }
    .news__products--description
    { 
        margin-left: 4%;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 10px;
        margin-top: 15px;
    }
    .news__products--images
    {
        margin-bottom: 25 px;
        width: 100%;
    }
    .news__products--images img
    {
        width: 100%;
    }
    .page
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
    }
    .page__number1
    {
        height: 40px;
        width: 40px;
        background: #DDDDDD;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;
    }
    .page__number2
    {
        height: 40px;
        width: 40px;
        background: white;
        border-radius: 50px;
        border: 1px solid #C4C4C4;
        color: #B283F5;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;
    }
    .page__number3
    {
        height: 40px;
        width: 40px;
        background: white;
        border-radius: 50px;
        border: 1px solid #C4C4C4;
        color: #B283F5;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;
    }
    .page__next
    {
        color: #B283F5;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 23px;
        margin-left: 10px;
        font-weight: bold;
    }
    .contact-us
    {
        display: flex;
        margin-top: 20px;
        background: #EFF0FA;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    .contact-us h2
    {
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        margin-right: 25px;
        color: #865BFF;
    }
</style>
<script>
import HeaderHome from '../../components/HeaderHome'
import ButtonAction from '../../components/ButtonAction.vue'
import Footer from '../../components/Footer.vue'

export default {
    name: 'BrowseMusic',
    components: {
        HeaderHome,
        ButtonAction,
        Footer,

    }
}
</script>