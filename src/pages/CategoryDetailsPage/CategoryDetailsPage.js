import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import routes from '../../routes';
import apiService from '../../services/api-service';
import SearchNameByCategory from '../../components/SearchNameByCategory/SearchNameByCategory'
import styles from './CategoryDetailsPage.module.css';

export default class ShowDetailsPage extends Component {
  state = {
    values: [],
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
    const { values } = this.state;

    return (
      <div>
        <SearchNameByCategory />
        <button
          className={styles.button}
          type="button"
          onClick={this.handleGoCategoryPage}
        >
          <span> Go to Category page</span>
        </button>

        {values.map(item => (
          <li key={item.id} className={styles.list}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <img
              className={styles.img}
              src={`${item.image}`}
              width="280"
              alt={item.name}
            />
            <p>{item.consist}</p>
          </li>
        ))}
      </div>
    );
  }
}
