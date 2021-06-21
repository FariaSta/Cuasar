<template>
    <div class="info">
        <p class="directory">Home > Browse music > Albums > Artists > Ed Sheeran > Bio</p>
        <div class="portada">
            <router-link to="/browse-music/artists/ed-sheran/bio"><img src="@/assets/images/ed3.png" alt="portada"></router-link>
        </div>
    </div>
    <div class="description">
        <h2>Ed Sheeran</h2>
        <p>
            Edward Christopher Sheeran MBE ; born 17 February 1991) is an English singer, songwriter, musician, record producer, actor, and businessman. After first recording music in 2004, he began gaining attention through YouTube. In early 2011, Sheeran independently released the extended play, No. 5 Collaborations Project. He signed with Asylum Records the same year.<br><br>
            Sheeran's debut album, + (pronounced "plus"), was released in September 2011 and topped the UK Albums Chart. It contained his first hit single "The A Team". In 2012, Sheeran won the Brit Awards for Best British Male Solo Artist and British Breakthrough ActPerformance.
        </p>
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
        margin: 4% 0 0 4%;
        margin-bottom: 20px;
    }
    .description
    {
        margin: 4% 0 0 4%;
    }
    .description h2 
    {
        color: #505CE4;
    }
    .description p 
    {
        color: #777777;
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