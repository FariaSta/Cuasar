<template>
    <header>
        <div class="initial">
            <img src="@/assets/svg/logo.svg" alt="Cuasar" class="header--logo">
            <div class="header--icons">
                <img src="@/assets/svg/people.svg" alt="People" class="header--icons__people">
                <img src="@/assets/svg/car.svg" alt="Car" class="header--icons__car">
            </div>
        </div>
        <input type="text" placeholder="Search...">
    </header>
</template>
<style scoped>
header
{
    background: linear-gradient(90deg, #B283F5 0%, #865BFF 30.21%, #558DFE 65.62%, #505CE4 100%);
    padding: 20px 20px;
    position: fixed;
    width: 100%;
    overflow: visible;
}

.initial
{
    display: flex;
    width: 100%;
}
.header--icons
{
    
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.header--icons__car
{
    margin: 0px 17px 0px 17px;
}
.MenuLoginRegister
{
    display: flex;
    justify-content: center;
}
header input
{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40px;
    margin-top: 12px;
    margin-bottom: 8px;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    color: #B283F5;
}
.presentation_1 article
{
    padding: 55px 36px 55px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.presentation_1 article h1
{
    text-align: center;
    color: white;
    font-size: 30px;
}
.presentation_1 article button
{
    background: linear-gradient(90deg, #B283F5 11.64%, #505CE4 100%);
    border-radius: 18px;
    padding: 9px 19px;
    border: none;
    color: white;
    font-size: 16px;
}
</style>
<script>

import MenuLoginRegister from '@/components/MenuLoginRegister.vue'

export default {
    name: 'Home',
    components: {
        MenuLoginRegister
  }
}

</script>