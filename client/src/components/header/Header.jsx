
import { AppBar, Toolbar, styled} from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
justify-content: space-between;
    display: flex;
    flex-direction: row;
    background: #ffffff;
    color: black;
`;

const Container1 = styled(Toolbar)`
justify-content: left; 
    & > a {
        
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`
const Container = styled(Toolbar)`
justify-content: right; 
    & > a {
        
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`
const Image = styled('img')({
    width: 150,
    display: 'flex',
    margin: 'auto',
});

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
    const imageURL = 'https://raw.githubusercontent.com/SurajAg1/image/main/logo.png';
        
    return (
        <Component>
            <Container1>
            <Link to='/'  ><Image src={imageURL} alt="blog" /></Link>
            </Container1>
            <Container >
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;