import React from "react";

const WelcomeMessageComponent = () => {

    return (
        <div className="col-xl-4">
            <div className="card bg-primary">
                <div className="card-body">
                    <div className="text-center py-3">
                        <ul className="bg-bubbles ps-0">
                            <li><i className="bx bx-grid-alt font-size-24"></i></li>
                            <li><i className="bx bx-tachometer font-size-24"></i></li>
                            <li><i className="bx bx-store font-size-24"></i></li>
                            <li><i className="bx bx-cube font-size-24"></i></li>
                            <li><i className="bx bx-cylinder font-size-24"></i></li>
                            <li><i className="bx bx-command font-size-24"></i></li>
                            <li><i className="bx bx-hourglass font-size-24"></i></li>
                            <li><i className="bx bx-pie-chart-alt font-size-24"></i></li>
                            <li><i className="bx bx-coffee font-size-24"></i></li>
                            <li><i className="bx bx-polygon font-size-24"></i></li>
                        </ul>
                        <div className="main-wid position-relative">
                            <h3 className="text-white">Symox Dashboard</h3>

                            <h3 className="text-white mb-0"> Welcome Back, Peter Kelsey!</h3>

                            <p className="text-white-50 px-4 mt-4">Maecenas nec odio et ante tincidunt tempus. Donec
                                vitae sapien libero tincidunt.</p>

                            <div className="mt-4 pt-2 mb-2">
                                <a href="#" className="btn btn-success">View Profile <i
                                    className="mdi mdi-arrow-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeMessageComponent;