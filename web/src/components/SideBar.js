import React from "react";

class SideBar extends React.Component {

  
    checkactive(prefix) {
        if(window.location.pathname.startsWith(prefix)){
            return true;
        }
        return false;
    }

    constructor(props) {
      super(props);

      this.state=
      {
        
      }      
    }

    render() {return (
                        <div className="sidebar py-3" id="sidebar">
                            <h6 className="sidebar-heading">Main</h6>
                            <ul className="list-unstyled">
 
                                <li className="sidebar-list-item">
                                    <a className="sidebar-link text-muted" href="#" data-bs-target="#testDropDown" data-bs-toggle="collapse"> 
                                        <i className="fas fa-cogs"></i><span className="sidebar-link-title">Test Contract</span>
                                    </a>
                                    <ul className={"sidebar-menu list-unstyled "+ (this.checkactive("/test") ? "":"collapse")}  id="testDropDown">
                                        <li className="sidebar-list-item"><a className={"sidebar-link text-muted "+ (this.checkactive("/test/simpletest") ? "active":"")} href="/test/simpletest"><i className="fas fa-comment-dots"></i> Simple Test</a></li>
                                    </ul>
                                </li>


                            </ul>
                        </div>
            );         
        }
}

export default SideBar;


 



 