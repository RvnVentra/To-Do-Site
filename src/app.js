import { useState, useRef } from 'react';
import styled from 'styled-components';

import Header from './components/common/header/header';
import Button from './components/common/button/button';

export default function App() {
    const [list, setList] = useState(null);
    const [curItem, setCurItem] = useState(null);

    const refItem = useRef();
    const refList = useRef();

    const setListHandler = () => {
        const input = refList.current.value.trim();
        console.log(input);
        if(input === "") {
            return console.log("Empty input");
        } else {
            const _list = list ? [...list] : [];

            _list.push(refList.current.value);
            setList(_list);
            refList.current.value = "";
        };
    };

    const setCurItemHandler = (e) => {
        console.log(e.target.id);
        const _curItem = e.target.id;

        setCurItem(_curItem);
    };

    const removeListItemHandler = () => {
        const _list = list ? [...list] : null;

        if(_list) {
            _list.splice(curItem, 1);
            setList(_list);
        } else {
            return console.log("An item must be selected prior to deleting");
        };
    };

    const displayList = list ? list.map((li, index) => {
        return (
            <ListItems key={index} id={index} onClick={(e) => setCurItemHandler(e)}>
                {li}
            </ListItems>
        );
    }) : <p>Add new items to extend list!</p>;

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
                <Button onClick={setListHandler} >Add a new Item</Button>
                <Button onClick={removeListItemHandler}>Remove an existing Item</Button>
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

const ListItems = styled.button`
    display: block;
    width: 98%;
    background: white;
    margin: 2.5px auto;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    margin-top: 50px;
`;