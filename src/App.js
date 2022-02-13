import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    display: flex;
`;
const animation = keyframes`
    0%{
      transform:rotate(0deg);
      border-radius:0px;
    }
    50%{
      border-radius:100px;
    }
    100%{
      transform:rotate(360deg);
      border-radius:0px;
    }
`;
const Box = styled.div`
    display: flex;
    height: 200px;
    width: 200px;
    background-color: tomato;
    justify-content: center;
    align-items: center;
    animation: ${animation} 1s linear infinite;
    span {
        font-size: 36px;
        // span:hover
        &:hover {
            font-size: 40px;
        }
        &:active {
            opacity: 0;
        }
    }
`;
function App() {
    return (
        <Wrapper>
            <Box>
                <span>🤗</span>
            </Box>
        </Wrapper>
    );
}

export default App;
