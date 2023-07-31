'use client'
import { Icon } from '@chakra-ui/react'
import { Box, Text, Heading, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { EmailIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

export default function Test() {

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                // icon={<EmailIcon />}
                icon={<Icon as={Bars3Icon} w={8} h={8} color='green.200' />}
                variant='outline'
            />
            <MenuList>
                <MenuItem icon={<Icon as={Bars3Icon} w={8} h={8} color='green.200' />} command='⌘T' color='red'>
                    New Tab
                </MenuItem>
                <MenuItem icon={<Icon as={Bars3Icon} w={8} h={8} color='green.200' />} command='⌘N' color='red'>
                    New Window
                </MenuItem>
                <MenuItem icon={<Icon as={Bars3Icon} w={8} h={8} color='green.200' />} command='⌘⇧N' color='red'>
                    Open Closed Tab
                </MenuItem>
                <MenuItem icon={<Icon as={Bars3Icon} w={8} h={8} color='green.200' />} command='⌘O' color='red'>
                    Open File...
                </MenuItem>
            </MenuList>
        </Menu>
    )
}