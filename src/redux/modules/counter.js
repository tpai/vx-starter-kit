export const INCR = "app/counter/increment";
export const DECR = "app/counter/decrement";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case INCR:
            state += 1;
            return (state >= 10) ? 9 : state;
        case DECR:
            state -= 1;
            return (state <= -10) ? -9 : state;
        default:
            return state;
    }
}

export default reducer;

export const increment = () => {
    return { type: INCR };
}
export const decrement = () => {
    return { type: DECR };
}
