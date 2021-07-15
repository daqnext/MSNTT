import React from 'react';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import TopHeader from '../components/TopHeader';


class DashboardLayout extends React.Component {
render() {
            return (
                        <div>
                            <TopHeader></TopHeader>   
                            <div className="d-flex align-items-stretch">
                                <SideBar></SideBar>    
                                <div className="page-holder bg-gray-100">
                                    <div className="container-fluid px-lg-4 px-xl-5">
                                         {this.props.children}
                                    </div>
                                    <Footer></Footer>
                                </div>
                            </div>
                        </div>
                                       
                    );
        }
}

export  default  DashboardLayout;