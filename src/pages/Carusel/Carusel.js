import React, { useState } from 'react'
import { StyleAddressModalBtn, StyleAddressModalCategoryWrap, StyleAddressModalContentWrap, StyleAddressModalForm, StyleAddressModalImgWrap, StyleAddressModalInput, StyleAddressModalInputCarusel, StyleAddressModalLabelCarusel, StyleAddressModalNovinkaWrap, StyleAddressModalTitle, StyleAddressModalWrap, StyleCaruselHeaderName, StyleCategoryHeaderName, StyleCategoryHeaderText, StyleCategoryirBtnAdd, StyleCategoryirBtnModalClose, StyleCategoryirBtnWrap, StyleCategoryirDeletBtn, StyleCategoryirEditBtn, StyleCategoryirModalAddTitle, StyleCategoryirModalBtnNo, StyleCategoryirModalBtnWrap, StyleCategoryirModalBtnYes, StyleCategoryirModalTitle, StyleCategoryItem, StyleCategoryItemHeader, StyleCategoryItemName, StyleHedaer, StyleInputWrap, StyleOrderList, StyleOrderWrap, StyleTexHeaderWrap, StyleTexTextWrap, StyleUserSpan, StyleUserTitle, StyleUserWrap } from './Carusel.style'
import Modal from 'react-modal';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
Modal.setAppElement('#root');

export const Carusel = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenAdd, setIsOpenAdd] = useState(false);
    const [modalIsOpenPut, setIsOpenPut] = useState(false);
    const titlelRef = useRef();
    const imgRef = useRef();
    const state = useSelector((state) => state.token);
    const [id, setId] = useState("");
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const [change, setChange] = useState(false);

// CARUSEL DELETE 
const handlerDeletFunc = () => {
    axios.delete("https://matras-store.onrender.com/admin/carousel/" + id,
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

// CARUSEL PUT
const handlerEdit = (evt) =>{
    evt.preventDefault()
    const newFormData = new FormData();
    console.log(titlelRef.current.value);
    console.log(imgRef.current.files[0]);
    newFormData.append("title", titlelRef.current.value);
    newFormData.append("image",imgRef.current.files[0]);
    axios.put("https://matras-store.onrender.com/admin/carousel/" + id, newFormData,
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

// CARUSEL POST
const handlerAdd = (evt) => {
    evt.preventDefault()
    console.log(titlelRef.current.value);
    console.log(imgRef.current.files[0]);

    const newFormData = new FormData();
    newFormData.append("title", titlelRef.current.value,)
    newFormData.append("image",imgRef.current.files[0],)
    axios.post("https://matras-store.onrender.com/admin/carousel", newFormData,
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

// CARUSEL GET
useEffect(() => {
    axios.get("https://matras-store.onrender.com/admin/carousel",
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
                        <StyleCaruselHeaderName>ID</StyleCaruselHeaderName>
                        <StyleCategoryHeaderName>Matn</StyleCategoryHeaderName>
                    </StyleTexHeaderWrap>
                </StyleCategoryItemHeader>
                {data.map(el => (
                <StyleCategoryItem key={el.id}>
                    <StyleTexTextWrap>
                        <StyleCategoryItemName> {el.id}</StyleCategoryItemName>
                        <StyleCategoryHeaderText>{el.title}</StyleCategoryHeaderText>
                    </StyleTexTextWrap>
                        <StyleCategoryirBtnWrap>
                            <StyleCategoryirDeletBtn onClick={() => {
                                setIsOpen(true)
                                setId(el.id)}}>
                                </StyleCategoryirDeletBtn>
                            <StyleCategoryirEditBtn onClick={() => {
                                setIsOpenPut(true)
                                setId(el.id)
                                setValue(el.title)
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
                width: "615px",
                transform:"translate(-50%, -50%)",
                height: "342px",
                background: "#FFFFFF",
            }
        }}>
            <StyleCategoryirBtnModalClose onClick={() => setIsOpenPut(false)}></StyleCategoryirBtnModalClose>
            <StyleCategoryirModalAddTitle>O'zgartrish</StyleCategoryirModalAddTitle>
            <StyleAddressModalWrap>
                <StyleAddressModalForm onSubmit={handlerEdit}>
                        <StyleAddressModalImgWrap>
                                <StyleAddressModalLabelCarusel>
                                    <StyleAddressModalInputCarusel ref={imgRef} name='img_carusel' type="file"/>
                                </StyleAddressModalLabelCarusel>
                        </StyleAddressModalImgWrap>
                            <StyleAddressModalCategoryWrap>
                                <StyleAddressModalTitle>Title</StyleAddressModalTitle>
                                <StyleAddressModalInput defaultValue={value} ref={titlelRef} type="text" name='carusel_name'required/>
                                <StyleAddressModalContentWrap>
                                    <StyleAddressModalBtn type='submit'>Saqlash</StyleAddressModalBtn>
                                </StyleAddressModalContentWrap>
                            </StyleAddressModalCategoryWrap>
                </StyleAddressModalForm>
            </StyleAddressModalWrap>
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
                width: "615px",
                transform:"translate(-50%, -50%)",
                height: "342px",
                background: "#FFFFFF",
            }
        }}>
            <StyleCategoryirBtnModalClose onClick={() => setIsOpenAdd(false)}></StyleCategoryirBtnModalClose>
            <StyleCategoryirModalAddTitle>Qo’shish</StyleCategoryirModalAddTitle>
            <StyleAddressModalWrap>
                <StyleAddressModalForm onSubmit={handlerAdd}>
                        <StyleAddressModalImgWrap>
                                <StyleAddressModalLabelCarusel>
                                        <StyleAddressModalInputCarusel ref={imgRef} name='img_carusel' type="file"/>
                                </StyleAddressModalLabelCarusel>
                        </StyleAddressModalImgWrap>
                            <StyleAddressModalCategoryWrap>
                                <StyleAddressModalTitle>Title</StyleAddressModalTitle>
                                <StyleAddressModalInput ref={titlelRef} type="text" name='carusel_name'  required />
                                <StyleAddressModalContentWrap>
                                    <StyleAddressModalBtn type='submit'>Saqlash</StyleAddressModalBtn>
                                </StyleAddressModalContentWrap>
                            </StyleAddressModalCategoryWrap>
                </StyleAddressModalForm>
            </StyleAddressModalWrap>
        </Modal>
        <ToastContainer />
        </>
        )
    }
    