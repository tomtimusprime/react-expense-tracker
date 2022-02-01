import './Expenses.css';
import ExpenseItem from "./ExpenseItems";
import Card from '../UI/Card';

function Expenses(props) {
    const expenses = [
        {title: 'Insurance', amount: 289.49, date: new Date(2022, 2, 28)},
        {title: 'Groceries', amount: 150.51, date: new Date(2022, 1, 28)},
        {title: 'Gift Cards', amount: 100.99, date: new Date(2022, 2, 20)},
        {title: 'Gym', amount: 25.00, date: new Date(2022, 2, 28)},
      ]
    return (
        <Card className="expenses">
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
        </Card>
    );
}

export default Expenses;