import { Button, Flex, Input, Grid, Stack, VStack } from "@chakra-ui/react";
import { useState } from "react";

const EliteForm = () => {
  const x = ["Username", "Password", "E-mail", "Social Security Number", 5, 6];

  const [inputValues, setInputValues] = useState(Array(x.length).fill(""));

  const handleInputChange = (index: number, value: string) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const handleSubmit = () => {
    console.log("Input Values:", inputValues);
  };

  return (
    <>
      <Flex w="100%" h="100%" justify="center" align="center">
        <Grid
          borderColor="blue.500"
          borderWidth={2}
          borderRadius={6}
          gap={6}
          padding={4}
          templateColumns={"repeat(2, 1fr)"}
        >
          {x.map((item, index) => (
            <Input
              placeholder={`${item}`}
              w="100%"
              key={item}
              value={inputValues[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              type={index === 1 ? "password" : "text"}
            />
          ))}
          <Button
            colorScheme="blue"
            placeSelf="center"
            gridColumn="span 2"
            w="50%"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Flex>
    </>
  );
};

export default EliteForm;
