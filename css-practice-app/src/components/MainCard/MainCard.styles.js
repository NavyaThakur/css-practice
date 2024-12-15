import styled from "styled-components";

export const MainCardWrapper = styled.div`
    width: 40%;
    height: 600px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #f7bdbd;
    font-size: 32px;
    font-family: 'Brush Script MT', cursive;
    margin: 100px;
    &:hover {
        box-shadow: rgb(255 0 0 / 35%) 0px 5px 15px;
    }
    &.confetti-reaction {
        display: none;
    }
`;

export const HeartSmileText = styled.div`
    font-size: 36px;
`;

export const SmallText = styled.div`
    width: 40%;
    border: 1px solid;
    background-color: aliceblue;
    font-size: 20px;
    padding: 16px;
    font-family: CopperPlate Gothic Light;
    line-height: 24px;
    &:hover {
        text-shadow: 0 0 2px #f0420b, 0 0 1px #ff3b00, 0 0 1px #ff0000, 0 0 2px #ffffff, 0 0 3px #ffffff;
    }
`;

export const MineText = styled.div`
    width: 200px;
    height: 200px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed pink;
    font-family: 'Brush Script MT', cursive;
    font-size: 24px;
    color: darksalmon;
    background: antiquewhite;
    text-transform: capitalize;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    line-height: 40px;
`;
