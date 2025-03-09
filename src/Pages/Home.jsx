import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get("https://backend-avth.onrender.com/recipes");
            setRecipes(response.data);
        } catch (err) {
            console.error("Error fetching recipes:", err);
        }
    };

    return (
        <div className="container">
            <h2>All Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        <h3>{recipe.title}</h3>
                        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                        <p><strong>Instructions:</strong> {recipe.instructions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};