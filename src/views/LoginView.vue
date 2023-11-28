<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Credentials } from '@/common/types'

const credentials: Ref<Credentials> = ref({} as Credentials)
</script>

<template>
  <v-row justify="center" class="mt-md-16 pa-4">
    <v-col cols="6"> Hallo </v-col>
  </v-row>
</template>
