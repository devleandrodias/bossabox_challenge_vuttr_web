import { Button, Flex, Grid, Text, Tag, Link } from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";

export default function Card() {
  return (
    <Flex
      height="44"
      padding="4"
      display="grid"
      marginTop="10"
      borderRadius="md"
      backgroundColor="#FFFFFF"
      shadow="0px 5px 7px #0000000D"
    >
      <Grid templateRows="1fr 1fr 1fr">
        <Flex justifyContent="space-between">
          <Link
            isExternal
            fontSize="lg"
            color="blue.500"
            href="https://notion.so"
          >
            Notion
          </Link>
          <Button
            size="xs"
            colorScheme="red"
            leftIcon={<CloseIcon w="2" h="2" />}
          >
            Remove
          </Button>
        </Flex>
        <Flex>
          <Text>
            All in one tool to organize teams and ideas. Write, plan,
            collaborate, and get organized.
          </Text>
        </Flex>
        <Flex justifyContent="flex-start">
          <Tag size="md" marginRight="4">
            #organization
          </Tag>
          <Tag size="md" marginRight="4">
            #planning
          </Tag>
          <Tag size="md" marginRight="4">
            #collaboration
          </Tag>
          <Tag size="md" marginRight="4">
            #calendar
          </Tag>
        </Flex>
      </Grid>
    </Flex>
  );
}
