import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
// import thumbCryptoCoin from '../public/images/CryptoCoin.png'
import thumbSticyNotes from '../public/images/sticky-notes.png'
import thumbEvernote from '../public/images/evernote-clone.png'
import thumbTodoist from '../public/images/todoist-clone.png'
import thumbUniChat from '../public/images/unichat.png'
import thumbDisneyPlus from '../public/images/disney+-clone.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} padding="1.5rem">
          Recent Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {/* <Section>
            <WorkGridItem
              id="cryptocoin"
              title="CryptoCoin"
              thumbnail={thumbCryptoCoin}
            >
              A webapp that displays the real-time price of cryptocurrencies.
              This fetches data from an API.
            </WorkGridItem>
          </Section> */}
          <Section>
          <WorkGridItem
              id="sticky-notes"
              title="Sticky Notes"
              thumbnail={thumbSticyNotes}
            >
              A webapp that can be a handy note-taking app.
            </WorkGridItem>
          </Section>
          
        </SimpleGrid>
        <Divider/>
        <Heading as="h3" fontSize={20} mb={4} padding="1.5rem">
          Past Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
              id="evernote-clone"
              title="Evernote Clone"
              thumbnail={thumbEvernote}
            >
              This is a clone of the most renowned note taking app!
            </WorkGridItem>
          </Section>
          <Section>
          <WorkGridItem
              id="todoist-app"
              title="Todoist Clone"
              thumbnail={thumbTodoist}
            >
              A todo-list app BUT with a lot more!
            </WorkGridItem>
          </Section>
          <Section>
          <WorkGridItem
              id="VeChat"
              title="UniChat"
              thumbnail={thumbUniChat}
            >
              Chatroom where you can create groups, add people, share thoughts, files, photos etc.
              
            </WorkGridItem>
          </Section>
          <Section>
          <WorkGridItem
              id="disney-plus-clone"
              title="Disney+ Clone"
              thumbnail={thumbDisneyPlus}
            >
              Here style compoenents are used heavily along with Redux to bring out the best UI/UX provided by Disney+.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
