import Logo from './Logo';
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from './ThemeToggleButton';
import NavButton from './NavButton';

const LinkItem =({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
            p={2}
            borderRadius={10}
            bg={active ? 'glassTeal': undefined}
            color={active ? '#202023': inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props
    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#e68a00')}
        style={{backdropFilter: 'blur(10px'}}
        zIndex={1}
        {...props}
        >
           <Container 
            display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
           >
               <Flex align="center" mr={5}>
                   <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                       <Logo />
                   </Heading>
               </Flex>
               <Stack
               direction={{base: 'column', md: 'row'}}
               display={{base: 'none', md: 'flex'}}
               width={{base: 'full', md: 'auto'}}
               alignItems="center"
               flexGrow={1}
               mt={{base:4, nmd:0}}
               >
                   <LinkItem href="/projects" path={path}>
                       Projects
                   </LinkItem>
               </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <NavButton />
                </Box>
           </Container>
        </Box>
    )
}

export default Navbar