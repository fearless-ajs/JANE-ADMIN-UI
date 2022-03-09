import React from "react";

const SalesByCategoryComponent = () => {

    return (
         <div className="col-xl-4">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex flex-wrap align-items-center">
                            <h5 className="card-title mb-0">Sales By Category</h5>
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

                        <div className="text-center mt-4">
                            <canvas className="mx-auto" id="sales-category" height="281"
                                    data-colors='["#3980c0","#51af98", "#4bafe1", "#B4B4B5", "#f1f3f4"]'></canvas>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <div className="px-2">
                                    <div className="d-flex justify-content-between align-items-center mt-sm-0 mt-2">
                                        <div className="d-flex">
                                            <i className="mdi mdi-circle font-size-10 mt-1 text-primary"></i>
                                            <div className="flex-1 ms-2">
                                                <p className="mb-0 text-truncate">Watch OS 8</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fw-bold">35.0%</span>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <div className="d-flex">
                                            <i className="mdi mdi-circle font-size-10 mt-1 text-success"></i>
                                            <div className="flex-1 ms-2">
                                                <p className="mb-0 text-truncate">Iphone 12</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fw-bold">15.0%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="px-2">
                                    <div className="d-flex justify-content-between align-items-center mt-sm-0 mt-2">
                                        <div className="d-flex">
                                            <i className="mdi mdi-circle font-size-10 mt-1 text-info"></i>
                                            <div className="flex-1 ms-2">
                                                <p className="mb-0 text-truncate">Horror Book</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fw-bold">8.0%</span>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <div className="d-flex">
                                            <i className="mdi mdi-circle font-size-10 mt-1 text-secondary"></i>
                                            <div className="flex-1 ms-2">
                                                <p className="mb-0 text-truncate">Smart 4k TV</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fw-bold">7.0%</span>
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

export default SalesByCategoryComponent;