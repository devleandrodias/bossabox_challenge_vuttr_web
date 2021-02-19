import Head from "next/head";

import { Fragment } from "react";
import { GetStaticProps } from "next";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";

import {
  Grid,
  Flex,
  Text,
  Input,
  Modal,
  Button,
  Heading,
  Checkbox,
  ModalBody,
  InputGroup,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  InputLeftElement,
  FormControl,
  useDisclosure,
  FormLabel,
  Textarea,
  Spacer,
} from "@chakra-ui/react";

import { ITool } from "interfaces/tool.interface";

import Card from "components/card/core/card.component";

interface IHomeProps {
  tools: ITool[];
}

export default function Home({ tools }: IHomeProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new tool</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl>
                <FormLabel>Tool Name</FormLabel>
                <Input placeholder="tool name" />
              </FormControl>
              <Spacer marginY="6" />
              <FormControl>
                <FormLabel>Tool Link</FormLabel>
                <Input placeholder="tool link" />
              </FormControl>
              <Spacer marginY="6" />
              <FormControl>
                <FormLabel>Tool Description</FormLabel>
                <Textarea placeholder="tool description" />
              </FormControl>
              <Spacer marginY="6" />
              <FormControl>
                <FormLabel>Tags</FormLabel>
                <Input placeholder="tags" />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Add tool
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
              <Button
                onClick={onOpen}
                colorScheme="blue"
                leftIcon={<AddIcon />}
              >
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
