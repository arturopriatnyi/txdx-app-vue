<template>
  <div class="app">
    <Txdx />
  </div>
</template>

<script>
import Txdx from './components/Txdx';

export default {
  name: 'App',
  components: { Txdx },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,900&display=swap');
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
