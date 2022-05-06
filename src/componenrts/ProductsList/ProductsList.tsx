import { useSelector } from "react-redux"
import { getProducts } from "../../store/products/selectors"

export const ProductsList = () => {
  const products = useSelector(getProducts);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
        </li>
      ))}
    </ul>
  )
}