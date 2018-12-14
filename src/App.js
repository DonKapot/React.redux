import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import {createStore} from 'redux';

// import { sync_DB_State, addMan, delMan, changeMan } from './components/menApp/logic';

//components
import NavBar from './components/NavBar';
import Home from './components/Home';
import MenList from './components/menApp/MenList';
import AddMan from './components/menApp/AddMan';
import Posts from './components/postsApp/Posts'
import Post from './components/postsApp/Post';
import PostsR from './components/postsApp/PostsRedux'
import PostR from './components/postsApp/PostRedux';


// //----------REDUX-----------------
// const initState = {
//     todos: [],
//     posts: []
// };

// const myReducer = (state = initState, action)=>{
//     // console.log(action, state);
//     if(action.type === 'ADD_TODO'){
//         return{
//             ...state,
//             todos: [...state.todos, action.todo]
//         }
//     }
//     if(action.type === 'ADD_POST'){
//         return{
//             ...state,
//             posts: [...state.posts, action.post]
//         }
//     }
// };

// const store = createStore(myReducer);

// store.subscribe(()=>{
//     console.log("state update", store.getState());
// });

// store.dispatch({type: 'ADD_TODO', todo: 'heloo  action'});
// store.dispatch({type: 'ADD_TODO', todo: 'buy smth'});
// store.dispatch({type: 'ADD_POST', post: 'Yellow duck hunting'});
// //--------------------------------


const menArr =  [
    { id: "23ui", name: "Gork", age: 22 },
    { id: "8eu2hj", name: "Mork", age: 21 },
    { id: "c90io3ke", name: "Slaanesh", age: 26 },
    { id: "90eioj", name: "Nurgle", age: 33 },
    { id: "89iu3hwe", name: "Emperor", age: 12000 }
];

class App extends Component {
    
    state = {
        initialMen: menArr,
        men: sessionStorage.getItem('men') ? JSON.parse(sessionStorage.getItem('men')) : menArr
    };
    
    deleteTempStorage = () => {
        sessionStorage.removeItem('men');
        this.setState({ men: this.state.initialMen });
    }

    sync_DB_State = (_newMen) => {
        sessionStorage.setItem('men', JSON.stringify(_newMen));
        let newManDB = JSON.parse(sessionStorage.getItem('men'));
        this.setState({ men: newManDB });
    }

    addMan = (man) => {
        let checkExistID = this.state.men.find(m => m.id === man.id) === undefined && man.name && man.age;
        if (checkExistID) {
            let newMen = [...this.state.men, man];
            this.sync_DB_State(newMen);
        }
    }

    delMan = (id, editInput) => {
        if (editInput === null) {
            let newMen = this.state.men.filter(m => m.id !== id);
            this.sync_DB_State(newMen);
        }
    }

    changeMan = (id, type, val) => {
        let value = type === "name" ? val : Number(val);
        let filteredMen = this.state.men.filter(m => m.id !== id);
        let selectedMan = this.state.men.filter(m => m.id === id)[0];
        selectedMan[type] = value;
        let newMen = [...filteredMen, selectedMan];
        this.sync_DB_State(newMen);
    }

    render() {
        return ( 
            <BrowserRouter>
                <div className = "App container">
                    
                    <NavBar deleteTempStorage = { this.deleteTempStorage }/> 
                    
                    <Route exact path = "/" component = { Home }/> 
                    
                    <Route path = "/MenApp" render={
                        () => <MenList delMan={this.delMan} changeMan={this.changeMan} men={this.state.men}/>
                    }/>
                    
                    <Route path = "/MenApp" render={
                        () => <AddMan addMan={this.addMan}/>
                    }/>
                    
                    <Switch> {/*Вместо exact для всех роутов*/}
                        <Route path="/posts/:post_id" component={Post}/> {/**/}
                        <Route path="/posts" component={Posts}/>
                    </Switch>

                    <Switch>
                        <Route path="/posts-redux/:post_id" component={PostR}/>  {/**/}
                        <Route path="/posts-redux" component={PostsR}/>
                    </Switch>
                    
                    {/* <Route path = "/filePath" render={
                        (props) => <SomeConponent ...props /> - Если нужно провалить все пропсы сверху в роут, если они есть
                    }/> */}
                </div> 
            </BrowserRouter>
        );
    }
}

export default App;