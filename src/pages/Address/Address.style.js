import styled from 'styled-components';
import user from '../../assets/images/Profile.svg';
import DeleteImg from '../../assets/images/delete.svg';
import EditImg from '../../assets/images/edit.svg';
import Close from '../../assets/images/close.svg';
import Carusel from '../../assets/images/carusel.svg';
import SelectArrow from '../../assets/images/select-arrow.svg';

export const StyleOrderWrap = styled.div`
	position: relative;
	width: 100%;
`;
export const StyleHedaer = styled.div`
	display: flex;
	height: 70px;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 15px 60px 15px 15px;
	background: #01384d;
`;
export const StyleInputWrap = styled.div`
	width: 50%;
`;

export const StyleUserWrap = styled.div`
	display: flex;
	align-items: center;
`;

export const StyleUserTitle = styled.p`
	margin: 0;
	margin-left: 10px;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
`;

export const StyleUserSpan = styled.span`
	background: #ffffff;
	border-radius: 50%;
	width: 35px;
	height: 35px;
	background-image: url(${user});
	background-size: 16px 19px;
	background-position: center;
	background-repeat: no-repeat;
`;

export const StyleOrderList = styled.ul`
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background: #888;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
	margin: 30px;
	padding-left: 0;
	height: 600px;
`;

export const StyleCategoryItemHeader = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 16px 97px 16px 30px;
	background: #01384d;
`;
export const StyleTexHeaderWrap = styled.div`
	width: 100%;
	max-width: 550px;
	display: flex;
	justify-content: space-between;
`;

export const StyleCategoryHeaderName = styled.p`
	width: 100%;
	max-width: 150px;
	font-weight: 600;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #ffffff;
	margin: 0;
`;

export const StyleTexTextWrap = styled.div`
	width: 100%;
	max-width: 550px;
	display: flex;
	justify-content: space-between;
`;
export const StyleCategoryHeaderText = styled(StyleCategoryHeaderName)``;
export const StyleCategoryHeaderVedio = styled(StyleCategoryHeaderName)``;

export const StyleCategoryItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 13px 28px 12px 34px;
	border-bottom: 1px solid #01384d60;
	border-left: 1px solid #01384d60;
	border-right: 1px solid #01384d60;
`;

export const StyleCategoryItemName = styled.p`
	width: 100%;
	max-width: 150px;
	margin: 0;
	font-weight: 500;
	font-size: 15px;
	text-align: center;
	line-height: 18px;
	color: #000000;
	white-space: nowrap;
	text-transform: capitalize;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const StyleCategoryirBtnWrap = styled.div`
	height: 34px;
`;
export const StyleCategoryirDeletBtn = styled.button`
	width: 34px;
	height: 34px;
	background-color: #d61f1f20;
	border: none;
	border-radius: 5px;
	background-image: url(${DeleteImg});
	background-size: 21px;
	background-repeat: no-repeat;
	background-position: center;
`;
export const StyleCategoryirEditBtn = styled.button`
	margin-left: 10px;
	width: 34px;
	height: 34px;
	background-color: #01384d20;
	border: none;
	border-radius: 5px;
	background-image: url(${EditImg});
	background-size: 21px;
	background-repeat: no-repeat;
	background-position: center;
`;

export const StyleCategoryirModalTitle = styled.p`
	margin: 0;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #000000;
`;
export const StyleCategoryirModalBtnWrap = styled.div`
	margin-top: 22px;
	display: flex;
	justify-content: end;
`;
export const StyleCategoryirModalBtnYes = styled.button`
	margin-left: 30px;
	width: 80px;
	height: 35px;
	background: #d61f1f20;
	font-weight: 700;
	font-size: 14px;
	line-height: 17px;
	border: none;
	color: #d61f1f;
	border-radius: 5px;
`;
export const StyleCategoryirModalBtnNo = styled.button`
	font-weight: 600;
	border: none;
	font-size: 14px;
	background-color: transparent;
	line-height: 17px;
	color: #000000;
`;

export const StyleCategoryirBtnAdd = styled.button`
	position: absolute;
	bottom: 40px;
	right: 30px;
	padding: 11px 34px;
	font-weight: 600;
	border: none;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	background: #01384d;
	border-radius: 8px;
	color: #ffffff;
`;

export const StyleCategoryirModalAddTitle = styled.h4`
	margin: 0;
    margin-bottom: 10px;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: #000000;
`;
export const StyleCategoryirModalAddText = styled.p`
	margin-top: 30px;
	margin-bottom: 10px;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
`;

export const StyleAddressModalWrap = styled.div`
	margin-top: 25px;
	display: flex;
	justify-content: space-between;
`;
export const StyleAddressModalImgWrap = styled.div`
    width: 100%;
    max-width: 230px;
    height: 230px;
`;
export const StyleAddressModalForm = styled.form`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
export const StyleAddressModalLabelCarusel = styled.label`
	width: 230px;
	height: 230px;
	background: #01384d20;
	border-radius: 8px;
	background-image: url(${Carusel});
	background-size: 70px;
	background-repeat: no-repeat;
	background-position: center;
`;
export const StyleAddressModalInputCarusel = styled.input`
	width: 0;
	height: 0;
`;

export const StyleAddressModalCategoryWrap = styled.div`
	width: 100%;
	max-width: 220px;
`;
export const StyleAddressModalTitle = styled.p`
	margin-top: 20px;
	margin-bottom: 10px;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
	&:nth-child(1) {
		margin-top: 0;
	}
`;
export const StyleAddressModalSelect = styled.select`
	padding: 12px 20px 13px 15px;
	width: 100%;
	max-width: 220px;
	height: 40px;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	appearance: none;
	border-radius: 5px;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	color: #000000;
	opacity: 0.4;
	background-image: url(${SelectArrow});
	background-size: 10px 7px;
	background-repeat: no-repeat;
	background-position: 190px center;
`;
export const StyleAddressModalOPtion = styled.option``
export const StyleAddressModalInput = styled.input`
	padding: 12px 20px 13px 15px;
	width: 100%;
	max-width: 220px;
	height: 40px;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	color: #000000;
	opacity: 0.4;
`;

export const StyleAddressModalContentWrap = styled.div`
	width: 100%;
	max-width: 220px;
`;
export const StyleAddressModalTextarea = styled.textarea`
	padding: 13px 15px;
	width: 220px;
	height: 127px;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
`;
export const StyleAddressModalNovinkaWrap = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const StyleAddressModalBtn = styled.button`
	margin-top: 30px;
	padding: 14px;
	width: 100%;
	max-width: 220px;
	background: #01384d;
	border-radius: 7px;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	border: none;
`;
export const StyleAddressModalNovinkaInput = styled.div`
    position: relative;
`

export const StyleCategoryirBtnModalClose = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	background-color: #01384d;
	background-image: url(${Close});
	background-size: 10px;
	background-repeat: no-repeat;
	background-position: center;
	width: 30px;
	height: 30px;
	border: none;
`;
