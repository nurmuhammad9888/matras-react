import styled from 'styled-components';
import serach from '../../assets/images/search.svg';
import user from '../../assets/images/Profile.svg';
import DeleteImg from '../../assets/images/delete.svg';


export const StyleOrderWrap = styled.div`
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
export const StyleHeaderInput = styled.input`
	width: 100%;
	max-width: 400px;
	display: block;
	padding: 12px 12px 12px 20px;
	background-color: #ffffff;
	border-radius: 7px;
	font-weight: 500;
	font-size: 13px;
	line-height: 16px;
	color: #000000;
	background-image: url(${serach});
	background-size: 22px;
	background-position: 95% 8px;
	background-repeat: no-repeat;
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
	list-style: none;
	margin: 30px;
	padding-left: 0;
`;

export const StyleOrderItemHeader = styled.li`
	padding: 16px 97px 16px 30px;
	background: #01384d;
`;
export const StyleOrderICustomitHeaderWrap = styled.div`
	width: 100%;
	max-width: 650px;
	display: flex;
	justify-content: space-between;
`;
export const StyleOrderICustomiWrap = styled.div`
	width: 100%;
	max-width: 600px;
	display: flex;
	justify-content: space-between;
`;

export const StyleOrderItemHeaderId = styled.p`
	width: 100%;
	max-width: 35px;
	font-weight: 600;
	font-size: 15px;
	line-height: 18px;
	color: #ffffff;
	margin: 0;
`;

export const StyleOrderItemDate = styled.p`
	width: 100%;
	max-width: 185px;
	font-weight: 600;
	font-size: 15px;
	line-height: 18px;
	text-transform: capitalize;
	color: #ffffff;
	margin: 0;
	text-align: center;
`;

export const StyleOrderItemHeaderNumber = styled(StyleOrderItemDate)`
	width: 100%;
	max-width: 185px;
	text-align: center;
`;
export const StyleOrderItemHeaderSwetch = styled(StyleOrderItemDate)`
	width: 100%;
	max-width: 185px;
	text-align: right;
`;

export const StyleOrderItem = styled.li`
	display: flex;
	justify-content: space-between;
    align-items: center;
	padding: 17px 28px 18px 34px;
	border-bottom: 1px solid #01384d60;
	border-left: 1px solid #01384d60;
	border-right: 1px solid #01384d60;
`;

export const StyleOrderItemId = styled.p`
	width: 100%;
	max-width: 35px;
	margin: 0;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #000000;
`;

export const StyleOrderItemNumber = styled(StyleOrderItemId)`
	width: 100%;
	max-width: 185px;
`;

export const StyleOrderItemCustomirData = styled(StyleOrderItemId)`
	width: 100%;
	max-width: 185px;
`;
export const StyleItemCustomirBtn = styled.button`
	width: 34px;
	height: 34px;
	background-color: #d61f1f20;
    border: none;
	border-radius: 5px;
    background-image: url(${DeleteImg});
    background-size: 21px;
    background-repeat: no-repeat;
    background-position: center ;
`;
