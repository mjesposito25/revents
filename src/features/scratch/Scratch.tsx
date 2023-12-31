import { Button } from "semantic-ui-react"
import { useAppDispatch, useAppSelector } from "../../app/store/store"
import { decrement, increment, incrementByAmount } from "./testSlice";
import { openModal } from "../../app/common/modals/modalSlice";

export default function Scratch() {
    const {data} = useAppSelector(state => state.test)
    const dispatch = useAppDispatch();

  return (
    <div>
        <h1>Scratch Page</h1>
        <h3>The data is: {data}</h3>
        <Button onClick={() => dispatch(increment())} color='green' content='Incremenet' />
        <Button onClick={() => dispatch(decrement())} color='red' content='Decremenet' />
        <Button onClick={() => dispatch(incrementByAmount(5))} color='teal' content='Incremenet by 5' />
        <Button onClick={() => dispatch(openModal({type: 'TestModal', data: data}))} color='orange' content='Open Modal' />
    </div>
  )
}