import { IconButton, Link, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
const NavButton = () => {
    return (
                        <Menu>
                            {console.log('works')}
                            <MenuButton 
                            as={IconButton} 
                            borderColor='white'
                            icon={<HamburgerIcon />} 
                            variant="outline" 
                            aria-label="Options" 
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem href="/" as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <NextLink href="https://github.com/marty-projects/portfolio-homepage" passHref>
                                    <MenuItem as={Link}>View Source</MenuItem>
                                </NextLink>
                                <NextLink href="https://github.com/craftzdog/craftzdog-homepage" passHref>
                                    <MenuItem as={Link}>Based on</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
    )
}

export default NavButton