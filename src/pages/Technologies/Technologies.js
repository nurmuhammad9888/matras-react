import React, { useState } from 'react'
import { StyleCategoryHeaderName, StyleCategoryHeaderText, StyleCategoryirBtnAdd, StyleCategoryirBtnModalAdd, StyleCategoryirBtnModalClose, StyleCategoryirBtnModalWrap, StyleCategoryirBtnWrap, StyleCategoryirDeletBtn, StyleCategoryirEditBtn, StyleCategoryirModalAddForm, StyleCategoryirModalAddInput, StyleCategoryirModalAddSwetchTitle, StyleCategoryirModalAddSwetchWrap, StyleCategoryirModalAddTitle, StyleCategoryirModalBtnNo, StyleCategoryirModalBtnWrap, StyleCategoryirModalBtnYes, StyleCategoryirModalTitle, StyleCategoryItem, StyleCategoryItemHeader, StyleCategoryItemName, StyleHedaer, StyleInputWrap, StyleModalWrapText, StyleOrderList, StyleOrderWrap, StyleTexHeaderWrap, StyleTexTextWrap, StyleTextirModalWrap, StyleUserSpan, StyleUserTitle, StyleUserWrap } from './Technologies.style'
import Modal from 'react-modal';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
Modal.setAppElement('#root');

export const Technologies = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenAdd, setIsOpenAdd] = useState(false);
    const [modalIsOpenPut, setIsOpenPut] = useState(false);
    const imgNameRef = useRef();
    const imgurlRef = useRef();
    const vedioTextRef = useRef();
    const vedioRef = useRef();
    const [id, setId] = useState("");
    const state = useSelector((state) => state.token);
    const [data, setData] = useState([]);
    const [change, setChange] = useState(false);
    const dataValue = data.find(item => item.id == id)

