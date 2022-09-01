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
                            https://vanilla-js-pacman-clone.vercel.app/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                            <span>Node.js, Vanilla JS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Based on</Meta>
                        <Link href="https://github.com/">
                            This tutorial
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/pacman2.png" alt="Tetris clone"/>
                <ProjectImage src="/images/projects/pacman3.png" alt="Tetris clone"/>
            </Container>
        </Layout>
    )
}

export default Project