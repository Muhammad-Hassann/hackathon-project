// Product Schema:
export const product =  {
  name: 'product',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'stock', type: 'number', title: 'Stock Level' },
    { name: 'category', type: 'string', title: 'Category' },
    { name: 'tags', type: 'array', of: [{type: 'string'}], title: 'Tags' }
  ]
};
// Order Schema:
export const order = {
  name: 'order',
  type: 'document',
  fields: [
    { name: 'customerId', type: 'string', title: 'Customer ID' },
    { name: 'items', type: 'array', of: [
      { type: 'object', fields: [
        { name: 'productId', type: 'string', title: 'Product ID' },
        { name: 'quantity', type: 'number', title: 'Quantity' }
      ]}
    ], title: 'Items' },
    { name: 'total', type: 'number', title: 'Total Amount' },
    { name: 'status', type: 'string', title: 'Order Status' }
  ]
};
