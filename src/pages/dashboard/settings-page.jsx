import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import SpinnerComponent from "../../components/spinners/page-spinner-component/spinner.component";
import {selectCurrentSetting} from "../../redux/setting/setting.selectors";
import SettingsFormComponent from "../../components/page-components/settings/settings-form-component";
import AppLayoutComponent from "../../components/layouts/app-layout-component";
import {Link} from "react-router-dom";

const SettingsPage = ({ currentSetting }) => {

    return (
        <AppLayoutComponent>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0">Settings</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><Link to={'/'}>Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Settings</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>

                {
                    (currentSetting)? <SettingsFormComponent /> : <SpinnerComponent />
                }
            </div>
        </AppLayoutComponent>
    );
}

const mapStateToProps = createStructuredSelector({
    currentSetting: selectCurrentSetting,
});
export default connect(mapStateToProps)(SettingsPage);