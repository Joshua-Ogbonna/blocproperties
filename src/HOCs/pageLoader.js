import React from 'react'
import { Suspense } from 'react'
import ReactLoading from "react-loading"

const pageLoader = (Component) => (props) => {
  return (
    <Suspense fallback={<ReactLoading type="spin" width={20} height={20} color="#393939" />}>
        <Component {...props} />
    </Suspense>
  )
}

export default pageLoader