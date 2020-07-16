import React from 'react'
import styles from './DrawerToggle.css'
import logo from "../assets/logo.png";


class DrawerToggle extends React.Component {


  render() {
    return(
        <div className={styles.DrawerToggle}>
            <div className={styles.Burger} onClick={this.props.clicked}>
                <div></div>
                <div></div>
                <div></div>
            </div> 
        
            <div className={styles.Logo}>
            <center>
                <img width={100} src={logo} alt="logo" />
            </center>
            </div>
        </div>)
    }
}

export default DrawerToggle;