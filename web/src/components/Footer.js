import React from "react";

class Footer extends React.Component {

    constructor(props) {
      super(props);

      this.state=
      {
        
      }      
    }

    render() {return (
                        <footer className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 text-center text-md-start fw-bold">
                                        <p className="mb-2 mb-md-0 fw-bold">Your company &copy; 2021</p>
                                    </div>
                                    <div className="col-md-6 text-center text-md-end text-gray-400">
                                        <p className="mb-0">Version x.y.z</p>
                                    </div>
                                </div>
                            </div>
                        </footer>
            );         
        }
}

export default Footer;


 



 