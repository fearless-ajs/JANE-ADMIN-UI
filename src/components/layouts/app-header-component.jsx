import React from "react";
import { Link } from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import { connect } from "react-redux";
import System from "../../models/System";
import {signOutStart} from "../../redux/user/user.actions";

const AppHeaderComponent = ({ currentUser, signOutStart }) => {
    const logout = () => {
        signOutStart()
    }
    return (
        <header id="page-topbar" className="ishorizontal-topbar">
            <div className="navbar-header">
                <div className="d-flex">

                    <div className="navbar-brand-box">
                        <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.svg" alt="" height="22" />
                                </span>
                            <span className="logo-lg">
                                    <img src="assets/images/logo-sm.svg" alt="" height="22" /> <span
                                        className="logo-txt">Jane</span>
                                </span>
                        </a>

                        <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.svg" alt="" height="22" />
                                </span>
                            <span className="logo-lg">
                                    <img src="assets/images/logo-sm.svg" alt="" height="22" /> <span
                                        className="logo-txt">Jane</span>
                                </span>
                        </a>
                    </div>

                    <button type="button" className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
                            data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                        <i className="fa fa-fw fa-bars"></i>
                    </button>

                    <div className="topnav">
                        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                            <div className="collapse navbar-collapse" id="topnav-menu-content">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link dropdown-toggle arrow-none" href="index.html"
                                           id="topnav-dashboard" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className='bx bx-tachometer'></i>
                                            <span data-key="t-dashboards">Dashboard</span>
                                        </a>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages"
                                           role="button">
                                            <i className='bx bx-grid-alt'></i>
                                            <span data-key="t-apps">Apps</span>
                                            <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-pages">

                                            <a href="apps-calendar.html" className="dropdown-item"
                                               data-key="t-calendar">Calendar</a>
                                            <a href="apps-chat.html" className="dropdown-item"
                                               data-key="t-chat">Chat</a>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-email"
                                                   role="button">
                                                    <span data-key="t-email">Email</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-email">
                                                    <a href="email-inbox.html" className="dropdown-item"
                                                       data-key="t-inbox">Inbox</a>
                                                    <a href="email-read.html" className="dropdown-item"
                                                       data-key="t-read-email">Read Email</a>
                                                </div>
                                            </div>

                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-ecommerce"
                                                   role="button">
                                                    Ecommerce <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-ecommerce">
                                                    <a href="ecommerce-products.html" className="dropdown-item"
                                                       data-key="t-products">Products</a>
                                                    <a href="ecommerce-product-detail.html" className="dropdown-item"
                                                       data-key="t-product-detail">Product Detail</a>
                                                    <a href="ecommerce-orders.html" className="dropdown-item"
                                                       data-key="t-orders">Orders</a>
                                                    <a href="ecommerce-customers.html" className="dropdown-item"
                                                       data-key="t-customers">Customers</a>
                                                    <a href="ecommerce-cart.html" className="dropdown-item"
                                                       data-key="t-cart">Cart</a>
                                                    <a href="ecommerce-checkout.html" className="dropdown-item"
                                                       data-key="t-checkout">Checkout</a>
                                                    <a href="ecommerce-shops.html" className="dropdown-item"
                                                       data-key="t-shops">Shops</a>
                                                    <a href="ecommerce-add-product.html" className="dropdown-item"
                                                       data-key="t-add-product">Add Product</a>
                                                </div>
                                            </div>

                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-invoice"
                                                   role="button"><span data-key="t-invoices">Invoices</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-invoice">
                                                    <a href="invoices-list.html" className="dropdown-item"
                                                       data-key="t-invoice-list">Invoice List</a>
                                                    <a href="invoices-detail.html" className="dropdown-item"
                                                       data-key="t-invoice-detail">Invoice Detail</a>
                                                </div>
                                            </div>

                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-contact"
                                                   role="button">
                                                    <span data-key="t-contacts">Contacts</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-contact">
                                                    <a href="contacts-grid.html" className="dropdown-item"
                                                       data-key="t-user-grid">User Grid</a>
                                                    <a href="contacts-list.html" className="dropdown-item"
                                                       data-key="t-user-list">User List</a>
                                                    <a href="contacts-profile.html" className="dropdown-item"
                                                       data-key="t-user-settings">User Settings</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#"
                                           id="topnav-uielement" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className='bx bxl-bootstrap'></i>
                                            <span data-key="t-bootstrap">Bootstrap</span>
                                            <div className="arrow-down"></div>
                                        </a>

                                        <div className="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl"
                                             aria-labelledby="topnav-uielement">
                                            <div className="ps-2 p-lg-0">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div>
                                                            <div className="menu-title">Components</div>
                                                            <div className="row g-0">
                                                                <div className="col-lg-4">
                                                                    <div>
                                                                        <a href="ui-alerts.html"
                                                                           className="dropdown-item"
                                                                           data-key="t-alerts">Alerts</a>
                                                                        <a href="ui-buttons.html"
                                                                           className="dropdown-item"
                                                                           data-key="t-buttons">Buttons</a>
                                                                        <a href="ui-cards.html"
                                                                           className="dropdown-item"
                                                                           data-key="t-cards">Cards</a>
                                                                        <a href="ui-carousel.html"
                                                                           className="dropdown-item"
                                                                           data-key="t-carousel">Carousel</a>
                                                                        <a href="ui-dropdowns.html"
                                                                           className="dropdown-item"
                                                                           data-key="t-dropdowns">Dropdowns</a>
                                                                        <a href="ui-grid.html" className="dropdown-item"
                                                                           data-key="t-grid">Grid</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div>
                                                                        <a href="ui-images.html"
                                                                           className="dropdown-item"
                                                                           data-key="t-images">Images</a>
                                                                        <a href="ui-modals.html"
                                                                           className="dropdown-item"
                                                                           data-key="t-modals">Modals</a>
                                                                        <a href="ui-offcanvas.html"
                                                                           className="dropdown-item"
                                                                           data-key="t-offcanvas">Offcanvas</a>
                                                                        <a href="ui-placeholders.html"
                                                                           className="dropdown-item"
                                                                           data-key="t-placeholders">Placeholders</a>
                                                                        <a href="ui-progressbars.html"
                                                                           className="dropdown-item"
                                                                           data-key="t-progress-bars">Progress Bars</a>
                                                                        <a href="ui-tabs-accordions.html"
                                                                           className="dropdown-item"
                                                                           data-key="t-tabs-accordions">Tabs &
                                                                            Accordions</a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <a href="ui-typography.html"
                                                                       className="dropdown-item"
                                                                       data-key="t-typography">Typography</a>
                                                                    <a href="ui-video.html" className="dropdown-item"
                                                                       data-key="t-video">Video</a>
                                                                    <a href="ui-general.html" className="dropdown-item"
                                                                       data-key="t-general">General</a>
                                                                    <a href="ui-colors.html" className="dropdown-item"
                                                                       data-key="t-colors">Colors</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#"
                                           id="topnav-components" role="button"
                                        >
                                            <i className='bx bx-layer'></i>
                                            <span data-key="t-components">Components</span>
                                            <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-components">
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-extended"
                                                   role="button">
                                                    <span data-key="t-extendeds">Extended</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-form">
                                                    <a href="extended-lightbox.html" className="dropdown-item"
                                                       data-key="t-lightbox">Lightbox</a>
                                                    <a href="extended-rangeslider.html" className="dropdown-item"
                                                       data-key="t-range-slider">Range Slider</a>
                                                    <a href="extended-sweet-alert.html" className="dropdown-item"
                                                       data-key="t-sweet-alert">SweetAlert 2</a>
                                                    <a href="extended-rating.html" className="dropdown-item"
                                                       data-key="t-rating">Rating</a>
                                                    <a href="extended-notifications.html" className="dropdown-item"
                                                       data-key="t-notifications">Notifications</a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-form"
                                                   role="button">
                                                    <span data-key="t-forms">Forms</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-form">
                                                    <a href="form-elements.html" className="dropdown-item"
                                                       data-key="t-basic-elements">Basic Elements</a>
                                                    <a href="form-validation.html" className="dropdown-item"
                                                       data-key="t-validation">Validation</a>
                                                    <a href="form-advanced.html" className="dropdown-item"
                                                       data-key="t-advanced-plugins">Advanced Plugins</a>
                                                    <a href="form-editors.html" className="dropdown-item"
                                                       data-key="t-editors">Editors</a>
                                                    <a href="form-uploads.html" className="dropdown-item"
                                                       data-key="t-file-upload">File Upload</a>
                                                    <a href="form-wizard.html" className="dropdown-item"
                                                       data-key="t-wizard">Wizard</a>
                                                    <a href="form-mask.html" className="dropdown-item"
                                                       data-key="t-mask">Mask</a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-table"
                                                   role="button">
                                                    <span data-key="t-tables">Tables</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-table">
                                                    <a href="tables-basic.html" className="dropdown-item"
                                                       data-key="t-bootstrap-basic">Bootstrap Basic</a>
                                                    <a href="tables-advanced.html" className="dropdown-item"
                                                       data-key="t-advanced-tables">Advance Tables</a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-charts"
                                                   role="button">
                                                    <span data-key="t-charts">Charts</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-charts">
                                                    <a href="charts-apex.html" className="dropdown-item"
                                                       data-key="t-apex-charts">Apex Charts</a>
                                                    <a href="charts-chartjs.html" className="dropdown-item"
                                                       data-key="t-chartjs-charts">Chartjs</a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-icons"
                                                   role="button">
                                                    <span data-key="t-icons">Icons</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-icons">
                                                    <a href="icons-feather.html" className="dropdown-item"
                                                       data-key="t-feather">Feather</a>
                                                    <a href="icons-boxicons.html" className="dropdown-item"
                                                       data-key="t-boxicons">Boxicons</a>
                                                    <a href="icons-materialdesign.html" className="dropdown-item"
                                                       data-key="t-material-design">Material Design</a>
                                                    <a href="icons-dripicons.html" className="dropdown-item"
                                                       data-key="t-dripicons">Dripicons</a>
                                                    <a href="icons-fontawesome.html" className="dropdown-item"
                                                       data-key="t-font-awesome">Font awesome</a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-map"
                                                   role="button">
                                                    <span data-key="t-maps">Maps</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-map">
                                                    <a href="maps-google.html" className="dropdown-item"
                                                       data-key="t-google">Google</a>
                                                    <a href="maps-vector.html" className="dropdown-item"
                                                       data-key="t-vector">Vector</a>
                                                    <a href="maps-leaflet.html" className="dropdown-item"
                                                       data-key="t-leaflet">Leaflet</a>
                                                </div>
                                            </div>
                                        </div>

                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more"
                                           role="button">
                                            <i className='bx bx-file'></i>
                                            <span data-key="t-pages">Pages</span>
                                            <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-more">
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-auth"
                                                   role="button">
                                                    <span data-key="t-authentication">Authentication</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                                    <a href="auth-login.html" className="dropdown-item"
                                                       data-key="t-login">Login</a>
                                                    <a href="auth-register.html" className="dropdown-item"
                                                       data-key="t-register">Register</a>
                                                    <a href="auth-recoverpw.html" className="dropdown-item"
                                                       data-key="t-recover-password">Recover Password</a>
                                                    <a href="auth-lock-screen.html" className="dropdown-item"
                                                       data-key="t-lock-screen">Lock Screen</a>
                                                    <a href="auth-logout.html" className="dropdown-item"
                                                       data-key="t-logout">Log Out</a>
                                                    <a href="auth-confirm-mail.html" className="dropdown-item"
                                                       data-key="t-confirm-mail">Confirm Mail</a>
                                                    <a href="auth-email-verification.html" className="dropdown-item"
                                                       data-key="t-email-verification">Email Verification</a>
                                                    <a href="auth-two-step-verification.html" className="dropdown-item"
                                                       data-key="t-two-step-verification">Two Step Verification</a>
                                                </div>
                                            </div>

                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#"
                                                   id="topnav-utility"
                                                   role="button">
                                                    <span data-key="t-utility">Utility</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-utility">
                                                    <a href="pages-starter.html" className="dropdown-item"
                                                       data-key="t-starter-page">Starter Page</a>
                                                    <a href="pages-maintenance.html" className="dropdown-item"
                                                       data-key="t-maintenance">Maintenance</a>
                                                    <a href="pages-comingsoon.html" className="dropdown-item"
                                                       data-key="t-coming-soon">Coming Soon</a>
                                                    <a href="pages-timeline.html" className="dropdown-item"
                                                       data-key="t-timeline">Timeline</a>
                                                    <a href="pages-faqs.html" className="dropdown-item"
                                                       data-key="t-faqs">FAQs</a>
                                                    <a href="pages-pricing.html" className="dropdown-item"
                                                       data-key="t-pricing">Pricing</a>
                                                    <a href="pages-404.html" className="dropdown-item"
                                                       data-key="t-error-404">Error 404</a>
                                                    <a href="pages-500.html" className="dropdown-item"
                                                       data-key="t-error-500">Error 500</a>
                                                </div>
                                            </div>

                                            <a href="layouts-vertical.html" className="dropdown-item"
                                               data-key="t-vertical">Vertical</a>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search" style={{fontSize: "18px"}}></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
                            <form className="p-3">
                                <div className="search-box">
                                    <div className="position-relative">
                                        <input type="text" className="form-control rounded"
                                               placeholder="Search here..." />
                                            <i className="mdi mdi-magnify search-icon"></i>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="dropdown d-inline-block language-switch">
                        <button type="button" className="btn header-item"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language"
                                 height="16" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">


                            <a href="javascript:void(0);" className="dropdown-item notify-item language"
                               data-lang="eng">
                                <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height="12" />
                                    <span className="align-middle">English</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                                <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12" />
                                    <span className="align-middle">Spanish</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                                <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1"
                                     height="12" /> <span className="align-middle">German</span>
                            </a>


                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                                <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12" />
                                    <span className="align-middle">Italian</span>
                            </a>


                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                                <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12" />
                                    <span className="align-middle">Russian</span>
                            </a>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon"
                                id="page-header-notifications-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bell" style={{fontSize: "18px"}}></i>
                            <span className="noti-dot bg-danger rounded-pill">3</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                             aria-labelledby="page-header-notifications-dropdown">
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="m-0 font-size-15"> Notifications </h5>
                                    </div>
                                    <div className="col-auto">
                                        <a href="javascript:void(0);" className="small"> Mark all as read</a>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar style={{maxHeight: "250px"}}>
                                <a href="#" className="text-reset notification-item">
                                    <div className="d-flex border-bottom align-items-start bg-light">
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/users/avatar-3.jpg"
                                                 className="me-3 rounded-circle avatar-sm" alt="user-pic" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">Justin Verduzco</h6>
                                            <div className="text-muted">
                                                <p className="mb-1 font-size-13">Your task changed an issue from "In
                                                    Progress" to <span
                                                        className="badge badge-soft-success">Review</span></p>
                                                <p className="mb-0 font-size-10 text-uppercase fw-bold"><i
                                                    className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="text-reset notification-item">
                                    <div className="d-flex border-bottom align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="avatar-sm me-3">
                                                    <span
                                                        className="avatar-title bg-primary rounded-circle font-size-16">
                                                        <i className="bx bx-shopping-bag"></i>
                                                    </span>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">New order has been placed</h6>
                                            <div className="text-muted">
                                                <p className="mb-1 font-size-13">Open the order confirmation or shipment
                                                    confirmation.</p>
                                                <p className="mb-0 font-size-10 text-uppercase fw-bold"><i
                                                    className="mdi mdi-clock-outline"></i> 5 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="text-reset notification-item">
                                    <div className="d-flex border-bottom align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="avatar-sm me-3">
                                                    <span
                                                        className="avatar-title bg-soft-success text-success rounded-circle font-size-16">
                                                        <i className="bx bx-cart"></i>
                                                    </span>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">Your item is shipped</h6>
                                            <div className="text-muted">
                                                <p className="mb-1 font-size-13">Here is somthing that you might light
                                                    like to know.</p>
                                                <p className="mb-0 font-size-10 text-uppercase fw-bold"><i
                                                    className="mdi mdi-clock-outline"></i> 1 day ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="#" className="text-reset notification-item">
                                    <div className="d-flex border-bottom align-items-start">
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/users/avatar-4.jpg"
                                                 className="me-3 rounded-circle avatar-sm" alt="user-pic" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">Salena Layfield</h6>
                                            <div className="text-muted">
                                                <p className="mb-1 font-size-13">Yay ! Everything worked!</p>
                                                <p className="mb-0 font-size-10 text-uppercase fw-bold"><i
                                                    className="mdi mdi-clock-outline"></i> 3 days ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="p-2 border-top d-grid">
                                <a className="btn btn-sm btn-link font-size-14 btn-block text-decoration-underline fw-bold text-center"
                                   href="javascript:void(0)">
                                    <span>View All <i className='bx bx-right-arrow-alt'></i></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item user text-start d-flex align-items-center"
                                id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src={System.userImagePath(currentUser.user.image)}
                                 alt="Header Avatar" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end pt-0">
                            <a className="dropdown-item" href="contacts-profile.html"><i
                                className='bx bx-user-circle text-muted font-size-18 align-middle me-1'></i> <span
                                className="align-middle">My Account</span></a>
                            <a className="dropdown-item" href="apps-chat.html"><i
                                className='bx bx-chat text-muted font-size-18 align-middle me-1'></i> <span
                                className="align-middle">Chat</span></a>
                            <a className="dropdown-item" href="pages-faqs.html"><i
                                className='bx bx-buoy text-muted font-size-18 align-middle me-1'></i> <span
                                className="align-middle">Support</span></a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item d-flex align-items-center" href="#"><i
                                className='bx bx-cog text-muted font-size-18 align-middle me-1'></i> <span
                                className="align-middle me-3">Settings</span><span
                                className="badge badge-soft-success ms-auto">New</span></a>
                            <a className="dropdown-item" href="auth-lock-screen.html"><i
                                className='bx bx-lock text-muted font-size-18 align-middle me-1'></i> <span
                                className="align-middle">Lock screen</span></a>
                            <a className="dropdown-item" href="#" onClick={logout}><i
                                className='bx bx-log-out text-muted font-size-18 align-middle me-1'></i> <span
                                className="align-middle">Logout</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderComponent)