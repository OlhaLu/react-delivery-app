import React, { Component } from 'react';
import routes from '../../routes';
import apiService from '../../services/api-service';
import imgBG from '../../assets/img/detailsBG.jpg';
import styled from 'styled-components';

export default class ShowDetailsPage extends Component {
  state = {
    values: [],
    query: '',
  };

  componentDidMount() {
    this.fetchDetails();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location === this.props.location) {
      return;
    }

    this.fetchDetails();
  }

  fetchDetails = () => {
    const id = this.props.match.params.id;

    apiService.getCategoryById(id).then(values => {
      this.setState({ values });
    });
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { query } = this.state;

    apiService.getCategoryByIdAndSearchName(id, query).then(values => {
      this.setState({ values });
    });
  }

  handleGoCategoryPage = () => {
    const { state } = this.props.location;
    const { history } = this.props;

    if (state) {
      this.props.history.push(state.from);
      return;
    }

    history.push(`${routes.CATEGORY_PAGE}`);
  };

  render() {
    const { values, query } = this.state;

    return (
      <DetainsBG>
        <ButtonToBackHome
          type="button"
          onClick={this.handleGoCategoryPage}
        >
          <ButtonText>back to сategory</ButtonText>
        </ButtonToBackHome>
        <FormBlock>
          <form
            onSubmit={this.handleSubmit}>
            <Input
              type="text"
              autoComplete="off"
              value={query}
              onChange={this.handleChange}
              placeholder="Search by name"
            />
            <FormButton type="submit">
              Find
          </FormButton>
          </form>
        </FormBlock>
        <DetailsSearch>
          <DetailsList>
            {values && (values.map(item => (
              <DetailsItem key={item.id}>
                <DetailsHeader>{item.name}</DetailsHeader>
                <DetailsPrice>Price {item.price}</DetailsPrice>
                <DetailsImg
                  src={`${item.image}`}
                  width="180"
                  alt={item.name}
                />
                <DetailsConsist>Ingredients: <br /> {item.consist}</DetailsConsist>
              </DetailsItem>
            ))
            )}
          </DetailsList>
        </DetailsSearch>
      </DetainsBG >
    );
  }
}

const DetainsBG = styled.div`
background-image: url(${imgBG});
background-size: cover; 
width: 1400px;
min-height: 980px;
`

const ButtonToBackHome = styled.button`
  display: inline-block;
  padding: 15px 20px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #003300;
  border: none;
  box-shadow: 0 1px #999;
  margin: 30px 0 15px 30px;

 &:hover {
  background-color:  #4CAF50; 
  letter-spacing: 0.5px;
  -webkit-box-shadow: 0px 5px 30px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 30px -10px rgba(0,0,0,0.57);
  box-shadow: 5px 20px -10px rgba(0,0,0,0.57);
  transition: all 0.4s ease 0s;
  }

&:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(1px);
}
`

const ButtonText = styled.span`
text-transform: uppercase;
`

const FormBlock = styled.div`
margin: 0 30px;
`

const FormButton = styled.button`
border: none;
background: #222;
height: 50px;
width: 50px;
color: #4f5b66;
opacity: 1;
font-size: 18px;
cursor: pointer;
box-shadow: 0 2px 0 #000;

-webkit-transition: all .55s ease;
-moz-transition: all .55s ease;
-ms-transition: all .55s ease;
-o-transition: all .55s ease;
transition: all .55s ease;

&:hover {
  background: #292929;
	color: #5f5;
	outline: none;
  }
`

const Input = styled.input`
  width: 300px;
  height: 50px;
  border: none;
  font-size: 18px;
  text-shadow: 0 -1px 0 #000;
  float: left;
  color: #63717f;
  padding-left: 25px;
  background: #222;	
	background: linear-gradient(#333, #222);	
	border: 1px solid #444;
	border-radius: 5px 0 0 5px;
	box-shadow: 0 2px 0 #000;

  &:hover {
    background: #292929;
    color: #5f5;
    outline: none;
    }

  &:focus {
  animation: glow 800ms ease-out infinite alternate;
	background: #222922;
	background: linear-gradient(#333933, #222922);
	border-color: #393;
	box-shadow: 0 0 2px rgba(0,255,0,.2), inset 0 0 2px rgba(0,255,0,.1), 0 2px 0 #000;
	color: #efe;
	outline: none;
  }
`

const DetailsSearch = styled.div`
`

const DetailsList = styled.ul`
margin: 50px 0;
column-count: 3;
`

const DetailsItem = styled.li`
display: inline-block;
width: 90%;
height: 100%;
padding: 10px;
margin: 0 10px 10px 0;
list-style-type: none;
text-align: center;
box-shadow: 0 14px 20px#cbd2d6, 0 10px 10px #cbd2d6;
background: #222922;
`

const DetailsHeader = styled.h3`
font-size: 20px;
color: #FFF8DC;
`

const DetailsPrice = styled.p`
font-size: 18px;
color: #ADD8E6;
`

const DetailsImg = styled.img`
width: 250px;
`

const DetailsConsist = styled.p`
font-size: 18px;
color: #ADD8E6;
text-align: left;
padding: 10px;
`