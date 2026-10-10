// import React from 'react'

import getFieldKey from "./getFieldKey"


const getFieldStyle = (fieldStyle, field) => {

    const key = getFieldKey(field)
    return (
        fieldStyle[key] || {}
    )
}

export default getFieldStyle