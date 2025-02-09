import styled from "styled-components";

export const Container = styled.div`
    min-height: 100px;
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background-color: ${(props) => 
        props.changeBackground ? '#4c264b' : 'transparent'};
    transition: background-color 0.6s ease-in-out;

    img {
        width: 25%;
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
    color: #ffffff;
`

export const Li = styled.li`
    font-weight: 600;
    cursor: pointer;
    font-size: 28px;
    position: relative;
    a {
        text-decoration: none;
        color: #ffffff;
    }

    &::after {
        content: ''; 
        width: 3px;
        width: ${ props => props.isActive ? '100%' : 0};
        background-color: #189B20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;

    }
    
    &:hover::after {
        width: 100%;
    }
`