import NextLink from 'next/link'
import {Box, Heading, Container, Text, Divider, Button} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h2" mt={6}>
                <Text fontFamily="Arial">
                The page you&apos;re looking for was not found.
                </Text>
            </Heading>
            <Divider my ={6}/>

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">
                    Return
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound