import React from 'react'

const Home=()=> {
    return (
        <div>
            <div className='add-to-cart'>
                <img src='https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=6&m=1206806317&s=612x612&w=0&h=Fo7D7nh_QPu758KRdbNTp7m4xSVOxBvJ2cfUvA1_k_U=' />
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://images.unsplash.com/photo-1617173793304-aab2dff0190d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        Coffee
                    </span>
                    <span>
                        Price: $150.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
