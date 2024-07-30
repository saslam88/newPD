import styled from "styled-components";

export const MainTitle = styled.h2`
    font-size: 25px;
    text-align: center;
    color: #000;
    text-decoration: underline;
    padding: 20px 0;
`;

export const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    gap: 15px;
    max-width: 1200px;
    margin: 0 auto;
`;

export const PostCard = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #bfbfbf;
    min-height: 150px;
    width: 250px;
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0px 0px 5px #999;
`;

export const Title = styled.h1`
    font-size: 16px;
`;

export const Body = styled.p`
    font-size: 16px;
    margin-bottom: 15px;
`;

export const Button = styled.button`
    border: none;
    background: no-repeat;
    color: blue;
    margin-left: 5px;
    cursor: pointer;
`;

