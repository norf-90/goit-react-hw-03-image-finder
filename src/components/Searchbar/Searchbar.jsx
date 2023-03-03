import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  Form,
  Input,
  SubmitButton,
  Container,
} from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

class Searchbar extends Component {
  state = {
    serchName: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // this.setState({ serchName: event.target.value });
    this.props.onSubmit(this.state.serchName);
    this.setState({ serchName: '' });
  };

  handleChange = evt => {
    this.setState({ serchName: evt.target.value });
  };

  render() {
    return (
      <Header>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Container>
            <SubmitButton type="submit" className="button">
              <ImSearch />
            </SubmitButton>

            <Input
              type="text"
              value={this.state.serchName}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </Container>
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
