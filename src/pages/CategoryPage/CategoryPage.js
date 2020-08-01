import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../../services/api-service';
import imgBG from '../../assets/img/catalogBG.jpg';
import styled from 'styled-components';

export default class CategoryPage extends Component {
  state = {
    category: [],
  };

  componentDidMount() {
    this.fetchCategory();
  }

  fetchCategory = () => {
    const showCategories = this.props.match.params;

    apiService.getCategory(showCategories).then(category => {
      this.setState({ category });
    });
  };

  render() {
    const { category } = this.state;
    const { location } = this.props;

    return (
      <CategoryBG>
        <CategoryHeader>All Category</CategoryHeader>
        <CategoryWrapper>
          <CategoryList>
            {category.map(item => (
              <CategoryItem key={item.id}>
                <Link style={{ textDecoration: 'none', color: '#FFF8DC' }}
                  to={{
                    pathname: `/market/product_list/${item.id}`,
                    state: { from: location },
                  }}
                >
                  {item.name}
                </Link>
              </CategoryItem>
            ))}
          </CategoryList>
        </CategoryWrapper >
      </CategoryBG>
    );
  }
}

const CategoryBG = styled.div`
background-image: url(${imgBG});
background-size: cover;
width: 1400px;
min-height: 980px;
`

const CategoryHeader = styled.h2`
color: #FFF8DC;
font-size: 44px;
text-align: center;
padding: 50px 0;
text-transform: uppercase;
`

const CategoryWrapper = styled.div`
display: flex;
justify-content: flex-end;
`

const CategoryList = styled.ul`
list-style-type: none;
font-size: 30px;
margin: 0 250px;
`

const CategoryItem = styled.li`
line-height: 2;

&:hover {
  background-color: #556B2F;
}
`