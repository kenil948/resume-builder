// import React from 'react'

const getFieldKey = (field) => {
    return (
        field.index !== undefined
            ? `${field.section}.${field.index}.${field.field}`
            : `${field.section}.${field.field}`
    )
}

export default getFieldKey