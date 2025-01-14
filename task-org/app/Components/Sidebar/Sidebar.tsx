'use client'
import React from 'react'
import styled from 'styled-components'

import { useGlobalState } from '@/app/context/globalContextProvider';

const Sidebar = () => {
  const { theme } = useGlobalState();
  return (
    <SidebarStyle theme={theme}>Sidebar</SidebarStyle>
  )
}

const SidebarStyle = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;

`;
export default Sidebar
