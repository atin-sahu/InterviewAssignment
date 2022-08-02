import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Text,
    useColorModeValue,
    Image,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  export const Register = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userRoll, setUserRoll] = useState("");
    const [userPassword, setUserPassword] = useState("");
  
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      const payload = {
        name:userName,
        email: userEmail,
        password: userPassword,
        roll: userRoll,
      };
  
      console.log(payload);
  
    };
  
    return (
    <Box bgColor="whitesmoke">
       <Box w='80%' m='auto'>
         <Flex
        minH={"80vh"}
        align={"center"}
        justify={"center"}
        
      >
        <Stack spacing={8}  py={12}  width={{base:"80%", md:"60%", lg:"45%"}}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack >
              <form onSubmit={submitHandler}>
              <FormControl id="name" mb={3}>
                  <FormLabel mb={0}>Name :</FormLabel>
                  <Input
                    required
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="email" mb={3}>
                  <FormLabel mb={0}>Email/Mobile :</FormLabel>
                  <Input
                    required
                    type="text"
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="roll" mb={3}>
                  <FormLabel mb={0}>Roll :</FormLabel>
                  <Input
                    required
                    type="text"
                    onChange={(e) => setUserRoll(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" mb={3}>
                  <FormLabel mb={0}>Password :</FormLabel>
                  <Input
                    required
                    type="password"
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={5} mt={5}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type='submit'
                  >
                    Register
                  </Button>
                  <Link to="/login"><Text align="center" color="rgb(40,116,240)">Have Account? Login</Text></Link>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
     </Box>
    </Box>
    );
  };