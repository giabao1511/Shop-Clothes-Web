import React from 'react'
import propTypes from 'prop-types'

const Helmet = props => {
    document.title = 'Yolo - ' + props.title
    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: propTypes.string.isRequired
}

export default Helmet

