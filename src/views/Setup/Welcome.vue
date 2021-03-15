<template>
  <ion-page>   
    <ion-content :fullscreen="true">
      <div id="container">
        <!-- CONTENT -->
        welcome
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonContent } from '@ionic/vue';
  export default {
    name: 'welcome',
    components: { IonContent, IonPage }
  }
</script>

<style scoped>
  ion-content {
    --background: linear-gradient(138deg, #1d69d4, #d66c3b);
    --background-repeat: no-repeat;
    --background-size: cover;  
  }

  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>