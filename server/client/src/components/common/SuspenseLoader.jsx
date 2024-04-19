
import { Box, CircularProgress, Typography } from '@mui/material';

const SuspenseLoader = () => {

    return (
        <Box style={{ marginLeft: '50%', marginTop: 400 }}>
            <CircularProgress />
            <Typography>Loading...</Typography>
        </Box>
    )
}

export default SuspenseLoader;