# devportal <sub><sup>| Cloud Elements developer portal</sup></sub>

## Installation

```bash
$ git clone git@github.com:cloud-elements/devportal.git
$ cd devportal
$ sudo gem install jekyll redcarpet
```

## Usage

```bash
$ jekyll serve
```

Now browse to [http://127.0.0.1:4000/](http://127.0.0.1:4000/) and code away!

## Site Structure

Element Docs will be placed in their respective folder, e.g. Salesforce.
The Element Docs are structured in the following way:

```bash
|-- root
  |-- docs
    |-- elements
      |-- element folder (e.g. Salesforce)
        |-- element specific docs (e.g. endpoint set up, create instance)
```

Other Product docs like Element Builder, Mapper, Loader, Formulas are located at the docs level:

```bash
|-- root
  |-- docs
    |-- element Builder
      |-- element builder specific docs (e.g. how to guides, videos)
```
## Conventions

All documents are composed in markdown.  HTMl can be used right in the markdown docs.
