import { Box, Divider, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";

export const ProductList = () => {

    const [products,setProducts] = useState([]);

    const getData = async()=>{
        let data = await axios.get("https://basiccrudoperation.herokuapp.com/products")
        .then((data)=> data.data);
        console.log(data);
        setProducts(data);
    }
    console.log(products);

    useEffect(()=>{
        getData();
    },[])

  return (
    <Box bgColor="whitesmoke" px={5}>
        <Text fontWeight="semibold" fontSize="2xl" align="center" py={3}>Products List</Text>
        {products.length ? (
            <Box  w="50%" m="auto" py={10}>
                {products.map((item)=>{
                    return <Box key={item._id} bgColor="white">
                        <Box p={2} w="70%" m="auto" display="flex" justifyContent="space-between" >
                            <Text>{item.title}</Text>
                            <Text>{item.price}</Text>
                        </Box>
                        <Divider colorScheme="blackAlpha"></Divider>
                    </Box>
                })}
            </Box>
        ):(
            <Box >
                <Text fontWeight="semibold" align="center">there is noting it is empty</Text>
            </Box>
        )}
    </Box>
  )
}
