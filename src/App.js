import ExpenseItem from "./components/ExpenseItem";
const expense = [
  { id:'e1', title: "Internet Bill", date: new Date(2021, 4, 21).toString(), amount: 450 },
  { id:'e2',title: "Car Insurance", date: new Date(2021, 5, 21).toString(), amount: 650 },
  { id:'e3',title: "Flat Fare", date: new Date(2021, 1, 21).toString(), amount: 1050 },
  { id:'e4',title: "Medicine", date: new Date(2021, 2, 21).toString(), amount: 250 },
];
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        date={expense[0].date}
        amount={expense[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        date={expense[1].date}
        amount={expense[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        date={expense[2].date}
        amount={expense[2].amount}
        ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        date={expense[3].date}
        amount={expense[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
