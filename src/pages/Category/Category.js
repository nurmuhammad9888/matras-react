import React, { useState } from 'react'
import { StyleCategoryHeaderName, StyleCategoryirBtnAdd, StyleCategoryirBtnModalAdd, StyleCategoryirBtnModalClose, StyleCategoryirBtnWrap, StyleCategoryirDeletBtn, StyleCategoryirEditBtn, StyleCategoryirModalAddForm, StyleCategoryirModalAddInput, StyleCategoryirModalAddSwetchTitle, StyleCategoryirModalAddSwetchWrap, StyleCategoryirModalAddText, StyleCategoryirModalAddTitle, StyleCategoryirModalBtnNo, StyleCategoryirModalBtnWrap, StyleCategoryirModalBtnYes, StyleCategoryirModalTitle, StyleCategoryItem, StyleCategoryItemHeader, StyleCategoryItemName, StyleHedaer, StyleInputWrap, StyleOrderList, StyleOrderWrap, StyleUserSpan, StyleUserTitle, StyleUserWrap } from './Category.style'
import Modal from 'react-modal';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
Modal.setAppElement('#root');


export const Category = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenAdd, setIsOpenAdd] = useState(false);
    const [modalIsOpenPut, setIsOpenPut] = useState(false);
    const inputRef = useRef()
    const [id, setId] = useState("");
    const [value, setValue] = useState("");
    const state = useSelector((state) => state.token);

    const [data, setData] = useState([]);
    const [change, setChange] = useState(false);

// CATEGORY DELETE 
const handlerDeletFunc = () => {
    axios.delete("https://matras-store.onrender.com/admin/categories/" + id,
    {
        headers:{
            Authorization: state.token
        }
    })
    .then(res => {
        if(res.status  === 200){
            console.log(res)
            toast.success("Wow so easy!")
            setIsOpen(false)
            setChange(true)
        }
    })
    .catch(err => console.log(err))
}

// CATEGORY PUT
const handlerEdit = (evt) =>{
    evt.preventDefault()
    axios.put("https://matras-store.onrender.com/admin/categories/" + id, 
    {
        "category":inputRef.current.value,
        "isActive":true 
    } ,
        {
            headers:{
                Authorization: state.token
            },
        })
        .then(res => {
            if(res.status  === 200){
                console.log(res)
                setIsOpenPut(false)
                toast.success("Wow so easy!")
                setChange(true)
            }
        })
        .catch(err => console.log(err))
}



// CATEGORY POST
const handlerCategoryAdd = (evt) => {
    evt.preventDefault()
    axios.post("https://matras-store.onrender.com/admin/categories", 
    {
        "category":inputRef.current.value,
        "isActive":true 
    } ,
        {
            headers:{
                Authorization: state.token
            },
        })
        .then(res => {
            if(res.status  === 201){
                console.log(res)
                setIsOpenAdd(false)
                toast.success("Wow so easy!")
                setChange(true)
            }
        })
        .catch(err => console.log(err))
}

