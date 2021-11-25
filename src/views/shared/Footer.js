import React, { Component } from "react";
import '../assets/css/reset.css';
import '../assets/css/footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p>2021 - LM Stocks</p>
                {/* Esse componente é pra colocar informações sobre a gnt, se quiser colocar mais coisa fica a vontade */}
                 <p>Project created by <a href="https://github.com/LukeDetonator3000">Lucas Gabriel</a>, <a href="https://github.com/luisaferreira">Maria Luisa</a> and <a href="https://github.com/MarinaThompson">Marina Leticia</a></p>
            </footer>)
    }
}

export default Footer;