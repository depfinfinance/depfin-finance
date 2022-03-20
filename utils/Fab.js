import Link from 'next/link'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Fab() {
  return (
          <div className="float">
                  <Link href= "/" >
                          <a className="my-float"> 
                                  < WhatsAppIcon  />
                          </a>
                  </Link>
    </div>
  )
}

export default Fab