import React, { useState } from 'react'
import { StyleAddressModalBtn, StyleAddressModalCategoryWrap, StyleAddressModalContentWrap, StyleAddressModalForm, StyleAddressModalImgWrap, StyleAddressModalInput, StyleAddressModalInputCarusel, StyleAddressModalLabelCarusel, StyleAddressModalNovinkaWrap, StyleAddressModalOPtion, StyleAddressModalSelect, StyleAddressModalTextarea, StyleAddressModalTitle, StyleAddressModalWrap, StyleCategoryHeaderName, StyleCategoryHeaderText, StyleCategoryirBtnAdd, StyleCategoryirBtnModalAdd, StyleCategoryirBtnModalClose, StyleCategoryirBtnModalWrap, StyleCategoryirBtnWrap, StyleCategoryirDeletBtn, StyleCategoryirEditBtn, StyleCategoryirModalAddForm, StyleCategoryirModalAddInput, StyleCategoryirModalAddSwetchTitle, StyleCategoryirModalAddSwetchWrap, StyleCategoryirModalAddTitle, StyleCategoryirModalBtnNo, StyleCategoryirModalBtnWrap, StyleCategoryirModalBtnYes, StyleCategoryirModalTitle, StyleCategoryItem, StyleCategoryItemHeader, StyleCategoryItemName, StyleHedaer, StyleInputWrap, StyleModalWrapText, StyleOrderList, StyleOrderWrap, StyleTexHeaderWrap, StyleTexTextWrap, StyleTextirModalWrap, StyleUserSpan, StyleUserTitle, StyleUserWrap } from './Address.style'
import Modal from 'react-modal';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useSelector } from "react-redux";
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
Modal.setAppElement('#root');

export const Address = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenAdd, setIsOpenAdd] = useState(false);
    const [modalIsOpenPut, setIsOpenPut] = useState(false);
    const [swetchNovinka, setSwetchNovinka] = useState(false);
    const locationRef = useRef();
    const destinationRef = useRef();
    const geolacationRef = useRef();
    const imgRef01 = useRef();
    const imgRef02 = useRef();
    const imgRef03 = useRef();
    const [id, setId] = useState("");
    const state = useSelector((state) => state.token);
    const [data, setData] = useState([]);
    const [change, setChange] = useState(false);
    const dataValue = data.find(item => item.id == id)

