import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'

const ProductCard = props => {
    return (
        <div className="product-card">
            <Link to={`/catalogue/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    {numberWithCommas(props.price)}&#8363;
                    <span className="product-card__price__old">
                        <del>{numberWithCommas(399000)}&#8363;</del>
                    </span>
                </div>
                <div className="product-card__btn">
                    <Button
                        size="sm"
                        icon="bx bx-cart"
                        animate={true}
                    >
                        chọn mua
                    </Button>
                </div>
            </Link>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
}

export default ProductCard