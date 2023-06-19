import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import QuestionTemplate from './Components/QuestionTemplate/QuestionTemplate';
import style from './App.module.scss';
import plus from './Assests/plus.jpeg';
import Table from './Components/Summary/Table/Table';

function App() {
  const [formData, setFormData] = useState({});
  const [formComponents, setFormComponents] = useState([]);
  const [istableVisible, setIsTableVisible] = useState(false);

  const updateFormData = key => val => {
    setFormData((prevFormData) => {
      const updatedFormValue = {...prevFormData};
      if(updatedFormValue[key]) {
        console.log('inside if updatedformdata---->', key);
        updatedFormValue[key] = {
          ...prevFormData[key],
          ...val
        }
      }
      else {
        updatedFormValue[key] = val;
      }
      return updatedFormValue;
    });
  }

  useEffect(() => {
    setFormComponents([<QuestionTemplate onChange={updateFormData(`form${1}`)}/>]);
  }, []);

  console.log('formData--->', formData);
  
  const addButton = (e) => {
    console.log('clicked');
    formComponents.push(<QuestionTemplate onChange = {updateFormData(`form${formComponents.length+1}`)} id={formComponents.length+1} />);
    setFormComponents([...formComponents]);
  }

  const backButtonHandler = (e) => {
    setIsTableVisible(false);
    window.location.assign('/');
    console.log('back clicked-->', e);
    // history.push('/');
  }

  const nextButtonHandler = (e) => {
    setIsTableVisible(true);
    console.log('next clicked-->', e);
    // navigate('/table');
  }

  return (
    <div className={style.container}>
      <Header />
      {
        istableVisible ? <Table formData = {formData}/> : 
        formComponents?.map(ele => {
          return <>{ele}</>
        })
      }

      {/* <Router /> */}
      <span><hr/><button onClick={addButton}><img src ={plus} /></button><hr/></span>
      <div>
        <button onClick={backButtonHandler}>BACK</button>
        <button onClick={nextButtonHandler}>NEXT</button>
      </div>
    </div>
  );
}

export default App;
