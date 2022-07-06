import {Container, Badge, Link, ListItem, List, Text} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, ProjectImage, Meta} from '../../components/Project'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'

const Project = () => {
    return (
        <Layout title="Tetris">
            <Container>
                <Title>
                    Tetris <Badge>2022</Badge>
                </Title>
                <P>
                    A clone of a classic. Build with React Hooks.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/"> 
                            https://github.com/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                            <span>Node.js, React Hooks</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Based on</Meta>
                        <Link href="https://github.com/">
                            This tutorial
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/tetris-placeholder.png" alt="Tetris clone"/>
                <ProjectImage src="/images/projects/tetris-placeholder.png" alt="Tetris clone"/>
            </Container>
        </Layout>
    )
}

export default Project