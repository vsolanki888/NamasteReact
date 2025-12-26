const div = [React.createElement("div", {id: "parent"}, 
    React.createElement("child", {id: "child"},
        [
            React.createElement("h2", {}, "I'm h2 tag"),
            React.createElement("h1", {}, "I'm h1 tag")
        ]
    )
),
React.createElement("div", {id: "parent2"}, 
    React.createElement("child", {id: "child"},
        [
            React.createElement("h2", {}, "I'm h2 tag"),
            React.createElement("h1", {}, "I'm h1 tag")
        ]
    )
)];
ReactDOM.createRoot(document.getElementById("root")).render(div);