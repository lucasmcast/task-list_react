import { ADD_TASK } from "../actionsTypes"

export default function(state, action){
    switch (action.type) {
        case ADD_TASK: {
            const {description} = action.payload;
            console.log(description)
        }
    }
}