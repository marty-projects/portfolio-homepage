import {Container, Badge, Link, ListItem, List, Heading} from '@chakra-ui/react'
import {Heading, ProjectImage, Meta} from '../../components/Project'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'

const Project = () => {
    return (
        <Layout title="Tetris">
            <Container>
                <Heading mt={6} mb={4} fontFamily="Arial" size="lg" align="center" >
                    Tetris <Badge size="lg">2022</Badge>
                </Heading>
                <P>
                    A clone of a classic video game. Build with React Hooks.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://tetris-final.vercel.app/"> 
                            https://tetris-final.vercel.app/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                            <span>React Hooks, Styled Components</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Based on</Meta>
                        <Link href="https://github.com/weibenfalk/react-hooks-tetris">
                            This tutorial
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/tetris-2.jpeg" alt="Tetris clone gameplay"/>
                <ProjectImage src="/images/projects/tetris-3.jpeg" alt="Tetris clone gameplay"/>
            </Container>
        </Layout>
    )
}

export default Project