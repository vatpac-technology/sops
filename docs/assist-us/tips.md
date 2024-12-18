---
  title: Working with MkDocs
---

--8<-- "includes/abbreviations.md"

All of Markdown's default syntax is supported by MkDocs - including links, images, etc. MkDocs also has some other additional features which are pretty nifty.

### Links

Links that navigate a user through the SOPs site can follow the normal Markdown syntax. All links that navigate a user away from the SOPs site should have `{target=new}` appended - this opens the link in a new tab.

=== "Internal Link"

    ``` md
    [Internal Link](enroute.md)
    ```

=== "External Link"

    ``` md
    [External Link](https://vatpac.org){target=new}
    ```

!!! warning
    All external links should use the `https` protocol.

### Buttons

Buttons should be used sparingly, if at all. Inline text hyperlinks are the preferred method of user interaction.

### Images

If context needs to be added, then an image is the way to go - particularly if a complex process is being described, or you're illustrating a difference.

Images also use the default markdown syntax, but can have some additional properties added, similar to links. These are:

  - `align=left` or `align=right`: Does what it says on the tin - applies a `float` to the image either to the left or right. 
  - `width="xxx"`: Changes the width of an image, where `xxx` is the width in pixels.

You can also add multiple properties together, with a space between the attributes.

#### Image Captions

Where confusion can arise from the placement or relevance of an image, you can opt to use a caption. Unfortunately these are not natively supported by Markdown, but you can opt to use HTML.

``` md title="Image Caption"

<figure markdown> 
  ![Image title](https://dummyimage.com/600x400/){ width="300" }
  <figcaption>Image caption</figcaption>
</figure>

```

## Emojis

Yes, they're supported. Why not? :shrug:

## Admonitions

Admonitions are enabled and are very handy for delivering extra information that doesn't belong in paragraph format, or that need extra attention drawn to them. They should be used in a way that doesn't distract the user from their reading flow. Feel free to use inline admonition blocks, too.



You can see a list of [all admonition blocks here](https://squidfunk.github.io/mkdocs-material/reference/admonitions/){target=new}.

!!! note
    Never use collapsible blocks - if it needs the additional information drawn to it, it should be displayed all the time.