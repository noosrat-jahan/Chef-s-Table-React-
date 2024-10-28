import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({handleAddRecipeToQueue}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('/recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    
    
    return (
        <div className="md:w-2/3 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                {
                    recipes.map(recipe =>
                        <div key = { recipe.recipe_id } className="card bg-base-100 border border-[#28282833] shadow-xl">
                            <figure className="px-8 pt-6">
                                <img
                                    className="md:h-52 w-full rounded-xl"
                                    src={recipe.recipe_image}
                                    alt="Recipe Image" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{recipe.recipe_name}</h2>
                                <p className="pb-5 border-b">{recipe.short_description}</p>
                                <h3>Ingredients: {recipe.ingredient_list.length}</h3>
                                {
                                    recipe.ingredient_list.map((ingredient, idx)=><li key={idx} className="text-[#878787]">{ingredient}</li>)
                                }
                                <div className="flex mt-5 gap-10">
                                    <h2><i className="fa-regular fa-clock"></i> {recipe.preparing_time} minutes </h2>
                                    <h2><i className="fa-solid fa-fire-flame-curved"></i> {recipe.calories} calories</h2>
                                </div>
                                <div className="card-actions justify-start">
                                    <button onClick={()=>{handleAddRecipeToQueue(recipe)}}
                                    className="btn bg-[#0BE58A] text-black border-none rounded-[24px] px-8 py-2 mt-4 font-bold text-lg">Want to Cook</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Recipes;



