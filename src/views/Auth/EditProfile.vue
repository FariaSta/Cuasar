<template>
    <div class="EditProfile">
        <HeaderBack></HeaderBack>
        
            <form name="subida-imagenes" type="POST" enctype="multipart/formdata">
                <div class="content">
                    <div>
                        <p class="title">What do you intend to use Cuasar for</p>
                        <div class="button-select">
                            <span>---Check all that apply---</span>
                            <img src="svg/desplegar.svg">
                        </div>
                    </div>
                    <div>
                        <p class="title">Do you create content?</p>
                        <div class="button-select">
                            <span>--- Select frecuency--</span>
                            <img src="svg/desplegar.svg">
                        </div>
                    </div>
                    <div>
                        <p class="title">Generes you mostly use to create<br>content with</p>
                        <div class="button-select">
                            <span>---Check up to five--</span>
                            <img src="svg/desplegar.svg">
                        </div>
                    </div>
                    <div class="custom-input-file col-md-6 col-sm-6 col-xs-6">
                        <input type="file" id="fichero-tarifas" class="input-file" v-bind="foto">Upload  profile picture
                    </div>
                    
                    <inertia-link :href="`/congratulations`">
                        <ButtonAction @click="obtenerFoto">Submit</ButtonAction>
                    </inertia-link>
                </div>
            </form>
       
    </div>
    <GeneralFooter></GeneralFooter>
</template>
<style scoped>
.EditProfile
{
    height: 91vh;
}
.content
{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 450px;
}
.title
{
    margin-bottom: 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #333333;
}
.button-select
{
    display: flex;
    align-items: center;
    border: 1px solid #999999;
    color: #999999;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    padding: 8px 12px;
    width: 310px;
    justify-content: center;
    height: 33px;
    font-weight: 400;
}
.custom-input-file {
  background: linear-gradient(90deg, #FBF9FF 11.64%, #EFF0FA 100%);
  color: rgba(123, 75, 255, 0.644);
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto 0;
  min-height: 15px;
  overflow: hidden;
  padding: 10px;
  position: relative;
  text-align: center;
  width: 270px;
  border-radius: 18px;
  box-shadow: 0px 0px 10px 2px #00000026;

}

.custom-input-file .input-file {
 border: 10000px solid transparent;
 cursor: pointer;
 font-size: 10000px;
 margin: 0;
 opacity: 0;
 outline: 0 none;
 padding: 0;
 position: absolute;
 right: -1000px;
 top: -1000px;
}
.button-select span
{
    margin-right: 90px;
}
</style>
<script>
import ButtonAction from '@/Components/ButtonAction'
import HeaderBack from '@/Components/HeaderBack'
import GeneralFooter from '@/Components/GeneralFooter'

export default {
    name: 'EditProfile',
    components: {
        ButtonAction,
        HeaderBack,
        GeneralFooter
    },
    data: function (){
        return {
            foto: ''
        }
    },
    methods: {
        obtenerFoto (){
            console.log(this.foto)
        }
    },
}
</script>