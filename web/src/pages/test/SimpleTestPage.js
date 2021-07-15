import React from "react";
import DashboardLayout from '../../layout/DashboardLayout';
import { ethers } from 'ethers'
 
import MSNTT from '../../contract_build/MSNTT.json'

const tokenAddress = "0xA6275c245a3cB1A399714B1e2f2fBcAc80B9199e"

class SimpleTestPage extends React.Component {

    
    async requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    async   getBalance() {
        if (typeof window.ethereum !== 'undefined') {
          const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const contract = new ethers.Contract(tokenAddress, MSNTT.abi, provider)
          const balance = await contract.balanceOf(account);
          console.log("Balance: ", balance.toString());
        }
      }

      async   fetchGreeting() {
        if (typeof window.ethereum !== 'undefined') {
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          console.log({ provider })
          const contract = new ethers.Contract(tokenAddress, MSNTT.abi, provider)
          try {
            const data = await contract.greet()
            //notify('success','result',data);
          } catch (err) {
            //notify('error','result',err);
          }
        }    
      }

    async   setGreeting() {
     
        if (typeof window.ethereum !== 'undefined') {
            await this.requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log({ provider })
            const signer = provider.getSigner()
            const contract = new ethers.Contract(tokenAddress, MSNTT.abi, signer)
            const transaction = await contract.setGreeting("bbbbbbb")
            await transaction.wait()
            this.fetchGreeting()
        }
    }



    constructor(props) {
      super(props);

      this.state=
      {
             
      }      
    }

    render() {return (<DashboardLayout>
                         <button onClick={this.requestAccount}>Request Account</button>
                         <button onClick={()=>{this.fetchGreeting()}}>Fetch Greeting</button>
                         <button onClick={this.getBalance}>getBalance</button>
                         <button onClick={()=>{this.setGreeting()}}>setGreeting</button>
                      </DashboardLayout>);         
        }
}

export default SimpleTestPage;


 