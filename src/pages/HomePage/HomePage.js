import React from 'react';
import routes from '../../routes';
import imgBG from '../../assets/img/homeBG.jpg';

import styled from 'styled-components';

const HomePage = () => (
    <HomeWrapper>
        <ArticleContainer>
            <MainTitle>Food Web</MainTitle>
            <TitleDiscription>What does the word “food” mean to you? Is it a pleasure or just a fuel?
            This question has been disputable for a long time and everybody has his personal opinion about it.
            The majority of people would agree that we eat in order to have enough energy to complete our routine tasks.
            Nevertheless, nobody would agree to eat the same set of products from day to day.
            Moreover, food is certainly more than just a number of proteins, fats and carbohydrates.
            It’s the way to get some satisfaction after a long working day for the vast majority of people.</TitleDiscription>
            <SubTitle>In our catalog you will be able to choose the food that suits you by category and sort by those products that you like</SubTitle>
            <TextClick>Please click to open <CatalogLink href={routes.CATEGORY_PAGE}>catalog</CatalogLink></TextClick>

        </ArticleContainer>
    </HomeWrapper>
);

export default HomePage;

const HomeWrapper = styled.div`
background-image: url(${imgBG});
background-size: cover;
width: 1400px;
min-height: 980px;
`

const ArticleContainer = styled.div`
padding: 30px 10px;
margin: 0 auto;
width: 800px;
height: 600px;
`

const MainTitle = styled.h1`
color: #FFF8DC;
font-size: 36px;
`

const TitleDiscription = styled.p`
color: #F8F8FF;
font-size: 22px;
text-align: justify;
word-spacing: 8px;
line-height: 140%;
margin-bottom: 50px;
font-family: 'Fjalla One', sans-serif;
`

const SubTitle = styled.p`
font-size: 22px;
color: #ADD8E6;
font-family: 'Open Sans Condensed', sans-serif;
width: 500px;
margin-bottom: 30px;
`

const TextClick = styled.span`
font-size: 22px;
color: #F8F8FF;
`

const CatalogLink = styled.a`
text-decoration: none;
color:  #FFF8DC;

&:hover {
    background-color: #48D1CC;
    color: white;
  }
`

const ImgLink = styled.img`
width: 30px;
height: 30px;
`
