import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { StyleCategoryirBtnAdd, StyleCategoryirBtnModalClose, StyleCategoryirBtnWrap, StyleCategoryirDeletBtn, StyleCategoryirEditBtn, StyleCategoryirModalAddTitle, StyleCategoryirModalBtnNo, StyleCategoryirModalBtnWrap, StyleCategoryirModalBtnYes, StyleCategoryirModalTitle, StyleHeaderInput, StyleHedaer, StyleInputWrap, StyleItemProductCategory, StyleItemProductName, StyleItemProductPrice, StyleItemProductSize, StyleItemProductWeight, StyleProducSize, StyleProducStatus, StyleProductCategory, StyleProductItem, StyleProductItemHeader, StyleProductItemHeaderWrap, StyleProductItemWrap, StyleProductList, StyleProductModalBtn, StyleProductModalCategoryWrap, StyleProductModalContentWrap, StyleProductModalForm, StyleProductModalImgWrap, StyleProductModalInput, StyleProductModalInputCarusel, StyleProductModalLabelCarusel, StyleProductModalNovinkaInput, StyleProductModalNovinkaWrap, StyleProductModalOPtion, StyleProductModalSelect, StyleProductModalTextarea, StyleProductModalTitle, StyleProductModalWrap, StyleProductName, StyleProductPrice, StyleProductWrap, StyleProducWeight, StyleUserSpan, StyleUserTitle, StyleUserWrap } from './Products.style'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from "react-redux";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export const Products = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenAdd, setIsOpenAdd] = useState(false);
    const [modalIsOpenPut, setIsOpenPut] = useState(false);
    const [id, setId] = useState("");
    const state = useSelector((state) => state.token);
    const [data, setData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [change, setChange] = useState(false);
    const [swetchNovinka, setSwetchNovinka] = useState(false);
    const [swetch, setSwetch] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const categoryRef = useRef();
    const dataValue = data.find(item => item.id == id)

// PRODUCTS DELETE 
const handlerDeletFunc = () => {
    axios.delete("https://matras-store.onrender.com/admin/products/" + id,
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

// PRODUCTS PUT
const handlerEdit = (data) =>{
    const newFormData = new FormData();
    newFormData.append("name",data.name)
    newFormData.append("category",categoryRef.current.value)
    newFormData.append("weight",data.weight)
    newFormData.append("warranty",data.warranty)
    newFormData.append("size",data.size)
    newFormData.append("capacity",data.capacity)
    newFormData.append("body",data.body)
    newFormData.append("cost",data.cost)
    newFormData.append("newCost",data.newCost)
    newFormData.append("discount", swetch)
    newFormData.append("new",true)
    
    newFormData.append("images",data.images01[0])
    newFormData.append("images",data.images02[0])
    newFormData.append("images",data.images03[0])
    newFormData.append("isActive", true)
    axios.put("https://matras-store.onrender.com/admin/products/" + id, newFormData,
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
                reset();
            }
        })
        .catch(err => console.log(err))
}

// PRODUCTS POST
const handlerAdd = (data) => {
console.log(data);
const cateGoryId = categoryData.find(item => item.id == categoryRef.current.value)
const newFormData = new FormData();
newFormData.append("name",data.name)
newFormData.append("category",cateGoryId.category)
newFormData.append("weight",data.weight)
newFormData.append("warranty",data.warranty)
newFormData.append("size",data.size)
newFormData.append("capacity",data.capacity)
newFormData.append("body",data.body)
newFormData.append("cost",data.cost)
newFormData.append("newCost",data.newCost)
newFormData.append("discount", swetch)
newFormData.append("new",true)

newFormData.append("images",data.images01[0])
newFormData.append("images",data.images02[0])
newFormData.append("images",data.images03[0])
newFormData.append("isActive", true)
    axios.post("https://matras-store.onrender.com/admin/products/" + cateGoryId.id, newFormData,
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
                reset();
            }
        })
        .catch(err => console.log(err))
}

