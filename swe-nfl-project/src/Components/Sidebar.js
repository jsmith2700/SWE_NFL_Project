
import SideNav, { 
    Toggle, 
    Nav, 
    NavItem, 
    NavIcon, 
    NavText
 } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function Sidebar() {
  return (<SideNav 
    onSelect={seLected => {
        console.log(seLected)
    }}
    >   

        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem>
                <NavIcon><i className='Leagues' style ={{fontSize: 2}}></i></NavIcon>
                <NavText>Home</NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
  );
}

export default Sidebar();
