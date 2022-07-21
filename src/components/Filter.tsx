import { Text, VStack, IIconButtonProps, Button, useTheme } from 'native-base';

type Props = IIconButtonProps & {
  title: string;
  isActive?: boolean;
  type: 'open' | 'closed';
}

export function Filter({ title, isActive = false, type, ...rest }: Props) {
  const { colors } = useTheme();
  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <Button 
      variant='outline' 
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bg='gray.600'
      flex={1}
      size='sm'
      {...rest}
    >
      <Text fontSize='xs' textTransform='uppercase' color={isActive ? colorType : 'gray.300'}>
        {title}
      </Text>
    </Button>
  );
}