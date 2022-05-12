import './App.css';
import React, {useState} from "react";
import db from "./firebase";
import CompanyList from "./components/CompanyList";
import {Button, Message,Field} from "./ui";
import './styles.css';
import Modal from "./ui/Modal";
import AddCompany from "./components/AddCompany";
import Toaster from "./ui/Toaster";


function App() {

    const [toasts, setToasts] = useState([])

    return (
        <div className="App">
          <h1> 기업별 학생 관리 시스템 </h1>

            <AddCompany setToasts = {setToasts} />

          <CompanyList/>

            <Toaster toasts={toasts}/>

        </div>
    );
}

export default App;
