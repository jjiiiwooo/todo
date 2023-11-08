import TodoListItem from "./TodoListItem";
import styled from "styled-components";


const TodoLists = styled.div`
 min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList =  ({todos, onRemove, onToggle}) => {
    return (
        <TodoLists>
           {todos.map(todo => (
            <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToogle={onToggle} />
           ))}
        </TodoLists>
    )
}

export default TodoList