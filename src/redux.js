import { useDispatch, useSelector } from "react-redux";
import { decrementCheck, increment } from "./app/counter-feature/action";

const Redux = () => {
    let count = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(decrementCheck(1))}>- </button>
            <span> {count.counter} </span>
            <button onClick={() => dispatch(increment(1))}> + </button>
        </div>
    )
}

export default Redux;