import React from 'react'
import productData from '../assets/fake-data/products'
import ProductView from "../components/ProductView"
import Button from './Button'

const Modal = () => {
    const product = productData.getProductBySlug('quan-jean-phong-cach-18')

    return (
        <div className={`modal ${product && 'active'}`}>
            <div className="modal__content">
                <ProductView product={product} />
                <div className="modal__content__close">
                    <Button size="sm">đóng</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal