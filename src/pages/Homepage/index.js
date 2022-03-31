import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import style from './style.module.css'

const HomePage = () => {

    const [expenses, setExpenses] = useState([])
    const expenseValue = useRef('');
    const expenseType = useRef('');

    const addExpense = () => {
        let expense = {
            value: expenseValue.current.value,
            type: expenseType.current.value
        }
        setExpenses([...expenses, expense])
    }

    return (
        <>
            <div className={style.spaContainer}>
                <div className={style.container}>
                    <div className={style.formGroup}>
                        <label for='expenseValue'>Değer giriniz</label>
                        <input ref={expenseValue} type='text' id='expenseValue' placeholder='0 ₺' />
                        <label for='expenseType'>Tipini seçiniz</label>
                        <select ref={expenseType} id='expenseType'>
                            <option>Seçiniz</option>
                            <option value='+'>Gelir</option>
                            <option value='-'>Gider</option>
                        </select>
                        <input type='button' onClick={() => { addExpense() }} value='Ekle' />
                        {
                            expenses.map(e => (
                                <>
                                    <div style={e.type === '+' ? {color: 'green'} : {color: 'red'}}><p>{e.value} ₺ ({e.type === '+' ? 'Gelir' : 'Gider'})</p></div><br />
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;