import { Container,Box,Heading,Image,useColorModeValue,Link } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
const Home = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3}  mb={6} textAlign="center">
                Hello, I&apos;m a full-stack developer based in India!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Pritam Debnath
                    </Heading>
                    <p>Digital Craftsman(Developer / Artist / Desginer)</p>
                </Box>
                <Box flexShrink={0} mt={{base:4,md:0}} ml={{md:6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/pritam.jpg" alt="profile image" />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph padding="10px">Pritam is a freelance and a full-stack developer based in Shillong with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his friends or reading books. Currently, he is working in {''}
                <NextLink href="https://www.geekyants.com/"><Link>GeekyAnts</Link></NextLink>.</Paragraph>
            </Section>
        </Container>
        
    )
}

export default Home