<template>
        <div class="container">
            <HeaderHome></HeaderHome>
            <div class="check">
                <div class="confirmed"> 
                    <img src="svg/check.svg" alt="check">
                    <p>Your email has been confirmed</p>
                </div>
                    <ButtonAction>Start Browsing</ButtonAction>
                    <p>Go to profile</p>
            </div>   
        </div>
    <GeneralFooter></GeneralFooter>
</template>

<style scoped>
.container
{
    height: 91vh;
}
.check
{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    justify-content: space-evenly;
}
.confirmed 
{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.confirmed img 
{
    margin-bottom: 10px;
}
p 
{
    color: #555555;
}

</style>

<script>
import HeaderHome from '@/Components/HeaderHome'
import ButtonAction from '@/Components/ButtonAction'
import GeneralFooter from '@/Components/GeneralFooter'

export default {
    components: {
        HeaderHome,
        ButtonAction,
        GeneralFooter
    }
}
</script>