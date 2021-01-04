import React, {Component} from 'react';
import './createRecipeForm.css'


class CreateRecipeForm extends Component {
    render(){
        return(

            <div className="recipeForm">
                <div className="form_box">
                <form className="recipe_form">
                    <label htmlFor="recipe_name"><u>Recipe Name</u></label>
                    <br/>
                    <input name="recipe_name" id="recipe_name" value="Chicken Alfredo" />
                    <br/>
                    <label htmlFor="recipe_name"><u>Recipe Preptime</u></label>
                    <br/>
                    <input name="recipe_name" id="recipe_name" value="2 hours"/>
                    <br/>
                    <label htmlFor="name"><u>Ingredients</u></label>
                    <br/>
                    <textarea name="Ingredients" id="ingredients" value="chicken, parmesean, heavy cream" rows="7" cols="30" />
                    <br/>
                    <label htmlFor="name"><u>Cooking Instructions</u></label>
                    <br/>
                    <textarea name="" id="password" value="pan sear chicken" rows="7" cols="30"/>
                    <br/>
                    <label htmlFor="Category"><u>Please choose a category</u></label>
                    <br/>
                    <label htmlFor="Vegetarian" id="veggie" value="Vegetarian">Vegetarian</label>
                    <input type="radio" id="categories" name="categories" value="Vegetarian"/>
                    <label htmlFor="breakfast" id="breakfast" value="breakfast">Breakfast</label>
                    <input type="radio" id="categories" name="categories" value="Breakfast"/>
                    <label htmlFor="Dinner" id="dinner" value="dinner">Dinner</label>
                    <input type="radio" id="categories" name="categories" value="Dinner"/>
                    <label htmlFor="Sides" id="sides" value="sides">Side Dish</label>
                    <input type="radio" id="categories" name="categories" value="Sides"/>
                    <br/>
                    <label htmlFor="Soups" id="soups" value="soups">Soups</label>
                    <input type="radio" id="categories" name="categories" value="Soups"/>
                    <label htmlFor="Snacks" id="snacks" value="snacks">Snacks</label>
                    <input type="radio" id="categories" name="categories" value="Snacks"/>
                    <label htmlFor="Desserts" id="desserts" value="Desserts">Desserts</label>
                    <input type="radio" id="categories" name="categories" value="Desserts"/>
                    <br/>
                    <br/>
                    <button>Create Recipe</button>
                    <br/>
                </form>
                </div>
            </div>
        )
    }
}


export default CreateRecipeForm;