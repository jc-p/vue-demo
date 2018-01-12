import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    notes: [],
    activeNotes: {},
    show: ''
};
const mutations = {
    //初始化
    INIT_STORE(state, data) {
        state.notes = data.notes;
        state.show = data.show;
        state.activeNotes = data.activeNotes;
    },
    //增加笔记
    ADD_NOTE(state) {
        var newNote = {
            id: +new Date(),
            title: '',
            content: '',
            favorite: false
        };
        state.notes.push(newNote);
        state.activeNotes = newNote;
    },
    //修改笔记
    EDIT_NOTE(state, note) {
        state.activeNote = note;
        // 修改原始数据
        for (var i = 0; i < state.notes.length; i++) {
            if (state.notes[i].id === note.id) {
                state.notes[i] = note;
                break;
            }
        };
    },
    //删除笔记
    DELETE_NOTE(state) {
        state.notes.$remove(state.activeNotes);
        state.activeNotes = state.notes[0] || {};
    },
    //收藏或者取消收藏
    TOGGLE_FAVORITE(state) {
        state.activeNotes.faovrite = !state.activeNotes.faovrite;
    },
    //切换显示的类型
    SET_SHOW_ALL(state, show) {
        state.show = show;
        if (show == 'faovrite') {
            state.activeNotes = state.notes.filter(note => note.faovrite)
        } else {
            state.activeNotes = state.notes[0] || {};
        }
    },
    //设置当前激活的笔记
    SET_ACTIVE_NOTE(state, note) {
        state.activeNotes = note;
    }
};

export default new Vuex.Store({
    state,
    mutations
})