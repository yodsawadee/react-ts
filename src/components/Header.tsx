import * as React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
import { Box, BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import backgroundImage from '../assets/images/bg.jpg';

export const Header = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
    };

    return (
        // <nav>
        //     <h1 className='header'>Header</h1>
        //     <Grid container spacing={2}>
        //         <Grid item xs={6} className="grid-item" onClick={() => handleClick('/')} style={{ cursor: 'pointer' }} >
        //             <HomeIcon sx={{ fontSize: 40 }} />
        //             <HomeIcon color="primary" sx={{ fontSize: 40 }} />
        //         </Grid>
        //         <Grid item xs={6} className="grid-item" onClick={() => handleClick('/category')} style={{ cursor: 'pointer' }}>
        //             <CategoryIcon sx={{ fontSize: 40 }} />
        //             <CategoryIcon color="primary" sx={{ fontSize: 40 }} />
        //         </Grid>
        //     </Grid>
        // </nav>

        <Box className="box-container" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover', // or 'contain' depending on your needs
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '18vh', // Adjust this as necessary
            width: '100%',
            opacity: '1'
          }}>
            <div style={{ paddingTop: '1.5rem', paddingBottom: '0.3rem', color: 'black' }}>
                <h1 style={{ display: 'inline', padding: '0.25rem 1.5rem', background: 'white', opacity: '0.7', border: '2px white solid' }}>สินค้าแนะนำ</h1>
            </div>
            {/* <Typography variant="h4" sx={{paddingTop: '1.5rem', paddingBottom: '1rem', color: 'white'}}>สินค้าแนะนำ</Typography> */}
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{backgroundColor: 'transparent'}}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => handleClick('/')} 
                    sx={{
                        color: 'gray', // Normal color
                        '&.Mui-selected': {
                        color: 'white', // Color when selected
                        },
                    }}
                />
                <BottomNavigationAction label="Category" icon={<CategoryIcon />} onClick={() => handleClick('/category')} 
                    sx={{
                        color: 'gray', // Normal color
                        '&.Mui-selected': {
                        color: 'white', // Color when selected
                        },
                    }}
                />
            </BottomNavigation>
        </Box>
    )
}