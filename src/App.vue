<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

const goToRoute = (routeName: string) => router.push({ name: routeName })

const drawer = ref(true)
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar elevation="0" :border="true">
      <v-btn
        @click="goToRoute('login')"
        variant="text"
        slim
        class="ml-2 rounded-lg font-weight-bold"
      >
        Alpaca
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Dashboard"
          value="dashboard"
          @click="goToRoute('dashboard')"
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-math-log"
          title="Record Log"
          value="users"
          @click="goToRoute('dashboard')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          value="account"
          @click="goToRoute('dashboard')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="ma-5">
      <RouterView />
    </v-main>
  </v-layout>
</template>
