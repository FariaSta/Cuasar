<template>
    <header>
        <div class="container">
            <div class="initial">
                <img src="@/assets/svg/logo.svg" alt="Cuasar" class="header--logo">
                <div class="header--icons">
                    <img src="@/assets/svg/people.svg" alt="People" class="header--icons__people">
                    <img src="@/assets/svg/car.svg" alt="Car" class="header--icons__car">
                    <menu-login-register style="margin-left: 10px;" />
                </div>
            </div>
            <input type="text" placeholder="Search...">
        </div>
    </header>
</template>

<style scoped>
    header
    {
        background: linear-gradient(90deg, #B283F5 0%, #865BFF 30.21%, #558DFE 65.62%, #505CE4 100%);
        position: fixed;
        width: 100%;
        height: 100px;
    }
    .container
    {
        margin: 20px 20px;
    }
    .initial
    {
        width: 100%;
        display: flex;
    }
    .header--icons
    {
        width: 100%;
        display: flex;
        justify-content: end;
    }
    .header--icons__car
    {
        margin-left: 10px;
    }
    input
    {
        width: 96%;
        margin-top: 10px;
        border-radius: 20px;
        height: 25px;
        border: none;
        border-radius: 5px; 
        height: 30px; 
        color: #B283F5; 
        padding-left:10px;
    }
</style>
<script>
import MenuLoginRegister from './MenuLoginRegister';
export default {
    components: {
        MenuLoginRegister
    }
}
</script>
