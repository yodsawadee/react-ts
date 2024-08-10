import * as React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';

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

        <Box className="box-container">
            {/* <div className='header'>สินค้าแนะนำ</div> */}
            <h1 className='header'>สินค้าแนะนำ</h1>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => handleClick('/')} />
                <BottomNavigationAction label="Category" icon={<CategoryIcon />} onClick={() => handleClick('/category')} />
            </BottomNavigation>
        </Box>
    )
}