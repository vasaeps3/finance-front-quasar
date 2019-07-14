<template>
  <q-page class="flex flex-center">
    <div>
      <q-item to="/category/expense-categories" class="items-center">
        <q-item-section avatar>
          <q-icon name="fas fa-list" />
        </q-item-section>
        <q-item-label>Category</q-item-label>
      </q-item>
      <q-item to="/category" class="items-center">
        <q-item-section avatar>
          <q-icon name="fas fa-list" />
        </q-item-section>
        <q-item-label>Category</q-item-label>
      </q-item>
    </div>
    <router-view />
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
};
</script>
