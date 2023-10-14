# Winnie

An personal design system with an alternate approach to managing components and styles.

## Credits

- Radix - css variables, radix primitives, radix themes 
- OpenProps - css variables 

## TODO

- work on breakpoint stuff
- add disabled style support to command
- add support for command text field slots for the purposes of adding icons and such beside the command input
- consider adding tokens for square components
- consider creating `w-menu-item` as a base for all menu item styles that are shared between command, command-multi, dropdown-menu, select, etc.
- create icon button


### breakpoints notes

- what are some of the things to consider

example:

- say we want to support a specific padding at a specific breakpoint:

- xs
- sm
- md
- lg
- xl

if we have have a padding value that could be used at any breakpoint. The tailwind way is to do the following:

sm:p-2 or xl:p-7

which means you would need to generate css that looks like: 

@media max-width(...) {
    sm:p-2 {
        padding: var(--w-space-2);
    }

    md:p-2 {
        padding: var(--w-space-2);
    }

    
}

