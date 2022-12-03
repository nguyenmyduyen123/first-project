import React, {useState} from 'react';
import Button from '../UI/Button/Button';
import classes from './CourseInput.module.css'

const CourseInput = props => {
    const [enterGoal, setEnterGoal]= useState('');
    const [enterGoalisValid,setEnterGoalisValid] = useState(true);
    const goalInputChangeHandler= event=>
    {setEnterGoal(event.target.value);
    }

    const formSubmitHandler = event =>{
        event.preventDefault();
        if (enterGoal.trim().length===0) {
            setEnterGoalisValid(false)
            return
        }
        props.onAddGoal(enterGoal);
        setEnterGoal("")
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${classes['form-control']} ${!enterGoalisValid && classes.invalid}`}>
                <label>Course Goal</label>
                <input 
                type="text"
                value={enterGoal}
                onChange={goalInputChangeHandler}
                />
                
            </div>
            <Button type="submit" >Add Goal</Button>
        </form>
    )
}

export default CourseInput;