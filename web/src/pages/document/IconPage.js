import React from "react";
import DashboardLayout from '../../layout/DashboardLayout';
 

class IconPage extends React.Component {
    constructor(props) {
      super(props);

      this.state=
      {
             
      }      
    }

    render() {return (<DashboardLayout>
                             
                             <div className="page-header">
                                <h1 className="page-heading">Icon</h1>
                              </div>
                             <section className="mb-5"> 
                              <div className="row">
                                <div className="col-xl-10">
                                  <div className="card">
                                    <div className="card-header"></div>
                                    <div className="card-body"> 
                                          <div className="docs-item" id="gettingstarted">
                                            <h5 className="mb-4">Getting started</h5>
                                            <div className="docs-desc"><p className="lead">we use fontawesome lib from <a href="https://fontawesome.com/">https://fontawesome.com/</a> </p></div>                  
                                            <h6>Example</h6>
                                            <p className="text-muted">card : <i className="fas fa-address-card"></i></p>                      
                                          </div>                         
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>

                      </DashboardLayout>);         
        }
}

export default IconPage;


 





 