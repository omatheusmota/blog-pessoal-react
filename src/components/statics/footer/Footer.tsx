import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography, Box, Grid } from '@mui/material';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1.3} display="flex" alignItems="center" justifyContent="center">

                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.last.fm/pt/user/omatheusmota" target="_blank">
                            <MusicNoteOutlinedIcon className='redes' />
                        </a>
                        <a href="https://github.com/omatheusmota" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/omatheusmota" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2'>
                    <Box paddingTop={1.3}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos'>Matheus Mota © 2022</Typography>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;