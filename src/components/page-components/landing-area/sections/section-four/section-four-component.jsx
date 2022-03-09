import React from "react";
import EarningsComponent from "./earnings-component";
import ManageOrdersComponent from "./manage-orders-component";

const SectionFourComponent = () => {

    return (
        <div className="row">
            <EarningsComponent />
            <ManageOrdersComponent />
        </div>
    );
}

export default SectionFourComponent;