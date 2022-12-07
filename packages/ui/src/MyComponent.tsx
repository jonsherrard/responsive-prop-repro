import { styled, YStack } from 'tamagui'

export const TheComponent = styled(YStack, {
  name: 'MyComponent',
  bc: 'purple',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
  },
})

export const MyComponent = () => {
  return (
    <TheComponent
      width={50}
      height={50}
      $sx={{
        padding: 40,
        borderRadius: 30,
      }}
      $gtXs={{
        bc: 'orange',
        borderRadius: 15,
      }}
      $gtMd={{
        bc: 'green',
        borderRadius: 10,
      }}
    />
  )
}
