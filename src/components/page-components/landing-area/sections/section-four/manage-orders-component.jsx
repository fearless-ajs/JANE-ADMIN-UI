import React from "react";

const ManageOrdersComponent = () => {

    return (
        <div className="col-xl-8">
            <div className="card">
                <div className="card-header">
                    <div className="d-flex flex-wrap align-items-center">
                        <h5 className="card-title mb-0">Manage Orders</h5>
                        <div className="ms-auto">
                            <div className="dropdown">
                                <a className="dropdown-toggle text-reset" href="#" id="dropdownMenuButton1"
                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="text-muted font-size-12">Sort By: </span> <span
                                    className="fw-medium"> Weekly<i
                                    className="mdi mdi-chevron-down ms-1"></i></span>
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
                <div className="card-body pt-xl-1">
                    <div className="table-responsive">
                        <table className="table table-striped table-centered align-middle table-nowrap mb-0">
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Product's Name</th>
                                <th>Variant</th>
                                <th>Type</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Sales</th>
                                <th>Status</th>
                                <th>Edit</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1.</td>
                                <td><a href="javascript: void(0);" className="text-body">Iphone 12 Max Pro</a></td>
                                <td>
                                    <i className="mdi mdi-circle font-size-10 me-1 align-middle text-secondary"></i> Gray
                                </td>
                                <td>
                                    Electronic
                                </td>
                                <td>
                                    1,564 Items
                                </td>
                                <td>
                                    $1200
                                </td>
                                <td>
                                    900
                                </td>

                                <td style={{width: "130px"}}>
                                    <div className="progress" style={{height: "6px"}}>
                                        <div className="progress-bar progress-bar-striped bg-success"
                                             role="progressbar" style={{width: "75%"}} aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="75">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="text-muted dropdown-toggle font-size-24" role="button"
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
                                <td>2.</td>
                                <td><a href="javascript: void(0);" className="text-body">New Red and White
                                    jacket </a></td>
                                <td>
                                    <i className="mdi mdi-circle font-size-10 me-1 align-middle text-danger"></i> Red
                                </td>
                                <td>
                                    Fashion
                                </td>
                                <td>
                                    568 Items
                                </td>
                                <td>
                                    $300
                                </td>
                                <td>
                                    650
                                </td>

                                <td style={{width: "130px"}}>
                                    <div className="progress" style={{height: "6px"}}>
                                        <div className="progress-bar progress-bar-striped bg-success"
                                             role="progressbar" style={{width: "70%"}} aria-valuenow="70"
                                             aria-valuemin="0" aria-valuemax="75">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="text-muted dropdown-toggle font-size-24" role="button"
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
                                <td>3.</td>
                                <td><a href="javascript: void(0);" className="text-body">Latest Series Watch OS
                                    8</a></td>
                                <td>
                                    <i className="mdi mdi-circle font-size-10 me-1 align-middle text-primary"></i> Dark
                                </td>
                                <td>
                                    Electronic
                                </td>
                                <td>
                                    1,232 Items
                                </td>
                                <td>
                                    $250
                                </td>
                                <td>
                                    350
                                </td>

                                <td style={{width: "130px"}}>
                                    <div className="progress" style={{height: "6px"}}>
                                        <div className="progress-bar progress-bar-striped bg-primary"
                                             role="progressbar" style={{width: "75%"}} aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="75">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="text-muted dropdown-toggle font-size-24" role="button"
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
                                <td>4.</td>
                                <td><a href="javascript: void(0);" className="text-body">New Horror Book</a></td>
                                <td>
                                    <i className="mdi mdi-circle font-size-10 me-1 align-middle text-success"></i> Green
                                </td>
                                <td>
                                    Book
                                </td>
                                <td>
                                    1,564 Items
                                </td>
                                <td>
                                    $1200
                                </td>
                                <td>
                                    900
                                </td>

                                <td style={{width: "130px"}}>
                                    <div className="progress" style={{height: "6px"}}>
                                        <div className="progress-bar progress-bar-striped bg-success"
                                             role="progressbar" style={{width: "50%"}} aria-valuenow="50"
                                             aria-valuemin="0" aria-valuemax="75">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="text-muted dropdown-toggle font-size-24" role="button"
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
                                <td>5.</td>
                                <td><a href="javascript: void(0);" className="text-body">Smart 4k Android TV</a>
                                </td>
                                <td>
                                    <i className="mdi mdi-circle font-size-10 me-1 align-middle text-primary"></i> Gray
                                </td>
                                <td>
                                    Electronic
                                </td>
                                <td>
                                    5,632 Items
                                </td>
                                <td>
                                    $700
                                </td>
                                <td>
                                    600
                                </td>

                                <td style={{width: "130px"}}>
                                    <div className="progress" style={{height: '6px'}}>
                                        <div className="progress-bar progress-bar-striped bg-pricing"
                                             role="progressbar" style={{width: "90%"}} aria-valuenow="90"
                                             aria-valuemin="0" aria-valuemax="75">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="text-muted dropdown-toggle font-size-24" role="button"
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
        </div>
    );
}

export default ManageOrdersComponent;