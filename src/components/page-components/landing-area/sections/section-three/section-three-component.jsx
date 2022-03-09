import React from "react";
import OrderActivitiesComponent from "./order-activities-component";
import TopUsersComponent from "./top-users-component";
import TopCountriesComponent from "./top-countries-component";

const SectionThreeComponent = () => {

    return (
        <div className="row">
            <div className="col-xl-8">
                <div className="row">

                    <OrderActivitiesComponent />

                    <TopUsersComponent />
                </div>
            </div>

            <TopCountriesComponent />

        </div>
    );
}

export default SectionThreeComponent;