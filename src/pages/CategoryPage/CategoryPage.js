import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import apiService from '../../services/api-service';
import styles from './CategoryPage.module.css';

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
      <>
        <h2 className={styles.header}>All Category</h2>
        <ul className={styles.listFilms}>
          {category.map(item => (
            <li key={item.id} className={styles.list}>
              <Link
                to={{
                  pathname: `/market/product_list/${item.id}`,
                  state: { from: location },
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
