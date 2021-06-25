<template>
<HeaderHome />
<div class="home">
    
    <div class="presentation1">
        <h1>Upgrade your<br>content with the<br>world’s best music</h1>
        <ButtonAction>Sample now!</ButtonAction>
    </div>
    <div class="link1">
        <div class="sample-music">
            <img src="@/assets/svg/sample-music.svg" alt="Sample Music" />
            <h3>Sample music</h3>
        </div>
        <div class="configure-the-license">
            <img src="@/assets/svg/configure-the-license.svg" alt="Configure the license" />
            <h3>Configure the license</h3>
        </div>
        <div class="upgrade-your-content">
            <img src="@/assets/svg/upgrade-your-content.svg" alt="Upgrade your content" />
            <h3>Upgrade your content</h3>
        </div>
        <div class="share-with-the-world">
            <img src="@/assets/svg/share-with-the-world.svg" alt="Share with the world" />
            <h3>Share with the world</h3>
        </div>
    </div>
    <div class="contact">
        <h1>OWN MUSIC?</h1>
        <ButtonAction>Contact us</ButtonAction>
    </div>
    <div class="link2">
        <div class="make-money">
            <img src="@/assets/svg/make-money.svg" alt="Make money">
            <h3>Make money</h3>
        </div>
        <div class="promote-organically">
            <img src="@/assets/svg/promote-organically.svg" alt="Promote organically">
            <h3>Promote porganically</h3>
        </div>
        <div class="save-time-and-money">
            <img src="@/assets/svg/save-time-and-money.svg" alt="Save time and money">
            <h3>Save time and money</h3>
        </div>
        <div class="safe-secure-block-chain-tech">
            <img src="@/assets/svg/safe-secure-block-chain-tech.svg" alt="safe-secure-block-chain-tech">
            <h3>SAFE - SECURE <br> Block Chain Tech</h3>
        </div>
    </div>
    <Footer></Footer>
</div>

</template>
<style scoped>
.home
{
    height: 100vh;
}
.presentation1
{
    background: linear-gradient(90deg, #B283F5 0%, #865BFF 30.21%, #558DFE 65.62%, #505CE4 100%);
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.presentation1 h1
{
    text-align: center;
    color: white;
    font-size: 30px;
    width: 90%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 36.57px;
}
.link2 h3
{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}
.link1 h3
{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}
.ButtonAction
{
    margin-top: 30px;
}
.contact h1 
{
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}
.sample-music
{
    margin-top: 36px;
    display: flex;
    justify-content: center;
}
.sample-music h3
{
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: #B283F5;
}
.configure-the-license
{
    margin-top: 36px;
    display: flex;
    justify-content: center;
}
.configure-the-license h3
{
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: #B283F5;
}
.upgrade-your-content
{
    margin-top: 36px;
    display: flex;
    justify-content: center;
}
.upgrade-your-content h3
{
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: #B283F5;
}
.share-with-the-world
{
    margin-top: 36px;
    display: flex;
    justify-content: center;
    margin-bottom: 36px;
}
.share-with-the-world h3
{
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: #B283F5;
}
.contact
{
    width: 100%;
    height: 300px;
    background: linear-gradient(90deg, #B283F5 0%, #865BFF 30.21%, #558DFE 65.62%, #505CE4 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.contact h1
{
    color: white;
}
.make-money
{
    margin-top: 36px;
    display: flex;
    justify-content: center;
}
.make-money h3
{
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: #B283F5;
}
.promote-organically
{
    margin-top: 36px;
    display: flex;
    justify-content: center;
}
.promote-organically h3
{
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: #B283F5;
}
.save-time-and-money
{
    margin-top: 36px;
    display: flex;
    justify-content: center;
}
.save-time-and-money h3
{
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: #B283F5;
}
.safe-secure-block-chain-tech
{
    margin-top: 36px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
.safe-secure-block-chain-tech h3
{
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: #B283F5;
}


</style>
<script>
import HeaderHome from '@/components/HeaderHome.vue'
import Footer from '@/components/Footer.vue'
import ButtonAction from '@/components/ButtonAction.vue'
import HeaderBack from '@/components/HeaderBack.vue'

export default {
    name: 'Home',
    components: {
        HeaderHome,
        Footer,
        ButtonAction,
        HeaderBack,
  }
}
</script>