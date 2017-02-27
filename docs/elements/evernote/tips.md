---
heading: Evernote
seo: FAQ | Evernote | Cloud Elements API Docs
title: Tips
description: Frequently asked questions and notes on conventions.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 125
parent: Back to Element Guides
order: 50
---

## Tips

Note regarding Evernote naming conventions.

File Path:

Evernote supports the use of spaces when naming “directories”. For example, a valid directory could be: “My New Notebook”. Thus allowing a valid file path to be: `/My First Stack/My New Notebook/file.txt`.

Due to spaces that may be present in the path variable, you may either encode the URL or use the cURL option to encode it for you.

Example of cURL option to encode the URL:

`--data-urlencode "path=/My First Stack/My New Notebook/615b5fb7-8a57-4956-ae94-b3f88fd7cafc"`

The cURL command will URL encode the file path allowing the user to not have to go the extra step. The command will now look like this:

```bash
curl -o example.pdf -G -v
-H 'Authorization: User <INSERT_USER_SECRET>, Element <INSERT_ELEMENT_TOKEN>'
'https://api.cloud-elements.com/elements/api-v2/hubs/documents/files --data-urlencode "path=/My First Stack/My New Notebook/615b5fb7-8a57-4956-ae94-b3f88fd7cafc"'
```

2. Add > <filename.pdf> to the end of the command.
This option will create a new file if it doesn’t already exist or overwrite the existing file with the downloaded information.

For example:

```bash
curl -G -v
-H 'Authorization: User <INSERT_USER_SECRET>, Element <INSERT_ELEMENT_TOKEN>'
'https://api.cloud-elements.com/elements/api-v2/hubs/documents/files --data-urlencode "path=/My First Stack/My New Notebook/615b5fb7-8a57-4956-ae94-b3f88fd7cafc" > example.pdf'
```

3. Add `>> <filename.pdf>` to the end of the command.

This option will create a new file if it doesn’t already exist or it will append the downloaded information to the existing file.

For example:

```bash
curl -G -v
-H 'Authorization: User <INSERT_USER_SECRET>, Element <INSERT_ELEMENT_TOKEN>'
'https://api.cloud-elements.com/elements/api-v2/hubs/documents/files --data-urlencode "path=/My First Stack/My New Notebook/615b5fb7-8a57-4956-ae94-b3f88fd7cafc" >> example.pdf'
```
