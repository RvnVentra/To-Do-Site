import { useState, useRef } from 'react';
import styled from 'styled-components';

import Header from './components/common/header/header';
import Button from './components/common/button/button';

export default function App() {
    const [list, setList] = useState(null);
    const refList = useRef();

    const displayList = list ? list.map((li, index) => {
        return (
            <ListItems key={index}>
                {li}
            </ListItems>
        );
    }) : <ListItems>Add new items to extend list!</ListItems>;

    const setListHandler = () => {
        console.log(refList.current.value);
         
        const _list = list ? [...list] : [];

        _list.push(refList.current.value);
        setList(_list);
    };

    return (
        <>
            <Header>
                To-do List Creator
            </Header>

            <ContentContainer>
                <InputContainer>
                    <ItemInput ref={refList} placeholder="Add new items to list" />
                </InputContainer>
                {displayList}
            </ContentContainer>

            <ButtonContainer>
                <Button onClick={setListHandler}>Add a new Item</Button>
                <Button>Remove an existing Item</Button>
            </ButtonContainer>
        </>
    );
};

const ContentContainer = styled.div`
    border: 1px solid black;
    height: 45vh;
    width: 50%;
    margin: auto;
`;

const InputContainer = styled.div`
    display: block;
    border: none;
    border-bottom: 1px solid black;
    width: 98%;
    margin: auto;
`;

const ItemInput = styled.input`
    display: block;
    border: none;
    width: 95%;
    padding: 10px;
    margin: auto;
    outline: none;
`;

const ListItems = styled.li`
    padding-left: 15px;
    padding-top: 15px;
    list-style: none;
    text-decoration: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    margin-top: 50px;
`;