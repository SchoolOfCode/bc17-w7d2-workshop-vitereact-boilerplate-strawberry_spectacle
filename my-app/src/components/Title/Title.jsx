//import header.css
'use client'
//import Image from 'next/image';
 import styles from './Title.module.css'
import { useState } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "Founders"
      ];

      
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        {/* <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent> */}

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/f" aria-current="page">
            Founders
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}


};


export default function Title () {

const[menuStatus, setMenuStatus] = useState(false);
function handleClick(){
    console.log('true');
    setMenuStatus(!menuStatus)
}
console.log(menuStatus);


    return (        
        <header>
          <button onClick={handleClick}><img src="menu-open-button.png" alt="Burger toggle menu" /></button>
              <h1 className={styles.titleContainer}> 🧑‍🚒 fireplace</h1>
            </header>
    );
}

//create burger image in corenr of header
    //insert image
//Use Z layers in CSS to make burger menu stay on the back
//Insert X picture on the new menu
//on click function to open menu
    //this will open and close depending on state
    // (!)
//Open menu will have the Founders page link
