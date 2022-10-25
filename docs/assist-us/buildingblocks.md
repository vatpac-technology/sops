---
title: Building Blocks
---

--8<-- "includes/abbreviations.md"

MkDocs has some reasonably powerful features built into it, which we have extended using various plugins. This page should give you an indication of how to properly set up an individual page or category.

We'll go through the motions of setting up a new category, which will take you through most of the things needed.


## Starting a new Category or subdirectory

Let's say we want to create a new 'Military' category, here's the category setup we'd want:

```
Main Directory /
    docs/
        military /
            .pages
            index.md
            buzzandbreak.md
            formationflying.md
        .pages
    
```

Within the main `docs/` directory, create the new folder. The name of the folder will also be what's shown in the URL string - in this case it'll be `website.xyz/military/`. 

Within that directory, you can see a few files. The files ending in `.md` are singular pages and follow the normal page conventions. The `.pages` file is a MkDocs specific file that tells MkDocs how to render the navigation elements. We'll touch base on that later.


## Single Page

Every page starts the same way - with a title declaration and an abbreviation include.

``` markdown
---
title: Building Blocks
---

--8<-- "includes/abbreviations.md" 

```

The `title` declaration block is sets the title across a few different areas. It automatically appears at the top of the page as an `h1` element, and will show in all website navigation unless overwritten by a `.pages` file.

The `--8<-- "includes/abbreviations.md"` line pulls in the abbreviations file. This pulls in defined abbreviations, and allows for these to be shown all across the site.

!!! hint
    Since the `title` attribute can be seen across multiple areas, so it's important that it's both short and descriptive. If the page is nested within another category, you should be able to rely on context. 

    For example, this page is called **Building Blocks**. This could mean Lego, but since it's in the **Assist Us** section, you would be fair to assume that it contains the building blocks of a page.


## .pages file

As eluded to before, the `.pages` file is a tells MkDocs how to render the navigation elements. 

```
title: Military
nav:
    - "Overview": index.md
    - "Buzz and Break": buzzandbreak.md
    - formationflying.md
    - ...
```

The `title` property dictates how the `military/` directory is named in navigation. In this particular example, the directory is `military/`, but is defined as `title: Military`. This doesn't change how the category is processed, only displayed.

Breakdown:

* `nav:` - Dictates how items are shown, and in what order. This is mandatory.
* `"Overview": index.md` - `"Overview"` is a manually set title, and overrides any titles defined locally within the page itself. For the `index.md` page, this is shown as the index page for the directory it sits in. Once rendered, this page sits at `website.xyz/military/`.
* `"Buzz and Break": buzzandbreak.md` - Same as above, but this file sits at `website.xyz/military/buzzandbreak/`.
* `formationflying.md` - In this case, this file has a `title` defined within the file itself. This would be inherited into the navigation.
* `...` - This means that all other files within the directory will be shown in alphabetical order.

!!! hint
    It is preferential to have page titles defined locally in the page itself, rather than the `.pages` file. This makes it easier when you've edited a page - meaning that you don't have jump from file to file to fix the navigation.