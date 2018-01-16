<template>
  <div class="note-editor">
    <div class="form-group">
      <input type="text" 
        name="title" 
        class="title form-control"
        placeholder="请输入标题"
        v-model="currenNote.title">
      <textarea name="content" class="form-control"  rows=""
        placeholder="请输入正文"
        @input="updateNote"></textarea>
    </div>
    
  </div>
</template>

<script>
import { mapActions,mapState,mapGetters } from 'vuex';
export default {
  name:'Editor',
  computed:{
    ...mapGetters([
      'activeNote'
    ]),
    currenNote(){
      return this.activeNote;
    }
  },
  methods:{
    ...mapActions({
      update:'updateNote'
    }),
    updateNote(){
      this.update({
        note:this.currenNote
      })
    }
  },

  data () {
    return {
      msg: '笔记内容'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .note-editor {
    flex:2;
  }
  .note-editor textarea {
    box-sizing: border-box;
    height: 100%;
    border: 0;
    border-radius: 0;
    padding-top: 15px;
  }
  .form-group {
    display: flex;
    flex-flow: column;
    height: 100%;
    margin-bottom: 0;
  }
  .form-group textarea {
    flex-grow: 2;
  }
  .title {
    border:0;
  }
</style>
