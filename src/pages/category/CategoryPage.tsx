import './CategoryPage.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

interface Props {}

const CategoryPage = (props: Props) => {
    return (
        <Box sx={{ height: '88vh' }}>
            <Paper variant="outlined" sx={{ height: '100%', padding: '1rem' }}>
                Category Page
            </Paper>
        </Box>
    )
}

export default CategoryPage;