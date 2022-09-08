import NextLink from 'next/link'
import {Button, Container, Box, Heading, Image, Link, List, ListItem, Icon, useColorModeValue, Footer } from '@chakra-ui/react'
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
            Hi, I&apos;m a front end developer based in EU!
        </Box>
        <Box display={{md: 'flex'}} align="center">
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title" fontFamily="Arial">
                    Martyna Chmielinska
                </Heading>
            <p>Web developer with background in localization</p>
            </Box>
            <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align="center">
                <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/avatar.jpg" alt="Profile image"/>
            </Box>
        </Box>
<Section delay={0.1}>
    <Heading as="h3" variant="section-title" fontFamily="Arial">
    About
    </Heading>
    <Paragraph><br/>Self-taught web developer with passion for coding and learning. Actively looking for work as a front-end developer. Background in software and video game localization. Last project is a{' '}
        <NextLink href="/projects/pacman">
        <Link textColor="teal">
        clone of Pacman
        </Link>
        </NextLink>
        .
    </Paragraph>
<Box align="center" my={4}>
    <NextLink href="/projects">
        <Button rightIcon={<ChevronRightIcon/>} colorScheme="orange">
            My portfolio
        </Button>
    </NextLink>
</Box>
<Box align="center" my={4}>
    <NextLink href="/pdf/Resume_M.Ch.pdf" target="_blank">
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
    <BioYear>2021-current</BioYear>
    Self-learning web development
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
            On the web
        </Heading>
        <List>
            <ListItem>
                <Link href="http://github.com/marty-projects" target="_blank">
                    <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}
                    >@marty-projects</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="http://linkedin.com" target="_blank">
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