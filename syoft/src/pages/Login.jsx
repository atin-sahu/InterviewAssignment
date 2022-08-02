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

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const payload = {
      email: userEmail,
      password: userPassword,
    };
    console.log(payload);
  };

  return (
    <Box bgColor="whitesmoke">
      <Box w="80%" m="auto">
        <Flex minH={"80vh"} align={"center"} justify={"center"}>
          <Stack
            spacing={8}
            py={12}
            width={{ base: "80%", md: "60%", lg: "45%" }}
          >
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <form onSubmit={submitHandler}>
                  <FormControl id="email">
                    <FormLabel>Email/Mobile :</FormLabel>
                    <Input
                      required
                      type="text"
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password :</FormLabel>
                    <Input
                      required
                      type="password"
                      onChange={(e) => setUserPassword(e.target.value)}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      type="submit"
                      mt={5}
                    >
                      Login
                    </Button>
                    <Link to="/register">
                      <Text align="center" color="rgb(40,116,240)">
                        New User? create an account
                      </Text>
                    </Link>
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
