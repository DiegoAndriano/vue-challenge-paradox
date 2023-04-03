<script setup lang='ts'>
import AdvancedSearchModal from './AdvancedSearchModal.vue'
import SearchComponent from './SearchComponent.vue'
import TableHeaders from './TableHeaders.vue'
import TableBody from './TableBody.vue'


</script>

<template>
  <AdvancedSearchModal></AdvancedSearchModal>
  <div class='px-6 py-6 w-full'>
    <SearchComponent></SearchComponent>
    <div class='overflow-x-scroll'>
      <table style='table-layout: fixed' class='px-6 py-3 w-full min-w-[1200px]'>
        <TableHeaders></TableHeaders>
        <TableBody></TableBody>
      </table>
    </div>
  </div>
</template>

<style>
table td, table th, table tr {
  overflow-x: scroll;
}
</style>
