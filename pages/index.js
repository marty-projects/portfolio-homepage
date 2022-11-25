import NextLink from 'next/link'
import {Button, Container, Box, Heading, Image, Link, List, ListItem, Icon, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/Section'
import Paragraph from '../components/Paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/Article'
import { BioSection,BioYear } from '../components/Bio'
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io5'

const Page = () => {
    return ( 
<Layout>
<Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={6} align="center">
            Frontend developer based in EU
        </Box>
        <Box display={{md: 'flex'}} align="center">
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title" fontFamily="Arial">
                    Martyna Chmielinska
                </Heading>
            <p>Web developer with background in software localization</p>
            </Box>
            <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align="center">
                <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/avatar.jpg" alt="Profile image"/>
            </Box>
        </Box>
<Section delay={0.1}>
    <Heading as="h3" variant="section-title" fontFamily="Arial">
    About
    </Heading>
    <Paragraph><br/>Self-taught web developer with background in website and software regionalization. Actively looking for work as a frontend/fullstack developer. Currently, I focus mainly on JavaScript (React and Vue, TypeScript), but I&apos;m also interested in Python (Flask) and PHP. Recent finished projects are a{' '}
        <NextLink href="/projects/mock-ecommerce">
        <Link textColor="teal">
        mock eCommerce responsive landing website, build with React and SASS
        </Link>
        </NextLink>
        {' '}and a{' '}
        <Link href="https://github.com/marty-projects/ts-react-shoppingcart" target="_blank" textColor="teal">
        shopping cart build with React/TypeScript and Bootstrap
        </Link>
        .
    </Paragraph>
<Box align="center" my={4}>
    <NextLink href="/pdf/Resume_EN.pdf" target="_blank">
        <Button rightIcon={<ChevronRightIcon/>} colorScheme="orange">
            Download my resume
        </Button>
    </NextLink>
</Box>
</Section>
<Section delay={0.2} >
    <Heading as="h3" variant="section-title" fontFamily="Arial">
        Bio
    </Heading>
    <BioSection mb={2}>
    <BioYear>2017-2022</BioYear>
    Work as a freelance translator (specialization: software localization)
    </BioSection>
    <BioSection mb={2}>
    <BioYear>2019</BioYear>
    Completed the Master&apos;s Program at the Jagiellonian University in Krakow, Poland
    </BioSection>
    <BioSection>
    <BioYear>2020-current</BioYear>
    Started learning web development
    </BioSection>
</Section>
<Section delay={0.3}>
    <Heading as="h3" variant="section-title" fontFamily="Arial">
        Interests include...
    </Heading>
    <Paragraph>
    travelling, video games and art
    </Paragraph>
</Section>
<Section delay={0.3}>
        <Heading as="h3" variant="section-title" fontFamily="Arial">
            Learn more
        </Heading>
        <List>
            <ListItem>
                <Link href="http://github.com/marty-projects" target="_blank">
                    <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}
                    >@marty-projects</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="http://linkedin.com/in/martyna-chmielińska" target="_blank">
                    <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}
                    >Martyna Chmielinska</Button>
                </Link>
            </ListItem>
        </List>
</Section>
</Container>
<Container as="footer" centerContent="true" mt={5}>
        <Link href="https://www.craftz.dog/" target="_blank" textColor="teal">
        Based on
        </Link>
</Container>
</Layout>
 )}

export default Page