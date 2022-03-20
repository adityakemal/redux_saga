export const INCREAMENT = 'INCREAMENT'
const DECREAMENT = 'DECREAMENT'

export const increament = ()=> ({ 
    type : INCREAMENT
})
export const decreament = ()=> ({
    type : DECREAMENT,
})

const initialState ={
    count : 0
}

export default (state = initialState, action) =>{
    if (action.type === INCREAMENT) {
        
        return {
            ...state,
            count : state.count + 1
        }
    }
    if (action.type === DECREAMENT) {
        
        return {
            ...state,
            count : state.count - 1
        }
    }
    return state
}