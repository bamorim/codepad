# Codepad

## About
This was a software made for the Advanced Programming class at UFRJ.
The idea was to create something similar to iPython notebook to allow developers to create and share code snippets in
a bunch of different languages.

It was a group assignment and the group were me, [Igor Macedo Quintanilha](https://github.com/igormq) and [Roberto de Moura Estevo Filho]()

## Metodology

The requirements for the assignment was to create a Java backend and a JS SPA for the frontend.

First we sketched out the main architecture and thought in 3 pieces and then followed into implementing them:
- An AngularJS frontend (this repository)
- A small wrapper around Java ScriptEngine so we could send a piece of code in a given language and it would return the output log and the last evalauted value
- A Java backend to store pads and their code and to call the evaluation engine to evaluate code [Igor's repository](https://github.com/igormq/codepad)

## License

```
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
```
