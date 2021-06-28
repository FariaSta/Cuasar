<template>
    <header-home />
    <div class="songdetail">
        <p class="directory">Home > Browse music > Albums > Ed Sheeran > Ed Sheeran</p>
        <div class="songs__song">
            <div class="songs__song--cover">
                <img src="@/assets/images/divide.png" alt="cover">
            </div>
            <div class="info">
                <div class="songs__song--inf__description">
                    <h2>Pop</h2>
                    <p>Shape of You</p>
                    <span>Ed Sheeran</span>
                </div>
                <div class="songs__song--button">
                    <button class="songs__song--button">
                        <img src="@/assets/svg/play-white.svg" alt="car">
                        <span>$15.20</span>
                    </button>
                </div>
            </div>
        </div>
        <p class="contenido">
            "Shape of You" is a song by English singer-songwriter Ed Sheeran. It was released as a digital download on 6 January 2017. <br><br>
            The dancehall-infused pop song was written by Ed Sheeran, Steve Mac and Johnny McDaid. Due to its interpolation of "No Scrubs" by TLC, Kandi Burruss, Tameka "Tiny" Cottle, and Kevin "She'kspere" Briggs are also credited as writers. The song was produced by Sheeran and Mac.<br><br>
            "Shape of You" peaked at number-one on the singles charts of 34 countries, including the US Billboard Hot 100 . The best performing song of 2017. <br><br>
        </p>
        <div class="button-action">
            <button-action> <img src="@/assets/svg/config-icon.svg" alt="">Configure</button-action>
            <button class="button-buy"><img src="@/assets/svg/car-mora.svg" alt="">Buy $0.40</button>
        </div>
    </div>
    <Footer />
    
</template>
<style scoped>
    .songdetail
    {
        padding-top: 100px;
    }
    .directory
    {
        margin: 7px 0 0 4%;
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
    .info 
    {
        margin-left: 10px;
        width: 200px;
        
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
    .songs__song--button
    {
        display: flex;
        background: #865BFF;
        color: white;
        width: 180px;
        height: 50px;
        border-radius: 10px;
        align-items: center;
        font-family: Montserrat, sans-serif;
    }
    .songs__song--button img 
    {
        margin-left: 13px;
    }
    .songs__song--button span 
    {
        margin-left: 17px;
    }
    .contenido
    {
        margin: 10px 4%;
        font-family: Montserrat, sans-serif;
        color: #777777;
        font-size: 14px;
    }
    .button-action
    {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 30px;
    }
    .button-buy 
    {
        background: white;
        border-radius: 18px;
        padding: 9px 19px;
        border: 2px solid #B283F5;
        color: #B283F5;
        font-size: 16px;
        width: 154px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        transition: all 1s ease;
        display: flex;
        justify-content: space-evenly;
    }
</style>
<script>
import ButtonAction from '../../components/ButtonAction.vue'
import HeaderHome from '../../components/HeaderHome'
import Footer from '../../components/Footer'
export default {
    components: {
        HeaderHome,
        ButtonAction,
        Footer,
    }
}
</script>