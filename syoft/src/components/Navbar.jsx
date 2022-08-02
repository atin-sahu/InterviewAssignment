import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box bgColor="whitesmoke" px={5} py={2}>
        <Box display="flex" bgColor="white" justifyContent="space-between" p={2}>
            <Box>
                <Text fontWeight="semibold" cursor="pointer">SYOFT</Text>
            </Box>
            <Box display="flex" gap={5}>
                <Link to="/register"><Text fontWeight="semibold">Register</Text></Link>
                <Link to="/Login"><Text fontWeight="semibold">Login</Text></Link>
                <Link to="/productList"><Text fontWeight="semibold">Product-List</Text></Link>
            </Box>
        </Box>
       
    </Box>
  )
}
