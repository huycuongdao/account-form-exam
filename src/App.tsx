import {
  Box,
  Flex,
  Center,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  AlertDescription,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { RiErrorWarningLine } from "react-icons/ri";
import theme from "./theme";

/*
Task:
  - Create form layout, including error handling for invalid state
    - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/eKGWzAp
    - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/GmQeyV8
  - Add theme and customize components (e.g., Button, Input field) using theme settings
    - https://chakra-ui.com/docs/theming/customize-theme
    - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/R1xJkPZ
  - Implement form behavior via react-hook-form
      - ref: https://react-hook-form.com/
  - Complete form validation, including the below logic
    - All password fields are required
    - Invalid password format
      - Minimum eight characters, at least one letter, one number and one special character.
        - A-Z, a-z
        - 0-9
        - special character
          - !@#$%^&*()_+
    - Show error message for invalid password format
      - Please make sure your passwords match.
    - Validate fields when the blur events are triggered  
    - Print console log after clicking the Submit button

Style guide:
  - color
    - primary: '#f65e4e',
    - primaryDark: '#ee5140',
    - primaryHover: '#fc7365',  

*/

const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/;

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const AccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log("submit", data);
  const onError: SubmitErrorHandler<FormValues> = (errors) => console.log("errors", errors);

  return (
    <Box bgColor="#f3f3f3" h="100vh">
      <Center>
        <Flex width="464px" my="64px" direction="column" align="center">
          <Heading mb="16px" fontSize="24px">
            Account
          </Heading>
          <Stack w="full" spacing="16px">
            <Stack
              as="section"
              w="full"
              p="32px"
              spacing="24px"
              direction="column"
              bgColor="white"
              borderRadius="4px"
            >
              <Heading fontSize="16px">Set Password</Heading>
              <FormControl>
                <Alert status="error" bgColor="#feeeed">
                  <AlertIcon as={RiErrorWarningLine} />
                  <AlertDescription fontSize="12px" color="#f65e4e">
                    Your account don’t have password yet. Set password so you can log in with your Layoutbase
                    account.
                  </AlertDescription>
                </Alert>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="email">Email (Your account)</FormLabel>
                <Input id="email" value="hello@branch8.com" isDisabled {...register("email")} />
              </FormControl>

              <FormControl isInvalid={!!errors.password}>
                <FormLabel htmlFor="password">Set Password</FormLabel>
                <Input
                  id="password"
                  {...register("password", {
                    required: "Password is required!",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value: PASSWORD_PATTERN,
                      message: "Password must be at least one letter, one number and one special character.",
                    },
                  })}
                />
                {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={!!errors.confirmPassword}>
                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                <Input
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Please confirm password!",
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return password === value || "Please make sure your passwords match.";
                      },
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
                <Flex justifyContent="flex-end">
                  <Button type="submit" size="md" onClick={handleSubmit(onSubmit, onError)}>
                    Submit
                  </Button>
                </Flex>
              </FormControl>
            </Stack>
          </Stack>
        </Flex>
      </Center>
    </Box>
  );
};

export default AccountForm;
