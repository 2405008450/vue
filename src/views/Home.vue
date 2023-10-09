<template>
  <div style="width: 100%; height: 100%">
    <div class="ml-5">
      <mv3></mv3>
    </div>
    <div class="ml-5">
      <mv2></mv2>
    </div>

    <div class="ml-5">
      <mv></mv>
    </div>
  </div>
</template>


<script>
import mv from "@/views/mv.vue";
import mv2 from "@/views/mv2.vue";
import mv3 from "@/views/mv3.vue";
export default {
  name:"Home",
  components:{mv,mv2,mv3}
}
</script>

<style scoped>


</style>