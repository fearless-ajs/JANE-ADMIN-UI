import React from "react";

const AppFooterComponent = () => {

    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <script>document.write(new Date().getFullYear())</script>
                        &copy; 21-Day Challenge.
                    </div>
                    <div className="col-sm-6">
                        <div className="text-sm-end d-none d-sm-block">
                            Powered with <i className="mdi mdi-heart text-danger"></i> by <a
                            href="https://themesbrand.com/" target="_blank" className="text-reset">Loveworld publishing</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AppFooterComponent