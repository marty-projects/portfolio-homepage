import {Container, Badge, Link, ListItem, List, Heading} from '@chakra-ui/react'
import {ProjectImage, Meta} from '../../components/Project'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'

const Project = () => {
    return (
        <Layout title="Tetris">
            <Container mt={4}>
                <Heading mt={6} mb={4} fontFamily="Arial" size="lg" align="center" >
                    Pacman <Badge>2022</Badge>
                </Heading>
                <P>
                    Another clone of a classic game. Build with Vanilla JS.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://vanilla-js-pacman-clone.vercel.app/"> 
                            Click here
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                            <span>Vanilla JS, CSS, HTML</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Based on</Meta>
                        <Link href="https://github.com/weibenfalk/vanilla-js-pacman">
                            This tutorial
                        </Link>
                    </ListItem>
                </List>
                <Container align="center">
                <ProjectImage src="/images/projects/pacman2.jpeg" alt="Pacman clone"/>
                <ProjectImage src="/images/projects/pacman3.jpeg" alt="Pacman clone"/>
                </Container>
            </Container>
        </Layout>
    )
}

export default Project