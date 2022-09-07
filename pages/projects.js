import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/Section'
import { ProjectGridItem } from '../components/GridItem'
import thumbTetris from '../public/images/projects/tetris-1.jpeg'
import thumbPacman from '../public/images/projects/pacman1.jpeg'
import thumbWeather from '../public/images/projects/weather1.jpeg'
import Layout from '../components/layouts/Article'

const Projects = () => {
    return (
    <Layout>
        <Container>
            <Heading as="h3" fontSize={40} mb={4} mt={6} align="center" fontFamily="Arial">
                Projects
            </Heading>
            <SimpleGrid row={[1,1,2]} gap={6}>
                <Section>
                    <ProjectGridItem id="tetris" title="Tetris" thumbnail={thumbTetris}>
                      A clone of the famous game
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="pacman" title="Pacman" thumbnail={thumbPacman}>
                      A clone of another famous game
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="weather" title="Weather App" thumbnail={thumbWeather}>
                      A simple weather forecast app
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
    )
}

export default Projects