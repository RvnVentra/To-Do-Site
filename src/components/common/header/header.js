import styled from 'styled-components';

export default function Header(props) {
    return (
        <Title>
            {props.children}
        </Title>
    );
};

const Title = styled.h1`
    font-size: 44px;
    text-align: center;
    padding-top: 50px;
    margin-bottom: 50px;
`;