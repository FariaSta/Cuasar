<template>
    
    <div class="browse_music">
        <p class="directory">Home > Browse music</p>
        <h2 style="color: #B283F5;" class="browse-music">BROWSE MUSIC</h2>
        <div class="news">
            
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
        </div>
        
            <router-link to="/browse-music/news"><ButtonAction style="margin-top: 15px; display: flex; justify-content: center">View All</ButtonAction></router-link>
        
        <div class="songs">
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
        <router-link to="/browse-music/geners"><ButtonAction style="margin-top: 15px; display: flex; justify-content: center">View All</ButtonAction></router-link>
        <div class="songs">
            <h1 style="color: #505CE4;">ALBUMS</h1>
            <div class="songs__song">
                <div class="songs__song--cover">
                    <img src="@/assets/images/cover1.png" alt="cover">
                </div>
                <div class="info">
                    <div class="songs__song--inf__description">
                        <h2>FUNK</h2>
                        <p>Uptown Special</p>
                        <span>Mark Ronson</span><br>
                        <p style="line-height: 14px; color: #777777; font-size: 10px;">Released 13 Jan, 2015</p>
                        <p style="line-height: 14px; color: #777777; font-size: 10px;">℗Tracks 4 & 6 (P) 2014, all other tracks (p) 2015 Mark Ronson under exclusive licensce to Sony Music Entertinment UK LImited</p>
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
                        <p>Divide</p>
                        <span>Ed Sheeran</span>
                        <p style="line-height: 14px; color: #777777; font-size: 10px;">Released 3 Mar 2017</p>
                        <p style="line-height: 14px; color: #777777; font-size: 10px;">℗ 2017, Asylum Records Uk, a division of Atlantic Records UK, a Warner Music Group company</p>
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
                        <p>Future Nostalgia</p>
                        <span>Dua Lipa</span>
                        <p style="line-height: 14px; color: #777777; font-size: 10px;">Released 27 mar, 2020</p>
                        <p style="line-height: 14px; color: #777777; font-size: 10px;">2020, Warner Records</p>
                    </div>
                </div>
            </div>
        </div>
            <router-link to="/browse-music/album"><ButtonAction style="margin-top: 15px; display: flex; justify-content: center">View All</ButtonAction></router-link>
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
                    <img src="@/assets/images/ed-sheeran.png" alt="cover">
                </div>
                <div class="info">
                    <div class="songs__song--inf__description">
                        <h2 style="margin-bottom: 8px; line-height: 17px; font-size: 14px; font-size: 14px; font-weight: 400;">Ed Sheeran</h2> 
                        <p style="line-height: 14px; color: #555555; font-size: 12px;">Edward Christopher Sheeran MBE is an English singer, songwriter, musician, record producer, actor, and businessman. </p>
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
        </div>
            <router-link to="/browse-music/artists"><ButtonAction style="margin-top: 15px; display: flex; justify-content: center">View All</ButtonAction></router-link>
        <div class="contact-us">
            <h2>Did you find what<br>your were looking for?</h2>
            <ButtonAction>Contact us</ButtonAction>
        </div>
    </div>
    <Footer></Footer>
</template>
<style scoped>
    .browse_music
    {
        padding-top: 100px;
    }
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