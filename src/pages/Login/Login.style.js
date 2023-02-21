import styled from 'styled-components';
import loginImg from "../../assets/images/Profile.svg";
import locikImg from "../../assets/images/Lock.svg";
export const StyleCard = styled.div`
	padding: 35px 30px 30px 30px;
	width: 330px;
	height: 332px;
	background: #ffffff;
	/* opacity: 0.3; */
	border: 1px solid #01384d;
	border-radius: 10px;
`;
export const StyleLoginTitle = styled.h2`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	color: #01384d;
`;

export const StyleCardForm = styled.form``;

export const StyleCardInputName = styled.input`
	margin-top: 40px;
	padding: 16px 20px 17px 50px;
	width: 270px;
	height: 50px;
	background: #ffffff;
	/* opacity: 0.5; */
	border: 1px solid #01384d;
	border-radius: 7px;
	font-size: 14px;
	line-height: 17px;
	color: #01384d;
    background-image: url(${loginImg});
    background-size: 13px 16px;
    background-repeat: no-repeat;
    background-position: 20px center ;
`;

export const StyleCardInputPassword = styled.input`
	margin-top: 13px;
	padding: 16px 20px 17px 50px;
	width: 270px;
	height: 50px;
	background: #ffffff;
	/* opacity: 0.5; */
	border: 1px solid #01384d;
	border-radius: 7px;
	font-size: 14px;
	line-height: 17px;
	color: #01384d;
    background-image: url(${locikImg});
    background-size: 13px 16px;
    background-repeat: no-repeat;
    background-position: 20px center ;
`;

export const StyleCardSubmitBtn = styled.button`
	margin-top: 35px;
	padding: 17px;
	background: #01384d;
	/* opacity: 0.5; */
	border-radius: 7px;
	width: 270px;
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	text-align: center;
    border: none;
	color: #ffffff;
`;