// ADDRESS DELETE 
const handlerDeletFunc = () => {
    axios.delete("https://matras-store.onrender.com/admin/address/" + id,
    {
        headers:{
            Authorization:state.token
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

// ADDRESS PUT
const handlerEdit = (evt) =>{
    evt.preventDefault()
    const newFormData = new FormData();
    newFormData.append("location", locationRef.current.value,)
    newFormData.append("destination", destinationRef.current.value,)
    newFormData.append("geolocation",geolacationRef.current.value,)
    newFormData.append("images",imgRef01.current.files[0],)
    newFormData.append("images",imgRef02.current.files[0],)
    newFormData.append("images",imgRef03.current.files[0],)
    newFormData.append( "isActive",true,)
    axios.put("https://matras-store.onrender.com/admin/address/" + id, newFormData,
        {
            headers:{
                Authorization:state.token
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

// ADDRESS POST
const handlerAdd = (evt) => {
    evt.preventDefault()
    const newFormData = new FormData();
    newFormData.append("location", locationRef.current.value,)
    newFormData.append("destination", destinationRef.current.value,)
    newFormData.append("geolocation",geolacationRef.current.value,)
    newFormData.append("images",imgRef01.current.files[0],)
    newFormData.append("images",imgRef02.current.files[0],)
    newFormData.append("images",imgRef03.current.files[0],)
    newFormData.append( "isActive",true,)
    axios.post("https://matras-store.onrender.com/admin/address", newFormData,
        {
            headers:{
                Authorization:state.token
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

// ADDRESS GET
useEffect(() => {
    axios.get("https://matras-store.onrender.com/admin/address",
    {
        headers:{
            Authorization:state.token
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
                        <StyleCategoryHeaderName>Manzil</StyleCategoryHeaderName>
                        <StyleCategoryHeaderText>Matn</StyleCategoryHeaderText>
                        <StyleCategoryHeaderName>Location</StyleCategoryHeaderName>
                    </StyleTexHeaderWrap>
                </StyleCategoryItemHeader>
                {data.map(el => (
                <StyleCategoryItem key={el.id}>
                    <StyleTexTextWrap>
                        <StyleCategoryItemName> {el.location}</StyleCategoryItemName>
                        <StyleCategoryItemName> {el.destination}</StyleCategoryItemName>
                        <Link className='address-link' target={'blank'} to={el.geolacation}></Link>
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
                width: "815px",
                transform:"translate(-50%, -50%)",
                height: "352px",
                background: "#FFFFFF",
            }
        }}>
            <StyleCategoryirBtnModalClose onClick={() => setIsOpenPut(false)}></StyleCategoryirBtnModalClose>
            <StyleCategoryirModalAddTitle>O'zgartrish</StyleCategoryirModalAddTitle>
            <StyleAddressModalWrap>
                <StyleAddressModalForm onSubmit={handlerEdit}>
                        <StyleAddressModalImgWrap>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}>
                                    <SwiperSlide>
                                        <StyleAddressModalLabelCarusel >
                                                <StyleAddressModalInputCarusel ref={imgRef01} name='img_carusel01' type="file"/>
                                        </StyleAddressModalLabelCarusel>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <StyleAddressModalLabelCarusel>
                                                <StyleAddressModalInputCarusel ref={imgRef02} name='img_carusel02' type="file"/>
                                        </StyleAddressModalLabelCarusel>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <StyleAddressModalLabelCarusel>
                                                <StyleAddressModalInputCarusel ref={imgRef03} name='img_carusel03' type="file"/>
                                        </StyleAddressModalLabelCarusel>
                                    </SwiperSlide>
                            </Swiper>
                        </StyleAddressModalImgWrap>
                            <StyleAddressModalCategoryWrap>
                                <StyleAddressModalTitle>Manzil</StyleAddressModalTitle>
                                <StyleAddressModalInput defaultValue={dataValue?.location} ref={locationRef} type="text" name='address_name'  required />
                                <StyleAddressModalTitle>Location</StyleAddressModalTitle>
                                <StyleAddressModalInput defaultValue={dataValue?.geolacation} ref={geolacationRef} type="text" name='location' required />
                                <StyleAddressModalNovinkaWrap>
                                    <StyleAddressModalTitle>Holat</StyleAddressModalTitle>
                                    <input className='input' type="checkbox" onChange={() => setSwetchNovinka(!swetchNovinka)} id="1" /><label className='label' htmlFor="1">Toggle</label>
                                </StyleAddressModalNovinkaWrap>
                            </StyleAddressModalCategoryWrap>
                            <StyleAddressModalContentWrap>
                            <StyleAddressModalTitle>Matn</StyleAddressModalTitle>
                                <StyleAddressModalTextarea defaultValue={dataValue?.destination} ref={destinationRef} name='body' required/>
                                <StyleAddressModalBtn type='submit'>Saqlash</StyleAddressModalBtn>
                            </StyleAddressModalContentWrap>
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
                width: "815px",
                transform:"translate(-50%, -50%)",
                height: "352px",
                background: "#FFFFFF",
            }
        }}>
            <StyleCategoryirBtnModalClose onClick={() => setIsOpenAdd(false)}></StyleCategoryirBtnModalClose>
            <StyleCategoryirModalAddTitle>Qo’shish</StyleCategoryirModalAddTitle>
            <StyleAddressModalWrap>
                <StyleAddressModalForm onSubmit={handlerAdd}>
                        <StyleAddressModalImgWrap>
                        <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}>
                                    <SwiperSlide>
                                        <StyleAddressModalLabelCarusel >
                                                <StyleAddressModalInputCarusel ref={imgRef01} name='img_carusel01' type="file"/>
                                        </StyleAddressModalLabelCarusel>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <StyleAddressModalLabelCarusel>
                                                <StyleAddressModalInputCarusel ref={imgRef02} name='img_carusel02' type="file"/>
                                        </StyleAddressModalLabelCarusel>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <StyleAddressModalLabelCarusel>
                                                <StyleAddressModalInputCarusel ref={imgRef03} name='img_carusel03' type="file"/>
                                        </StyleAddressModalLabelCarusel>
                                    </SwiperSlide>
                            </Swiper>
                        </StyleAddressModalImgWrap>
                            <StyleAddressModalCategoryWrap>
                                <StyleAddressModalTitle>Manzil</StyleAddressModalTitle>
                                <StyleAddressModalInput ref={locationRef} type="text" name='address_name'  required />
                                <StyleAddressModalTitle>Location</StyleAddressModalTitle>
                                <StyleAddressModalInput ref={geolacationRef} type="text" name='location' required />
                                <StyleAddressModalNovinkaWrap>
                                    <StyleAddressModalTitle>Holat</StyleAddressModalTitle>
                                    <input className='input' type="checkbox" onChange={() => setSwetchNovinka(!swetchNovinka)} id="1" /><label className='label' htmlFor="1">Toggle</label>
                                </StyleAddressModalNovinkaWrap>
                            </StyleAddressModalCategoryWrap>
                            <StyleAddressModalContentWrap>
                            <StyleAddressModalTitle>Matn</StyleAddressModalTitle>
                                <StyleAddressModalTextarea ref={destinationRef} name='body' required/>
                                <StyleAddressModalBtn type='submit'>Saqlash</StyleAddressModalBtn>
                            </StyleAddressModalContentWrap>
                </StyleAddressModalForm>
            </StyleAddressModalWrap>
        </Modal>
        <ToastContainer />
        </>
        )
    }
    