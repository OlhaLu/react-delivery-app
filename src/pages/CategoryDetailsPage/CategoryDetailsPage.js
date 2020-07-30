import React, { Component } from 'react';
import routes from '../../routes';
import apiService from '../../services/api-service';

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
          type="button"
          onClick={this.handleGoCategoryPage}
        >
          <span> Go to Category page</span>
        </button>

        <form
          onSubmit={this.handleSubmit}>
          <input
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
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <img
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
