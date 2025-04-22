const Pizza = (props) => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement("h1", {}, props.name),
            React.createElement("p", {}, props.description),
        ]
    )
}

const App = () => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement("h1", {}, "Padre Gino's"),
            React.createElement(Pizza, { name: "Margherita", description: "Tomato, mozzarella, basil" }),
            React.createElement(Pizza, { name: "Pepperoni", description: "Tomato, mozzarella, pepperoni" }),
            React.createElement(Pizza, { name: "Hawaiian", description: "Tomato, mozzarella, ham, pineapple" }),
            React.createElement(Pizza, { name: "Vegetarian", description: "Tomato, mozzarella, peppers, mushrooms, onions" }),
            React.createElement(Pizza, { name: "BBQ Chicken", description: "BBQ sauce, mozzarella, chicken, onions" }),

        ]
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
