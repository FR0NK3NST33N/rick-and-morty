import React, { Component } from "react";
import { connect } from "react-redux";

import { search } from "../actions/users";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                    <a className="navbar-brand" href="#">
                        Rick and Morty [Redux]
                    </a>
                    <div className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={this.state.search}
                            onChange={this.updateSearch}
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            onClick={() => this.props.search(this.state.search)}
                        >
                            Search
                        </button>
                    </div>
                </nav>
                <br />
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    { search }
)(Header);
