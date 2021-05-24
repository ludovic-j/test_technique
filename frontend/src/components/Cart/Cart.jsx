import * as React from 'react'

const Cart = (props) => {
    return (
        <div className="card w-50 m-4 pb-4">
            <h1 className="card-header">Shopping Cart</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(function (product) {if (props.inCartProducts[product.id]>0) {return (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{props.inCartProducts[product.id]}</td>
                            <td>{product.price}$</td>
                            <td><button
                                        onClick={() =>
                                            props.onRmCart(product.id)
                                        }
                                        className="btn btn-primary"
                                    >
                                        Remove from Cart
                                    </button>
                                </td>
                        </tr>);
                    }}
                    )}
                </tbody>
            </table>
            <span className="mx-auto">Total: {props.products.map((product) => 
	(props.inCartProducts[product.id]*product.price)).reduce(function(a, b) {return a + b;}, 0)}$</span>
        </div>
    )
}

export { Cart }
