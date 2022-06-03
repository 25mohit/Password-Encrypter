import React, { useState } from 'react'
import { Decrypt } from '../decrypt/Decrypt'
import { Encrypt } from '../encrypt/Encrypt'
import { HeavingPrblm } from '../heavingPrblm/HeavingPrblm'
import './Home.css'

export const Home = () => {
    const [showEncrypt, setShowEncrypt] = useState(true)
    const [showDecrypt, setShowDecrypt] = useState(false)

  return (
    <div className='home-div'>
        { showEncrypt && <Encrypt setShowEncrypt = { setShowEncrypt } setShowDecrypt = { setShowDecrypt } /> }
        { showDecrypt && <Decrypt setShowEncrypt = { setShowEncrypt } setShowDecrypt = { setShowDecrypt } /> }
            
        <HeavingPrblm />
    </div>
     
  )
}
