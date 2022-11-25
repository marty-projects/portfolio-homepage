import {Container, Badge, Link, ListItem, List, Heading} from '@chakra-ui/react'
import { Meta} from '../../components/Project'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'

const Project = () => {
    return (
        <Layout title="E-commerce">
            <Container mt={4}>
                <Heading mt={6} mb={4} fontFamily="Arial" size="lg" align="center" >
                    E-commerce landing page <Badge>2022</Badge>
                </Heading>
                <P>
                    Mock e-commerce landing page with basic functionalities.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://sass-ecommerce-bxxz.vercel.app/">
                        Click here
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                            <span>React.js, SASS, React Router</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Based on</Meta>
                        <Link href="https://www.youtube.com/watch?v=grYcHEQU0Vc&t=4210s">
                            This tutorial (changed routing and added responsive styles)
                        </Link>
                    </ListItem>
                    </List>
            </Container>
        </Layout>
    )
}

export default Project