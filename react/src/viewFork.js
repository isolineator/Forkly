import React from 'react';
import $ from 'jquery';

import RecipeIngredients from './recipeIngredients'

class ViewFork extends React.Component {

  constructor(props) {
    super(props);
    this.forkMe = this.forkMe.bind(this);
    this.goToFork = this.goToFork.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
  }

  getRecipe(){
    console.log(this.props);
    let pathname = this.props.location.pathname;
    let recipeId = pathname.slice(pathname.lastIndexOf('/') + 1);
    let checkPath = pathname.split('/')[1];
    let boundThis = this;
    console.log(recipeId)
     $.ajax({
      url: '/getRecipeById',
      type:'GET',
      data: {id: recipeId},
      success: (data)=>{
        console.log(data)
        this.setState({
          recipe: data,
          path: checkPath
        });
        console.log(this.state)
      },
      error: function(err) {
        console.error('could not retrieve any recipes for user');
      }
    });
  }

  componentDidMount(){
    console.log(this.props);
    let pathname = this.context.router.route.location.pathname;
    let recipeId = pathname.slice(pathname.lastIndexOf('/') + 1);
    let checkPath = pathname.split('/')[1];
    let boundThis = this;
    console.log(recipeId)
     $.ajax({
      url: '/getRecipeById',
      type:'GET',
      data: {id: recipeId},
      success: (data)=>{
        console.log(data)
        this.setState({
          recipe: data,
          path: checkPath
        });
        console.log(this.state)
      },
      error: function(err) {
        console.error('could not retrieve any recipes for user');
      }
    });
  }

  componentWillUpdate() {
    let pathname = this.context.router.route.location.pathname;
    let recipeId = pathname.slice(pathname.lastIndexOf('/') + 1);
    let checkPath = pathname.split('/')[1];
    let boundThis = this;
     $.ajax({
      url: '/getRecipeById',
      type:'GET',
      data: {id: recipeId},
      success: (data)=>{
        this.setState({
          recipe: data,
          path: checkPath
        });
      },
      error: function(err) {
        console.error('could not retrieve any recipes for user');
      }
    });
  }

  forkMe() {
    const { router } = this.context;
    var forked = router.route.location.pathname;
    let forkedId = forked.slice(forked.lastIndexOf('/') + 1);
    router.history.push('/test/' + forkedId);
  }

  goToFork(){
    console.log('clicked', this.props)
    const { router } = this.context;
    router.history.push(`/recipe/${this.state.recipe.forked._id}`);
    // this.componentDidMount();
  }

  render () {
    let template = '';
    if (this.state) {
      let { recipe } = this.state;
      template = 
      <div className="viewFork">
        <header>
          <h1 className="recipeName">{`${recipe._creator.name}'s ${recipe.name}`}</h1>
          {this.state.recipe.forked ? <h4><a onClick={this.goToFork}>{`Forked From ${this.state.recipe.forked._creator.name}'s ${this.state.recipe.forked.name}`}</a></h4> : null}
          <h1 className="recipeName">Tags:</h1>
        {recipe.tags.map(( tag => <p>{tag}</p>))}
          <br />
        </header>
        <h3 className="title">Ingredients: </h3>
        <p>{recipe.ingredients.map( (ingredient, index) => 
          <RecipeIngredients ingredient={ingredient} key={index}/>
          )}
        </p>
        <br/>
        <h3 className="title"> Directions: </h3>
        {recipe.directions.map((dir, idx) => <p>Step {idx+1}: {dir}</p>)}
        <br />
        {this.props.wasForked ? null : <button onClick={this.forkMe}>Fork Me</button>}

      </div>
    } else {
      template = 
      <div>
        <h3>Loading Your Recipes...</h3>
      </div>
    }
    return (
      template
    )
  }
}

ViewFork.contextTypes = {
  router: React.PropTypes.object
}

export default ViewFork;