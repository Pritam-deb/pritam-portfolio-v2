import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbCryptoCoin from '../public/images/CryptoCoin.png'

const Works = () =>{
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works 
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="cryptocoin" title="CryptoCoin" thumbnail={thumbCryptoCoin}>
                        A webapp that displays the real-time price of cryptocurrencies. This fetches data from an API.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;
