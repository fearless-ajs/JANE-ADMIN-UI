import React from "react";

const DailyReportComponent = () => {

    return (
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="avatar">
                                                    <span className="avatar-title bg-soft-primary rounded">
                                                        <i className="mdi mdi-shopping-outline text-primary font-size-24"></i>
                                                    </span>
                                </div>
                                <p className="text-muted mt-4 mb-0">Today Orders</p>
                                <h4 className="mt-1 mb-0">3,89,658 <sup className="text-success fw-medium font-size-14"><i
                                    className="mdi mdi-arrow-down"></i> 10%</sup></h4>
                                <div>
                                    <div className="py-3 my-1">
                                        <div id="mini-1" data-colors='["#3980c0"]'></div>
                                    </div>
                                    <ul className="list-inline d-flex justify-content-between justify-content-center mb-0">
                                        <li className="list-inline-item"><a href="#" className="text-muted">Day</a></li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Week</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Month</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Year</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="avatar">
                                                    <span className="avatar-title bg-soft-success rounded">
                                                        <i className="mdi mdi-eye-outline text-success font-size-24"></i>
                                                    </span>
                                </div>
                                <p className="text-muted mt-4 mb-0">Today Visitor</p>
                                <h4 className="mt-1 mb-0">1,648,29 <sup
                                    className="text-danger fw-medium font-size-14"><i
                                    className="mdi mdi-arrow-down"></i> 19%</sup></h4>
                                <div>
                                    <div className="py-3 my-1">
                                        <div id="mini-2" data-colors='["#33a186"]'></div>
                                    </div>
                                    <ul className="list-inline d-flex justify-content-between justify-content-center mb-0">
                                        <li className="list-inline-item"><a href="#" className="text-muted">Day</a></li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Week</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Month</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Year</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="avatar">
                                                    <span className="avatar-title bg-soft-primary rounded">
                                                        <i className="mdi mdi-rocket-outline text-primary font-size-24"></i>
                                                    </span>
                                </div>
                                <p className="text-muted mt-4 mb-0">Total Expense</p>
                                <h4 className="mt-1 mb-0">6,48,249 <sup className="text-success fw-medium font-size-14"><i
                                    className="mdi mdi-arrow-down"></i> 22%</sup></h4>
                                <div>
                                    <div className="py-3 my-1">
                                        <div id="mini-3" data-colors='["#3980c0"]'></div>
                                    </div>
                                    <ul className="list-inline d-flex justify-content-between justify-content-center mb-0">
                                        <li className="list-inline-item"><a href="#" className="text-muted">Day</a></li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Week</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Month</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Year</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="avatar">
                                                    <span className="avatar-title bg-soft-success rounded">
                                                        <i className="mdi mdi-account-multiple-outline text-success font-size-24"></i>
                                                    </span>
                                </div>
                                <p className="text-muted mt-4 mb-0">New Users</p>
                                <h4 className="mt-1 mb-0">$5,265,3 <sup
                                    className="text-danger fw-medium font-size-14"><i
                                    className="mdi mdi-arrow-down"></i> 18%</sup></h4>
                                <div>
                                    <div className="py-3 my-1">
                                        <div id="mini-4" data-colors='["#33a186"]'></div>
                                    </div>
                                    <ul className="list-inline d-flex justify-content-between justify-content-center mb-0">
                                        <li className="list-inline-item"><a href="#" className="text-muted">Day</a></li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Week</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Month</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#" className="text-muted">Year</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    );
}

export default DailyReportComponent;