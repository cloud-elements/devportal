# devportal 2.0 <sub><sup>| Cloud Elements developer portal</sup></sub>

** Please Note: Layouts, installation, and usage instructions have changed for devportal 2.0 **

This site is based on [Jekyll](http://jekyllrb.com/), with a dash of [Twitter Bootstrap](http://themes.getbootstrap.com/products/dashboard) added.

Requirements

Installing Jekyll is easy and straight-forward, but there are a few requirements you’ll need to make sure your system has before you start.

* [Ruby](https://www.ruby-lang.org/en/downloads/) (including development headers, v1.9.3 or above for Jekyll 2 and v2 or above for Jekyll 3)
* [RubyGems](https://rubygems.org/pages/download)
* Linux, Unix, or macOS
* [NodeJS](https://nodejs.org/), or another JavaScript runtime (Jekyll 2 and earlier, for CoffeeScript support).
* [Python 2.7](https://www.python.org/downloads/) (for Jekyll 2 and earlier)
* [Bundler](http://bundler.io/)

The master branch is continuously deployed to production.

_Please_, feel free to make any contributions you feel will make Cloud Elements Documentation better.

**Submit all pull requests to the master branch**

## Installation

```bash
$ git clone https://github.com/cloud-elements/devportal.git
$ cd devportal
$ bundle install
```

## Usage

```bash
$ bundle exec jekyll serve --incremental
```

**Note:** The `--incremental` flag will build only the changed files.

Now browse to [http://127.0.0.1:4000/](http://127.0.0.1:4000/) and code away!

## Site Structure

Element Docs will be placed in their respective folder, e.g. Salesforce.
The Element Docs are structured in the following way:

```bash
|-- root
  |-- docs
    |-- elements
      |-- element folder (e.g. Salesforce)
        |-- element specific docs (e.g. endpoint setup, create instance)
```

Platform docs like Hub level documentation, Events Framework, and OAuth Proxy are located at the `docs -- platform` level:

```bash
|-- root
  |-- docs
    |-- platform
      |-- event-management
        |-- event-management specific docs (e.g. how to guides, videos)
```

Product docs like Element Builder, Mapper, Groud2Cloud, Formulas are located at the `docs -- products` level:

```bash
|-- root
  |-- docs
    |-- products
      |-- element-builder
        |-- element-builder specific docs (e.g. how to guides, videos)
```

Quick Start docs like authentication and FAQs are located at the `docs -- getstarted` level:

```bash
|-- root
  |-- docs
    |-- getstarted
      |-- authentication
```

## Conventions

All documents are composed in markdown.  HTML can be used right in the markdown docs.

### Pages

You can write pages in markdown, HTML, or HAML. They all get converted to HTML when the site is generated.

The site uses the Redcarpet Markdown Syntax
[View Cheatsheet](https://caleorourke.gitbooks.io/redcarpet-syntax/content/cheatsheet/index.html)

Pages have a block of YAML at the top that sets a few options. They are pretty self explanatory; here's an example of an Element YAML:

```
---
heading: Salesforce CRM
seo: Overview | Salesforce CRM | Cloud Elements API Docs
title: Overview
description: Integrate Salesforce CRM into your application via the Cloud Elements APIs.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 23
parent: Back to Element Guides
order: 1
sitemap: false
---
```

here's an example of a Product YAML:

```
---
heading: Instance APIs
seo: Instance APIs Overview | Cloud Elements API Docs
title: Overview
description: Find API documentation and example API calls.
layout: sidebarleft
platform: instances
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 1
sitemap: false
---
```

## Layouts:

There are three layouts that can be used.

- Element Pages should use the `sidebarelementdoc` layout  
- Product Pages (non element pages) should use the `sidebarleft` layout  
- Any pages that include swagger should use the `sidebarapidocs` layout  

## Alternate content tab usage:

In order to create the alternate tab content, one of two values is added to the YAMl at the top of the page.

- To point to alternate API content from a UI page:  
  - `restContentVersion: <link to rest content>`  
- To point to alternate UI content from a API page:  
  - `uiContentVersion`: <link to UI content>`  
  
# Voice and Tone

Voice and tone are hard to establish and enforce, but overall use a tone that:

* Respects a broad audience. We have a very technical audience, but not all of them are as technical as we think sometimes. Also consider that not everyone speaks English as their first language. The more simple you write, teh easier it is for an ESL reader to understand.

* Guides the audience clearly and concisely. Focus on getting the user through a task, not dumping everything on them with no clear objective. 

* Educates. Tell readers what they need to know, not just what we want to say. Focus on the process or end-product, not the feature. Give them the exact information they need, and links to where to find out more.

* Talk to the reader, don't refer to them as a third party to the docs. Go ahead and say "you can..." 

# Basic Principles

When you finish a topic in the world of technical writing, it should pass the test of the 4 Cs. Ask yourself, is this:

* Clear
* Concise
* Consistent
* Correct

Most of the guidelines here support creating content that is clear, concise, and consistent. Being correct is on you and anyone you get to take a look at what you write.

# :fire: The ~~10~~4 Commandments of Good Technical Writing :fire:

If you read nothing else in this style guide, read this section. 

## Use active voice

It's harder to read and understand passive voice, especialy for ESL readers. Make it clear who is acting on what.

  :thumbsup: "Cloud Elements designed the APIs to have predictable, straightforward URLs and to use HTTP response codes to indicate API errors."

  :-1: "The APIs are designed to have predictable, straightforward URLs and to use HTTP response codes to indicate API errors."

Our writing is littered with the passive voice. See, I just did it. Take a few minutes to read up on how to recognize the passive voice and see it in your writing. [Grammar Girl](http://www.quickanddirtytips.com/education/grammar/active-voice-versus-passive-voice) is about as clear as anyone on this.

You can also perform the 😱  ⚰️  [zombie test](https://www.grammarly.com/blog/a-scary-easy-way-to-help-you-find-passive-voice/)😱  ⚰️ . If you can add "by zombies" after the verb, it's passive. Try it with the :-1: above: "The APIs are designed by zombies to have predictable..."

## Be concise 
Use short words and sentences. Avoid unnecessary modifiers (notice how necessary unnecessary is?).

A few tips to be concise:
* Adverbs. ~~Ruthlessly~~ destroy adverbs.
* If it can be said using fewer words, do so: 

:thumbsup: To write well you should write carefully.

:-1: In order to write well you chould write carefully.

* Run your text through the [Hemingway App](http://www.hemingwayapp.com/). That's cut it down a bit.
* Be specific. Avoid vague language. Cut the fluff.

## Be Consistent
* We'll get there, but look around the topic you're writing or related topics and refer to the things the same way.

A few specific areas to be consistent:

* Capitalization. This should be reserved for only truly proper nouns, like Cloud Elements, Salesforce, the name of our platform. When you start capitalizing important features and components, you end up in a consistency black hole. You then have to make up capitalization rules like when to capitalize Element, Element Instance, etc. If you stick to the basics, you can remain consistent.
* Terminology. Give something a name and use it over and over. Decide on a common terminology and use it. Make sure it's well known (maybe a part of this style guide). Don't stray.

## Get Help
You can't catch everything yourself. Have someone look at what you wrote or use tools to help:

* [Hemingway App](http://www.hemingwayapp.com/)
* [Grammarly](https://app.grammarly.com/)

## License
(The MIT License)

Copyright © 2012-2016 Cloud Elements Inc [http://cloud-elements.com/](http://cloud-elements.com/).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ‘Software’), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED ‘AS IS’, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
