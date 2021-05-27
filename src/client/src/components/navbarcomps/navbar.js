import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  	list-style: none;
  	padding: 0;
  	background: none;
  	width: 100%;
  	margin-bottom: auto;
  	justify-content: space-between;
  	padding: 0.5 rem calc((10vw - 1000px) / 2);
  	z-index: 10;
`


export const NavLink = styled(Link)`
	text-decoration: none;
	color: white;
	font-size: 16px;
	padding: 20px;
	display: block;
	align-items: center;
	font-family: Helvetica;
	animation: 0.5s ease-in-out;
	&:hover {
	    -webkit-animation: floating-text 1s ease alternate infinite;
	    -moz-animation: floating-text 1s ease alternate infinite;
	    -ms-animation: floating-text 1s ease alternate infinite;
	    -o-animation: floating-text 1s ease alternate infinite;
	    animation: floating-text 1s ease alternate infinite;
	}

	@-webkit-keyframes floating-text {
	    0% {
	        -webkit-transform: translateY(.15em);
	    }
	}

	@-moz-keyframes floating-text {
	    0% {
	        -moz-transform: translateY(.15em);

	    }
	}

	@-ms-keyframes floating-text {
	     0% {
	        -ms-transform: translateY(.15em);
	    }

	}

	@-o-keyframes floating-text {
	    0% {
	        -o-transform: translateY(.15em);
	    }
	}

	@keyframes floating-text {
	    0% {
	        transform: translateY(.15em);

	    }
	}
`

export const NavMenu = styled.div`
	display: flex;
	text-align: center;
	margin-right: -24px;
	justify-content: center;

`
 