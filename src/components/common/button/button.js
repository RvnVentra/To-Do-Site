import styled from 'styled-components';

export default function Button(props) {
    return (
        <ButtonPrimary onClick={props.onClick} darkMode={props.darkMode}>
            {props.children}
        </ButtonPrimary>
    );
};

const ButtonPrimary = styled.button`
     border: 1px solid ${ (prop) => !prop.darkMode ? 'black' : 'white' };
     border-radius: 5px;
     background: inherit;
     cursor: pointer;
     padding: 15px;
     color: ${ (prop) => !prop.darkMode ? 'black' : 'white' };
`;