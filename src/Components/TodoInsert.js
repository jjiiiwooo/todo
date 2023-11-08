import {useState, useCallback} from 'react';
import { FcAcceptDatabase } from "react-icons/fc";
import styled from "styled-components";

const TodoInserts = styled.form`
    display: flex;
    background: #495057;
`;

const Inputs = styled.input`
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    flex: 1;
`;

const Buttons = styled.button`
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
`;

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e => {
            onInsert(value); 
            setValue('');//value 값 초기화 

            //submit 이벤트는 브라우저에서 새로고침을 발생시킴
            //이를 방지하기 위해 이 함수를 호출
            e.preventDefault();
        },
        [onInsert, value],
    );

        return (
        <TodoInserts onSubmit={onSubmit}>
            <Inputs placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange} />
            <Buttons type="submit">
                <FcAcceptDatabase />
            </Buttons>
        </TodoInserts>
    );
};

export default TodoInsert;