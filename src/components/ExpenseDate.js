
function ExpenseDate(props){ 
    //console.log(props.date)
    if(!props.date) return null;    
    const month = props.date.toLocaleString('en-US', { month: 'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-digit'});
    //const year = props.date.getFullYear();
    console.log(month);
    console.log(day);
    <div>      
        <div>{month}</div>
        <div>{day}</div>
        <div>year</div>
    </div>
}

export default ExpenseDate;