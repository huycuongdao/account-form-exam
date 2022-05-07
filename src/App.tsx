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
  Button
} from "@chakra-ui/react";
import { RiErrorWarningLine } from "react-icons/ri";

/*
Task:
  - 處理表單畫面（包括錯誤狀態），請參考以下連結
    - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/eKGWzAp#Inspector
    - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/GmQeyV8#Inspector
  - 新增 theme 並透過 theme 客製化元件樣式，像是 Button, Input 等
    - https://chakra-ui.com/docs/theming/customize-theme
    - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/R1xJkPZ#Inspector
  - 透過 react-hook-form 實作表單行為
      - ref: https://react-hook-form.com/
  - 完成表單驗證
    - 密碼欄位都必填
    - 密碼格式錯誤
      - Minimum eight characters, at least one letter, one number and one special character.
        - A-Z, a-z
        - 0-9
        - special character
          - !@#$%^&*()_+
    - 確認密碼格式錯誤
      - Please make sure your passwords match.
    - onBlur 事件觸發時，進行表單驗證
    - 按下 Submit 按鈕後，印出 form data

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
const AccountForm = () => {
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
                    Your account don’t have password yet. Set password so you
                    can log in with your Layoutbase account.
                  </AlertDescription>
                </Alert>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email" fontSize="12px" color="#585858">
                  Email (Your account)
                </FormLabel>
                <Input
                  id="email"
                  value="hello@branch8.com"
                  isDisabled
                  _disabled={{
                    bgColor: "#eeeeee",
                    color: "#d0d0d0",
                    opacity: 1,
                    cursor: "not-allowed"
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password" fontSize="12px" color="#585858">
                  Set Password
                </FormLabel>
                <Input
                  id="password"
                  _focus={{ borderColor: "#f65e4e", boxShadow: "none" }}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  htmlFor="confirmPassword"
                  fontSize="12px"
                  color="#585858"
                >
                  Confirm Password
                </FormLabel>
                <Input
                  id="confirmPassword"
                  _focus={{ borderColor: "#f65e4e", boxShadow: "none" }}
                />
              </FormControl>
              <FormControl>
                <Flex>
                  <Button
                    type="submit"
                    size="md"
                    color="white"
                    bgColor="#f65e4e"
                    _hover={{ bgColor: "#fc7365" }}
                    _active={{ bgColor: "#ee5140" }}
                    _focus={{ boxShadow: "none" }}
                  >
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
