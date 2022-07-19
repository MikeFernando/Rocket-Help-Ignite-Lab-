import { Button as ButtonNativeBase, IIconButtonProps, Heading } from 'native-base';

type ButtonProps = IIconButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase
      h={14}
      bg='green.700'
      size='sm'
      rounded='sm'
      _pressed={{ bg: 'green.500' }}
      {...rest}
    >
      <Heading color='white' size='sm'>
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}