import React, { memo, useState } from 'react'

// Libraries
import { Alert } from 'react-bootstrap'

const MessageBox = (theme ="message-box01",className="",variant,dismissible) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert className={`${theme}${className ? ` ${className}` : ""}`} variant={variant} onClose={() => setShow(false)} dismissible={dismissible}>
        {message}
      </Alert>
    );
  }
}




export default memo(MessageBox);