<template>
    <inertia-link :href="`/home`">
        <HeaderBack></HeaderBack>
    </inertia-link>
    <div id="register" class="register">
            <div class="relative pt-1">
                <div class="father">
                <div class="progress">
                    <div class="relative overflow-hidden mt-3 h-2 w-80 mb-4 text-xs flex rounded bg-pink-200">
                        <div :style="{width:number}" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-600 to-blue-400 ..." ></div>     
                    </div>
                        <h1 class="progress__1">1</h1>
                        <h1 class="progress__2" :style="{background: dos}">2</h1>
                        <h1 class="progress__3" :style="{background: tres}">3</h1>
                    </div>  
                </div>
            </div>
                    <ul>
                        <li :style="{display:nameDefined}">Name is not defined</li>
                        <li :style="{display:type_documentDefined}">Type document is not defined</li>
                        <li :style="{display:document_idDefined}">Document ID is not defined</li>
                        <li :style="{display:usernameDefined}">Username is not defined</li>
                        <li :style="{display:emailDefined}">E-Mail is not defined</li>
                        <li :style="{display:passwordDefined}">Password is not defined</li>
                        <li :style="{display:repeat_passwordDefined}">Repeat Password is not defined</li>
                        <li :style="{display:min_characters}">The password must be at least 8 characters</li>
                        <li :style="{display:same_passwords}">Passwords are not the same</li>
                        <li :style="{display:telephoneDefined}">Telephone is not defined</li>
                        <li :style="{display:address1Defined}">Address line 1 is not defined</li>
                        <li :style="{display:countryDefined}">Country is not defined</li>
                        <li :style="{display:stateDefined}">State is not defined</li>
                    </ul>
        
            <form @submit.prevent="submit">
                <div class="pasos" :style="{display:primero}">
                    <p class="text-center">Already have a Cuasar account?  <a href="/" style="color: #865BFF">Log in</a></p>
                    <input type="text" v-model="form.name" id="name" placeholder="Name">

                    <div class="title-select">
                        <p :style="{display:select1}">Type document</p>
                        <select name="type_document" @click="removeTitle1"  v-model="form.type_document" id="type_document">
                            <option value="value1">Value 1</option>
                            <option value="value2">Value 2</option>
                        </select>
                    </div>


                    <input type="number" v-model="form.document_id" id="document_id" placeholder="Document ID">
                    <input type="text" v-model="form.username" id="username" placeholder="Username">
                    <input type="email" v-model="form.email" id="email" placeholder="E-Mail">
                    <div>
                        <input type="password" v-model="form.password" id="password" placeholder="Password" class="password"> 
                    </div>
                    <div>
                        <input type="password" v-model="form.repeat_password" id="repeat_password" placeholder="Repeat Password" class="password"> 
                    </div>
                    <h1 v-bind:class="form.name && form.type_document && form.document_id && form.username && form.email && form.password && form.repeat_password != null ? 'button-active' : 'button-continue'" @click="started">Get Started</h1>

                </div>
            
                <div class="pasos" :style="{display:segundo}">
                    <input type="number" v-model="form.telephone" id="telephone" placeholder="Telephone *">
                    <h1 style="color: #505CE4; font-weight:700;">SOCIAL MEDIA</h1>
                    <input type="text" v-model="form.website" id="website" placeholder="Web site">
                    <input type="text" v-model="form.instagram" id="instagram" placeholder="Instagram">
                    <input type="text" v-model="form.facebook" id="facebook" placeholder="Facebook">
                    <input type="text" v-model="form.twitter" id="twitter" placeholder="Twitter">
                    <input type="text" v-model="form.snapchat" id="snapchat" placeholder="Snapchat">
                    <input type="text" v-model="form.tiktok" id="tiktok" placeholder="TikTok">
                    <h1 v-bind:class="form.telephone && form.website && form.instagram && form.facebook && form.twitter && form.snapchat && form.tiktok != null ? 'button-active' : 'button-continue'"  @click="continue">Continue</h1>
                </div>

                <div class="pasos" :style="{display:tercero}">         
                    <input type="text" v-model="form.address_line_1" id="address_line_1" placeholder="Address line 1 *">
                    <input type="text" v-model="form.address_line_2" id="address_line_2" placeholder="Address line 2">
                    <input type="number" v-model="form.zip_code" id="zip_code" placeholder="Zip code">


                    <div class="title-select">
                    <select name="country1" v-model="form.country1" @click="removeTitle2" id="country_1" >
                        <option value="value1">Value 1</option>
                        <option value="value2">Value 2</option>
                    </select>
                        <p :style="{display:select2}">Country *</p>
                    </div>
                    <div class="title-select">
                    <select name="state" id="state" v-model="form.state" @click="removeTitle3">
                        <option value="value1">Value 1</option>
                        <option value="value2">Value 2</option>
                    </select>
                        <p :style="{display:select3}">State *</p>
                    </div>
                    <div class="title-select">
                    <select name="country2" id="country2" v-model="form.country2" @click="removeTitle4">
                        <option value="value1">Value 1</option>
                        <option value="value2">Value 2</option>
                    </select>
                        <p :style="{display:select4}">Country *</p>
                    </div>
                        <ButtonAction @click="send">Send</ButtonAction>
                </div>
            </form>

    </div>
    <GeneralFooter></GeneralFooter>
    
    
