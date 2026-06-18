import React from "react";

// Child Component
function Student(props) {
return (
<div style={{ border: "2px solid #333" , padding: "15px" , margin: "10px" , borderRadius: "10px" , width: "250px" ,
    backgroundColor: "#f4f4f4" }}>
    <h2>Name: {props.name}</h2>
    <p>Course: {props.course}</p>
    <p>City: {props.city}</p>
</div>
);
}

// Parent Component
function App() {
return (
<div>
    <h1>React Components using JSX and Props</h1>

    <Student name="Ajay" course="B.Tech" city="Ghaziabad" />

    <Student name="Rahul" course="BCA" city="Delhi" />

    <Student name="Priya" course="MCA" city="Noida" />
</div>
);
}

export default App;