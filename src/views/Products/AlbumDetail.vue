<template>
    <HeaderHome />
    <div class="albumdetail">
        <p class="directory">Home > Browse music > Albums > Ed Sheeran > Ed Sheeran</p>
        <div class="songs__song">
            <div class="songs__song--cover">
                <router-link to="/browse-music/artists/ed-sheran/album-detail"><img src="@/assets/images/divide.png" alt="cover"></router-link>
            </div>
            <div class="info">
                <div class="songs__song--inf__description">
                    <router-link to="/browse-music/artists/ed-sheran/album-detail"><h2>Pop</h2></router-link>
                    <router-link to="/browse-music/artists/ed-sheran/album-detail"><p>Divide</p></router-link>
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
    </div>
    <div class="containerTable">
        <table>
            <thead>
                <tr>
                    <th><img src="@/assets/svg/flecha.svg" alt=""> NAME</th>
                    <th>ARTIST</th>
                    <th>TIME</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1. Eraser</td>
                    <td>Ed Sheeran</td>
                    <td>3:47</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
                <tr>
                    <td>2. Castle on the Hill</td>
                    <td>Ed Sheeran</td>
                    <td>4:21</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
                <tr>
                    <td>3. Dive</td>
                    <td>Ed Sheeran</td>
                    <td>3:58</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
                <tr>
                    <td>4. Shape of you</td>
                    <td>Ed Sheeran</td>
                    <td>3:53</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
                <tr>
                    <td>5. Perfect</td>
                    <td>Ed Sheeran</td>
                    <td>4:23</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
                <tr>
                    <td>6. Galway Girl</td>
                    <td>Ed Sheeran</td>
                    <td>2:50</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
                <tr>
                    <td>7. Happier</td>
                    <td>Ed Sheeran</td>
                    <td>3:27</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
                <tr>
                    <td>8. New Man</td>
                    <td>Ed Sheeran</td>
                    <td>3:09</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
                <tr>
                    <td>9. Hearts Don't<br>Break Around Here</td>
                    <td>Ed Sheeran</td>
                    <td>4:08</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
                <tr>
                    <td>10. What Do I Know?</td>
                    <td>Ed Sheeran</td>
                    <td>3:57</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
                <tr>
                    <td>11. How Would You<br>Feel (Paean)</td>
                    <td>Ed Sheeran</td>
                    <td>4:40</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
                <tr>
                    <td>12. Supermarket Flowers</td>
                    <td>Ed Sheeran</td>
                    <td>3:41</td>
                    <td><img src="@/assets/svg/play-min.svg" alt=""></td>
                    <td><img src="@/assets/svg/config-min.svg" alt=""></td>
                    <td class="price">$1.20</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p style="display: flex; justify-content: center; align-items: center; color: #555555">Total 12 items</p>
    <div class="containerButton">
        <button class="checkout">
            <img src="@/assets/svg/carcheck.svg" alt="">
            <p style="margin-left:5px">CHECKOUT</p>
        </button>
    </div>
    <div class="contact-us">
        <h2>Did you find what<br>your were looking for?</h2>
        <ButtonAction>Contact us</ButtonAction>
    </div>
    <Footer />
</template>
<style scoped>
    .albumdetail
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
    .containerTable
    {
        display: flex;
        justify-content: center;
    }
    table
    {
        width: 95%;
        margin-top: 20px;
    }
    th 
    {
        text-align: initial;
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 15px;
        color: #555555;
        height: 30px;
    }
    td 
    {
        font-family: Montserrat, sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: left;
        color: #555555;
        height: 30px;
    }
    .price 
    {
        border: 1.6px solid #865BFF;
        width: 45px;
        height: 20px;
        border-radius: 20px;
        color: #865BFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .divide
    {
        border: 1px solid #9e0909; 
        width: 100%;
    }
    .containerButton
    {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .checkout
    {
        background: linear-gradient(90deg, #8243DC 11.64%, #558DFE 52.02%, #505CE4 92.41%);
        color: #EA98FE;
        height: 50px;
        width: 158px;
        left: 108px;
        top: 947px;
        border-radius: 20px;
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 13px;
        display: flex;
        justify-content: center;
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
import HeaderHome from '../../components/HeaderHome.vue'
import ButtonAction from '../../components/ButtonAction.vue'
import Footer from '../../components/Footer.vue'

export default {
    components: {
        Footer,
        ButtonAction,
        HeaderHome
    }
}
</script>