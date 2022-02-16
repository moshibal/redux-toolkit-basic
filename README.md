# redux-toolkit-basic
// learning redux- toolkit for the state management in react app.
//easy steps to follow:
1 create a slice with the help of createSlice function provided by toolkit.
->this function take configuration object which is need to create the slice and returns the slice object.
const slice=createSlice({name:"could be any",initialState:{},reducers:{increase(){},decrease(){}}
2.In toolkit, we dont need to create the action, as it is provided by the slice that we create.
const action=slice.actions
3.we use configureStore function to create a store which we will pass to main component(App.js)
configureStore takes an object as argument with the property name reducer.
configureStore({reducer:{reducer1:slice.reducer,reducer2:anotherSlice.reducer}})
// as to use the store , we can use useSelecter hook
// as to dispatch the action, we can use useDispatch hook.
So, in the dispatch function , we could pass the action that we stored from slice.actions.
