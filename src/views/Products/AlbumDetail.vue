<template>
    <div>
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
</template>
<style scoped>
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
    }
</style>