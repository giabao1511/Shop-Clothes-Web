import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid';
import ProductCard from './ProductCard';

const InfinityList = props => {
    const perLoad = 6;
    const listRef = useRef(null);
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setData(props.data.slice(0, perLoad))
        setIndex(1)
    }, [props.data])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // console.log(window.scrollY, "window scrollY")
            // console.log(window.innerHeight, "window.innerHeight ")
            // console.log(listRef.current.clientHeight, "listRef.current.clientHeight")
            // console.log(listRef.current.offsetTop, "listRef.current.offsetTop")
            if (window.scrollY + window.innerHeight >=
                listRef.current.clientHeight + listRef.current.offsetTop + 200) {
                setLoad(true)
            }
        })
    }, [listRef])

    useEffect(() => {
        (function getItems() {
            const pages = Math.floor(props.data.length / perLoad)
            const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1

            if (load && index <= maxIndex) {
                const start = perLoad * index;
                const end = start + perLoad;

                setData(data.concat(props.data.slice(start, end)))
                setIndex(index + 1);
            }
        })()

        setLoad(false)
    }, [load, index, data, props.data])

    console.log(data)
    return (
        <div ref={listRef}>
            <Grid
                col={3}
                mdCol={2}
                smCol={1}
                gap={20}
            >
                {
                    data.map((item, index) => (
                        <ProductCard
                            key={index}
                            img01={item.image01}
                            img02={item.image02}
                            name={item.title}
                            price={Number(item.price)}
                            slug={item.slug}
                        />
                    ))
                }
            </Grid>
        </div>
    )
}

InfinityList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default InfinityList