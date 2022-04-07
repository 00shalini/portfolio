import React from 'react';
import styled from 'styled-components';


const StyledMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  background:grey;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
      display:flex;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div>
          <div>
              <img src=''/>
          </div>
          <p>Login/Signup Now</p>
          <p>Login for bst detail and offer</p>
      </div>
      <div>
      <div>
              <img src=''/>
          </div>
          <p>View/Manage Trips</p>
          <p>View, modify your trips</p>
      </div>
      <div>
          <img/>
          <p>Gift Cards</p>
      </div>
      <div>
          <img/>
          <p> Wallet</p>
      </div>
      <div>
          <img/>
          <p>Settings</p>
          <img/>
      </div>

      <div>
          <img/>
          <p>Travel Offers</p>
      </div>
      <div>
      <img/>
          <p>Flights</p>
      </div>
      <div>
      <img/>
          <p>Hotels</p>
      </div>
      <div>
      <img/>
          <p>Trains</p>
      </div>
      <div>
      <img/>
          <p>Holiday Offers</p>
      </div>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: 768px) {
     display: flex;
    }
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : 'black'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


export {Menu,Burger}
