import * as React from 'react'
// @ts-ignore
import ProductEquipment from '../src/components/product-equipment'

const temp = [{'type':500, 'price': 500}, {'type':100, 'price': 150}, {'type': 50, 'price': 90}];

const TestApp = () => (
  <ProductEquipment array={temp} />
)

export default TestApp
