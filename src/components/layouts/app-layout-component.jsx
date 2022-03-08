import React from "react";
import AppHeaderComponent from "./app-header-component";
import AppFooterComponent from "./app-footer-component";

const AppLayoutComponent = ({ children }) => {

    return (
        <div id="layout-wrapper">

            <AppHeaderComponent />
            <div className="main-content">
                <div className="page-content">
                    {children}
                </div>
            </div>
            <AppFooterComponent />

        </div>
    )
}

export default AppLayoutComponent