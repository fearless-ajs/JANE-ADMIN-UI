import React from "react";

const TopUsersComponent = () => {

    return (
        <div className="col-lg-7">
            <div className="card">
                <div className="card-header">
                    <div className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Top Users</h4>
                        <div className="flex-shrink-0">
                            <div className="dropdown">
                                <a className=" dropdown-toggle" href="#" id="dropdownMenuButton2"
                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="text-muted">All Members<i
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

                <div className="card-body px-0 pt-2">
                    <div className="table-responsive px-3" data-simplebar style={{maxHeight: "377px"}}>
                        <table
                            className="table table-borderless table-centered align-middle table-nowrap mb-0">
                            <tbody>
                            <tr>
                                <td><img src="assets/images/users/avatar-5.jpg"
                                         className="avatar-sm rounded-circle " alt="..." /></td>
                                <td>
                                    <h6 className="font-size-15 mb-1">Lolita Hamill</h6>
                                    <p className="text-muted font-size-13 mb-0"><i
                                        className="mdi mdi-map-marker"></i> Texas</p>
                                </td>
                                <td className="text-muted"><i className="icon-xs icon me-2 text-danger"
                                                              data-feather="trending-down"></i>$110.00
                                </td>
                                <td><span className="badge badge-soft-success font-size-12">Success</span>
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
                                <td><img src="assets/images/users/avatar-6.jpg"
                                         className="avatar-sm rounded-circle " alt="..." /></td>
                                <td>
                                    <h6 className="font-size-15 mb-1">Robert Mercer</h6>
                                    <p className="text-muted font-size-13 mb-0"><i
                                        className="mdi mdi-map-marker"></i> California</p>
                                </td>
                                <td className="text-muted"><i className="icon-xs icon me-2 text-success"
                                                              data-feather="trending-up"></i>$420.00
                                </td>
                                <td><span className="badge badge-soft-info font-size-12">Active</span></td>
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
                                <td><img src="assets/images/users/avatar-6.jpg"
                                         className="avatar-sm rounded-circle " alt="..." /></td>
                                <td>
                                    <h6 className="font-size-15 mb-1">Robert Mercer</h6>
                                    <p className="text-muted font-size-13 mb-0"><i
                                        className="mdi mdi-map-marker"></i> California</p>
                                </td>
                                <td className="text-muted"><i className="icon-xs icon me-2 text-success"
                                                              data-feather="trending-up"></i>$420.00
                                </td>
                                <td><span className="badge badge-soft-info font-size-12">Active</span></td>
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
                                <td><img src="assets/images/users/avatar-7.jpg"
                                         className="avatar-sm rounded-circle " alt="..." /></td>
                                <td>
                                    <h6 className="font-size-15 mb-1">Marie Kim</h6>
                                    <p className="text-muted font-size-13 mb-0"><i
                                        className="mdi mdi-map-marker"></i> Montana</p>
                                </td>
                                <td className="text-muted"><i className="icon-xs icon me-2 text-danger"
                                                              data-feather="trending-down"></i>$120.00
                                </td>
                                <td><span className="badge badge-soft-warning font-size-12">Pending</span>
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
                                <td><img src="assets/images/users/avatar-8.jpg"
                                         className="avatar-sm rounded-circle " alt="..." /></td>
                                <td>
                                    <h6 className="font-size-15 mb-1">Sonya Henshaw</h6>
                                    <p className="text-muted font-size-13 mb-0"><i
                                        className="mdi mdi-map-marker"></i> Colorado</p>
                                </td>
                                <td className="text-muted"><i className="icon-xs icon me-2 text-success"
                                                              data-feather="trending-up"></i>$112.00
                                </td>
                                <td><span className="badge badge-soft-info font-size-12">Active</span></td>
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
                                <td><img src="assets/images/users/avatar-2.jpg"
                                         className="avatar-sm rounded-circle " alt="..." /></td>
                                <td>
                                    <h6 className="font-size-15 mb-1">Marie Kim</h6>
                                    <p className="text-muted font-size-13 mb-0"><i
                                        className="mdi mdi-map-marker"></i> Australia</p>
                                </td>
                                <td className="text-muted"><i className="icon-xs icon me-2 text-danger"
                                                              data-feather="trending-down"></i>$120.00
                                </td>
                                <td><span className="badge badge-soft-success font-size-12">Success</span>
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
                                <td><img src="assets/images/users/avatar-1.jpg"
                                         className="avatar-sm rounded-circle " alt="..." /></td>
                                <td>
                                    <h6 className="font-size-15 mb-1">Sonya Henshaw</h6>
                                    <p className="text-muted font-size-13 mb-0"><i
                                        className="mdi mdi-map-marker"></i> India</p>
                                </td>
                                <td className="text-muted"><i className="icon-xs icon me-2 text-success"
                                                              data-feather="trending-up"></i>$112.00
                                </td>
                                <td><span className="badge badge-soft-danger font-size-12">Cancel</span>
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
        </div>
    );
}

export default TopUsersComponent;