// PRODUCTS GET
useEffect(() => {
    axios.get("https://matras-store.onrender.com/admin/products",
    {
        headers:{
            Authorization: state.token
        }
    })
    .then(res => {
        if(res.status  === 200){
            console.log(res)
            setData(res.data.products)
            setCategoryData(res.data.categories)
        }
    })
    .catch(err => console.log(err))
}, [change])

    return (
        <>
        <StyleProductWrap>
            <StyleHedaer>
                <StyleInputWrap>
                    <StyleHeaderInput type="search" name='serach' placeholder='User'/>
                </StyleInputWrap>
                <StyleUserWrap>
                    <StyleUserSpan></StyleUserSpan>
                    <StyleUserTitle>John Doe</StyleUserTitle>
                </StyleUserWrap>
            </StyleHedaer>
            <StyleProductList>
                <StyleProductItemHeader>
                    <StyleProductItemHeaderWrap>
                        <StyleProductName>Mahsulot nomlari</StyleProductName>
                        <StyleProductCategory>Toifalar</StyleProductCategory>
                        <StyleProductPrice>Narxi</StyleProductPrice>
                        <StyleProducWeight>Yuklama</StyleProducWeight>
                        <StyleProducSize>Razmeri</StyleProducSize>
                        <StyleProducStatus>Status</StyleProducStatus>
                    </StyleProductItemHeaderWrap>
                </StyleProductItemHeader>
                {data.map((el, index) => (
                    <StyleProductItem key={index}>
                        <StyleProductItemWrap>
                            <StyleItemProductName> {el.name}</StyleItemProductName>
                            <StyleItemProductCategory>{el.category}</StyleItemProductCategory>
                            <StyleItemProductPrice>{el.cost}</StyleItemProductPrice>
                            <StyleItemProductWeight>{el.weight}</StyleItemProductWeight>
                            <StyleItemProductSize>{el.size}</StyleItemProductSize>
                            <input className='input' type="checkbox" id={el.id} /><label className='label' htmlFor={el.id}>Toggle</label>
                        </StyleProductItemWrap>
                        <StyleCategoryirBtnWrap>
                                <StyleCategoryirDeletBtn onClick={() => {
                                setIsOpen(true)
                                setId(el.id)}}></StyleCategoryirDeletBtn>
                                <StyleCategoryirEditBtn onClick={() => {
                                setIsOpenPut(true)
                                setId(el.id)
                                reset()
                                }}></StyleCategoryirEditBtn>
                            </StyleCategoryirBtnWrap>
                    </StyleProductItem>
                ))}
            </StyleProductList>
            <StyleCategoryirBtnAdd onClick={() => {
                setIsOpenAdd(true)
                reset()
                }}>Qo’shish</StyleCategoryirBtnAdd>
        </StyleProductWrap>

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

        {/* POST  */}
        <Modal isOpen={modalIsOpenAdd} onRequestClose={() => setIsOpenAdd(false)} style={{
            overlay:{
                backgroundColor:"#00000040"
            },
            content:{
                padding:"25px",
                top:"45%",
                left:"55%",
                width: "1090px",
                transform:"translate(-50%, -50%)",
                height: "430px",
                background: "#FFFFFF",
            }
        }}>
            <StyleCategoryirBtnModalClose onClick={() => setIsOpenAdd(false)}></StyleCategoryirBtnModalClose>
            <StyleCategoryirModalAddTitle>Qo’shish</StyleCategoryirModalAddTitle>
            <StyleProductModalWrap>
                <StyleProductModalForm onSubmit={handleSubmit(handlerAdd)}>
                        <StyleProductModalImgWrap>
                        <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}>
                                    <SwiperSlide>
                                        <StyleProductModalLabelCarusel>
                                            <StyleProductModalInputCarusel {...register("images01")} name='images01' type="file"/>
                                        </StyleProductModalLabelCarusel>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <StyleProductModalLabelCarusel>
                                            <StyleProductModalInputCarusel {...register("images02")} name='images02' type="file"/>
                                        </StyleProductModalLabelCarusel>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <StyleProductModalLabelCarusel>
                                            <StyleProductModalInputCarusel {...register("images03")} name='images03' type="file"/>
                                        </StyleProductModalLabelCarusel>
                                    </SwiperSlide>
                                </Swiper>
                        </StyleProductModalImgWrap>
                            <StyleProductModalCategoryWrap>
                                <StyleProductModalTitle>Toifalar</StyleProductModalTitle>
                                <div>
                                <StyleProductModalSelect ref={categoryRef} name='category' placeholder='masalan: Model C' required>
                                    {categoryData.map((el, index) => (
                                        <StyleProductModalOPtion key={index} value={el.id}>{el.category}</StyleProductModalOPtion>
                                    ))}
                                </StyleProductModalSelect>
                                </div>
                                <StyleProductModalTitle>Tovar nomi</StyleProductModalTitle>
                                <StyleProductModalInput {...register("name")} type="text" name='name' placeholder='masalan: Lux Soft Memory' required />
                                <StyleProductModalTitle>Narxi</StyleProductModalTitle>
                                <StyleProductModalInput {...register("cost")} type="number" name='cost' placeholder='masalan: 20 000' required />
                                <StyleProductModalTitle>Yuklama</StyleProductModalTitle>
                                <StyleProductModalInput {...register("weight")} type="text" name='weight' placeholder='masalan: 200 kg' required />
                            </StyleProductModalCategoryWrap>
                            <StyleProductModalContentWrap>
                                <StyleProductModalTitle>Razmeri</StyleProductModalTitle>
                                <StyleProductModalInput {...register("size")} type="text" name='size' placeholder='masalan: 200 x 140 x 40' required />
                                <StyleProductModalTitle>Kafolat</StyleProductModalTitle>
                                <StyleProductModalInput {...register("warranty")} type="text" name='warranty' placeholder='masalan: 1 yil' required />
                                <StyleProductModalTitle>Sig’m</StyleProductModalTitle>
                                <StyleProductModalInput {...register("capacity")} type="text" name='capacity' placeholder='masalan: 2' required />
                                <StyleProductModalTitle>Aksiya Narxi</StyleProductModalTitle>
                                <StyleProductModalNovinkaInput>
                                <StyleProductModalInput {...register("newCost")} type="number" name='newCost' placeholder='masalan: 1 200 000' />
                                <input className="check" id="checkbox" onChange={() => setSwetch(!swetch)} checked={swetch} type="checkbox"/>
                                <label className="checklabel" htmlFor="checkbox" ></label>
                                </StyleProductModalNovinkaInput>
                            </StyleProductModalContentWrap>
                            <StyleProductModalContentWrap>
                            <StyleProductModalTitle>Ma’lumot</StyleProductModalTitle>
                                <StyleProductModalTextarea {...register("body")} name='body' placeholder='info...' required/>
                                <StyleProductModalNovinkaWrap>
                                    <StyleProductModalTitle>Navinla</StyleProductModalTitle>
                                    <input className='input' type="checkbox" onChange={() => setSwetchNovinka(!swetchNovinka)} id="1" /><label className='label' htmlFor="1">Toggle</label>
                                </StyleProductModalNovinkaWrap>
                                <StyleProductModalNovinkaWrap>
                                    <StyleProductModalTitle>Active</StyleProductModalTitle>
                                    <input className='input' type="checkbox"  id="2" /><label className='label' htmlFor="2">Toggle</label>
                                </StyleProductModalNovinkaWrap>
                                <StyleProductModalBtn type='submit'>Qo’shish</StyleProductModalBtn>
                            </StyleProductModalContentWrap>
                </StyleProductModalForm>
            </StyleProductModalWrap>
        </Modal>

        {/* PUT  */}
        <Modal isOpen={modalIsOpenPut} onRequestClose={() =>{
            reset()
            setIsOpenPut(false)
            setSwetch(false)
        }} style={{
            overlay:{
                backgroundColor:"#00000040"
            },
            content:{
                padding:"25px",
                top:"45%",
                left:"55%",
                width: "1090px",
                transform:"translate(-50%, -50%)",
                height: "430px",
                background: "#FFFFFF",
            }
        }}>
            <StyleCategoryirBtnModalClose onClick={() => {
                reset()
                setIsOpenPut(false)
                setSwetch(false)
                }}></StyleCategoryirBtnModalClose>
            <StyleCategoryirModalAddTitle>O'zgartrish</StyleCategoryirModalAddTitle>
            <StyleProductModalWrap>
            <StyleProductModalForm onSubmit={handleSubmit(handlerEdit)}>
                <StyleProductModalImgWrap>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}>
                            <SwiperSlide>
                                <StyleProductModalLabelCarusel>
                                    <StyleProductModalInputCarusel {...register("images01")} name='images01' type="file"/>
                                </StyleProductModalLabelCarusel>
                            </SwiperSlide>
                            <SwiperSlide>
                                <StyleProductModalLabelCarusel>
                                    <StyleProductModalInputCarusel {...register("images02")} name='images02' type="file"/>
                                </StyleProductModalLabelCarusel>
                            </SwiperSlide>
                            <SwiperSlide>
                                <StyleProductModalLabelCarusel>
                                    <StyleProductModalInputCarusel {...register("images03")} name='images03' type="file"/>
                                </StyleProductModalLabelCarusel>
                            </SwiperSlide>
                    </Swiper>
                </StyleProductModalImgWrap>
                <StyleProductModalCategoryWrap>
                    <StyleProductModalTitle>Toifalar</StyleProductModalTitle>
                    <div>
                    <StyleProductModalSelect ref={categoryRef} defaultValue={dataValue?.category} name='category' placeholder='masalan: Model C' required>
                        <StyleProductModalOPtion value={dataValue?.category}>{dataValue?.category}</StyleProductModalOPtion>
                    </StyleProductModalSelect>
                    </div>
                    <StyleProductModalTitle>Tovar nomi</StyleProductModalTitle>
                    <StyleProductModalInput defaultValue={dataValue?.name} {...register("name")} type="text" name='name' placeholder='masalan: Lux Soft Memory' required />
                    <StyleProductModalTitle>Narxi</StyleProductModalTitle>
                    <StyleProductModalInput defaultValue={dataValue?.cost} {...register("cost")} type="number" name='cost' placeholder='masalan: 20 000' required />
                    <StyleProductModalTitle>Yuklama</StyleProductModalTitle>
                    <StyleProductModalInput defaultValue={dataValue?.weight} {...register("weight")} type="text" name='weight' placeholder='masalan: 200 kg' required />
                </StyleProductModalCategoryWrap>
                <StyleProductModalContentWrap>
                    <StyleProductModalTitle>Razmeri</StyleProductModalTitle>
                    <StyleProductModalInput defaultValue={dataValue?.size} {...register("size")} type="text" name='size' placeholder='masalan: 200 x 140 x 40' required />
                    <StyleProductModalTitle>Kafolat</StyleProductModalTitle>
                    <StyleProductModalInput defaultValue={dataValue?.warranty} {...register("warranty")} type="text" name='warranty' placeholder='masalan: 1 yil' required />
                    <StyleProductModalTitle>Sig’m</StyleProductModalTitle>
                    <StyleProductModalInput defaultValue={dataValue?.capacity} {...register("capacity")} type="text" name='capacity' placeholder='masalan: 2' required />
                    <StyleProductModalTitle>Aksiya Narxi</StyleProductModalTitle>
                    <StyleProductModalNovinkaInput>
                        {console.log(swetch)}
                    <StyleProductModalInput defaultValue={dataValue?.new_cost} {...register("newCost")} type="number" name='newCost' placeholder='masalan: 1 200 000' />
                    <input className="check"  id="checkbox" onChange={() => setSwetch(!swetch)} checked={swetch} type="checkbox"/>
                    <label className="checklabel" htmlFor="checkbox" ></label>
                    </StyleProductModalNovinkaInput>
                </StyleProductModalContentWrap>
                <StyleProductModalContentWrap>
                <StyleProductModalTitle>Ma’lumot</StyleProductModalTitle>
                    <StyleProductModalTextarea defaultValue={dataValue?.body} {...register("body")} name='body' placeholder='info...' required/>
                    <StyleProductModalNovinkaWrap>
                        <StyleProductModalTitle>Navinla</StyleProductModalTitle>
                        <input className='input' type="checkbox" onChange={() => setSwetchNovinka(!swetchNovinka)} id="1" /><label className='label' htmlFor="1">Toggle</label>
                    </StyleProductModalNovinkaWrap>
                    <StyleProductModalNovinkaWrap>
                        <StyleProductModalTitle>Active</StyleProductModalTitle>
                        <input className='input' type="checkbox"  id="2" /><label className='label' htmlFor="2">Toggle</label>
                    </StyleProductModalNovinkaWrap>
                    <StyleProductModalBtn type='submit'>Qo’shish</StyleProductModalBtn>
                </StyleProductModalContentWrap>
                </StyleProductModalForm>
            </StyleProductModalWrap>
        </Modal>
        <ToastContainer />
        </>
        )
    }
    