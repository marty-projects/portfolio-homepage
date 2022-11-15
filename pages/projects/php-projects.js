import {Container, Badge, Link, ListItem, List, Heading} from '@chakra-ui/react'
import { Meta} from '../../components/Project'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'

const Project = () => {
    return (
        <Layout title="PHP">
            <Container mt={4}>
                <Heading mt={6} mb={4} fontFamily="Arial" size="lg" align="center" >
                    PHP Tutorial Projects <Badge>2022</Badge>
                </Heading>
                <P>
                    Tutorial projects created while learning PHP. Work in progress
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Code</Meta>
                        <Link href="https://github.com/marty-projects/php-project"> 
                            Click here
                        </Link>
                        <br/>
                        <Meta>Code (login system)</Meta>
                        <Link href="https://github.com/marty-projects/php-login-system"> 
                            Click here
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                            <span>HTML, PHP, MySQL</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Based on</Meta>
                        <Link href="https://www.youtube.com/watch?v=BUCiSSyIGGU">
                        Click here</Link>
                        <br/>
                        <Link href="https://www.youtube.com/watch?v=gCo6JqGMi30&t=2520s">
                        Click here</Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project