// TECHNONLOGIES DELETE 
const handlerDeletFunc = () => {
    axios.delete("https://matras-store.onrender.com/admin/technology/" + id,
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

// TECHNONLOGIES PUT
const handlerEdit = (evt) =>{
    evt.preventDefault()
    axios.put("https://matras-store.onrender.com/admin/technology/" + id, 
        {
            "name": imgNameRef.current.value,
            "thumbnail": imgurlRef.current.value,
            "link":vedioRef.current.value,
            "description":vedioTextRef.current.value,
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

// TECHNONLOGIES POST
const handlerTechAdd = (evt) => {
    evt.preventDefault()
    axios.post("https://matras-store.onrender.com/admin/technology", 
    {
        "name": imgNameRef.current.value,
        "thumbnail": imgurlRef.current.value,
        "link":vedioRef.current.value,
        "description":vedioTextRef.current.value,
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

// TECHNONLOGIES GET
useEffect(() => {
    axios.get("https://matras-store.onrender.com/admin/technology",
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
                    <StyleTexHeaderWrap>
                        <StyleCategoryHeaderName>Toifalar</StyleCategoryHeaderName>
                        <StyleCategoryHeaderText>Matn</StyleCategoryHeaderText>
                        <StyleCategoryHeaderName>Video</StyleCategoryHeaderName>
                    </StyleTexHeaderWrap>
                </StyleCategoryItemHeader>
                {data.map(el => (
                <StyleCategoryItem key={el.id}>
                    <StyleTexTextWrap>
                        <StyleCategoryItemName> {el.name}</StyleCategoryItemName>
                        <StyleCategoryItemName> {el.description}</StyleCategoryItemName>
                        <StyleCategoryItemName> {el.link}</StyleCategoryItemName>
                    </StyleTexTextWrap>
                        <StyleCategoryirBtnWrap>
                            <StyleCategoryirDeletBtn onClick={() => {
                                setIsOpen(true)
                                setId(el.id)}}>
                                </StyleCategoryirDeletBtn>
                            <StyleCategoryirEditBtn onClick={() => {
                                setIsOpenPut(true)
                                setId(el.id)
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
                width: "515px",
                transform:"translate(-50%, -50%)",
                height: "341px",
                background: "#FFFFFF",
            }
        }}>
            <StyleCategoryirBtnModalClose onClick={() => setIsOpenPut(false)}></StyleCategoryirBtnModalClose>
            <StyleCategoryirModalAddTitle>O'zgartrish</StyleCategoryirModalAddTitle>
            <StyleCategoryirModalAddForm  onSubmit={handlerEdit}>
                <StyleTextirModalWrap>
                    <StyleModalWrapText>
                        <StyleCategoryirModalAddSwetchTitle>Nomi</StyleCategoryirModalAddSwetchTitle>
                        <StyleCategoryirModalAddInput defaultValue={dataValue?.name} ref={imgNameRef} name='img_text' type="text" placeholder='masalan:' required/>
                    </StyleModalWrapText>
                    <StyleModalWrapText>
                        <StyleCategoryirModalAddSwetchTitle>Rasm</StyleCategoryirModalAddSwetchTitle>
                        <StyleCategoryirModalAddInput defaultValue={dataValue?.thumbnail} ref={imgurlRef} name='img_url' type="text" placeholder='masalan:' required/>
                    </StyleModalWrapText>
                    <StyleModalWrapText>
                        <StyleCategoryirModalAddSwetchTitle>Nomi</StyleCategoryirModalAddSwetchTitle>
                        <StyleCategoryirModalAddInput defaultValue={dataValue?.description} ref={vedioTextRef} name='body' type="text" placeholder='masalan:' required/>
                    </StyleModalWrapText>
                    <StyleModalWrapText>
                        <StyleCategoryirModalAddSwetchTitle>Video</StyleCategoryirModalAddSwetchTitle>
                        <StyleCategoryirModalAddInput defaultValue={dataValue?.link} ref={vedioRef} name='vedio_url' type="text" placeholder='masalan:' required/>
                    </StyleModalWrapText>
                </StyleTextirModalWrap>
                <StyleCategoryirModalAddSwetchWrap>
                    <StyleCategoryirModalAddSwetchTitle className='mb-0'>Navinla</StyleCategoryirModalAddSwetchTitle>
                    <input className='input' type="checkbox" id={"hello"} /><label className='label' htmlFor={"hello"}>Toggle</label>
                    <StyleCategoryirBtnModalWrap>
                        <StyleCategoryirBtnModalAdd type='submit'>Qo’shish</StyleCategoryirBtnModalAdd>
                    </StyleCategoryirBtnModalWrap>
                </StyleCategoryirModalAddSwetchWrap>
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
                width: "515px",
                transform:"translate(-50%, -50%)",
                height: "341px",
                background: "#FFFFFF",
            }
        }}>
            <StyleCategoryirBtnModalClose onClick={() => setIsOpenAdd(false)}></StyleCategoryirBtnModalClose>
            <StyleCategoryirModalAddTitle>Qo’shish</StyleCategoryirModalAddTitle>
            <StyleCategoryirModalAddForm  onSubmit={handlerTechAdd}>
                <StyleTextirModalWrap>
                    <StyleModalWrapText>
                        <StyleCategoryirModalAddSwetchTitle>Nomi</StyleCategoryirModalAddSwetchTitle>
                        <StyleCategoryirModalAddInput ref={imgNameRef} name='img_text' type="text" placeholder='masalan:' required/>
                    </StyleModalWrapText>
                    <StyleModalWrapText>
                        <StyleCategoryirModalAddSwetchTitle>Rasm</StyleCategoryirModalAddSwetchTitle>
                        <StyleCategoryirModalAddInput ref={imgurlRef} name='img_url' type="text" placeholder='masalan:' required/>
                    </StyleModalWrapText>
                    <StyleModalWrapText>
                        <StyleCategoryirModalAddSwetchTitle>Nomi</StyleCategoryirModalAddSwetchTitle>
                        <StyleCategoryirModalAddInput ref={vedioTextRef} name='body' type="text" placeholder='masalan:' required/>
                    </StyleModalWrapText>
                    <StyleModalWrapText>
                        <StyleCategoryirModalAddSwetchTitle>Video</StyleCategoryirModalAddSwetchTitle>
                        <StyleCategoryirModalAddInput ref={vedioRef} name='vedio_url' type="text" placeholder='masalan:' required/>
                    </StyleModalWrapText>
                </StyleTextirModalWrap>
                <StyleCategoryirModalAddSwetchWrap>
                    <StyleCategoryirModalAddSwetchTitle className='mb-0'>Navinla</StyleCategoryirModalAddSwetchTitle>
                    <input className='input' type="checkbox" id={"hello"} /><label className='label' htmlFor={"hello"}>Toggle</label>
                    <StyleCategoryirBtnModalWrap>
                        <StyleCategoryirBtnModalAdd type='submit'>Qo’shish</StyleCategoryirBtnModalAdd>
                    </StyleCategoryirBtnModalWrap>
                </StyleCategoryirModalAddSwetchWrap>
            </StyleCategoryirModalAddForm>
        </Modal>
        <ToastContainer />
        </>
        )
    }
    