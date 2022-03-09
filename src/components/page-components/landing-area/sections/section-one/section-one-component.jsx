import React from "react";
import WelcomeMessageComponent from "./welcome-message-component";
import DailyReportComponent from "./daily-report-component";

const SectionOneComponent = () => {

    return (
        <div className="row">
            <WelcomeMessageComponent />
            <DailyReportComponent />
        </div>
    );
}

export default SectionOneComponent;