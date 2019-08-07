import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
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
        let { store } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                    <a className="navbar-brand" href="#">
                        Rick and Morty [MobX]
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
                            onClick={() =>
                                store.userStore
                                    .search(this.state.search)
                                    .then(() => {
                                        console.log(this.state.search);
                                        console.log(this.props.store);
                                    })
                            }
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

export default Header;
