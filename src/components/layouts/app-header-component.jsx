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
                                        className="logo-txt">21-Day</span>
                                </span>
                        </a>

                        <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.svg" alt="" height="22" />
                                </span>
                            <span className="logo-lg">
                                    <img src="assets/images/logo-sm.svg" alt="" height="22" /> <span
                                        className="logo-txt">21-Day</span>
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
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item user text-start d-flex align-items-center"
                                id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src={System.userImagePath(currentUser.user.image)}
                                 alt="Header Avatar" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end pt-0">
                            <div className="dropdown-divider"></div>
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