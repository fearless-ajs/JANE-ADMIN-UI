import React from "react";
import AppLayoutComponent from "../../components/layouts/app-layout-component";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import System from "../../models/System";
import SectionOneComponent
    from "../../components/page-components/landing-area/sections/section-one/section-one-component";
import SectionTwoComponent
    from "../../components/page-components/landing-area/sections/section-two/section-two-component";
import SectionThreeComponent
    from "../../components/page-components/landing-area/sections/section-three/section-three-component";
import SectionFourComponent
    from "../../components/page-components/landing-area/sections/section-four/section-four-component";

const LandingAreaPage = ({ currentUser }) => {

    return (
        <AppLayoutComponent>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0">Welcome !</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Jane</a></li>
                                    <li className="breadcrumb-item active">Welcome !</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>

                <SectionOneComponent />
                <SectionTwoComponent />
                <SectionThreeComponent />
                <SectionFourComponent />
            </div>
        </AppLayoutComponent>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(LandingAreaPage);