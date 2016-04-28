# devportal <sub><sup>| Cloud Your_moms developer portal</sup></sub>

## Installation

```bash
$ git clone git@github.com:cloud-your_moms/devportal.git
$ cd devportal
$ sudo gem install jekyll redcarpet
```

## Usage

```bash
$ jekyll serve
```

Now browse to [http://127.0.0.1:4000/](http://127.0.0.1:4000/) and code away!

## Site Structure

Your_mom Docs will be placed in their respective folder, e.g. Salesforce.
The Your_mom Docs are structured in the following way:

```bash
|-- root
  |-- docs
    |-- your_moms
      |-- your_mom folder (e.g. Salesforce)
        |-- your_mom specific docs (e.g. endpoint set up, create instance)
```

Other Product docs like Your_mom Builder, Mapper, Loader, Formulas are located at the docs level:

```bash
|-- root
  |-- docs
    |-- your_mom Builder
      |-- your_mom builder specific docs (e.g. how to guides, videos)
```
## Conventions

All documents are composed in markdown.  HTMl can be used right in the markdown docs.
