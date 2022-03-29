import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'

import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'

const Home = () => {
  return (
    <Layout>
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
            I am a full-stack developer based in Shillong with a passion for
            building digital services/stuff I want. I have a knack for all
            things which goes from launching products, planning and designing
            all the way to solving real-life problems with code. When not
            online, I love hanging out with my friends or reading books. I am
            currently working at{' '}
            <Link href="https://geekyants.com/" isExternal>
              Geekyants
            </Link>{' '}
            as a software engineer.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
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
            Completed Higher Secondary with Science and Computer Science major
            from St. Anthony&apos;s Higher Secondary School
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed Bachelor&apos;s in Computer Applications at Acharya
            Institute of Graduate Studies
          </BioSection>
        </Section>
        <Section delay={1}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            MMA, Boxing, {''}
            <Link href="https://www.goodreads.com/review/list/90017901-pritam-debnath?ref=nav_mybooks&shelf=read">
              Books
            </Link>
            , Drawing, Animation
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" pb={4}>
            Find me on
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Pritam-deb" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                  top="5px"
                  left="10px"
                >
                  Pritam
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/pritamdeb_/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                  top="5px"
                  left="10px"
                >
                  @pritamdeb_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/PritamDebnath_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                  top="5px"
                  left="10px"
                >
                  @PritamDebnath_
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://discord.gg/NJwCJckkf9" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                  top="5px"
                  left="10px"
                >
                  AmongUs
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
