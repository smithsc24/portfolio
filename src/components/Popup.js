import React from 'react'

const Popup = ({ data }) => (
    <div className="contents">
      <p>
        Location: {data?.attr?.StateProv}
      </p>
      <p>
        Owner: {data?.attr?.Owner ? data?.attr?.Owner : data?.attr?.Operator}
      </p>
    </div>
)

export default Popup