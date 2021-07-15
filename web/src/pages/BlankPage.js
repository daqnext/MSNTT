import React from "react";
import DashboardLayout from '../layout/DashboardLayout';
 

class BlankPage extends React.Component {
    constructor(props) {
      super(props);

      this.state=
      {
             
      }      
    }

    render() {return (<DashboardLayout>
                         <div> Please go to document to check all tutorial </div>
                      </DashboardLayout>);         
        }
}

export default BlankPage;


 