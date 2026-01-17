import React from "react";
import ReactDom from "react-dom/client";

//Parte 1
/* function App() {
    return <h1>Hello, World </h1>
}
 */

// Parte 2

/* function Profile() {
    return (
        <img
            src="https://th.bing.com/th/id/R.23e3f025682e1dff281c9a66741d6695?rik=ofJoN06JmSK%2bBg&pid=ImgRaw&r=0"
            alt="Michael Jackson"
        />
    );
};


export default function Gallery() {
    return (
        <section>
            <h1> Personajes Famosos</h1>
            <Profile />
            <Profile />
        </section>
    )
}
 */

// Parte 3
import Gallery from "./Gallery"


export default function App() {
    return (
//        <Gallery />
        <Gallery />
        )
}

const root = ReactDom.createRoot(
    document.getElementById("root")
)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);