import Head from "next/head";

import { SearchIcon, AddIcon } from "@chakra-ui/icons";

import Card from "@/components/card/core/card.component";

import {
  Grid,
  Flex,
  Text,
  Input,
  Button,
  Heading,
  Checkbox,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>BossaBox | VUTTR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        as="main"
        height="100vh"
        backgroundColor="#FCFCFD"
        templateColumns="1fr 60vw 1fr"
        templateRows="1fr 90vh 1fr"
        templateAreas="
        '. . .'
        '. content .'
        '. . .'
        "
      >
        <Flex gridArea="content" flexDir="column">
          <Text fontSize="6xl">VUTTR</Text>

          <Heading marginY="6">Very Useful Tools to Remember</Heading>

          <Flex justifyContent="space-between" alignItems="center">
            <Flex flex="2" justifyContent="space-between" alignItems="center">
              <InputGroup flex="1">
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input placeholder="Search" />
              </InputGroup>
              <Checkbox marginLeft="4">search in tags only</Checkbox>
            </Flex>
            <Flex flex="1" justifyContent="flex-end">
              <Button leftIcon={<AddIcon />} colorScheme="blue">
                Add
              </Button>
            </Flex>
          </Flex>

          <Flex flexDir="column">
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}
