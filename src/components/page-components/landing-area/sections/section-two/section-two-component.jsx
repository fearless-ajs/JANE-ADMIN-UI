import React from "react";
import SalesStatisticsComponent from "./sales-statistics-component";
import SalesByCategoryComponent from "./sales-by-category-component";

const SectionTwoComponent = () => {

    return (
        <div className="row">
            <SalesStatisticsComponent />
            <SalesByCategoryComponent />
        </div>
    );
}

export default SectionTwoComponent;