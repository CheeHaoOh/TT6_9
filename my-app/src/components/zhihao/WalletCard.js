import React from 'react'

const WalletCard = (props) => {
    const {wallet_id, currency, amount} = props.wallet;
  return (
    <div className='item'>
                <div className='content'>
                    <div className='header'>{wallet_id} </div>
                    <div>{currency}</div>
                    <div>{amount}</div>  
                    
                </div>
        
            </div>
  )
}

export default WalletCard