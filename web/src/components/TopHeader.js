import React from "react";

class TopHeader extends React.Component {

    constructor(props) {
      super(props);

      this.state=
      {
        
      }      
    }

    render() {return (
                        <header className="header">
                            <nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow">
                                <a className="sidebar-toggler text-gray-500 me-4 me-lg-5 lead" href="#">
                                    <i className="fas fa-align-left"></i>
                                </a>
                                <img  className="navlogo" src="/img/navlogo.png"></img>
                                <ul className="ms-auto d-flex align-items-center list-unstyled mb-0">
                                    
                                   
                                </ul>
                            </nav>
                        </header>
            );         
        }
}

export default TopHeader;


 



 

 