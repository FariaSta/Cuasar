<template>
    <div class="login">
        <div class="presetation">
            <img
                src="@/assets/images/aro-del-login.png"
                alt="Login"
                class="aro-del-login"
            />
            <img src="@/assets/svg/logo-login.svg" alt="Cuasar" class="logo" />
        </div>
        <form>
            <a href="/" style="color: #b283f5">Need an account?</a>
            <input 
                id="email"
                
                type="email" 
                placeholder="E-Mail" 
            />
            <div>
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    class="password"
                />
            </div>
            <a href="/">Forgot password?</a>
            <ButtonAction>Log in</ButtonAction>
        </form>
    </div>
    <GeneralFooter></GeneralFooter>
</template>
<style scoped>
.login {
    height: 95vh;
}
.presetation {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 240px;
}
.aro-del-login {
    width: 100%;
}
.logo {
    position: absolute;
    text-align: center;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 370px;
}
input {
    text-align: center;
    border: none;
    border-bottom: 2px solid #dddddd;
}
::placeholder {
    color: #865bff;
    opacity: 1;
}

:-ms-input-placeholder {
    color: #865bff;
}

::-ms-input-placeholder {
    color: #865bff;
}
</style>

<script>
import GeneralFooter from "../../components/GeneralFooter.vue";
import ButtonAction from "../../components/ButtonAction";

export default {
    name: "Login",

    components: {
        GeneralFooter,
        ButtonAction,
    },
};
</script>
