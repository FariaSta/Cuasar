<template>
    <div class="songs">
        <p class="directory">Home > Browse music > Albums > Artists > Ed Sheeran</p>
        <div class="portada">
            <router-link to="/browse-music/artists/ed-sheran/bio"><img src="@/assets/images/ed3.png" alt="portada"></router-link>
        </div>
        <div class="songs__song">
            <div class="songs__song--cover">
                <img src="@/assets/images/collaborationsed.png" alt="cover">
            </div>
            <div class="info">
                <div class="songs__song--inf__description">
                    <h2>Pop</h2>
                    <p>No.6 Collaborations Project</p>
                    <span>Ed Sheeran</span>
                </div>
                <div class="songs__song--button">
                    <button class="songs__song--button__price">
                        <img src="@/assets/svg/shoopingcar.svg" alt="car">
                        <span>$10.39</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="songs__song">
            <div class="songs__song--cover">
                <img src="@/assets/images/divide.png" alt="cover">
            </div>
            <div class="info">
                <div class="songs__song--inf__description">
                    <h2>Pop</h2>
                    <p>Divide</p>
                    <span>Ed Sheeran</span>
                </div>
                <div class="songs__song--button">
                    <button class="songs__song--button__price">
                        <img src="@/assets/svg/shoopingcar.svg" alt="car">
                        <span>$15.20</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="songs__song">
            <div class="songs__song--cover">
                <img src="@/assets/images/x.png" alt="cover">
            </div>
            <div class="info">
                <div class="songs__song--inf__description">
                    <h2>Pop</h2>
                    <p>x</p>
                    <span>Ed Sheeran</span>
                </div>
                <div class="songs__song--button">
                    <button class="songs__song--button__price">
                        <img src="@/assets/svg/shoopingcar.svg" alt="car">
                        <span>$8.95</span>
                    </button>
                </div>
            </div>
        </div>
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
    </div>
    <div class="contact-us">
        <h2>Did you find what<br>your were looking for?</h2>
        <ButtonAction>Contact us</ButtonAction>
    </div>
    <Footer></Footer>
</template>
<style scoped>
    .directory
    {
        margin: 7px 0 0 4%;
    }
    .portada
    {
        width: 100%;

    }
    .portada img 
    {
        width: 100%;
    }
    .songs
    {
        padding-top: 100px;
    }
    .songs__song
    {
        margin-left: 4%; 
        display: flex;
        flex-direction: row;
        margin-top: 10px;
    }
    .songs__song--inf__description
    {
        margin-top: 15px;
        margin-bottom: 10px;
    }
    .songs__song--inf__description h2
    {
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: left;
        color: #865BFF;
    }
    .songs__song--inf__description p
    {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        color: #333333;
    }
    .songs__song--inf__description span 
    {
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: left;
        color: #555555;
    }
    .info 
    {
        margin-left: 10px;
        width: 200px;
        
    }
    .songs__song--button
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .songs__song--button__price
    {
        display: flex;
        border: 1px solid #865BFF;
        width: 98px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
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