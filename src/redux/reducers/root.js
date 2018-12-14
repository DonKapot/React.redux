const initState = {
    todos: [],
    posts: [
        {id: '76876', title: 'Yellow duck hunting!', body: 'QuackQuack Quack Quack QuackQuack Quack vvQuack vQuack'},
        {id: '82586', title: 'Hi Ho', body: 'Hi hi hi hihihi hi!!!'},
        {id: '687', title: 'WAT', body: 'Everybody dancing!'}
    ]
};

const rootReducer = (state = initState, action)=>{
    // console.log(action);
    // if(action.type === 'ADD_TODO'){
    //     return{
    //         ...state,
    //         todos: [...state.todos, action.todo]
    //     }
    // }
    // if(action.type === 'ADD_POST'){
    //     return{
    //         ...state,
    //         posts: [...state.posts, action.post]
    //     }
    // }
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(p=>p.id!==action.id);
        return{
            ...state,
            posts: newPosts
        }
    }
    return state;
};

export default rootReducer;