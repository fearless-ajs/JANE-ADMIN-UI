import React from "react";
import {setCurrentSetting, updateSettingStart} from "../../../redux/setting/setting.actions";
import {setCurrentRoute} from "../../../redux/routing/routing.actions";
import {
    selectCurrentSetting,
    selectIsCurrentSettingFetching,
    selectIsUpdating, selectUpdateError
} from "../../../redux/setting/setting.selectors";
import {createStructuredSelector} from "reselect";
import { connect } from "react-redux";
import FormInput from "../../form-elements/form-input.component";
import System from "../../../models/System";
import ButtonSpinner from "../../spinners/button-spinner.component";

class SettingsFormComponent extends React.Component{
    constructor(props) {
        super(props);

        const setting  = this.props.currentSetting;
        this.state = {
            errorCode: false,
            loading: false,
            uploadPercentage: 0,
            name: setting.name,
            domain: setting.domain,
            email: setting.email,
            phone: setting.phone,
            notificationEmail: setting.notificationEmail,
            notificationEmailPassword: setting.notificationEmailPassword,
            facebookPageLink: setting.facebookPageLink,
            twitterPageLink: setting.twitterPageLink,
            instagramPageLink: setting.instagramPageLink,
            address: setting.address,
            location: setting.location,
            city: setting.city,
            state: setting.state,
            country: setting.country,
            postcode: setting.postcode,
            favicon: setting.favicon,
            icon: setting.icon,

            currentFavicon: '',
            currentIcon:''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    handleFileChange = (event) => {
        const { files, name } = event.target;
        this.setState({ [name]: files[0] });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.setState({ loading: true });

        // Create the formData
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('domain', this.state.domain);
        formData.append('email', this.state.email);
        formData.append('phone', this.state.phone);
        formData.append('notificationEmail', this.state.notificationEmail);
        formData.append('notificationEmailPassword', this.state.notificationEmailPassword);
        formData.append('facebookPageLink', this.state.facebookPageLink);
        formData.append('twitterPageLink', this.state.twitterPageLink);
        formData.append('instagramPageLink', this.state.instagramPageLink);
        formData.append('address', this.state.address);
        formData.append('location', this.state.location);
        formData.append('city', this.state.city);
        formData.append('state', this.state.state);
        formData.append('country', this.state.country);
        formData.append('postcode', this.state.postcode);

        formData.append('icon', this.state.icon);
        formData.append('favicon', this.state.favicon);

        this.props.updateSettingStart(formData)

    }

    render() {
        const { currentSetting, updateError, isUpdating } = this.props
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Primary data</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="mt-4 mt-xl-0">
                                            <h5 className="font-size-14 mb-4"><i
                                                className="mdi mdi-arrow-right text-primary me-1"></i> Primary data</h5>

                                                <div className="mb-3">
                                                    <label className="form-label">App Name</label>
                                                    <FormInput
                                                        placeholder="App name"
                                                        type="text"
                                                        name='name'
                                                        handleChange={this.handleChange}
                                                        className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                        value={this.state.name}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Domain</label>
                                                    <FormInput
                                                        placeholder="Domain name"
                                                        handleChange={this.handleChange}
                                                        name='domain'
                                                        type="text"
                                                        className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                        value={this.state.domain}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Icon <sup>(Max 200kb)</sup></label>
                                                    <img src={`${System.systemImagePath(currentSetting.favicon)}`} style={{
                                                        width: '3%',
                                                        marginLeft: '10px'
                                                    }}/>
                                                    <FormInput
                                                        type="file"
                                                        name='icon'
                                                        handleChange={this.handleFileChange}
                                                        className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Favicon <sup>(Max 200kb)</sup></label>
                                                    <img src={`${System.systemImagePath(currentSetting.favicon)}`} style={{
                                                        width: '3%',
                                                        marginLeft: '10px'
                                                    }}/>
                                                    <FormInput
                                                        type="file"
                                                        name='favicon'
                                                        handleChange={this.handleFileChange}
                                                        className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                    />
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Notification Email</label>
                                                            <FormInput
                                                                placeholder="Notification Email"
                                                                name='notificationEmail'
                                                                handleChange={this.handleChange}
                                                                type="text"
                                                                className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.notificationEmail}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Notification Email Password</label>
                                                            <FormInput
                                                                placeholder="Notification Email Password"
                                                                handleChange={this.handleChange}
                                                                name='notificationEmailPassword'
                                                                type="text"
                                                                className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.notificationEmailPassword}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Email</label>
                                                            <FormInput
                                                                placeholder="Email"
                                                                handleChange={this.handleChange}
                                                                name='email'
                                                                type="email"
                                                                className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.email}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Phone</label>
                                                            <FormInput
                                                                placeholder="Phone number"
                                                                handleChange={this.handleChange}
                                                                name='phone'
                                                                type="text"
                                                                className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.phone}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 ms-lg-auto">
                                        <div className="mt-4 mt-xl-0">
                                            <h5 className="font-size-14 mb-4"><i
                                                className="mdi mdi-arrow-right text-primary me-1"></i> Contacts</h5>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">City</label>
                                                            <FormInput
                                                                placeholder="City"
                                                                handleChange={this.handleChange}
                                                                name='city'
                                                                type="text"
                                                                className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.city}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">State</label>
                                                            <FormInput
                                                                placeholder="State"
                                                                handleChange={this.handleChange}
                                                                name='state'
                                                                type="text"
                                                                className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.state}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Country</label>
                                                            <FormInput
                                                                placeholder="Country"
                                                                handleChange={this.handleChange}
                                                                type="text"
                                                                name='country'
                                                                className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.country}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Address</label>
                                                            <FormInput
                                                                placeholder="Address"
                                                                handleChange={this.handleChange}
                                                                type="text"
                                                                name='address'
                                                                className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.address}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr />
                                                <h5 className="font-size-14 mb-4"><i
                                                    className="mdi mdi-arrow-right text-primary me-1"></i> Social contacts</h5>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Twitter Page</label>
                                                            <FormInput
                                                                placeholder="Twitter Page"
                                                                handleChange={this.handleChange}
                                                                name='twitterPageLink'
                                                                type="text"
                                                                className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.twitterPageLink}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Instagram Page</label>
                                                            <FormInput
                                                                placeholder="Instagram Page"
                                                                handleChange={this.handleChange}
                                                                type="text"
                                                                name='instagramPageLink'
                                                                className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.instagramPageLink}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Facebook Link</label>
                                                            <FormInput
                                                                placeholder="Facebook Page"
                                                                handleChange={this.handleChange}
                                                                name='facebookPageLink'
                                                                type="text"
                                                                className={' form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.facebookPageLink}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Post Code</label>
                                                            <FormInput
                                                                placeholder="Post Code"
                                                                handleChange={this.handleChange}
                                                                type="text"
                                                                name='postcode'
                                                                className={'form-control ' + ((updateError)? 'is-invalid' : '')}
                                                                value={this.state.postcode}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="mt-4">
                                                    <button type="submit" disabled={isUpdating} className="btn btn-primary w-md">  { isUpdating ? (<ButtonSpinner />): 'Save settings' }</button>
                                                </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    updateSettingStart: formData => dispatch(updateSettingStart({formData}))
});

const mapStateToProps = createStructuredSelector({
    currentSetting: selectCurrentSetting,
    isUpdating: selectIsUpdating,
    isFetching: selectIsCurrentSettingFetching,
    updateError: selectUpdateError
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsFormComponent);