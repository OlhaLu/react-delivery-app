import React, { Component } from 'react';
import routes from '../../routes';
import apiService from '../../services/api-service';
import styles from './CategoryDetailsPage.module.css';

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
      <div>
        <button
          className={styles.button}
          type="button"
          onClick={this.handleGoCategoryPage}
        >
          <span> Go to Category page</span>
        </button>

        <form className={styles.search}
          onSubmit={this.handleSubmit}>
          <input className={styles.input}
            type="text"
            autoComplete="off"
            value={query}
            onChange={this.handleChange}
            placeholder="Search by name"
          />
          <button type="submit">
            Find ...
              </button>
        </form>

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
