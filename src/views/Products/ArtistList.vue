<template>
    <HeaderHome />
    <div class="browse_music">
        <p class="directory">Home > Browse music > Artist</p>
        <div class="songs">
            <h1 style="color: #505CE4;">ARTISTS</h1>
            <div class="songs__song">
                <div class="songs__song--cover">
                    <img src="@/assets/images/mark-ronson.png" alt="cover">
                </div>
                <div class="info">
                    <div class="songs__song--inf__description">
                        <h2 style="margin-bottom: 8px; line-height: 17px; font-size: 14px; font-size: 14px; font-weight: 400;">Mark Ronson</h2> 
                        <p style="line-height: 14px; color: #555555; font-size: 12px;">Mark Daniel Ronson is a British-American DJ, songwriter, record producer, and record executive. </p>
                    </div>
                </div>
            </div>
            <div class="songs__song">
                
                <div class="songs__song--cover">
                        <router-link to="/browse-music/artists/edsheran">
                            <img src="@/assets/images/ed-sheeran.png" alt="cover">
                        </router-link>
                </div>
                <div class="info">
                    <div class="songs__song--inf__description">
                        <router-link to="/browse-music/artists/ed-sheran">
                            <h2 style="margin-bottom: 8px; line-height: 17px; font-size: 14px; font-size: 14px; font-weight: 400;">Ed Sheeran</h2> 
                            <p style="line-height: 14px; color: #555555; font-size: 12px;">Edward Christopher Sheeran MBE is an English singer, songwriter, musician, record producer, actor, and businessman. </p>
                        </router-link>
                    </div>
                </div>
                
            </div>
            <div class="songs__song">
                <div class="songs__song--cover">
                    <img src="@/assets/images/dua-lipa2.png" alt="cover">
                </div>
                <div class="info">
                    <div class="songs__song--inf__description">
                        <h2 style="margin-bottom: 8px; line-height: 17px; font-size: 14px; font-size: 14px; font-weight: 400;">Dua Lipa</h2> 
                        <p style="line-height: 14px; color: #555555; font-size: 12px;">Dua Lipa is an English singer and songwriter. After working as a model, she signed with Warner Bros Records in 2014 and released her eponymous debut album in 2017. </p>
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
        margin: 7px 0 0 4%;
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
    .browse-music
    {
        display: flex;
        justify-content: center;
        margin: 17px 0 0 17px;
    }
    .songs
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