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
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Hi, I&apos;m a front end developer based in EU!
        </Box>
        <Box display={{md: 'flex'}} align="center">
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Martyna Chmielinska
                </Heading>
            <p>Web developer with background in localization</p>
            </Box>
            <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align="center">
                <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/avatar.jpg" alt="Profile image"/>
            </Box>
        </Box>
<Section delay={0.1}>
    <Heading as="h3" variant="section-title">
    Projects
    </Heading>
    <Paragraph>Paragraph about self. Last project is{' '}
        <NextLink href="/projects/tetris">
        <Link>
        Tetris
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
</Section>
<Section delay={0.2}>
    <Heading as="h3" variant="section-title">
        Bio
    </Heading>
    <BioSection>
    <BioYear>2017-2022</BioYear>
    Work as a freelance translator (specialization: software translation)
    </BioSection>
    <BioSection>
    <BioYear>2019</BioYear>
    Completed the Master&apos;s Program at the Jagiellonian University in Krakow, Poland
    </BioSection>
    <BioSection>
    <BioYear>2021-2022</BioYear>
    Self-learning web development
    </BioSection>
</Section>
<Section delay={0.3}>
    <Heading as="h3" variant="section-title">
        Interests include...
    </Heading>
    <Paragraph>
        video games, art and travelling
    </Paragraph>
</Section>
<Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            On the web
        </Heading>
        <List>
            <ListItem>
                <Link href="http://github.com/monkert" target="_blank">
                    <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}
                    >@monkert</Button>
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
</Layout>
 )}

export default Page