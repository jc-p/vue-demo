<template>
  <div id="app">
    <Toolbar/>
    <NoteList/>
    <Editor/> 
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import NoteList from './components/NotesList'
import Editor from './components/Eidtor'
export default {
  components:{
    Toolbar,
    NoteList,
    Editor
  },
}
</script>

<style>

</style>
