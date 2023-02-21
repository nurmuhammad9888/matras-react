import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Pagination } from '../../Pagination/Pagination';
import { StyleHeaderInput, StyleHedaer, StyleInputWrap, StyleOrderItem, StyleOrderItemHeader, StyleOrderItemHeaderId, StyleOrderItemHeaderNumber, StyleOrderItemHeaderOrderCount, StyleOrderItemHeaderOrdermName, StyleOrderItemHeaderSwetch, StyleOrderItemId, StyleOrderItemNumber, StyleOrderItemOrderCount, StyleOrderItemOrdermName, StyleOrderItemSwetch, StyleOrderItemUseName, StyleOrderItemUserName, StyleOrderList, StyleOrderWrap, StyleUserSpan, StyleUserTitle, StyleUserWrap } from './Order.style'

export const Order = () => {
    const state = useSelector((state) => state.token);
    const [datas, setData] = useState([]);
    const [page, setPages] = useState(1);
    const { count, data } = datas;

    useEffect(() => {
        axios.get("https://matras-store.onrender.com/admin/orders/" + page,
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
    }, [page])

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
                        <StyleOrderItemHeaderId>ID</StyleOrderItemHeaderId>
                        <StyleOrderItemUserName>ismi</StyleOrderItemUserName>
                        <StyleOrderItemHeaderNumber>telefon raqami</StyleOrderItemHeaderNumber>
                        <StyleOrderItemHeaderOrdermName>mahsulot nomlari</StyleOrderItemHeaderOrdermName>
                        <StyleOrderItemHeaderOrderCount>miqdor</StyleOrderItemHeaderOrderCount>
                        <StyleOrderItemHeaderSwetch>Qayta aloqa</StyleOrderItemHeaderSwetch>
                </StyleOrderItemHeader>
                {data?.map(el => (
                    <StyleOrderItem key={el.id}>
                            <StyleOrderItemId> {el.id}</StyleOrderItemId>
                            <StyleOrderItemUseName>{el.name}</StyleOrderItemUseName>
                            <StyleOrderItemNumber>{el.number}</StyleOrderItemNumber>
                            <StyleOrderItemOrdermName>{el.product_name}</StyleOrderItemOrdermName>
                            <StyleOrderItemOrderCount>{el.count}</StyleOrderItemOrderCount>
                            <input className='input' type="checkbox" id={el.id} /><label  className='label' htmlFor={el.id}>Toggle</label>
                    </StyleOrderItem>
                ))}
            </StyleOrderList>
        <Pagination countPage={count} setPages={setPages} page={page}/>
        </StyleOrderWrap>
        </>
        )
    }
    