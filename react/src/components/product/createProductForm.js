import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input-field'
import axiosClient from '../../config/axios'


function CreateProductForm() {

  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    Object.entries(inputs).map(elm => formData.append(elm[0], elm[1]))

    try {
      axiosClient.post('/product/create', formData, {    
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      }) 
    } catch(err) {
    }
  
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
          <label htmlFor="product-name">Name<span>*</span></label>
          <input id="product-name" type="text" required="required" aria-required="true" name="name" onChange={handleChange} />
      </div>
      <div className="form-control">
          <label htmlFor="product-description" >Description</label>
          <input id="product-description" type="text" name="description" onChange={handleChange} />
      </div>
      <div className="form-control">
          <label htmlFor="undefined">Price<span>*</span></label>
          <CurrencyInput
            id="product-price"
            name="price"
            placeholder="Please enter a number"
            defaultValue={0}
            decimalsLimit={2}
            decimalSeparator="," 
            groupSeparator="." 
            onValueChange={(value, name) => {
              handleChange(
                {
                  target: {
                    name: name,
                    value: value
                  }
                }
              )
            }}
          />;
      </div>
      <div className="form-control">
          <label htmlFor="product-quantity">Quantity</label>
          <input id="product-quantity" type="number" min={0} name="stock" onChange={handleChange} />
      </div>
      <div className="form-control">
          <label htmlFor="product-image">Image</label>
          <input id="product-image" type="file" name="image" onChange={(event) => {
            handleChange({
              target: {
                name: event.target.name,
                value: event.target.files[0]
              }
            })
          }} />
      </div>
      <div className="form-control">
          <input type="submit" value="create"/>
      </div>
    </form>
  )
}

export default CreateProductForm
