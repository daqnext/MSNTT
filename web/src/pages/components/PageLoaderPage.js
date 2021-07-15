import React from "react";
import DashboardLayout from '../../layout/DashboardLayout';
import Prism from "prismjs" ;
import "../../prism.css";
 

class PageLoaderPage extends React.Component {
    constructor(props) {
      super(props);

      this.state=
      {
             
      }      
    }

    render() {return (
<DashboardLayout>
<div className="page-header"><h1 className="page-heading">PageLoader-Tutorial</h1></div>
<pre>
<code className="language-javascript" >
{`
window.showPageLoader() // show page loader
window.hidePageloader(); // hide page loader
`}
</code>
</pre>

</DashboardLayout>
);         
        }
}

export default PageLoaderPage;


 

 