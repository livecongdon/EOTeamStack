<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />
      <ion-tab-bar>
        <ion-tab-button
          tab="account"
          href="/account"
        >
          <ion-icon :icon="person" />
          <ion-label>My Account</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="team"
          href="/team"
        >
          <ion-icon :icon="people" />
          <ion-label>My Team</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="organization"
          href="/organization"
        >
          <ion-icon :icon="cash" />
          <ion-label>Organization Levels</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { person, people, cash } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      person,
      people,
      cash,
    }
  }
});
</script>
