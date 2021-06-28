<template>
    <HeaderHome />
    <div class="news">
        <p class="directory">Home > News > New releases</p>
        <div class="news__products">
            <h1 style="color: #505CE4; margin-left: 4%">NEWS</h1>
            <h1 style="color: #333333; margin-left: 4%">New releases</h1>
            <div class="news__products--description">
                <P>Janary 20, 2021</P>
            </div>
            <div class="news__products--images">
                <router-link to="/browse-music/news/news-category/ed-sheran"><img src="@/assets/images/ed.png" alt="arianna"></router-link>
            </div>
            <div class="news__products--description">
                <h3 style="color: #865BFF;">"Shape of You" is a song by English singer-songwriter Ed Sheeran. It was released as a digital download on 6 January 2017</h3>
                <p>
                    Edward Christopher Sheeran MBE ; born 17 February 1991) is an English singer, songwriter, musician, record producer, actor, and businessman. After first recording music in 2004, he began gaining attention through YouTube. In early 2011, Sheeran independently released the extended play, No. 5 Collaborations Project. He signed with Asylum Records the same year.<br><br>
                    Sheeran's debut album, + (pronounced "plus"), was released in September 2011 and topped the UK Albums Chart. It contained his first hit single "The A Team". In 2012, Sheeran won the Brit Awards for Best British Male Solo Artist and British Breakthrough ActPerformance.
                </p>
            </div>

        </div>
    </div>
    <Footer style="margin-top: 150px;"></Footer>
   
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
        margin-right: 4%;
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