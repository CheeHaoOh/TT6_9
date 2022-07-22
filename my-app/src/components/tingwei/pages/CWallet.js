import { useEffect , useState } from 'react';
import React from 'react'
import axios from 'axios';

const C_Wallet = () => {

  const [wallet_id, setWalletId] = useState('')
  const [cWallets, setCWallets] = useState(
    [
      {
        "id": 1,
        "wallet_id": 1,
        "currency": "SGD",
        "amount": 4294.50
      },
      {
        "id": 2,
        "wallet_id": 1,
        "currency": "CAD",
        "amount": 5687.65
      },
      {
        "id": 3,
        "wallet_id": 1,
        "currency": "CNH",
        "amount": 6063.14
      }
    ])

    const get_cwallets = async() => {
      axios({
        method: 'get', //you can set what request you want to be
        url: 'http://35.91.201.214/get_wallet?send_to_server=' + '1'
      
      }).then(resp => {
  
        console.log(resp.data["read-from-server"])
        let temp = resp.data["read-from-server"]//JSON.stringify(resp.data["read-from-server"])
        //temp = '('
        let temp_json = temp.replaceAll('(', '{').replaceAll(")","}").replaceAll(",",":").replaceAll(": {",", {").replaceAll("'","\"")
       // let fin_json = JSON.parse(temp_json)
       //  JSON.stringify(temp,null,2);
       

        console.log(temp_json)

        //console.log(temp_json[0][0])
        //
        //console.log(myJsonString)
        //setCWallets(myJsonString)
      //   if (resp.data.status === 'ok') {
      //     // setUsername(resp.data.username)
      //     // setEmail(resp.data.email)
      //     console.log('token is working')
      //     //getBooks(resp.data.email)
      //   } else {
      //     alert(resp.data.error)
      //   }
      // })
      
      
    }).catch(function (error) {
        console.log(error);
      });
  }


  useEffect(()=>{
    get_cwallets()
  }, []) //this [] makes it runs first render only
  return (
    <div className="wallet-container">
        <div className="c_wallets">
            {cWallets && cWallets.map((cWallet)=>(
                <div className='wallet-details' key={cWallet.id}>
                <h3><strong>ID: </strong>{cWallet.id}</h3>
                <p><strong>Wallet ID:</strong> {cWallet.wallet_id}</p>
                <p><strong>Currency:</strong> {cWallet.currency}</p>
                <p><strong>Amount:</strong> {cWallet.amount}</p>
                {/* <p>{book.createdAt}</p>
                <span onClick={()=> deleteBook(book._id)}>delete</span> */}
                </div>
            ))}
        </div>
        <label>user:</label>
        <select id = "temp" onChange = {null}>//setCWallets(cWallets.filter((cWallet)=> cWallet.wallet_id !== wallet_id))} >  
        <option>1</option>  
        <option>2</option>  
        <option>3</option>  
        <option>4</option>  
        </select>  
        <button onClick={null}>delete</button>
    </div>
  )
}

export default C_Wallet