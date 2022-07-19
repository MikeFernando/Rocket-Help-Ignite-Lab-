import { IInputProps, Input as NativeBaseInput } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput 
      bg='gray.700' 
      h={14}
      size='md'
      fontFamily='body'
      color='white'
      borderWidth={0}
      placeholderTextColor='gray.300'
      borderRadius='10'
      _focus={{
        borderWidth: 1,
        borderColor: 'green.500',
        bg: 'gray.700'
      }}
      {...rest}
    />
  );
}