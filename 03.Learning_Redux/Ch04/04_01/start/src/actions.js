import C from './constants'
import { goal } from './store/reducers'

export function addDay(resort, date, powder=false, backcountry=false) {
    
    return {
        type: C.ADD_DAY,
        payload: {resort, date, powder, backcountry}
    }
}

export const removeDay = function(date) {
    return {
        type: C.REMOVE_DAY,
        payload: date
    }
}

export const setGoal = (goal) => ({
    type: C.SET_GOAL,
    payload: goal
})