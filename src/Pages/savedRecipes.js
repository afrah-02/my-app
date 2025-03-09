import { useEffect, useState } from "react";
import axios from "axios";

const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        fetchSavedRecipes();
    }, []);

    const fetchSavedRecipes = async () => {
        try {
            const userID = localStorage.getItem("userID");

            if (!userID) {
                console.error("User ID not found");
                return;
            }

            const response = await axios.get(
                    `https://backend-avth.onrender.com/recipes/savedRecipes/ids/${userID}`
            );

            setSavedRecipes(response.data.savedRecipes);
        } catch (err) {
            console.error("Error fetching saved recipes:", err);
        }
    };

    return (
        <div className="container">
            <h2>Saved Recipes</h2>
            <ul>
                {savedRecipes.map((recipe) => (
                    <li key={recipe._id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SavedRecipes;