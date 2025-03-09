import { useEffect, useState } from "react";
import axios from "axios";

const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        const fetchSavedRecipes = async () => {
            try {
                const response = await axios.get("https://backend-avth.onrender.com/saved-recipes");
                setSavedRecipes(response.data);
            } catch (error) {
                console.error("Error fetching saved recipes:", error);
            }
        };

        fetchSavedRecipes();
    }, []);

    return (
        <div className="container">
            <h2>Saved Recipes</h2>
            {savedRecipes.length === 0 ? (
                <p>No saved recipes found.</p>
            ) : (
                <ul>
                    {savedRecipes.map((recipe) => (
                        <li key={recipe._id}>
                            <h3>{recipe.title}</h3>
                            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                            <p><strong>Instructions:</strong> {recipe.instructions}</p>
                            {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} width="200px" />}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SavedRecipes;