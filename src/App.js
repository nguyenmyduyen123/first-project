import React , {Fragment, useState} from 'react'
import './App.css';
import CourseInput from './components/CourseInput/CourseInput';
import CourseGoalList from './components/CourseGoals/CouseGoalList/CourseGoalList'

// const listOfGoals = [
//  {id:'1', text:"do all the housework"},
 // {id:'2', text:"wake up early"}] 
function App() {
  const [courseGoals, setcourseGoals]= useState ("")
  const addGoalHandler = item => {
     setcourseGoals (preGoals => [...preGoals, {id:Math.random().toString(), text:item}])
    // [...preGoals, {id:Math.random().toString(), text:item}])
    
  }
 
  const deleteGoalHandler = goalId => {
    setcourseGoals (prev => {
      const updateCourseGoals = courseGoals.filter (goal=> goal.id !== goalId);
      return updateCourseGoals;
    })
    console.log (courseGoals)
    
    
  }
  let content=(
    <p style={{textAlign:'center', fontSize:'30px', fontWeight:'bold'}}>No Course Goal</p>
   )
   if (courseGoals.length >0) {
    content=(
      <CourseGoalList items={courseGoals} onDeleteItem={deleteGoalHandler}/>
    )
   }
  return (
    <Fragment>
      <section class="goal-form">
        <CourseInput onAddGoal={addGoalHandler}/>
      </section>
      <section class="goals">
        {content}
         
      </section>
    </Fragment>

    
  );
}

export default App;
