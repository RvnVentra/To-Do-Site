import styled from 'styled-components';

export default function Header(props) {
    return (
        <Title darkMode={props.darkMode}>
            {props.children}
        </Title>
    );
};

const Title = styled.h1`
    font-size: 44px;
    text-align: center;
    padding-top: 50px;
    margin-bottom: 50px;
    color: ${ (prop) => !prop.darkMode ? 'black' : 'white' };
`;