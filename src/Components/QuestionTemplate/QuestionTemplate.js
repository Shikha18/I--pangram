import React from 'react';
import data from '../../JSON/data.json';
import style from './QuestionTemplate.module.scss';

const QuestionTemplate = ({ onChange}) => {
    console.log('type of data---->', typeof(data));
   const onChangeHandler = key => event => {
    console.log('event----0>', event);
    onChange({[key]: event.target.value});
   }
    return (
        <div>
            {data?.map(item => {
                console.log('options--->');
                return (
                    <>
                        <div className={style.container}>
                            <div>
                                <span>{item.ques}</span>
                                <span>
                                {
                                    item?.options?.length === 0 && <input onChange={onChangeHandler(item.key)} className={style.input} type='input' />
                                }
                                {
                                    item?.options?.map(index => {
                                        return (
                                            <span>
                                                <input onChange = {onChangeHandler(item.key)} type={item.buttonType} value={index} /> {index}
                                            </span>
                                        )
                                    })
                                }
                                </span>
                            </div>
                        </div>
                    </>
                )
            })
            }
        </div>
    )
}

export default QuestionTemplate