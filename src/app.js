import { useState, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/common/header/header';
import Button from './components/common/button/button';
import Display from './components/display/display';

export default function App() {
    const [list, setList] = useState(null);
    const [curItem, setCurItem] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const refList = useRef();

    const setListHandler = () => {
        const input = refList.current.value.trim();
        
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
        const _curItem = e.target.id;

        setCurItem(_curItem);
    };

    const setDarkModeHandler = () => {
        setDarkMode(!darkMode);
    };

    const enterKeyHandler = (event) => {
        if(event.key === "Enter") {
            setListHandler();
        }
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
            <ListItems key={index} id={index} onClick={(e) => setCurItemHandler(e)} darkMode={darkMode}>
                {li}
            </ListItems>
        );
    }) : <p>Add new items to extend list!</p>;

    return (
        <>
            <GlobalStyle darkMode={darkMode} />

            <Display onClick={setDarkModeHandler} darkMode={darkMode}>
                {darkMode}
            </Display>
            
            <Header darkMode={darkMode}>
                To-do List Creator
            </Header>

            <ContentContainer darkMode={darkMode}>
                <InputContainer darkMode={darkMode}>
                    <ItemInput 
                        ref={refList} 
                        darkMode={darkMode} 
                        placeholder="Add new items to list"
                        onKeyPress={enterKeyHandler}
                    />
                </InputContainer>
                {displayList}
            </ContentContainer>

            <ButtonContainer>
                <Button onClick={setListHandler} darkMode={darkMode}>Add a new Item</Button>
                <Button onClick={removeListItemHandler} darkMode={darkMode}>Remove an existing Item</Button>
            </ButtonContainer>
        </>
    );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${ (prop) => prop.darkMode ? '#1B1F21' : 'white' };
    color: ${ (prop) => !prop.darkMode ? '#1B1F21' : 'white' };
    transition: border 400ms, color 400ms, background 600ms;
  };

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  };
`;

const ContentContainer = styled.div`
    border: 1px solid ${ (prop) => !prop.darkMode ? '#1B1F21' : 'white' };
    border-radius: 15px;

    height: 45vh;
    width: 55%;
    margin: auto;
`;

const InputContainer = styled.div`
    display: block;
    border: none;
    border-bottom: 1px solid ${ (prop) => !prop.darkMode ? '#1B1F21' : 'white' };
    width: 95%;
    margin: 5px auto;
`;

const ItemInput = styled.input`
    display: block;
    border: none;
    border-radius: 5px;
    background-color: ${ (prop) => prop.darkMode ? '#2E3032' : 'white' };

    width: 95%;
    padding: 10px;
    margin: auto;
    outline: none;
    color: ${ (prop) => !prop.darkMode ? '#1B1F21' : 'white' };
`;

const ListItems = styled.button`
    display: block;
    border: none;
    border-left: 1px solid ${ (prop) => !prop.darkMode ? '#1B1F21' : 'white' };
    border-right: 1px solid ${ (prop) => !prop.darkMode ? '#1B1F21' : 'white' };
    background: ${ (prop) => prop.darkMode ? '#1B1F21' : 'white' };

    width: 98%;
    margin: 3.5px auto;
    text-align: center;
    text-transform: capitalize;
    transition:  background-image 600ms, color 400ms;
    color: ${ (prop) => !prop.darkMode ? '#1B1F21' : 'white' };

    &:hover, :focus, :active {
        border: none;
        background-image: linear-gradient(to right, ${ (prop) => prop.darkMode ? '#1B1F21' : '#F4F9FC' }, ${ (prop) => !prop.darkMode ? '#1B1F21' : '#F4F9FC' }, ${ (prop) => prop.darkMode ? '#1B1F21' : '#F4F9FC' });
        
        color: ${ (prop) => prop.darkMode ? '#1B1F21' : 'white' };
        cursor: pointer;
    };
`;

const ButtonContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    margin-top: 50px;
`;