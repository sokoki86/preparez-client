import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './createRecipebutton.css';
class RecipeBox extends Component {
    render(){
        return(
        <div className="recipebox">
            <div className="recipebuttons">
               <Link to='/newrecipe'><button>Create New Recipe</button></Link>
            </div>
        </div>
        )
    }
}

export default RecipeBox;