// CATEGORY GET
useEffect(() => {
    axios.get("https://matras-store.onrender.com/admin/categories",
    {
        headers:{
            Authorization: state.token
        }
    })
    .then(res => {
        if(res.status  === 200){
            console.log(res)
            setData(res.data)
        }
    })
    .catch(err => console.log(err))
}, [change])

    return (
        <>
        <StyleOrderWrap>
            <StyleHedaer>
                <StyleInputWrap>
                </StyleInputWrap>
                <StyleUserWrap>
                    <StyleUserSpan></StyleUserSpan>
                    <StyleUserTitle>John Doe</StyleUserTitle>
                </StyleUserWrap>
            </StyleHedaer>

            <StyleOrderList>
                <StyleCategoryItemHeader>
                        <StyleCategoryHeaderName>Toifalar</StyleCategoryHeaderName>
                </StyleCategoryItemHeader>
                {data.map(el => (
                <StyleCategoryItem key={el.id}>
                        <StyleCategoryItemName> {el.category}</StyleCategoryItemName>
                        <StyleCategoryirBtnWrap>
                            <StyleCategoryirDeletBtn onClick={() => {
                                setIsOpen(true)
                                setId(el.id)}}>
                                </StyleCategoryirDeletBtn>
                            <StyleCategoryirEditBtn onClick={() => {
                                setIsOpenPut(true)
                                setId(el.id)
                                setValue(el.category)
                                }}></StyleCategoryirEditBtn>
                        </StyleCategoryirBtnWrap>
                </StyleCategoryItem>
                ))}
            </StyleOrderList>
            <StyleCategoryirBtnAdd onClick={() => setIsOpenAdd(true)}>Qo’shish</StyleCategoryirBtnAdd>
        </StyleOrderWrap>

        {/* DELETE  */}
        <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={{
            overlay:{
                backgroundColor:"#00000040"
            },
            content:{
                padding:"25px 24px 20px 24px",
                top:"45%",
                left:"50%",
                width: "335px",
                transform:"translate(-50%, -50%)",
                height: "126px",
                background: "#FFFFFF",
            }
        }}>
            <StyleCategoryirModalTitle>Haqiqatdan ham o’chirmoqchimisiz?</StyleCategoryirModalTitle>
            <StyleCategoryirModalBtnWrap>
                <StyleCategoryirModalBtnNo onClick={() => setIsOpen(false)}>YO’Q</StyleCategoryirModalBtnNo>
                <StyleCategoryirModalBtnYes onClick={handlerDeletFunc}>HA</StyleCategoryirModalBtnYes>
            </StyleCategoryirModalBtnWrap>
        </Modal>

        {/* PUT  */}
        <Modal isOpen={modalIsOpenPut} onRequestClose={() => setIsOpenPut(false)} style={{
            overlay:{
                backgroundColor:"#00000040"
            },
            content:{
                padding:"25px",
                top:"45%",
                left:"50%",
                width: "274px",
                transform:"translate(-50%, -50%)",
                height: "310px",
                background: "#FFFFFF",
            }
        }}>
            <StyleCategoryirBtnModalClose onClick={() => setIsOpenPut(false)}></StyleCategoryirBtnModalClose>
            <StyleCategoryirModalAddTitle>O'zgartrish</StyleCategoryirModalAddTitle>
            <StyleCategoryirModalAddText>Kategoriya nomi</StyleCategoryirModalAddText>
            <StyleCategoryirModalAddForm  onSubmit={handlerEdit}>
                <StyleCategoryirModalAddInput defaultValue={value} ref={inputRef} name='category' type="text" placeholder='masalan: Model B' required/>
                <StyleCategoryirModalAddSwetchWrap>
                    <StyleCategoryirModalAddSwetchTitle>Holat</StyleCategoryirModalAddSwetchTitle>
                    <input className='input' type="checkbox" id={"hello"} /><label className='label' htmlFor={"hello"}>Toggle</label>
                </StyleCategoryirModalAddSwetchWrap>
                <StyleCategoryirBtnModalAdd type='submit'>Qo’shish</StyleCategoryirBtnModalAdd>
            </StyleCategoryirModalAddForm>
        </Modal>

        {/* POST  */}
        <Modal isOpen={modalIsOpenAdd} onRequestClose={() => setIsOpenAdd(false)} style={{
            overlay:{
                backgroundColor:"#00000040"
            },
            content:{
                padding:"25px",
                top:"45%",
                left:"50%",
                width: "274px",
                transform:"translate(-50%, -50%)",
                height: "310px",
                background: "#FFFFFF",
            }
        }}>
            <StyleCategoryirBtnModalClose onClick={() => setIsOpenAdd(false)}></StyleCategoryirBtnModalClose>
            <StyleCategoryirModalAddTitle>Qo’shish</StyleCategoryirModalAddTitle>
            <StyleCategoryirModalAddText>Kategoriya nomi</StyleCategoryirModalAddText>
            <StyleCategoryirModalAddForm  onSubmit={handlerCategoryAdd}>
                <StyleCategoryirModalAddInput ref={inputRef} name='category' type="text" placeholder='masalan: Model B' required/>
                <StyleCategoryirModalAddSwetchWrap>
                    <StyleCategoryirModalAddSwetchTitle>Holat</StyleCategoryirModalAddSwetchTitle>
                    <input className='input' type="checkbox" id={"hello"} /><label className='label' htmlFor={"hello"}>Toggle</label>
                </StyleCategoryirModalAddSwetchWrap>
                <StyleCategoryirBtnModalAdd type='submit'>Qo’shish</StyleCategoryirBtnModalAdd>
            </StyleCategoryirModalAddForm>
        </Modal>
        <ToastContainer />
        </>
        )
    }
    