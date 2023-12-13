<template>
  <div>
    <div class="text-white bg-secondary q-pa-sm rounded-borders">
      {{ t("welcome") }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
