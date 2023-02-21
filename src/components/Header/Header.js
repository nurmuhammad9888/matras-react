import React from 'react';
import {
	StyleLHeaderItem,
	StyleLHeaderLeft,
	StyleLHeaderList,
	StyleLHeaderLogo,
} from './Header.style';
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<>
			<StyleLHeaderLeft>
				<StyleLHeaderLogo src={logo} width={142} height={30} />
				<StyleLHeaderList className="list-unstyled">
					<StyleLHeaderItem className='header-item'>
                        <NavLink  className={({isActive}) => isActive ? "header-active nav-link" : "nav-link"} to="/order">Buyurtmalar</NavLink>
                    </StyleLHeaderItem>
					<StyleLHeaderItem className='header-item'>
                        <NavLink className={({isActive}) => isActive ? "header-active nav-link" : "nav-link"} to="/customers">Сustomers</NavLink>
                    </StyleLHeaderItem>
					<StyleLHeaderItem className='header-item'>
                        <NavLink className={({isActive}) => isActive ? "header-active nav-link" : "nav-link"} to="/category">Toifalar</NavLink>
                    </StyleLHeaderItem>
					<StyleLHeaderItem className='header-item'>
                        <NavLink className={({isActive}) => isActive ? "header-active nav-link" : "nav-link"} to="/products">Mahsulotlar</NavLink>
                    </StyleLHeaderItem>
					<StyleLHeaderItem className='header-item'>
                        <NavLink className={({isActive}) => isActive ? "header-active nav-link" : "nav-link"} to="/technologies">Texnologiyalar</NavLink>
                    </StyleLHeaderItem>
					<StyleLHeaderItem className='header-item'>
                        <NavLink className={({isActive}) => isActive ? "header-active nav-link" : "nav-link"} to="/address">Manzil</NavLink>
                    </StyleLHeaderItem>
					<StyleLHeaderItem className='header-item'>
                        <NavLink className={({isActive}) => isActive ? "header-active nav-link" : "nav-link"} to="/carusel">Carusel</NavLink>
                    </StyleLHeaderItem>
				</StyleLHeaderList>
			</StyleLHeaderLeft>
		</>
	);
};
