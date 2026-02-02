---
title: Contributing Translations
description: Help us translate Headunit Revived into your language.
---

Help us make HeadUnit Revived accessible to everyone by contributing translations!

## How to Contribute

Translating the app is straightforward. You don't need to be a developer.

### 1. Locate the Base File
All application strings are stored in the English base file on GitHub:
[`app/src/main/res/values/strings.xml`](https://github.com/andreknieriem/headunit-revived/blob/main/app/src/main/res/values/strings.xml)

### 2. Create your Language Folder
If your language is not yet supported, create a new folder in `app/src/main/res/` named `values-<lang>`, where `<lang>` is the ISO 639-1 code (e.g., `values-fr` for French).

### 3. Translate the Strings
1.  Copy the content of `strings.xml`.
2.  Translate the text between the `<string>...</string>` tags.
3.  **Important:**
    *   Do **not** translate the `name="..."` attribute (e.g., keep `name="app_name"`).
    *   Keep placeholders like `%s`, `%d` or HTML tags exactly where they belong.

### 4. Submit your Translation
*   **Pull Request:** If you know how to use GitHub, fork the repo and submit a PR.
*   **Issue:** Alternatively, open an [Issue](https://github.com/andreknieriem/headunit-revived/issues) and attach your translated `strings.xml` file. We will integrate it for you!

Thank you for your help!
