import React, { PureComponent } from "react";
import { Container, Label, Icon, Search } from "./search-bar.styled";

/**
 * Functional Component
 *
 * Stateless Component
 */
export default class SearchBar extends PureComponent {
  state = { searchValue: "" };

  updateSearchValue(event) {
    const { value: searchValue } = event.target;

    this.setState(() => ({ searchValue }));
  }

  search() {
    this.props.onSearch(this.state.searchValue);
  }

  render() {
    return (
      <Container>
        <Search onChange={this.updateSearchValue.bind(this)} />
        <Label>Search</Label>
        <Icon onClick={this.search.bind(this)}>🦞</Icon>
      </Container>
    );
  }
}
