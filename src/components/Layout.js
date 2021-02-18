import React from 'react';
import Header from './Header';
import { Container } from '@material-ui/core'

function Layout({ children }) {
    return (
        <div>
            <Header/>
            <Container maxWidth="lg">
                <div style={{marginTop: "70px"}}></div> 
                { children }
            </Container>
        </div>
    )
}

export default Layout
