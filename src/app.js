import React, { Component } from "react";
import { Page } from "./app.styled";
import SearchBar from "./components/search-bar";
import fetch from "unfetch";

export default class App extends Component {
  state = { events: null };

  search(query) {
    fetch(`https://www.eventbriteapi.com/v3/events/search`, {
      method: "POST",
      credentials: "include",
      headers: {
        "allow-access": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.EVENT_BRITE_API}`
      },
      body: JSON.stringify({
        q: encodeURI(query)
      })
    })
      .then(response => response.json())
      .then(events => this.setState({ events }));
  }

  render() {
    return (
      <Page>
        <SearchBar onSearch={this.search.bind(this)} />
        {JSON.stringify(this.state.events, null, 2)}
      </Page>
    );
  }
}
