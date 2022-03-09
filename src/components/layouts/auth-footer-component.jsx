import React from "react";

const AuthFooterComponent = () => {

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="text-center text-muted p-4">
                    <p className="text-white-50">© <script>document.write(new
                        Date().getFullYear())</script> Jane Designers <i className="mdi mdi-heart text-danger"/> by Nancytec
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AuthFooterComponent;