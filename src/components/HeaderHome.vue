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
    }
    .initial
    {
        display: flex;
    }
    .header--icons
    {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .header--icons__car
    {
        margin-left: 10px;
    }
    input
    {
        width: 100%;
        margin-top: 10px;
        border-radius: 20px;
        height: 25px;
        border: none;
    }
</style>
