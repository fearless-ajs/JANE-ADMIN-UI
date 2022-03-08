import React from "react";
import AppLayoutComponent from "../../components/layouts/app-layout-component";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import System from "../../models/System";

const LandingAreaPage = ({ currentUser }) => {

    return (
        <AppLayoutComponent>
            <div className="container-fluid">


                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-flex align-items-center justify-content-between">
                            <h4 class="mb-0">Welcome !</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">21-Day</a></li>
                                    <li class="breadcrumb-item active">dashboard !</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-xl-4">
                        <div class="card bg-primary">
                            <div class="card-body">
                                <div class="text-center py-3">
                                    <ul class="bg-bubbles ps-0">
                                        <li><i class="bx bx-grid-alt font-size-24"></i></li>
                                        <li><i class="bx bx-tachometer font-size-24"></i></li>
                                        <li><i class="bx bx-store font-size-24"></i></li>
                                        <li><i class="bx bx-cube font-size-24"></i></li>
                                        <li><i class="bx bx-cylinder font-size-24"></i></li>
                                        <li><i class="bx bx-command font-size-24"></i></li>
                                        <li><i class="bx bx-hourglass font-size-24"></i></li>
                                        <li><i class="bx bx-pie-chart-alt font-size-24"></i></li>
                                        <li><i class="bx bx-coffee font-size-24"></i></li>
                                        <li><i class="bx bx-polygon font-size-24"></i></li>
                                    </ul>
                                    <div class="main-wid position-relative">
                                        <h3 class="text-white">Admin Dashboard</h3>

                                        <h3 class="text-white mb-0"> Welcome, {currentUser.user.name}!</h3>

                                        <p class="text-white-50 px-4 mt-4">Here you can explore the 21-day challenge, set tasks and view user's profile</p>

                                        <div class="mt-4 pt-2 mb-2">
                                            <a href="#" class="btn btn-success">Explore today's challenge <i class="mdi mdi-arrow-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="avatar">
                                                    <span class="avatar-title bg-soft-primary rounded">
                                                        <i class="mdi mdi-shopping-outline text-primary font-size-24"></i>
                                                    </span>
                                        </div>
                                        <p class="text-muted mt-4 mb-0">Today Tasks</p>
                                        <h4 class="mt-1 mb-0">45 <sup class="text-success fw-medium font-size-14"><i class="mdi mdi-arrow-down"></i> 10%</sup></h4>
                                        <div>
                                            <div class="py-3 my-1">
                                                <div id="mini-1" data-colors='["#3980c0"]'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="avatar">
                                                    <span class="avatar-title bg-soft-success rounded">
                                                        <i class="mdi mdi-eye-outline text-success font-size-24"></i>
                                                    </span>
                                        </div>
                                        <p class="text-muted mt-4 mb-0">Total Users</p>
                                        <h4 class="mt-1 mb-0">1,648,29 <sup class="text-danger fw-medium font-size-14"><i class="mdi mdi-arrow-down"></i> 19%</sup></h4>
                                        <div>
                                            <div class="py-3 my-1">
                                                <div id="mini-2" data-colors='["#33a186"]'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="avatar">
                                                    <span class="avatar-title bg-soft-primary rounded">
                                                        <i class="mdi mdi-rocket-outline text-primary font-size-24"></i>
                                                    </span>
                                        </div>
                                        <p class="text-muted mt-4 mb-0">Active users</p>
                                        <h4 class="mt-1 mb-0">6,48,249 <sup class="text-success fw-medium font-size-14"><i class="mdi mdi-arrow-down"></i> 22%</sup></h4>
                                        <div>
                                            <div class="py-3 my-1">
                                                <div id="mini-3" data-colors='["#3980c0"]'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="avatar">
                                                    <span class="avatar-title bg-soft-success rounded">
                                                        <i class="mdi mdi-account-multiple-outline text-success font-size-24"></i>
                                                    </span>
                                        </div>
                                        <p class="text-muted mt-4 mb-0">Inactive users</p>
                                        <h4 class="mt-1 mb-0">265,3 <sup class="text-danger fw-medium font-size-14"><i class="mdi mdi-arrow-down"></i> 18%</sup></h4>
                                        <div>
                                            <div class="py-3 my-1">
                                                <div id="mini-4" data-colors='["#33a186"]'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AppLayoutComponent>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(LandingAreaPage);