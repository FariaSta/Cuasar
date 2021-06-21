<template>
    <div class="congratulations">
        <HeaderBack></HeaderBack>
        <div class="container">
            <img src="svg/logo-color.svg" alt="Cuasar">
            <div class="thank-you">
                <h1 style="color: #505CE4;">Congratulations!</h1>
                <h1>Thank you for creating your<br>new Cuasar account.</h1>
            </div>
            <p>Please check your email to<br>verify your account.</p>
            <div style="display: flex; justify items: center;">
                <h1 style="color: #505CE4">Welcome!</h1> 
                <h1 style="margin-left: 2px">@Mark</h1>
            </div>
            <inertia-link :href="`/check`">
                <ButtonAction>Start Browsing</ButtonAction>
            </inertia-link>
            
            <p>Go to profile</p>
        </div>

    </div>
</template>

.<style scoped>

.container
{
    margin-top: 50px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
}
h1 
{
    font-weight: 700;
    color: #333333;
}
p
{
    color: #333333;
    text-align: center;
}
.thank-you
{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

</style>

<script>
import HeaderBack from '@/Components/HeaderBack'
import ButtonAction from '@/Components/ButtonAction'

export default {
    components: {
        HeaderBack,
        ButtonAction
    }
}
</script>