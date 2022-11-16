import {Container, Badge, Link, ListItem, List, Heading} from '@chakra-ui/react'
import { Meta} from '../../components/Project'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'

const Project = () => {
    return (
        <Layout title="Ecommerce">
            <Container mt={4}>
                <Heading mt={6} mb={4} fontFamily="Arial" size="lg" align="center" >
                    Mock e-commerce website <Badge>2022</Badge>
                </Heading>
                <P>
                    Mock e-commerce website with basic functionalities.
                </P>
                <List ml={4} my={4}>
                <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://sass-ecommerce-bxxz.vercel.app/">
                        Click here
                        </Link>
                    </ListItem>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                            <span>React.js, SASS, React Router</span>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <Meta>Based on</Meta>
                        <Link href="https://www.youtube.com/watch?v=grYcHEQU0Vc&t=4210s">
                            This tutorial (changed routing and some CSS)
                        </Link>
                    </ListItem>
                    </List>
                </List>
            </Container>
        </Layout>
    )
}

export default Project