import React from 'react'
import WalletCard from './WalletCard';

const WalletList = (props) => {
  
    const renderWalletList = props.wallets.map((wallet)=>{
        return(
            <WalletCard wallet={wallet}>

            </WalletCard>

        );
    })

    return (
    <div className="wallet list">
       {renderWalletList} </div>)
}

export default WalletList