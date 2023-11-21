<script setup>
import { BorderBox8 } from "@dataview/datav-vue3";
import ShowProfile from "./main/ShowProfile.vue";
import ItemWrap from "./main/ItemWrap/ItemWrap.vue";
import MainShow from "./main/MainShow.vue";
import EchartTabel from "./MainItems/EchartTabel.vue";
</script>
<template>
  <div style="flex: 0 1 100%; width: 99%; margin: auto">
    <BorderBox8>
      <ShowProfile />
    </BorderBox8>
  </div>
  <div style="display: flex; justify-content: space-evenly; margin: -10px 10px">
    <div style="flex: 0 1 23.5%; height: 390px; margin: 18px 5px">
      <!-- <ItemWrap sx="jdcwt_xrsb">
        <EchartTabel sx="jdcwt_xrsb"></EchartTabel>
      </ItemWrap> -->
      <!-- <ItemWrap sx="fjdcwgtf">
        <EchartTabel sx="fjdcwgtf"></EchartTabel>
      </ItemWrap> -->
      <ItemWrap sx="ljdq">
        <EchartTabel sx="ljdq"></EchartTabel>
      </ItemWrap>
      <!-- <ItemWrap sx="ffxtbf">
        <EchartTabel sx="ffxtbf"></EchartTabel>
      </ItemWrap> -->
      <ItemWrap sx="lmkwjc">
        <EchartTabel sx="lmkwjc"></EchartTabel>
      </ItemWrap>
      <!-- <ItemWrap
        sx="dljsjc">
        <EchartTabel sx="dljsjc"></EchartTabel>
      </ItemWrap> -->
    </div>
    <div style="flex: 0 1 45%; height: 770px; margin: 15px 5px">
      <MainShow>
        <slot></slot>
      </MainShow>
    </div>
    <div style="flex: 0 1 23.5%; height: 390px; margin: 18px 5px">
      <ItemWrap sx="rlljc">
        <EchartTabel sx="rlljc"></EchartTabel>
      </ItemWrap>
      <!-- <ItemWrap sx="rlljc">
        <EchartTabel sx="rlljc"></EchartTabel>
      </ItemWrap> -->
    </div>
  </div>
</template>

<style lang="less" scoped></style>
