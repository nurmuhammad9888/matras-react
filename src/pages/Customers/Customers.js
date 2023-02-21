import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { StyleHeaderInput, StyleHedaer, StyleInputWrap, StyleItemCustomirBtn, StyleOrderICustomitHeaderWrap, StyleOrderICustomiWrap, StyleOrderItem, StyleOrderItemCustomirData, StyleOrderItemDate, StyleOrderItemHeader, StyleOrderItemHeaderId, StyleOrderItemHeaderNumber, StyleOrderItemHeaderSwetch, StyleOrderItemId, StyleOrderItemNumber, StyleOrderList, StyleOrderWrap, StyleUserSpan, StyleUserTitle, StyleUserWrap } from './Customers.style'
import { Pagination } from '../../Pagination/Pagination';

export const Customers = () => {
    const [page, setPages] = useState(1);
const state = useSelector((state) => state.token);
const [datas, setData] = useState([]);
const [change, setChange] = useState(false);

const { count, data } = datas;
console.log(count);
useEffect(() => {
    axios.get("https://matras-store.onrender.com/admin/contact/" + page,
    {
        headers:{
            Authorization:state.token
        }
    }
)
    .then(res => {
        if(res.status  === 200){
            console.log(res)
            setData(res.data)
        }
    })
    .catch(err => console.log(err))
}, [change, page])

const handlerClick = (id) => {
    console.log(id);
    axios.delete("https://matras-store.onrender.com/admin/contact/" + id,
    {
        headers:{
            Authorization:state.token
        }
    })
    .then(res => {
        console.log(res)
        if(res.status  === 200){
            console.log(res)
            setChange(true)
            toast.success("Wow so easy!")
        }
    })
    .catch(err => console.log(err))
}

return (
        <>
        <StyleOrderWrap>
            <StyleHedaer>
                <StyleInputWrap>
                    <StyleHeaderInput type="search" name='serach' placeholder='User'/>
                </StyleInputWrap>
                <StyleUserWrap>
                    <StyleUserSpan></StyleUserSpan>
                    <StyleUserTitle>John Doe</StyleUserTitle>
                </StyleUserWrap>
            </StyleHedaer>
            <StyleOrderList>
                <StyleOrderItemHeader>
                    <StyleOrderICustomitHeaderWrap>
                        <StyleOrderItemHeaderId>ID</StyleOrderItemHeaderId>
                        <StyleOrderItemDate>sana</StyleOrderItemDate>
                        <StyleOrderItemHeaderNumber>telefon raqami</StyleOrderItemHeaderNumber>
                        <StyleOrderItemHeaderSwetch>Qayta aloqa</StyleOrderItemHeaderSwetch>
                    </StyleOrderICustomitHeaderWrap>
                </StyleOrderItemHeader>
                {data?.map(el => (
                <StyleOrderItem key={el.id}>
                    <StyleOrderICustomiWrap>
                        <StyleOrderItemId> {el.id}</StyleOrderItemId>
                        <StyleOrderItemCustomirData>{el.time.slice(11, 16)}-{el.time.slice(0, 10)}</StyleOrderItemCustomirData>
                        <StyleOrderItemNumber>{el.number}</StyleOrderItemNumber>
                        <input className='input' type="checkbox" id={el.id} /><label className='label' htmlFor={el.id}>Toggle</label>
                    </StyleOrderICustomiWrap>
                    <StyleItemCustomirBtn onClick={() => handlerClick(el.id)}></StyleItemCustomirBtn>
                </StyleOrderItem>
                ))}
            </StyleOrderList>
        <Pagination countPage={count} setPages={setPages} page={page}/>
        </StyleOrderWrap>
        <ToastContainer />
        </>
        )
    }
    