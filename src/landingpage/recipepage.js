import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import RECIPES from './recipes';
import "./recipepage.css"
import RecipeBox from "./createRecipebutton"



class RecipePage extends Component {
    render(){
        return (
            <div className="recipe">
                <div className="recipe_box">
                    <h3><u>Recipes</u></h3>
                    <form className="searchbox">
                    <label htmlFor="name"> Search For Recipe </label>
                <br/>
                <input name="name" placeholder="Lasagna"/>
                <br/>
                    </form>
                <div>
                    <ul className="recipelist">
                        {RECIPES.map(recipe =>
                            <li className="listItems" key={recipe.recipe_id}>
                                <Link to="/recipecard"><a href={`/recipes/${recipe.recipe_id}`}>
                                    {recipe.recipe_name} {recipe.recipe_preptime}
                                </a></Link>
                            </li>
                            )}
                    </ul>
                    <RecipeBox />
                </div>
            </div>
            </div>
        )
    }
}

export default RecipePage;