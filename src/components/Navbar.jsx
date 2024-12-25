import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import styled from 'styled-components'; // Removed keyframes import
import {FaLightbulb, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import { NavLink as RouterNavLink } from 'react-router-dom'; // Import NavLink from react-router-dom


// NavbarContainer styling
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ scrolled }) => (scrolled ? '#333' : 'transparent')};
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
`;

// Brand styling
const Brand = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  svg {
    margin-left: 0.5rem;
    color: #ffcc00;
  }
`;

// NavLinksContainer styling
const NavLinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #333;
    position: fixed;
    top: 0;
    right: ${({ showMenu }) => (showMenu ? '0' : '-100%')};
    width: 60%;
    height: 100%;
    padding: 2rem;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    transition: right 0.3s ease-in-out;
  }
`;

// NavLink styling for react-scroll links
const NavLink = styled(ScrollLink)`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;

  &.active {
    color: #ffcc00;
    font-weight: bold;
  }

  &:hover {
    color: #ffcc00;
  }
`;

// StyledRouterNavLink styling for react-router links
const StyledRouterNavLink = styled(RouterNavLink)`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;

  &.active {
    color: #ffcc00;
    font-weight: bold;
  }

  &:hover {
    color: #ffcc00;
  }
`;

// HamburgerIcon styling
const HamburgerIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// CloseMenuIcon styling
const CloseMenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Navbar Component
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track if scrolled


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Add a scroll listener to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Set scrolled state to true when scrolling
      } else {
        setScrolled(false); // Reset to false when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <NavbarContainer scrolled={scrolled}>
        <Brand>
          Campus Guide
          <FaLightbulb />
        </Brand>
        <NavLinksContainer showMenu={showMenu}>
          <NavLink to="home" smooth={true} duration={500} offset={-70} activeClass="active">
            Home
          </NavLink>
          <NavLink to="about" smooth={true} duration={500} offset={-70} activeClass="active">
            About
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500} offset={-70} activeClass="active">
            Contact
          </NavLink>
          <StyledRouterNavLink to="/submit" activeClassName="active">
            ID-Form
          </StyledRouterNavLink>
        </NavLinksContainer>
        <HamburgerIcon onClick={toggleMenu}>
          <FaBars />
        </HamburgerIcon>
        {showMenu && (
          <CloseMenuIcon onClick={toggleMenu}>
            <FaTimes />
          </CloseMenuIcon>
        )}
      </NavbarContainer>
  );
};

export default Navbar;
