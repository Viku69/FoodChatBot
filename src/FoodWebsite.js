// import React from "react";
// import "./FoodWebsite.css";

// const FoodWebsite = () => {
//     return (
//         <div className="container">
//             {/* Main Content */}
//             <div className="menu-section">
//                 <h1 className="title">Delicious Food Menu</h1>

//                 {/* Food Sections */}
//                 <div className="food-grid">
//                     {[...Array(6)].map((_, index) => (
//                         <div key={index} className="food-card">
//                             <img
//                                 src={`https://source.unsplash.com/300x200/?food&sig=${index}`}
//                                 alt="Food"
//                                 className="food-image"
//                             />
//                             <h2 className="food-title">Food Item {index + 1}</h2>
//                             <p className="food-description">Delicious and tasty dish description.</p>
//                             <button className="order-button">
//                                 Order Now
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Fixed Chatbot */}
//             <div className="chatbot-container">
//                 <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/c221a10c-56bb-4356-a66d-bd73ae931569"></iframe>
//             </div>
//         </div>
//     );
// };

// export default FoodWebsite;



import React, { useState } from "react";
import "./FoodWebsite.css";

const foodItems = [
    { id: 1, name: "Pizza", image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg" },
    { id: 2, name: "Burger", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop" },
    { id: 3, name: "Pasta", image: "https://foodhub.scene7.com/is/image/woolworthsltdprod/Easy-chicken-and-bacon-pasta?wid=1300&hei=1300&fmt=png-alpha" },
    { id: 4, name: "Sushi", image: "https://i.shgcdn.com/170776f5-8678-4b7b-aba7-9157fd1b5aab/-/format/auto/-/preview/3000x3000/-/quality/lighter/" },
    { id: 5, name: "Salad", image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg" },
    { id: 6, name: "Dessert", image: "https://static.vecteezy.com/system/resources/thumbnails/028/626/678/small_2x/hd-ai-generative-free-photo.jpg" }
];

const FoodWebsite = () => {
    const [chatbotVisible, setChatbotVisible] = useState(false);
    return (
        <div className="container">
            {/* Main Content */}
            <div className="menu-section">
                <h1 className="title">Delicious Food Menu</h1>

                {/* Food Sections */}
                <div className="food-grid">
                    {foodItems.map((item) => (
                        <div key={item.id} className="food-card">
                            <img src={item.image} alt={item.name} className="food-image" />
                            <h2 className="food-title">{item.name}</h2>
                            <p className="food-description">Delicious and tasty {item.name}.</p>
                            <button className="order-button">Order Now</button>
                        </div>
                    ))}
                </div>
            </div>

            

            {/* Fixed Chatbot */}
            <div className="chatbot-container">
                <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/c221a10c-56bb-4356-a66d-bd73ae931569"></iframe>
            </div>
        </div>
    );
};

export default FoodWebsite;
