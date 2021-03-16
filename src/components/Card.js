import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { ReactComponent as ImagePattern } from "./../imgs/bg-pattern-desktop.svg";
import { ReactComponent as ImageWoman } from "./../imgs/illustration-woman-online-desktop.svg";
import { ReactComponent as ImageBox } from "./../imgs/illustration-box-desktop.svg";
import { ReactComponent as ArrowDown } from "./../imgs/icon-arrow-down.svg";

const CardSection = styled.div`
  background: white;
  height: 650px;
  width: 1440px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "illust data";
  border-radius: 2rem;
  -webkit-box-shadow: -1px 24px 40px 0px rgba(34, 60, 80, 0.15);
  -moz-box-shadow: -1px 24px 40px 0px rgba(34, 60, 80, 0.13);
  box-shadow: -1px 24px 40px 0px rgba(34, 60, 80, 0.13);
`;

const Container = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
`;

const DataContainer = styled.div`
  grid-area: data;
  padding-top: 4rem;
  h1 {
    color: hsl(238, 29%, 16%);
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 3rem;
  }
`;

const Item = styled.div`
  width: 80%;
  border-bottom: 2px solid hsl(240, 5%, 91%);
`;

const Wrap = styled.div`
  h2 {
    font-weight: 400;
  }
  h2.selected {
    font-weight: 700;
  }
  h2.unselected:hover {
    color: hsl(14, 88%, 65%);
  }
  cursor: pointer;
  color: hsl(238, 29%, 16%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dropdown = styled.div`
  font-weight: 300;
  color: hsl(240, 6%, 50%);
`;

const Card = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      // If clicked question is alredy open, then close it
      return setClicked(null);
    }
    console.log();

    setClicked(index);
  };

  return (
    <CardSection className="cardContainer">
      <Container>
        <ImageBox className="imageBox" />
        <ImageContainer>
          <ImagePattern className="imagePattern" />
          <ImageWoman className="imageWoman" />
        </ImageContainer>
      </Container>

      <DataContainer>
        <h1>FAQ</h1>
        {Data.map((item, index) => {
          return (
            <Item key={index}>
              <Wrap onClick={() => toggle(index)} key={index}>
                {clicked === index ? (
                  <>
                    <h2 className="question selected">{item.question}</h2>
                    <ArrowDown className="arrowUp" />
                  </>
                ) : (
                  <>
                    <h2 className="question unselected">{item.question}</h2>
                    <ArrowDown className="arrowDown" />
                  </>
                )}
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <p>{item.answer}</p>
                </Dropdown>
              ) : null}
            </Item>
          );
        })}
      </DataContainer>
    </CardSection>
  );
};

export default Card;
