<template>
    <HeaderHome />
        <div class="songs">
            <p class="directory">Home > Browse music > Songs</p>
            <div class="container">
                <h1 style="color: #505CE4;">SONGS</h1>
                <div class="songs__song">
                    <div class="songs__song--cover">
                        <img src="@/assets/images/cover1.png" alt="cover">
                    </div>
                    <div class="info">
                        <div class="songs__song--inf__description">
                            <h2>FUNK</h2>
                            <p>Uptown Funk<br>(feat. Bruno Mars)</p>
                            <span>Mark Ronson, Bruno Mars</span>
                        </div>
                        <div class="songs__song--button">
                            <button style="background: #865BFF; border-radius: 10px; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center;">
                                <img src="@/assets/svg/play.svg" alt="play">
                            </button>
                            <button style="background: #865BFF; border-radius: 10px; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center;">
                                <img src="@/assets/svg/config.svg" alt="config">
                            </button>
                            <button class="songs__song--button__price">
                                <img src="@/assets/svg/shoopingcar.svg" alt="car">
                                <span>$0.40</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="songs__song">
                    <div class="songs__song--cover">
                        <img src="@/assets/images/divide_cover.png" alt="cover">
                    </div>
                    <div class="info">
                        <div class="songs__song--inf__description">
                            <h2>POP</h2>
                            <p>Shape of You</p>
                            <span>Ed Sheeran</span>
                        </div>
                        <div class="songs__song--button">
                            <button style="background: #865BFF; border-radius: 10px; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center;">
                                <img src="@/assets/svg/play.svg" alt="play">
                            </button>
                            <button style="background: #865BFF; border-radius: 10px; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center;">
                                <img src="@/assets/svg/config.svg" alt="config">
                            </button>
                            <button class="songs__song--button__price">
                                <img src="@/assets/svg/shoopingcar.svg" alt="car">
                                <span>$0.99</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="songs__song">
                    <div class="songs__song--cover">
                        <img src="@/assets/images/dua-lipa.png" alt="cover">
                    </div>
                    <div class="info">
                        <div class="songs__song--inf__description">
                            <h2>NU-DISCO</h2>
                            <p>Don’t Start now</p>
                            <span>Dua Lipa</span>
                        </div>
                        <div class="songs__song--button">
                            <button style="background: #865BFF; border-radius: 10px; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center;">
                                <img src="@/assets/svg/play.svg" alt="play">
                            </button>
                            <button style="background: #865BFF; border-radius: 10px; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center;">
                                <img src="@/assets/svg/config.svg" alt="config">
                            </button>
                            <button class="songs__song--button__price">
                                <img src="@/assets/svg/shoopingcar.svg" alt="car">
                                <span>$1.39</span>
                            </button>
                        </div>
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
            <div class="contact-us">
                <h2>Did you find what<br>your were looking for?</h2>
                <ButtonAction>Contact us</ButtonAction>
            </div>
        </div>
    <Footer />
</template>
<style scoped>
    .songs 
    {
        padding-top: 100px;
    }
    .directory
    {
        margin: 7px 0 0 4%;
    }
    .container
    {
        margin-left: 4%; 
        margin-top: 15px;
    }
    .songs__song
    {
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
        background: white;
    }
    .page
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
        height: 41.6px;
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
import Footer from '../../components/Footer.vue'
import HeaderHome from '../../components/HeaderHome'
import ButtonAction from '../../components/ButtonAction.vue'
export default {
    components: {
        HeaderHome,
        Footer,
        ButtonAction
    }
}
</script>