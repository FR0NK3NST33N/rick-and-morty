import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Toast extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { store, children } = this.props;
        return (
            <div>
                {store.alertStore.alerts.map((alert, index) => {
                    return (
                        <div
                            aria-live="polite"
                            aria-atomic="true"
                            className="toastContainer"
                            key={index}
                        >
                            <div
                                className="toast"
                                style={{
                                    bottom: index * 100
                                }}
                            >
                                <div className="toast-header">
                                    <strong className="mr-auto">Alert</strong>
                                    <small>11 mins ago</small>
                                    <button
                                        type="button"
                                        className="ml-2 mb-1 close"
                                        data-dismiss="toast"
                                        aria-label="Close"
                                        onClick={() =>
                                            store.alertStore.removeAlert(index)
                                        }
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="toast-body">{alert}</div>
                            </div>
                        </div>
                        // <div
                        //     style={{
                        //         position: "relative",
                        //         zIndex: "100"
                        //     }}
                        // >
                        //     <div
                        //         style={{
                        //             position: "absolute",
                        //             top: "0",
                        //             right: "0"
                        //         }}
                        //         class="alert alert-dark"
                        //         role="alert"
                        //         onClick={() =>
                        //             store.alertStore.removeAlert(index)
                        //         }
                        //     >
                        //         {alert}
                        //     </div>
                        // </div>
                    );
                })}
                {children}
            </div>
        );
    }
}

export default Toast;
