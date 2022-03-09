import React from "react";

const TopCountriesComponent = () => {

    return (
        <div className="col-xl-4">

            <div className="card">
                <div className="card-header">
                    <div className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Top Countries</h4>
                        <div className="flex-shrink-0">
                            <div className="dropdown">
                                <a className=" dropdown-toggle" href="#" id="dropdownMenuButton2"
                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="text-muted">View All<i
                                            className="mdi mdi-chevron-down ms-1"></i></span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-end"
                                     aria-labelledby="dropdownMenuButton2">
                                    <a className="dropdown-item" href="#">Members</a>
                                    <a className="dropdown-item" href="#">New Members</a>
                                    <a className="dropdown-item" href="#">Old Members</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body pt-1">

                    <div className="table-responsive">
                        <table className="table table-centered align-middle table-nowrap mb-0">

                            <tbody>
                            <tr>
                                <td><img src="assets/images/flags/us.jpg" alt="user-image" className="me-3"
                                         height="18" />US</td>
                                <td>
                                    26,568.84
                                </td>
                                <td>
                                    <i className="bx bx-trending-up text-success"></i>
                                </td>
                                <td>
                                    40%
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="text-muted dropdown-toggle font-size-20" role="button"
                                           data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><img src="assets/images/flags/germany.jpg" alt="user-image" className="me-3"
                                         height="18" />German</td>
                                <td>
                                    36,485.52
                                </td>
                                <td>
                                    <i className="bx bx-trending-up text-success"></i>
                                </td>
                                <td>
                                    50%
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="text-muted dropdown-toggle font-size-20" role="button"
                                           data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><img src="assets/images/flags/italy.jpg" alt="user-image" className="me-3"
                                         height="18" />Italy</td>
                                <td>
                                    17,568.84
                                </td>
                                <td>
                                    <i className="bx bx-trending-down text-danger"></i>
                                </td>
                                <td>
                                    20%
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="text-muted dropdown-toggle font-size-20" role="button"
                                           data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><img src="assets/images/flags/spain.jpg" alt="user-image" className="me-3"
                                         height="18" />Spain</td>
                                <td>
                                    75,521.28
                                </td>
                                <td>
                                    <i className="bx bx-trending-up text-success"></i>
                                </td>
                                <td>
                                    70%
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="text-muted dropdown-toggle font-size-20" role="button"
                                           data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <div className="card best-product">
                <div className="card-body">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-lg-8">
                            <h5 className="card-title best-product-title">Best Selling Product</h5>
                            <div className="row align-items-end mt-4">
                                <div className="col-4">
                                    <div className="mt-1">
                                        <h4 className="font-size-20 best-product-title">2,562</h4>
                                        <p className="text-muted mb-0">Sold</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-1">
                                        <h4 className="font-size-20 best-product-title">4,652</h4>
                                        <p className="text-muted mb-0">Stock</p>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="mt-1">
                                        <a href="#" className="btn btn-primary btn-sm">Buy
                                            Now</a>
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

export default TopCountriesComponent;