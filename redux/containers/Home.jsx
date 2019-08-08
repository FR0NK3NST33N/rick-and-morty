import React, { Component } from "react";
import { connect } from "react-redux";

import { getAll } from "../actions/users";

import Header from "../components/Header.jsx";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAll();
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="row">
                        {this.props.loading ? (
                            <h1>Loading...</h1>
                        ) : this.props.users.results.length ? (
                            this.props.users.results.map((user, index) => {
                                {
                                    return (
                                        <div className="col-md-3" key={user.id}>
                                            <div
                                                className="card"
                                                // onClick={() =>
                                                //     store.alertStore.addAlert(
                                                //         "clicked"
                                                //     )
                                                // }
                                            >
                                                <img
                                                    className="card-img-top"
                                                    src={user.image}
                                                    alt={user.image}
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        {user.name}&nbsp;
                                                        <span className="badge badge-secondary">
                                                            {user.gender}
                                                        </span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        ) : (
                            <h3>No Users Found</h3>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    users: state.userReducer.users,
    loading: state.userReducer.loading
});

export default connect(
    mapStateToProps,
    { getAll }
)(Home);
