import { Box, styled, Typography } from '@mui/material';
import vid from '../about/vid.mov';

const Banner = styled(Box)`
    width: 100%;
    height: 1vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;
const Video=styled('video')({
    maxWidth:'100%',
    height:'auto'
    
});
const Wrapper1 = styled(Box)`
font: italic small-caps bold 16px/2 cursive;
    padding-left: 20px;
    border: 1px solid black;
    background-color: #fff;
`;

const Text = styled(Typography)`
    color: #ffffff;
`;
const Typography1 =styled(Typography)`color: #ffffff;`;

const About = () => {

    return (
        <Box>
            <Banner>
            <Video src={vid} autoPlay loop muted/>
            </Banner>

            <Wrapper>
                <Typography1 variant="h3">GLA BLOGSPOT</Typography1>
                <Text variant="h5">Welcome to GLA Blogspot, a platform dedicated to providing valuable and informative content to our<br/>
                readers.We are a team of passionate writers, bloggers, and experts who share a common goal of<br/>
                  creating engaging articles on a wide range of topics, including technology, lifestyle, health, business,<br/> and more.
                    <br/>
                    We believe that knowledge is power, and we are committed to sharing our knowledge with the world.<br/>
                    We hope that our articles will inspire you to learn more, explore new ideas, and take action towards<br/>
                    achieving your goals. Thank you for visiting GLA Blogspot, and we look forward to sharing<br/>
                    our knowledge with you.



                </Text>
                </Wrapper>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Wrapper1>
                <Typography1 variant="h4">Our Goal</Typography1>
                <Text variant="h5">"To foster a culture of learning, growth, and creativity within our team and our community, and inspire others to do the same."</Text>
            </Wrapper1>
        </Box>
    )
}

export default About;