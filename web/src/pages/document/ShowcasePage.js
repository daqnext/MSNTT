import React from "react";
import DashboardLayout from '../../layout/DashboardLayout';
 

class ShowcasePage extends React.Component {
    constructor(props) {
      super(props);

      this.state=
      {
             
      }      
    }

    render() {return (<DashboardLayout>


                          <div className="page-breadcrumb">
                                    <ul className="breadcrumb">
                                      <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                      <li className="breadcrumb-item active">Index </li>
                                    </ul>
                          </div>

                          <div className="page-header">
                            <h1 className="page-heading">Show Case</h1>
                          </div>

                          <section className="mb-3 mb-lg-5">
                            <div className="row">
                              <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card-widget h-100">
                                  <div className="card-widget-body">
                                    <div className="dot me-3 bg-indigo"></div>
                                    <div className="text">
                                      <h6 className="mb-0">Data consumed</h6><span className="text-gray-500">145,14 GB</span>
                                    </div>
                                  </div>
                                  <div className="icon text-white bg-indigo"><i className="fas fa-server"></i></div>
                                </div>
                              </div>
                              <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card-widget h-100">
                                  <div className="card-widget-body">
                                    <div className="dot me-3 bg-green"></div>
                                    <div className="text">
                                      <h6 className="mb-0">Open cases</h6><span className="text-gray-500">32</span>
                                    </div>
                                  </div>
                                  <div className="icon text-white bg-green"><i className="far fa-clipboard"></i></div>
                                </div>
                              </div>
                              <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card-widget h-100">
                                  <div className="card-widget-body">
                                    <div className="dot me-3 bg-blue"></div>
                                    <div className="text">
                                      <h6 className="mb-0">Work orders</h6><span className="text-gray-500">400</span>
                                    </div>
                                  </div>
                                  <div className="icon text-white bg-blue"><i className="fa fa-dolly-flatbed"></i></div>
                                </div>
                              </div>
                              <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card-widget h-100">
                                  <div className="card-widget-body">
                                    <div className="dot me-3 bg-red"></div>
                                    <div className="text">
                                      <h6 className="mb-0">New invoices</h6><span className="text-gray-500">123</span>
                                    </div>
                                  </div>
                                  <div className="icon text-white bg-red"><i className="fas fa-receipt"></i></div>
                                </div>
                              </div>
                            </div>
                          </section>

                          <section className="mb-4 mb-lg-5">
                            <h2 className="section-heading section-heading-ms mb-4 mb-lg-5">Finances 💰</h2>
                            <div className="row">
                              <div className="col-lg-7 mb-4 mb-lg-0">
                                <div className="card h-100">
                                  <div className="card-header">
                                    <h4 className="card-heading">Your Account Balance</h4>
                                  </div>
                                  <div className="card-body">
                                    <div className="chart-holder w-100"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                      <div> ' Put your content here ' </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-5 mb-4 mb-lg-0">
                                <div className="h-50 pb-4 pb-lg-2">
                                  <div className="card h-100">
                                    <div className="card-body d-flex">
                                      <div className="row w-100 align-items-center">
                                        <div className="col-sm-5 mb-4 mb-sm-0">
                                          <h2 className="mb-0 d-flex align-items-center"><span>86.4</span><span className="dot bg-green d-inline-block ms-3"></span></h2><span className="text-muted text-uppercase small">Work hours</span>
                                          <hr/><small className="text-muted">Hours worked this month</small>
                                        </div>
                                        <div className="col-sm-7"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                           <div> ' Put your content here ' </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-50 pt-lg-2">
                                  <div className="card h-100">
                                    <div className="card-body d-flex">
                                      <div className="row w-100 align-items-center">
                                        <div className="col-sm-5 mb-4 mb-sm-0">
                                          <h2 className="mb-0 d-flex align-items-center"><span>325</span><span className="dot bg-indigo d-inline-block ms-3"></span></h2><span className="text-muted text-uppercase small">Tasks Completed</span>
                                          <hr/><small className="text-muted">Tasks Completed this months</small>
                                        </div>
                                        <div className="col-sm-7"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                        <div> ' Put your content here ' </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>


                          <section className="mb-4 mb-lg-5">
                              <h2 className="section-heading section-heading-ms mb-4 mb-lg-5">Linked Cards 💳 </h2>
                              <div className="row text-dark">
                                <div className="col-md-6 col-xl-4 mb-4">
                                  <div className="card credit-card bg-hover-gradient-indigo">
                                    <div className="credict-card-content">
                                      <div className="h1 mb-3 mb-lg-1"><i className="fab fa-cc-visa"></i></div>
                                      <div className="credict-card-bottom">
                                        <div className="text-uppercase flex-shrink-0 me-1 mb-1">
                                          <div className="fw-bold">Card Number</div><small className="text-gray-500">1245 1478 1362 6985</small>
                                        </div>
                                        <h4 className="mb-1">$417.78</h4>
                                      </div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-4 mb-4">
                                  <div className="card credit-card bg-hover-gradient-blue">
                                    <div className="credict-card-content">
                                      <div className="h1 mb-3 mb-lg-1"><i className="fab fa-cc-mastercard"></i></div>
                                      <div className="credict-card-bottom">
                                        <div className="text-uppercase flex-shrink-0 me-1 mb-1">
                                          <div className="fw-bold">Card Number</div><small className="text-gray-500">1245 1478 1362 6985</small>
                                        </div>
                                        <h4 className="mb-1">$224.17</h4>
                                      </div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-4 mb-4">
                                  <div className="card credit-card bg-hover-gradient-green">
                                    <div className="credict-card-content">
                                      <div className="h1 mb-3 mb-lg-1"><i className="fab fa-cc-discover"></i></div>
                                      <div className="credict-card-bottom">
                                        <div className="text-uppercase flex-shrink-0 me-1 mb-1">
                                          <div className="fw-bold">Card Number</div><small className="text-gray-500">1245 1478 1362 6985</small>
                                        </div>
                                        <h4 className="mb-1">$568.00</h4>
                                      </div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </section>
                      </DashboardLayout>);         
        }
}

export default ShowcasePage;





 