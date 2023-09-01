import { Box, Container, Flex } from "@chakra-ui/react"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react"
import AccountabilityCard from "../components/AccountabilityCard"

const Home = () => {
  const address = useAddress()
  return (
    <Container>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        flexDirection={"column"}
      >
      <Box css={{ 
          '& button': {
            padding: '16px 32px', // Adjust as per your needs
            fontSize: '20px',    // Adjust as per your needs
          },
        }}>
          <ConnectWallet />
        </Box>
        <Box h={"20px"}></Box>
        {address && <AccountabilityCard />}
      </Flex>
    </Container>
  )
}

export default Home
