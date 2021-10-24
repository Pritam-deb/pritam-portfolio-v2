import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello, I&apos;m a full-stack developer based in India!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pritam Debnath
          </Heading>
          <p>Digital Craftsman(Developer / Artist / Desginer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/pritam.jpg"
            alt="profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph padding="10px">
          Pritam is a freelance and a full-stack developer based in Shillong
          with a passion for building digital services/stuff he wants. He has a
          knack for all things launching products, from planning and designing
          all the way to solving real-life problems with code. When not online,
          he loves hanging out with his friends or reading books. Currently, he
          is working in {''}
          <NextLink href="https://www.geekyants.com/">
            <Link>GeekyAnts</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">My Portfolio</Button>
            </NextLink>
        </Box>
      </Section>
      <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
              Bio
          </Heading>
          <BioSection>
              <BioYear>1998</BioYear>
              Born in Shillong(Meghalaya), India.
          </BioSection>
          <BioSection>
              <BioYear>2018</BioYear>
              Completed Higher Secondary with Science and Computer Science major from St. Anthony&apos;s Higher Secondary School
          </BioSection>
          <BioSection>
              <BioYear>2021</BioYear>
              Completed Bachelor&apos;s in Computer Applications at Acharya Institute of Graduate Studies
          </BioSection>
      </Section>
      <Section delay={1}>
          <Heading as="h3" variant="section-title">
              I ♥
          </Heading>
          <Paragraph>
            MMA, Boxing, {''}
            <Link href="https://www.goodreads.com/review/list/90017901-pritam-debnath?ref=nav_mybooks&shelf=read">Books</Link>
            , Drawing, Animation
          </Paragraph>
      </Section>
    </Container>
  )
}

export default Home
