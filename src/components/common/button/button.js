import styled from 'styled-components';

export default function Button(props) {
    return (
        <ButtonPrimary onClick={props.onClick}>{props.children}</ButtonPrimary>
    );
};

const ButtonPrimary = styled.button`
     border: 1px solid black;
     border-radius: 5px;
     background: inherit;
     cursor: pointer;
     padding: 15px;
`;