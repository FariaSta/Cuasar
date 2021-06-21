<template>
    <div id="ButtonAction" class="ButtonAction">
        <button :type="type">
            <slot />
        </button>
    </div>
</template>
<style scoped>
    button
    {
        background: linear-gradient(90deg, #B283F5 11.64%, #505CE4 100%);
        border-radius: 18px;
        padding: 9px 19px;
        border: none;
        color: white;
        font-size: 16px;
        width: 154px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        transition: all 1s ease;
    }
    button:hover 
    {
        background: white;
        color: #B283F5;
        border: 2px solid #B283F5;
    }

</style>
<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'submit',
            },
        }

    }
</script>