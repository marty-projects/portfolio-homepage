import { Container, Box, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/Section'
import { ProjectGridItem } from '../components/GridItem'
import thumbTetris from '../public/images/projects/tetris-placeholder.png'
import thumbSpace from '../public/images/projects/space-invaders-placeholder.png'
import thumbWeather from '../public/images/projects/weather-placeholder.png'
import Layout from '../components/layouts/Article'

const Projects = () => {
    return (
    <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>
            <SimpleGrid column={[1,1,2]} gap={6}>
                <Section>
                    <ProjectGridItem id="tetris" title="Tetris" thumbnail={thumbTetris}>
                      A clone of the famous game
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="space-invaders" title="Space Invaders" thumbnail={thumbSpace}>
                      A clone of another famous game
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="weather" title="Weather App" thumbnail={thumbWeather}>
                      A simple weather app
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
    )
}

export default Projects