import { createStyles, Button, Menu, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandJavascript, IconLetterJ, IconBrandCpp, IconChevronDown } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  menuControl: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: 0,
    borderLeft: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
  },
}));

export default function SplitButton(props: { handleClick: any }) {
  const { classes, theme } = useStyles();
  const menuIconColor = theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6];

  return (
    <Group noWrap spacing={0}>
      <Button className={classes.button} onClick={() => props.handleClick()}>Change Text</Button>
      <Menu transitionProps={{ transition: 'pop' }} position="bottom-end" withinPortal>
        <Menu.Target>
          <ActionIcon
            variant="filled"
            color={theme.primaryColor}
            size={36}
            className={classes.menuControl}
          >
            <IconChevronDown size="1rem" stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item icon={<IconBrandJavascript size="1rem" stroke={1.5} color={menuIconColor} />}>
            JavaScript
          </Menu.Item>
          <Menu.Item icon={<IconLetterJ size="1rem" stroke={1.5} color={menuIconColor} />}>
            Java
          </Menu.Item>
          <Menu.Item icon={<IconBrandCpp size="1rem" stroke={1.5} color={menuIconColor} />}>
            C/C++
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
