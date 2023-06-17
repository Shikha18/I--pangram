import Header from './Components/Header/Header';
import QuestionTemplate from './Components/QuestionTemplate/QuestionTemplate';
import style from './App.module.scss';
import plus from './Assests/plus.jpeg';
import { useState } from 'react';

function App() {
  const [formComponents, setFormComponents] = useState([<QuestionTemplate level={"1"}/>]);

  const addButton = (e) => {
    console.log('clicked');
    setFormComponents((prevComponents) => {
      prevComponents.push(<QuestionTemplate />);
      return [...prevComponents];
    });
  }

  const backButtonHandler = () => {

  }

  const nextButtonHandler = () => {
    
  }

  return (
    <div className={style.container}>
      <Header />
      {
        formComponents?.map(ele => {
          return <>{ele}</>
        })
      }
      {/* <QuestionTemplate /> */}
      <span><hr/><button onClick={addButton}><img src ={plus} /></button><hr/></span>
      <div>
        <button onClick={backButtonHandler}>BACK</button>
        <button onClick={nextButtonHandler}>NEXT</button>
      </div>
    </div>
  );
}

export default App;
