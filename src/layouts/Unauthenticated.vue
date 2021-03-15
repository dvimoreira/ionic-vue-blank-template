<template>
  <IonApp>
    <ion-router-outlet id="layout-unauthenticated"></ion-router-outlet>
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Unauthenticated',
  components: {
    IonApp, 
    IonRouterOutlet, 
  },
  setup() {
    // TO-DO
  }
});
</script>