</template>
<style scoped>
.register
{
    min-height: 90vh;
    padding-top: 50px;
    
}
p 
{
    color: #555555;
}
.father
{
    display: flex;
    justify-content: center;
    
}
.w-80
{
    width: 90%;
}

.progress
{
    margin-top: 10px;
    display: flex;
    align-items: center;
    position: relative;
    height: 70px;
    width: 85%;
    justify-content: space-between;
}
.progress__1 
{
    position: absolute;
    background: #B283F5;
    width: 38px;
    height: 38px;
    border-radius: 50px;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.progress__2
{
    position: absolute;
    width: 38px;
    height: 38px;
    border-radius: 50px;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 45%;
}
.progress__3
{
    position: absolute;
    background: #fac6ff;
    width: 38px;
    height: 38px;
    border-radius: 50px;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 89%;
}
.pasos
{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 450px;
}
form 
{
    display: flex;
    justify-content: space-evenly;
    height: 470px;        
}
ul
{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: crimson;
}
select
{
    border: none;
    border-bottom: 2px solid #DDDDDD; 
    width: 230px;
    padding: 8px 12px;
    text-align: center;
    color: #865BFF; 
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    display: flex;  
}

.title-select
{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title-select p
{
    position: absolute;
    color: #865BFF;
}
input
{
    text-align: center;
    border: none;
    border-bottom: 2px solid #DDDDDD;    
}
.button-continue
{
    margin-bottom: 15px;
    border-radius: 18px;
    padding: 9px 19px;
    border: none;
    font-size: 16px;
    width: 154px;
    font-family: 'Montserrat', sans-serif;
    background: gray;
    color: white;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    cursor: pointer;
    transition: all 1s ease;
}
.button-active
{
    margin-bottom: 15px;
    border-radius: 18px;
    padding: 9px 19px;
    border: none;
    font-size: 16px;
    width: 154px;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(90deg, #B283F5 11.64%, #505CE4 100%);
    color: white;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    cursor: pointer;
    transition: all 1s ease;
}

::placeholder 
{ 
    color: #865BFF;
    opacity: 1; 
}

:-ms-input-placeholder 
{ 
    color: #865BFF;
}

::-ms-input-placeholder 
{ 
    color: #865BFF;
}   

</style>
<script>
    import { reactive } from 'vue'
    import { Inertia } from '@inertiajs/inertia'
    import GeneralFooter from '@/Components/GeneralFooter.vue'
    import ButtonAction from '@/components/ButtonAction.vue'
    import HeaderBack from '@/components/HeaderBack.vue'

    export default {
        name: 'Register',
        el: 'register',
        components: {
            GeneralFooter,
            ButtonAction,
            HeaderBack
        },
        data: function () {
            return {
                primero: '',
                segundo: 'none',
                tercero: 'none',
                number: '0%',
                dos: '#fac6ff',
                tres: '#fac6ff;',
                select1: '',
                select2: '',
                select3: '',
                select4: '',
                nameDefined: 'none',
                type_documentDefined: 'none',
                document_idDefined: 'none',
                usernameDefined: 'none',
                emailDefined: 'none',
                passwordDefined: 'none',
                repeat_passwordDefined: 'none',
                min_characters: 'none',
                same_passwords: 'none',
                telephoneDefined: 'none',
                address1Defined: 'none',
                countryDefined: 'none',
                stateDefined: 'none'
            }
        },
        setup () {
            const form = reactive({
                name: null,
                type_document: null,
                document_id: null,
                username: null,
                email: null,
                password: null,
                repeat_password: null,
                telephone: null,
                website: null,
                instagram: null,
                facebook: null,
                twitter: null,
                snapchat: null,
                tiktok: null,
                address_line_1: null,
                address_line_2: null,
                zip_code: null,
                country1: null,
                state: null,
                country2: null,

            })
            function submit() {
                Inertia.post('/register', form)
            }

            return { form, submit }
        },
        methods: {
            started (){
                if (!this.form.name){
                    this.nameDefined = ''
                }else{
                    this.nameDefined = 'none'
                } 

                if (!this.form.type_document){
                    this.type_documentDefined = ''
                }else{
                    this.type_documentDefined = 'none'
                } 

                if (!this.form.document_id){
                    this.document_idDefined = ''
                }else{
                    this.document_idDefined = 'none'
                } 

                if (!this.form.username){
                    this.usernameDefined = ''
                }else{
                    this.usernameDefined = 'none'
                } 

                if (!this.form.email){
                    this.emailDefined = ''
                }else{
                    this.emailDefined = 'none'
                } 

                if (!this.form.password){
                    this.passwordDefined = ''
                }else{
                    this.passwordDefined = 'none'
                } 

                if (!this.form.repeat_password){
                    this.repeat_passwordDefined = ''
                }else{
                    this.repeat_passwordDefined = 'none'
                } 

                let samePassword = this.form.password === this.form.repeat_password
                if (!samePassword) {
                    this.same_passwords = ''
                }else{
                    this.same_passwords = 'none'
                }
                
                let characters = 7 < this.form.password.length
                if (!characters) {
                    this.min_characters = ''
                }else{
                    this.min_characters = 'none'
                }

                let name = Boolean(this.form.name)
                let type_document = Boolean(this.form.type_document)
                let document_id = Boolean(this.form.document_id)
                let username = Boolean(this.form.username)
                let email = Boolean(this.form.email)
                let password = Boolean(this.form.password)
                let repeat_password = Boolean(this.form.repeat_password)

                if (name){
                    if (type_document) {
                        if (document_id) {
                            if (username) {
                                if (email) {
                                    if (password) {
                                        if (repeat_password) {
                                            if (characters) {
                                                if (samePassword) {
                                                    this.primero = 'none'
                                                    this.segundo = ''
                                                    this.number = '50%'
                                                    this.dos = '#B283F5' 
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }    
            },
            continue (){

                if (!this.form.telephone){
                    this.telephoneDefined = ''
                }else{
                    this.telephoneDefined = 'none'
                } 
                let telephone = Boolean(this.form.telephone)

                if (telephone) {
                    this.primero = 'none'
                    this.segundo = 'none'
                    this.tercero = ''
                    this.number = '100%'
                    this.tres = '#B283F5'
                }
            },
            send(){
                if (!this.form.address_line_1){
                    this.address1Defined = ''
                }else{
                    this.address1Defined = 'none'
                }

                if (!this.form.country1){
                    this.countryDefined = ''
                }else{
                    this.countryDefined = 'none'
                }

                if (!this.form.state){
                    this.stateDefined = ''
                }else{
                    this.stateDefined = 'none'
                }        

                let address_line_1 = Boolean(this.form.address_line_1)
                let country1 = Boolean(this.form.country1)
                let state = Boolean(this.form.state)

            },
            removeTitle1 (){
                this.select1 = 'none'
            },
            removeTitle2 (){
                this.select2 = 'none'
            },
            removeTitle3 (){
                this.select3 = 'none'
            },
            removeTitle4 (){
                this.select4 = 'none'
            },
        },
    }
</script>
