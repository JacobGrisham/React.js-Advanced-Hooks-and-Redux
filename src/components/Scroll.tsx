import React from 'react';

type Props = {
  children?: JSX.Element
}

function Scroll(props: Props) {
  return(
    <div style={{ overflowY: 'scroll', height: '600px' }}>
      { props.children }
    </div>
  )
}

export default Scroll;