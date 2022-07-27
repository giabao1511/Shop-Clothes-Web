import React, { useCallback, useEffect, useState } from 'react'
import categories from "../assets/fake-data/category"
import colors from "../assets/fake-data/product-color"
import sizes from "../assets/fake-data/product-size"
import productData from "../assets/fake-data/products"
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Grid from "../components/Grid"
import Helmet from '../components/Helmet'
import ProductCard from "../components/ProductCard"

const Catalogue = () => {
  const initFilter = {
    category: [],
    color: [],
    size: []
  }
  const allProductsList = productData.getAllProducts();

  console.log(allProductsList, "all");

  const [products, setProducts] = useState(allProductsList);
  const [filter, setFilter] = useState(initFilter)

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({ ...filter, category: [...filter.category, item.categorySlug] });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] })
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(e => e !== item.categorySlug)
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter(e => e !== item.color)
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter(e => e !== item.size)
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  }

  const updateProducts = useCallback(
    () => {
      let temp = allProductsList

      if (filter.category.length > 0) {
        temp = temp.filter(e => filter.category.includes(e.categorySlug))
      }

      if (filter.color.length > 0) {
        temp = temp.filter(e => {
          const check = e.colors.find(color => filter.color.includes(color))
          return check !== undefined
        })
      }

      if (filter.size.length > 0) {
        temp = temp.filter(e => {
          const check = e.size.find(color => filter.size.includes(color))
          return check !== undefined
        })
      }

      setProducts(temp);
    },
    [filter, allProductsList]
  )

  useEffect(() => {
    updateProducts()
  }, [updateProducts])

  return (
    <Helmet title="Sản phẩm">
      {console.log(filter, "filter")}
      <div className="catalogue">
        <div className="catalogue__filter">
          <div className="catalogue__filter__widget">
            <div className="catalogue__filter__widget__title">
              danh mục sản phẩm
            </div>
            <div className="catalogue__filter__widget__content">
              {categories.map((item, index) => (
                <div className="catalogue__filter__widget__content__item" key={index}>
                  <Checkbox
                    label={item.display}
                    onChange={input => filterSelect("CATEGORY", input.checked, item)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalogue__filter__widget">
            <div className="catalogue__filter__widget__title">
              màu sắc
            </div>
            <div className="catalogue__filter__widget__content">
              {colors.map((item, index) => (
                <div className="catalogue__filter__widget__content__item" key={index}>
                  <Checkbox
                    label={item.display}
                    onChange={input => filterSelect("COLOR", input.checked, item)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalogue__filter__widget">
            <div className="catalogue__filter__widget__title">
              kích cỡ
            </div>
            <div className="catalogue__filter__widget__content">
              {sizes.map((item, index) => (
                <div className="catalogue__filter__widget__content__item" key={index}>
                  <Checkbox
                    label={item.display}
                    onChange={input => filterSelect("SIZE", input.checked, item)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalogue__filter__widget">
            <div className="catalogue__filter__widget__content">
              <Button size="sm">xóa bộ lọc</Button>
            </div>
          </div>
        </div>
        <div className="catalogue__content">
          <Grid
            col={3}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              products.map((item, index) => (
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
      </div>
    </Helmet>
  )
}

export default Catalogue