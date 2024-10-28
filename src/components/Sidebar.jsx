/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Sidebar = ({recipeQueue,  handleAddRecipeToCooking, recipePrepare, Calculate_time_and_calories, total_time, total_calory}) => {
    return (
        <div className="md:w-1/3 border border-[#28282833] shadow-xl rounded-xl p-5">
            {/* want to cook table */}
            <h3 className="text-[#282828] text-2xl font-bold text-center  border-b pb-4">
                Want to cook: {recipeQueue.length}
            </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row */}
                    {
                     
                    recipeQueue.map(recipeitem => 
                        <tr key={recipeitem.recipe_id} className="hover">
                        <th>{recipeitem.recipe_id}</th>
                        <td>{recipeitem.recipe_name}</td>
                        <td>{recipeitem.preparing_time} minutes</td>
                        <td>{recipeitem.calories} calories</td>
                        <td><button onClick={()=>{
                            handleAddRecipeToCooking(recipeitem.recipe_id)
                            Calculate_time_and_calories(parseInt(recipeitem.preparing_time), parseInt(recipeitem.calories))
                        }}
                            className=" bg-[#0BE58A] text-black border-none rounded-[24px] px-2.5 py-1.5 mt-4 text-xs font-bold">Preparing</button></td>
                    </tr>)
                        
                    }
                                        
                    </tbody>
                </table>
            </div>
            <h3 className="text-[#282828] text-2xl font-bold text-center  border-b pb-4 mt-10">
            Currently cooking: {recipePrepare?.length}
            </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 2 */}
                   
                    {
                        recipePrepare?.map(recipeitem =>  
                        <tr
                        key={recipeitem.recipe_id}
                        className="hover">
                            <th>{recipeitem.recipe_id}</th>
                            <td>{recipeitem.recipe_name}</td>
                            <td>{recipeitem.preparing_time}</td>
                            <td>{recipeitem.calories}</td>
                        </tr>
                        
                        )
                        
                    }   
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total Time = {total_time} minutes</td>
                        <td>Total Calories = {total_calory} calories</td>
                    </tr>
                                   
                    
                    </tbody>
                </table>
            </div>

            {/* currently cooking table */}
            
        </div>
    );
};

export default Sidebar;