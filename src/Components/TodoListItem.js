import styled from "styled-components";
import { MdOutlineCheckBoxOutlineBlank,MdCheckBox} from "react-icons/md";
import { CiSquareRemove } from "react-icons/ci";

const TodoListItems = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center; // 세로 중앙 정렬

`;

const Checkbox = styled.div`
    cursor: pointer;
    flex: 1; // 차지할 수 있는 영역 모두 차지
    display: flex;
    align-items: center; // 세로 중앙 정렬
    &:checked {
        color: #adb5bd;
        text-decoration: line-through;
    }
`;

const Text = styled.div`
    margin-left: 0.5rem;
    flex: 1; // 차지할 수 있는 영역 모두 차지
`;

const Remove = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
`;

const Wrapper = styled.div`
  // 엘리먼트 사이사이에 테두리를 넣어줌
  & + & {
    border-top: 1px solid #dee2e6;
  }

`;

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    return (
        <Wrapper>
            <TodoListItems>
                <Checkbox  onClick={()=>onToggle(id)}>
                    {checked? <MdCheckBox/> :<MdOutlineCheckBoxOutlineBlank /> }
                 </Checkbox> 
                 <Text>{text}</Text>
            </TodoListItems>
            <Remove onClick={()=>onRemove(id)} >
             <CiSquareRemove color='red' />
            </Remove>
    </Wrapper>
    )
}

export default TodoListItem;