import React from 'react'

// Very simple popup, takes the data passed in and creates a very simple content element

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

// the data?.attr?.Owner syntaxc looks weird, but it's just some simple safety and prevents errors. Just says that if the property after the ? doesn't exist to return nothing instead of throwing an error

export default Popup