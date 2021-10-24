import { Container,Box,Heading,Image,useColorModeValue } from "@chakra-ui/react"

const Home = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3}  mb={6} textAlign="center" borderTop="10px">
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
        </Container>
        
    )
}

export default Home