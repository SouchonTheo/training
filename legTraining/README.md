# How to execute the new language

``` bash
leg -o lang.c lang.leg && gcc -o lang lang.c
```

Please install [peg/leg](https://www.piumarta.com/software/peg/) manually or with a package manager, for example with Homebrew: 
```bash
$ brew install peg
```

Please install [the Boehm-Demers-Weiser conservative garbage collector](https://www.hboehm.info/gc/) manually or with a package manager, for example with Homebrew:
```bash
$ brew install bdw-gc
```