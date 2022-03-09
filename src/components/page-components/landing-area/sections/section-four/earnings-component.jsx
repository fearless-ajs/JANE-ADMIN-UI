import React from "react";

const EarningsComponent = () => {

    return (
        <div className="col-xl-4">

            <div className="card">
                <div className="card-header">
                    <div className="d-flex flex-wrap align-items-center">
                        <h5 className="card-title mb-0">Earnings By Item</h5>
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
                </div>
                <div className="card-body py-xl-0">
                    <div id="earning-item" data-colors='["#33a186","#3980c0"]' className="apex-chart"></div>

                </div>
            </div>

        </div>
    );
}

export default EarningsComponent;