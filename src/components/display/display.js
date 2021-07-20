import styled from 'styled-components';

export default function Display(props) {
    return (
        <Button onClick={props.onClick} darkMode={props.darkMode}>
            {props.children ? "Light Mode" : "Dark Mode"}
        </Button>
    );
};

const Button = styled.button`
    border: 1px solid ${ (prop) => !prop.darkMode ? 'black' : 'white' };
    border-radius: 5px;
    background: inherit;

    position: absolute;
    right: 30px;
    top: 15px;
    width: 90px;
    cursor: pointer;
    padding: 7.5px;
    color: ${ (prop) => !prop.darkMode ? 'black' : 'white' };
`;