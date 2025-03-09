import { useState } from "react";
import axios from "axios";

const CreateRecipe = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleCreateRecipe = async () => {
        try {
            const userID = localStorage.getItem("userID");
            await axios.post("https://backend-avth.onrender.com/recipes", {
                title,
                ingredients,
                instructions,
                userID
            });

            alert("Recipe created successfully!");
        } catch (err) {
            console.error("Error creating recipe:", err);
        }
    };

    return (
        <div className="container">
            <h2>Create Recipe</h2>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Ingredients" onChange={(e) => setIngredients(e.target.value)} />
            <textarea placeholder="Instructions" onChange={(e) => setInstructions(e.target.value)} />
            <button onClick={handleCreateRecipe}>Create Recipe</button>
        </div>
    );
};

export default CreateRecipe;