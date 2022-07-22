import { useEffect , useState } from 'react';
import React from 'react'

const Wallet = () => {


  const [wallets, setWallets] = useState(
    [
        {
          "id": 1,
          "user_id": 1,
          "name": "Multi-Currency Account"
        },
        {
          "id": 2,
          "user_id": 1,
          "name": "Travel Account"
        },
        {
          "id": 3,
          "user_id": 2,
          "name": "Trading Account"
        },
        {
          "id": 4,
          "user_id": 3,
          "name": "Multi-Currency Account"
        },
        {
          "id": 5,
          "user_id": 4,
          "name": "Trip to Japan"
        }
    ])

  return (
    <div className="wallets">
         {wallets && wallets.map((wallet)=>(
            <div className='wallet-details' key={wallet.id}>
              <h3><strong>ID: </strong>{wallet.id}</h3>
              <p><strong>User ID:</strong> {wallet.user_id}</p>
              <p><strong>Name:</strong> {wallet.name}</p>
              {/* <p>{book.createdAt}</p>
              <span onClick={()=> deleteBook(book._id)}>delete</span> */}
            </div>
          ))}
    </div>
  )
}

export default Wallet