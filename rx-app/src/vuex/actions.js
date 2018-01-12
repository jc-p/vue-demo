function makeAction(type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}

const initNote = {
    id: +new Date(),
    title: 'My NOTE',
    content: 'first note content',
    favorite: false,
};
//模拟初始化数据
const initData = {
    show: 'all',
    notes: [initNote],
    activeNote: initNote
}

export const initStore = ({ dispatch }) => {
    dispatch('INIT_STORE', initData);

}

//更新当前activeNote对象
export const updataActiveNote = makeACtion('SET_ACTIVE_NOTE');

//添加一个note对象
export const addNote = makeAction('ADD_NOTE');

//删除一个note对象
export const deleteNote = makeAction('DELETE_NOTE');
//删除一个note对象
export const toggleFavorite = makeAction('');
//删除一个note对象
export const editNote = makeAction('EDIT_NOTE');