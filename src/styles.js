import {alpha, makeStyles} from "@material-ui/core/styles";
import {Badge, styled} from "@mui/material";


export const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        right: 12,
        top: 15,
        border: `2px solid #47b6d5`,
        padding: '0 4px',
        backgroundColor: '#20232a'
    },
}));

export const HeaderStyle = makeStyles((theme) => ({
    app: {
        backgroundColor: '#20232a',
    },
    image: {
        width: 300,
        height: 300
    },
    main: {
        flexGrow: 1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '250px',
        height: '100px',
        margin: '-50px 0 0 -125px',
        backgroundColor: '#20232a',
        textAlign: 'center'
    },
    main2: {
        flexGrow: 1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '300px',
        height: '100px',
        margin: '-150px 0 0 -150px',
        backgroundColor: '#20232a',
        textAlign: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 15
    },
    locale: {
        border: 0,
        fontSize: 14,
        borderRadius: 3,
        height: 34,
        padding: '0 15px',
        marginRight: 10,
        marginLeft: 2,
        background: 'linear-gradient(45deg, #61dafb 30%, #61dafb 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 80,
        maxWidth: 100
    }
}));