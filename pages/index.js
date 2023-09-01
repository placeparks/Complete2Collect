import { Box, Container, Flex } from "@chakra-ui/react"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react"
import AccountabilityCard from "../components/AccountabilityCard"

const Home = () => {
  const address = useAddress()
  return (
    <div className="mainPage">
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
        {!address && <h1 style={{fontWeight:"700", textAlign:"center"}}>Welcome to Accountability App! Complete tasks, achieve goals, and reclaim your deposit. Your journey to productivity and rewards starts here.</h1>}

        {address && <AccountabilityCard />}
      </Flex>
    </Container>
    </div>
  )
}

export default Home
