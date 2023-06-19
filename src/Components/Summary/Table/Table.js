import React from 'react';
import style from './Table.module.scss';

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]

const Table = ({formData}) => {
    console.log(formData);
    return (
            <table className={style.container}>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                </tr>
                {Object.values(formData)?.map((form) => {
                    console.log('inside form--->', form, Object.keys(form), Object.values(form));
                    return (
                        <tr>
                            <td>{Object.keys(form)}</td>
                            <td>{Object.values(form)}</td>
                        </tr>
                    )
                })}
            </table>
    )
}


export default Table;