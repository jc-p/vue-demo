<template>
  <div class="notes-list">
    <div class="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
          <!--all  -->
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default"
            @click="toggleShow('all')"
            :class="{active:show === 'all'}"
            >
            全部笔记
            </button>
          </div>

          <!-- favorites -->
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default"
            @click="toggleShow('favorite')"
            :class="{active:show ==='favorote'}"
            >
              收藏夹</button>
          </div>

          <!-- search -->
          <div class="btn-group btn-group-justified" role="group">
            <div class="input-group search">
              <input type="text" class="form-control" v-model="search"
              placeholder="输入搜索内容">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-search"></i>
              </span>
            </div>
          </div>
      </div>

    <!-- render list-->
    <div class="container">
      <div class="list-group">
        <div
        v-for="(note,index) in searchNotes" :key=index
        class="list-group-item"
        :class="{active:activeNote === note}"
        @click="updateActiveNote(note)">
        <h4 class="list-group-item-heading">
          {{note.title.trim().substring(0,30)}}
        </h4>
        </div>
      </div>
    </div>
    </div>
    
   
  </div>
</template>

<script>
import { mapGetters,mapState,mapActions} from 'vuex';

export default {
  name:'NoteList',
  data(){
    return {
      search:''
    }
  },
  computed:{
    ...mapGetters([
      'filteredNotes'
    ]),
    //stae 内部状态
    ...mapState([
      'show',
      'activeNote'
    ]),
    //计算属性，定义过滤
    searchNotes(){
      if(this.search.length>0){
        return this.filteredNotes.filter((note) => note.title.toLowerCase().indexOf(this.search)>-1)
      }else{
        return this.filteredNotes;
      }
    }
  },
  methods:{
    ...mapActions([
      'toggleListShow',
      'setActiveNote'
    ]),
    //切换列表，全部或者收藏
    toggleShow(type){
      this.toggleListShow({show:type});
    },
    //点击列表,更新当前激活文章
    updateActiveNote(note){
      this.setActiveNote({note})
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notes-list {
    flex:1;
    background-color: #F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }
  .list-header {
    padding: 5px 25px 25px 25px;
  }
  .list-header .search{
    margin-top: 20px;
  }
  .list-header h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    padding-bottom: 8px;
  }
  .container {
    height: calc(100% - 204px);
    max-height: calc(100% - 204px);
    overflow: auto;
    width: 100%;
    padding: 0;
  }
  .container .list-group-item{
    border: 0;
    border-radius: 0;
  }
  .list-group-item-heading{
    font-weight: 300;
    font-size: 15px;
  }
  .btn-group, .btn-group-vertical{
    vertical-align:bottom;
  }
</style>
