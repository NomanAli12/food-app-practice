import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'


const MealItemForm = (props) => {
    return (
        <div>
            <form action="" className={classes.form}>
                <Input label="Amount" input={{
                    id:'amount_' + props.id,
                    type:'number',
                    min:'1',
                    max:'5',
                    step:'1',
                    defaultValue:'1'
                }}                
                />
                <button>+ Add</button>
            </form>
        </div>
    )
}

export default MealItemForm
