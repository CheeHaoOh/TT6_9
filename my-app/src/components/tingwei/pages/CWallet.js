import { useEffect , useState } from 'react';
import React from 'react'
import axios from 'axios';

const C_Wallet = () => {


  const [c_wallets, setc_wallets] = useState(
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
        url: 'http://35.91.201.214/get_wallet_reference'
      
      }).then(resp => {
  
        console.log(resp.data)
      //   if (resp.data.status === 'ok') {
      //     // setUsername(resp.data.username)
      //     // setEmail(resp.data.email)
      //     console.log('token is working')
      //     //getBooks(resp.data.email)
      //   } else {
      //     alert(resp.data.error)
      //   }
      // }).catch(function (error) {
      //   console.log(error);
      // });
      
    })
  }


  useEffect(()=>{
    get_cwallets()
  }, []) //this [] makes it runs first render only
  return (
    <div className="wallet-container">
        <div className="c_wallets">
            {c_wallets && c_wallets.map((c_wallet)=>(
                <div className='wallet-details' key={c_wallet.id}>
                <h3><strong>ID: </strong>{c_wallet.id}</h3>
                <p><strong>Wallet ID:</strong> {c_wallet.wallet_id}</p>
                <p><strong>Currency:</strong> {c_wallet.currency}</p>
                <p><strong>Amount:</strong> {c_wallet.amount}</p>
                {/* <p>{book.createdAt}</p>
                <span onClick={()=> deleteBook(book._id)}>delete</span> */}
                </div>
            ))}
        </div>
        <label>user:</label>
        <select id = "temp" onchange = {null} >  
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