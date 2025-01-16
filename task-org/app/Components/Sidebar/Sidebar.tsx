'use client'
import React from 'react'
import styled from 'styled-components'

import { useGlobalState } from '@/app/context/globalContextProvider';
import Image from 'next/image';

import menu from '../../utils/menu'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
  const { theme } = useGlobalState();

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  }
  return (
    <SidebarStyle theme={theme}>
      <div className='profile'>
        <div className='profile-overlay'>
        </div>
        <div className='profile-image'>
          <Image width={70} height={70} src='/profile.jpg' alt='foto' priority />
        </div>
        <h1>
          <span>John</span>
          <span>Doe</span>
        </h1>
      </div>
      <ul className='nav-tems'>
        {menu.map((item) => {
          const link = item.link;

          return (
            <li key={item.id} className={`nav-item ${pathname === link? "active" : ""}`} onClick={() => {
              handleClick(link);
            }}>
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </SidebarStyle>
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
