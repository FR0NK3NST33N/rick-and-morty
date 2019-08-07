import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Header from "../components/Header.jsx";

@inject("store")
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.store.userStore.getAll().then(() => {
            this.setState({ loading: false });
        });
    }

    render() {
        let { store } = this.props;
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="row">
                        {this.state.loading ? (
                            <h1>Loading...</h1>
                        ) : store.userStore.users.results.length ? (
                            store.userStore.users.results.map((user, index) => {
                                {
                                    return (
                                        <div className="col-md-3" key={user.id}>
                                            <div
                                                className="card"
                                                onClick={() =>
                                                    store.alertStore.addAlert(
                                                        "clicked"
                                                    )
                                                }
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

export default Home;
