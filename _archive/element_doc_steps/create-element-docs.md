# Gather Information

Before you start, gather the information that you'll need in one place so you can easily refer to it. [Here's a link](https://docs.google.com/forms/d/e/1FAIpQLScLtdnhQndLijHi5HY5CK6Kef1LMO3wWcQTzRcaPCMo88_BPA/viewform?usp=sf_link) to a Google Form that stores info about each element.

1. Record the element key: Call `GET/elements/keys`and search for the name of the element.
2. Use the element key to get the Id. Call `GET /elements/{keyOrId}` and locate the `id` at the top.

    **Note** You need the id from production, so if the element is in a different environment you can skip this step, but you'll need to run it later.

3. Record the image link. Call `GET /elements/{keyOrId}` and locate `image`.
4. Export the element to gather more information.
5. Import the element and make sure that you:
  - Change the Element Key to something like `docsElementname`.
  - Import all resources.
  - Change the name of the element.
7. Record the authentication type (top-right corner of **Authentication** section).
8. Open **Configuration** and record the name and Configuration Key for anything not hidden on the UI.
9. Open **Event Configuration** and record the event type.
10. Record whether the element supports Transformations. Unless it's a storage type element, the answer is probably yes. You can confirm by finding `transformationsEnabled` in the payload from `GET /elements/{keyOrId}`.
11. Record the Bulk information:
  - Upload or download: Look in the `GET /elements/{keyOrId}` payload for `bulkDownloadEnabled` and `bulkUploadEnabled`.
  - Cloud Elements or Native: Ask a developer
13. Record the URL for the API docs. Do a search like "elementName API documentation".
14. Record rate limit info - Search their docs or Google for any info on rate limits. It can be actual numbers or just a link.

# Create a Branch and Retrieve Template Files

1. Check out the master branch.

    `git checkout`

1. Make sure that it's up to date.

    `git pull origin master`

1. Create a branch with the name of the element.

    `git branch elementname`

1. Check out the branch you just created.

    `git checkout elementname`

1. Open atom or whatever editor that you're using.

    `atom .`

1. Create a folder in **docs>elements** called the name of the element. If the element has two words, add a space (`adobe-sign`).
1. Open **_elementTemplate**, and then copy all of the files in the folder to the one you created in the previous step.

If you know which authentication type or event type that the element supports, you can choose the appropriate setup, authenticate, and events files. Otherwise, just copy them all and delete the ones that you don't need.

# Authenticate and Element Instance

1. In Cloud Elements, find the element and authenticate an instance.
2. Use the information you gathered earlier and Dashlane to complete any configuration fields.
