import React, { useState } from "react";
import "./FoodWebsite.css";

const foodItems = [
    { id: 1, name: "Pav Bhaji", image: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/01171428/YFL-Pav-Bhaji-3.jpg" },
    { id: 2, name: "Chole Bhature", image: "https://en-media.thebetterindia.com/uploads/2022/08/294156779_1082267416022212_8006411537588067133_n-1_11zon-1660981126.jpg" },
    { id: 3, name: "Pizza", image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg" },
    { id: 4, name: "Mango Lassi", image: "https://www.cookclickndevour.com/wp-content/uploads/2016/05/mango-lassi-recipe-c.jpg" },
    { id: 5, name: "Masala Dosa", image: "https://t3.ftcdn.net/jpg/03/97/46/66/360_F_397466683_4U8hMaUgWdFPNc8KMKUQ4aH2qR1yG0sA.jpg" },
    { id: 6, name: "Vegetable Biryani", image: "https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-Featured.jpg" },
    { id: 7, name: "Vada Pao", image: "https://i.ytimg.com/vi/Z9Y60u8tI9M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBUxQ9rF89wkoNS-m5_S5LLvMqm3w" },
    { id: 8, name: "Rava Dosa", image: "https://www.tomatoblues.com/wp-content/uploads/2012/02/rava-onion-dosa-2-scaled.jpg" },
    { id: 9, name: "Samosa", image: "https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900" }
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
