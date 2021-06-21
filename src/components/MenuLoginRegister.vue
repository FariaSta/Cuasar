<template>
    <div id="MenuLoginRegister" class="MenuLoginRegister">
        <button @click="show = !show"><img src="@/assets/svg/menu.svg" alt="Menu"></button>
         <transition name="slide-fade">
            <div class="menu" v-if="show">
                <div class="header-menu">
                    <button @click="show = !show" class="menu-activo"><img src="@/assets/svg/atras.svg" alt="Back" class="atras"></button>
                    <img src="@/assets/svg/logo.svg" alt="Cuasar">
                    <div class="people">
                        <img src="@/assets/svg/people.svg" alt="people">
                        <h1>Hello!</h1>
                    </div>
                </div>
                <div class="menu__buttons">
                    <button class="menu__buttons--login">
                        <inertia-link :href="`/login`">
                        Log in
                        </inertia-link>
                    </button>
                    <button class="menu__buttons--signup">
                        <inertia-link :href="`/register`">
                        Sign up
                        </inertia-link>
                    </button>
                </div>
               <!-- <div>
                    <div class="w-75 m-auto">
                        <div>
                            <img src="" alt="Profile Picture">
                        </div>
                        <div>
                            <h2>Hello! {User}</h2>
                        </div>
                    </div>
                </div> -->
                <div class="menu__nav">
                    <ul>
                        <li>
                            
                            Home
                            
                        </li>
                        <li>

                            Account
            
                        </li>
                        <li>
            
                            Your Music
            
                        </li>
                        <li>
                    
                            Browse Music
            
                        </li>
                        <li>
                            
                            Browse History
            
                        </li>
                        <li>
                    
                            How it Works
            
                        </li>
                        <li>
                            
                            Validate
                            
                        </li>
                        <li>
                            
                            Help Center
                            
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>
<style scoped>
.m-auto {
    margin: auto;
}
.w-75 {
    width: 75%;
}
.menu
{
    min-width: 100%;
    height: 100%;
    background: #865BFF;
    position: fixed;
    top: 0;
    right: 0;
}
.header-menu 
{
    background: linear-gradient(90deg, #B283F5 0%, #865BFF 30.21%, #558DFE 65.62%, #505CE4 100%);
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.header-menu 
{
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
}
.people
{
    display: flex;
    flex-direction: row;
    width: 30%;
    justify-content: right;
}
.people h1 
{
    margin-left: 5px;
}
.menu-activo 
{
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu__buttons
{
    padding: 18px 15px 18px 15px;
    display: flex;
    justify-content: center;
}
.menu__buttons--login
{
    color: #555555;
    width: 145px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 18px;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
}
.menu__buttons--signup
{
    color: white;
    width: 145px;
    height: 45px;
    background: #558DFE;
    border-radius: 18px;
    font-weight: 700;
    font-size: 18px;
    margin-left: 15px;
    font-family: 'Montserrat', sans-serif;
}
.menu__nav
{
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    margin-left: 40px;
    padding: 13px 13px 13px 0;
    
}
.menu__nav ul 
{
    width: 95%;
}
.menu__nav li 
{
    margin-top: 20px;
    border-bottom: white 1px solid;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
}

.slide-fade-leave-active, .slide-fade-enter-active  
{
    transition: all .3s cubic-bezier(0.3, 0.2, 0.2, 0.1);
}
.slide-fade-leave-to
{
    transform: translateX(30px);
    opacity: 0;
}
</style>
<script>

export default {
    name: 'MenuLoginRegister',
    el: 'MenuLoginRegister',
    data(){
        return{
            show: false,
            // sessionActive: false,
        } 
    }
}
</script>