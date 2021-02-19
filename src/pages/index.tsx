import Head from "next/head";

import { Fragment } from "react";
import { GetStaticProps } from "next";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";

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

import { ITool } from "interfaces/tool.interface";

import Card from "components/card/core/card.component";

interface IHomeProps {
  tools: ITool[];
}

export default function Home({ tools }: IHomeProps) {
  return (
    <Fragment>
      <Head>
        <title>BossaBox | VUTTR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        as="main"
        height="100vh"
        minWidth="300"
        backgroundColor="#FCFCFD"
        templateRows="1fr 90vh 1fr"
        templateColumns="
          minmax(25px, 1fr)  
          minmax(150px, 700px) 
          minmax(25px, 1fr)"
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
                <Input placeholder="search" />
              </InputGroup>
              <Checkbox marginLeft="4">search in tags only</Checkbox>
            </Flex>
            <Flex flex="1" justifyContent="flex-end">
              <Button leftIcon={<AddIcon />} colorScheme="blue">
                add
              </Button>
            </Flex>
          </Flex>

          <Flex flexDir="column">
            {tools.map((tool) => (
              <Card tool={tool} key={tool.id} />
            ))}
          </Flex>
        </Flex>
      </Grid>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const tools = await fetch("http://localhost:5000/tools")
    .then(async (data) => await data.json())
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      tools: tools,
    },
  };
};
