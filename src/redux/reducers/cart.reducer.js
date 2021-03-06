import { createSlice } from '@reduxjs/toolkit'



export const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addToCart: (state , action)=> {
            const p = state.items.findIndex(item => item.id === action.payload.id);
            if (p >= 0){
                state.items[p].count = state.items[p].count + 1; 
            }else{
                state.items.push({...action.payload , count: 1});
            }
        },
        decreaseItem: (state , action)=> {
            const p = state.items.findIndex(item => item.id === action.payload.id);
            if(p > -1){
                let value = state.items[p].count;
                if(value - 1){
                    state.items[p].count = state.items[p].count - 1; 
                }else{
                    state.items.splice(p, 1);
                }
            }
        },
        removeItem: (state , action)=> {
            const p = state.items.findIndex(item => item.id === action.payload.id);
            if(p > -1){
                state.items.splice(p, 1);
            }
        },
    },
});


export const {addToCart , removeItem , decreaseItem } =  CartSlice.actions;
export default CartSlice.reducer;