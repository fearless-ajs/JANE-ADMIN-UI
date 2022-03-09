import React from "react";
import TopUsersComponent from "./top-users-component";
import TopCountriesComponent from "./top-countries-component";

const OrderActivitiesComponent = () => {

    return (
        <div className="col-lg-5">
            <div className="card">
                <div className="card-header">
                    <div className="d-flex flex-wrap align-items-center">
                        <h5 className="card-title mb-0">Order Activity</h5>
                        <div className="ms-auto">
                            <div className="dropdown">
                                <a className="font-size-16 text-muted dropdown-toggle" href="#"
                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body px-0">
                    <ol className="activity-feed mb-0 px-4" data-simplebar style={{maxHeight: "377px"}}>
                        <li className="feed-item">
                            <div className="d-flex justify-content-between feed-item-list">
                                <div>
                                    <h5 className="font-size-15 mb-1">Your Manager Posted</h5>
                                    <p className="text-muted mt-0 mb-0">James Raphael</p>
                                </div>
                                <div>
                                    <p className="text-muted mb-0">1 hour ago</p>
                                </div>
                            </div>
                        </li>
                        <li className="feed-item">
                            <div className="d-flex justify-content-between feed-item-list">
                                <div>
                                    <h5 className="font-size-15 mb-1">You have 5 pending order.</h5>
                                    <p className="text-muted mt-0 mb-0">Delivered</p>
                                </div>
                                <div>
                                    <p className="text-muted mb-0">6 hour ago</p>
                                </div>
                            </div>
                        </li>
                        <li className="feed-item">
                            <div className="d-flex justify-content-between feed-item-list">
                                <div>
                                    <h5 className="font-size-15 mb-1">New Order Received</h5>
                                    <p className="text-muted mt-0 mb-0">Pick Up</p>
                                </div>
                                <div>
                                    <p className="text-muted mb-0">1 day ago</p>
                                </div>
                            </div>
                        </li>
                        <li className="feed-item">
                            <div className="d-flex justify-content-between feed-item-list">
                                <div>
                                    <h5 className="font-size-15 mb-1">Your Manager Posted</h5>
                                    <p className="text-muted mt-0 mb-0">In Transit</p>
                                </div>
                                <div>
                                    <p className="text-muted mb-0">Yesterday</p>
                                </div>
                            </div>
                        </li>

                        <li className="feed-item">
                            <div className="d-flex justify-content-between feed-item-list">
                                <div>
                                    <h5 className="font-size-15 mb-1">You have 1 pending order.</h5>
                                    <p className="text-muted mt-0 mb-0">Dispatched</p>
                                </div>
                                <div>
                                    <p className="text-muted mb-0">2 hour ago</p>
                                </div>
                            </div>
                        </li>
                        <li className="feed-item pb-1">
                            <div className="d-flex justify-content-between feed-item-list">
                                <div>
                                    <h5 className="font-size-15 mb-1">New Order Received</h5>
                                    <p className="text-muted mt-0 mb-0">Order Received</p>
                                </div>
                                <div>
                                    <p className="text-muted mb-0">Today</p>
                                </div>
                            </div>
                        </li>

                    </ol>

                </div>
            </div>
        </div>
    );
}

export default OrderActivitiesComponent