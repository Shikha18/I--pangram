import React from 'react';
import data from '../../JSON/data.json';
import style from './QuestionTemplate.module.scss';

const QuestionTemplate = () => {
    const getOptionsByInput = () => {

        return;
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
                                    item?.options?.length === 0 && <input className={style.input} type='input' />
                                }
                                {
                                    item?.options?.map(index => {
                                        return (
                                            <span>
                                                <input type={item.buttonType} /> {index}
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