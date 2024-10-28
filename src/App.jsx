import { useState } from 'react';
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import OurRecipes from './components/OurRecipes'
import Recipes from './components/Recipes';
import Sidebar from './components/Sidebar';


const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([])

  const handleAddRecipeToQueue = Recipe =>{
    const isExist = recipeQueue.find(previousRecipe=> previousRecipe.recipe_id == Recipe.recipe_id )
    if(!isExist){
      setRecipeQueue([...recipeQueue, Recipe])
    }   
    else{
      alert('Recipe already exists..')
    } 
  }

  const [recipePrepare, setRecipePrepare] = useState([])
  const [total_time, setTotal_time] = useState(0)
  const [total_calory, setTotal_calory] = useState(0)

  const handleAddRecipeToCooking = recipeCooking => {
    // const isExist = recipePrepare.find(previousCooking => previousCooking.recipe_id == recipeCooking.recipe_id)
   const deletedRecipe = recipeQueue.find(recip => recip.recipe_id === recipeCooking)
   const updatedQueue = recipeQueue.filter(recip => recip.recipe_id !== recipeCooking)
    setRecipeQueue(updatedQueue)
    setRecipePrepare([...recipePrepare, deletedRecipe])
    
  }
  
  const Calculate_time_and_calories = (time, calory)=>{
    setTotal_time(total_time + time)
    setTotal_calory(total_calory + calory)
  }
  
  


  return (
    <div className='w-11.5/12 mx-auto px-4 mt-10'>
      
      {/* Header Section */}
      <Header></Header>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Our Recipes Sectionn */}
      <OurRecipes></OurRecipes>

      {/* Recipe Card Container Section */}
      <section className='flex flex-col md:flex-row gap-6 mt-10'>
        {/* card section */}
        <Recipes handleAddRecipeToQueue={handleAddRecipeToQueue}></Recipes>
        {/* sidebar */}
        <Sidebar recipeQueue={recipeQueue} 
        recipePrepare={recipePrepare}
        handleAddRecipeToCooking={handleAddRecipeToCooking} 
        Calculate_time_and_calories={Calculate_time_and_calories}
        total_time={total_time}    
        total_calory={total_calory}
        >    
          
        </Sidebar>
      </section>

    </div>
  );
};

export default App;
