import React from "react";
import DashboardLayout from '../../layout/DashboardLayout';
 

class SignUpPage extends React.Component {
    constructor(props) {
      super(props);

      this.state=
      {
             
      }      
    }

    render() {return (<DashboardLayout>
                             <div className="container">
                                <div className="row align-items-center">
                                <div className="col-lg-6 px-lg-4">
                                    <div className="card">
                                    <div className="card-header px-lg-5">
                                        <div className="card-heading text-primary">Sign up Dashboard</div>
                                    </div>
                                    <div className="card-body p-lg-5">
                                        <h3 className="mb-4">Get started with Template</h3>
                                        <p className="text-muted text-sm mb-5">something you want to put here before user sign up</p>
                                        <form action="index.html">
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="username" type="email" placeholder="name@example.com"/>
                                            <label for="username">Username</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="floatingInput" type="email" placeholder="name@example.com"/>
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="floatingPassword" type="password" placeholder="Password"/>
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" name="agree" id="agree"/>
                                            <label className="form-check-label" for="agree">I agree with the <a href="#">Terms & Conditions</a>.</label>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-primary" id="regidter" type="submit" name="registerSubmit">Sign Up</button>
                                        </div>
                                        </form>
                                    </div>
                                    <div className="card-footer px-lg-5 py-lg-4">
                                        <div className="text-sm text-muted">Already have an account? <a href="/demopage/signin">Sign In</a>.</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img className="img-fluid mb-4" width="300" src="/img/drawkit-illustration.svg" alt="" style={{transform: "rotate(10deg)"}}/>
                                    <h1 className="mb-4">something you want <br className="d-none d-lg-inline"/> to type here</h1>
                                    <p className="lead text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
                                </div>
                                </div>
                            </div>
                      </DashboardLayout>);         
        }
}

export default SignUpPage;


 

 