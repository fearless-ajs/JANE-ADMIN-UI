import React from "react";

const SalesStatisticsComponent = () => {

    return (
         <div className="col-xl-8">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex flex-wrap align-items-center mb-3">
                            <h5 className="card-title mb-0">Sales Statistics</h5>
                            <div className="ms-auto">
                                <div className="dropdown">
                                    <a className="dropdown-toggle text-reset" href="#" id="dropdownMenuButton1"
                                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="text-muted font-size-12">Sort By:</span> <span
                                        className="fw-medium">Weekly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end"
                                         aria-labelledby="dropdownMenuButton1">
                                        <a className="dropdown-item" href="#">Monthly</a>
                                        <a className="dropdown-item" href="#">Yearly</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-xl-8">
                                <div>
                                    <div id="sales-statistics"
                                         data-colors='["#eff1f3","#eff1f3","#eff1f3","#eff1f3","#33a186","#3980c0","#eff1f3","#eff1f3","#eff1f3", "#eff1f3"]'
                                         className="apex-chart"></div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="mdi mdi-circle font-size-10 mt-1 text-primary"></i>
                                                <div className="flex-1 ms-2">
                                                    <p className="mb-0">Product Order</p>
                                                    <h5 className="mt-1 mb-0 font-size-16">43,541.58</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="badge badge-soft-primary">25.4%<i
                                                    className="mdi mdi-arrow-down ms-2"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 border-top pt-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="mdi mdi-circle font-size-10 mt-1 text-primary"></i>
                                                <div className="flex-1 ms-2">
                                                    <p className="mb-0">Product Pending</p>
                                                    <h5 className="mt-1 mb-0 font-size-16">17,351.12</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="badge badge-soft-primary">17.4%<i
                                                    className="mdi mdi-arrow-down ms-2"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 border-top pt-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="mdi mdi-circle font-size-10 mt-1 text-success"></i>
                                                <div className="flex-1 ms-2">
                                                    <p className="mb-0">Product Cancelled</p>
                                                    <h5 className="mt-1 mb-0 font-size-16">32,569.74</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="badge badge-soft-success">16.3%<i
                                                    className="mdi mdi-arrow-up ms-1"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 border-top pt-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="mdi mdi-circle font-size-10 mt-1 text-primary"></i>
                                                <div className="flex-1 ms-2">
                                                    <p className="mb-0">Product Delivered</p>
                                                    <h5 className="mt-1 mb-0 font-size-16">67,356.24</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="badge badge-soft-primary">65.7%<i
                                                    className="mdi mdi-arrow-up ms-1"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
    );
}

export default SalesStatisticsComponent;