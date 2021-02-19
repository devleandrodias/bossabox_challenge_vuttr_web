import { CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, Grid, Text, Tag, Link } from "@chakra-ui/react";

import { ICardProps } from "../interfaces/card-props.interface";

export default function Card({
  tool: { title, link, description, tags },
}: ICardProps) {
  return (
    <Flex
      height="48"
      padding="4"
      display="grid"
      marginTop="10"
      borderRadius="md"
      backgroundColor="#FFFFFF"
      shadow="0px 5px 7px #0000000D"
    >
      <Grid templateRows="15 auto 15">
        <Flex justifyContent="space-between">
          <Link isExternal fontSize="lg" color="blue.500" href={`${link}`}>
            {title}
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
          <Text>{description}</Text>
        </Flex>
        <Flex justifyContent="flex-start" flexWrap="wrap">
          {tags.map((tag) => (
            <Tag size="md" marginRight="4" marginTop="2">
              #{tag}
            </Tag>
          ))}
        </Flex>
      </Grid>
    </Flex>
  );
}
