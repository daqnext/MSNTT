import React from "react";
import DashboardLayout from '../../layout/DashboardLayout';
 

class FullDocsPage extends React.Component {
    constructor(props) {
      super(props);

      this.state=
      {
             
      }      
    }

    render() {return (<DashboardLayout>
                             
                             <div className="page-header">
                                <h1 className="page-heading">Full Documentation</h1>
                              </div>
                             <section className="mb-5"> 
                              <div className="row">
                                <div className="col-xl-10">
                                  <div className="card">
                                    <div className="card-header"></div>
                                    <div className="card-body"> 
                                          <div className="docs-item" id="gettingstarted">
                                            <h5 className="mb-4">Getting started</h5>
                                            <div className="docs-desc"><p className="lead"> UI is based on  bubbly cssframework , for full usage of ui elements please download and check </p></div>                  
                                            <h6>Download:</h6>
                                            <p className="text-muted"> <a href="https://github.com/daqnext/cssframework/blob/main/bubbly_cssframework.zip">https://github.com/daqnext/cssframework/blob/main/bubbly_cssframework.zip</a> </p>                      
                                          </div>                         
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>

                      </DashboardLayout>);         
        }
}

export default FullDocsPage;


 





 