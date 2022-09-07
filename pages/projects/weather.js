import {Container, Badge, Link, ListItem, List, Heading} from '@chakra-ui/react'
import {Title, ProjectImage, Meta} from '../../components/Project'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'

const Project = () => {
    return (
        <Layout title="Weather app">
            <Container>
                <Heading  mt={6} mb={4} fontFamily="Arial" size="lg" align="center" >
                    Weather App<Badge size="lg">2022</Badge>
                </Heading>
                <P>
                    A simple weather forecast app build with Openweather API.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://weatherapp-peach.vercel.app/"> 
                        Click here
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                            <span>Vanilla JS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Based on</Meta>
                        <Link href="https://github.com/">
                            This code
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/weather1.jpeg" alt="Tetris clone"/>
            </Container>
        </Layout>
    )
}

export default Project